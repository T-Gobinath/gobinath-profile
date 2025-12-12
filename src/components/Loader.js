import React from 'react';
import './Loader.css';

export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <div className="preloader__box">
        <div className="preloader__spinner" />
        <div className="preloader__text">{text}</div>
      </div>
    </div>
  );
}
