import { useState, useEffect, useRef } from 'react';

interface UseCounterOptions {
  duration?: number;
  startOnMount?: boolean;
  delay?: number;
}

export const useCounter = (
  end: number,
  options: UseCounterOptions = {}
) => {
  const { duration = 2000, startOnMount = true, delay = 0 } = options;
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const hasAnimatedRef = useRef<boolean>(false);

  const startAnimation = () => {
    if (isAnimating || hasAnimatedRef.current) return;
    
    setIsAnimating(true);
    setCount(0);
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
        hasAnimatedRef.current = true;
        startTimeRef.current = 0;
      }
    };
    
    setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate);
    }, delay);
  };

  useEffect(() => {
    if (startOnMount && !hasAnimatedRef.current) {
      startAnimation();
    }
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []); // Rimuoviamo le dipendenze per evitare re-trigger

  return { count, isAnimating, startAnimation };
};
