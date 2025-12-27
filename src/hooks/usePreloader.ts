import { useState, useEffect } from 'react';

interface PreloaderState {
  progress: number;
  isLoading: boolean;
}

/**
 * Custom hook for preloader with simulated loading progress
 * Returns loading state and progress percentage
 */
export const usePreloader = (minLoadTime: number = 2000): PreloaderState => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment progress with diminishing returns for realistic feel
        const increment = Math.random() * (100 - prev) * 0.1;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    // Ensure minimum load time
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Slight delay for smooth exit animation
    }, minLoadTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [minLoadTime]);

  return { progress, isLoading };
};