// src/App.js
import React, { useState } from 'react';
import './App.css';

// Loader
import AdvancedLoader from './components/AdvancedLoader';

// Components
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* ---------------------- ADVANCED LOADER ---------------------- */}
      {loading && (
        <AdvancedLoader
          onFinish={() => setLoading(false)}
          brand="Gobinath — Portfolio"
          caption="Preparing your experience..."
          options={{
            // Track only important images (example selectors)
            imageSelectors: ['img.critical', '#hero-img'],

            // If you want to force-load specific file URLs:
            imageUrls: [
              '/assets/hero.jpg',
              '/assets/profile.png',
            ],

            // Optional: Track fonts
            fonts: ["1em 'Inter'"],

            timeout: 12000,    // Max wait time
            minDisplay: 700,   // Loader shows at least this long for smoothness
            extraDelay: 260    // Delay after 100% before reveal
          }}
          // lottieData={yourLottieFile}  // Optional custom animation
        />
      )}

      {/* ---------------------- MAIN APP CONTENT ---------------------- */}
      <div className={`App ${loading ? 'app--blurred' : ''}`}>
        <ParticlesBackground />
        <Header />

        <main>
         
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
