import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100; // Ensure it stops at 100
        }
        return prev + 5; // Adjust this value for smaller increments
      });
    }, 125); // Update interval (adjust for speed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-wrapper">
      <h1 className="loading-heading">NIKE Clone Made by <span className='text-coral-red'> Aaun</span></h1>
      <div className="loading-container">
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }}>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
