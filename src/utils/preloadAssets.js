// src/utils/preloadAssets.js
export function preloadAssets({ imageSelectors = [], imageUrls = [], fontDescriptors = [] }, onProgress = () => {}, timeout = 14000) {
  return new Promise((resolve) => {
    const imagesSet = new Set();

    // select images by selector (useful for 'critical' images)
    imageSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(img => {
        if (img instanceof HTMLImageElement && img.src) imagesSet.add(img);
      });
    });

    // add specific URLs
    imageUrls.forEach(url => imagesSet.add({ src: url }));

    const images = Array.from(imagesSet);
    const fonts = Array.isArray(fontDescriptors) ? fontDescriptors : [];

    let total = images.length + fonts.length;
    if (total === 0) {
      // nothing to load
      onProgress(100, 0, 0);
      resolve();
      return;
    }

    let loaded = 0;
    const tick = () => {
      const pct = Math.round((loaded / total) * 100);
      onProgress(pct, loaded, total);
      if (loaded >= total) resolve();
    };

    const imageLoaded = () => { loaded += 1; tick(); };
    const fontLoaded = () => { loaded += 1; tick(); };

    // images
    images.forEach(img => {
      // if it's an element, check complete
      if (img instanceof HTMLImageElement) {
        if (img.complete) {
          imageLoaded();
        } else {
          const cb = () => { imageLoaded(); img.removeEventListener('load', cb); img.removeEventListener('error', cb); };
          img.addEventListener('load', cb);
          img.addEventListener('error', cb);
        }
      } else if (img && img.src) {
        // plain object with src (from imageUrls)
        const i = new Image();
        i.onload = imageLoaded;
        i.onerror = imageLoaded;
        i.src = img.src;
      }
    });

    // fonts via FontFaceSet (if available)
    if (fonts.length && document.fonts && document.fonts.load) {
      fonts.forEach(fd => {
        // fd = "1em 'MyFontName'" or {family, source}
        if (typeof fd === 'string') {
          document.fonts.load(fd).then(fontLoaded).catch(fontLoaded);
        } else if (fd.family && fd.source) {
          const fontFace = new FontFace(fd.family, fd.source, fd.descriptors || {});
          fontFace.load().then(() => {
            document.fonts.add(fontFace);
            fontLoaded();
          }).catch(fontLoaded);
        } else {
          fontLoaded();
        }
      });
    } else {
      // no font tracking; count them as instantly done
      fonts.forEach(() => fontLoaded());
    }

    // safety timeout to prevent hanging
    setTimeout(() => {
      if (loaded < total) {
        // force finish
        onProgress(100, total, total);
        resolve();
      }
    }, timeout);
  });
}
