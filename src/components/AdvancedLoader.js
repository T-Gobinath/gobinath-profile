// src/components/AdvancedLoader.js
import React, { useEffect, useRef, useState, useMemo } from 'react';
import './AdvancedLoader.css';
import { preloadAssets } from '../utils/preloadAssets';

// Try to import lottie-react normally
let Lottie;
try {
  Lottie = require('lottie-react').default;
} catch {
  Lottie = null; // fallback if not installed
}

const DEFAULT_OPTIONS = {
  imageSelectors: ['img.critical'],
  imageUrls: [],
  fonts: [],
  timeout: 14000,
  minDisplay: 650,
  extraDelay: 300
};

export default function AdvancedLoader({
  onFinish = () => {},
  lottieData = null,
  options = {},
  brand = 'Gobinath',
  caption = 'Crafting pixels…',
}) {
  const opts = useMemo(
    () => ({ ...DEFAULT_OPTIONS, ...options }),
    [options]
  );

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const startRef = useRef(Date.now());

  useEffect(() => {
    let cancelled = false;

    preloadAssets(
      {
        imageSelectors: opts.imageSelectors,
        imageUrls: opts.imageUrls,
        fontDescriptors: opts.fonts
      },
      (pct) => {
        if (!cancelled) {
          setProgress((prev) => Math.max(prev, pct));
        }
      },
      opts.timeout
    ).then(() => {
      if (cancelled) return;

      const elapsed = Date.now() - startRef.current;
      const wait = Math.max(0, opts.minDisplay - elapsed);

      setTimeout(() => {
        setProgress(100);

        setTimeout(() => {
          setVisible(false);
          setTimeout(() => onFinish(), 500);
        }, opts.extraDelay);
      }, wait);
    });

    return () => {
      cancelled = true;
    };
  }, [opts, onFinish]);

  const Animation = () => {
    if (Lottie && lottieData) {
      return (
        <Lottie
          animationData={lottieData}
          loop
          autoplay
          style={{ width: 120, height: 120 }}
        />
      );
    }

    return (
      <svg className="adv-logo" viewBox="0 0 120 120" width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r="45"
          stroke="#60a5fa"
          strokeWidth="6"
          fill="none"
          strokeDasharray="280"
        />
        <path d="M50 40 L70 40 L60 80 Z" fill="#34d399" />
      </svg>
    );
  };

  return (
    <div className={`advanced-root ${visible ? 'adv-visible' : 'adv-hidden'}`}>
      <div className="adv-backdrop" />

      <div className="adv-card">
        <div className="adv-top">
          <Animation />
          <div>
            <div className="adv-brand">{brand}</div>
            <div className="adv-caption">{caption}</div>
          </div>
        </div>

        <div className="adv-progress-wrap">
          <div className="adv-progress-track">
            <div
              className="adv-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="adv-pill" style={{ left: `${progress}%` }}>
            {progress}%
          </div>
        </div>

        <div className="adv-meta">
          <small>
            {progress < 100 ? 'Loading resources…' : 'Almost ready'}
          </small>
        </div>
      </div>
    </div>
  );
}
