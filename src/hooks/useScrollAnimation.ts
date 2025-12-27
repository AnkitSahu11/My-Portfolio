import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

/**
 * Custom hook for GSAP scroll animations
 * Handles scroll-triggered animations with cleanup
 */
export const useScrollAnimation = (
  animation: (element: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const tl = animation(element);

      ScrollTrigger.create({
        trigger: options.trigger || element,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        scrub: options.scrub ?? false,
        markers: options.markers ?? false,
        animation: tl,
        onEnter: options.onEnter,
        onLeave: options.onLeave,
      });
    }, element);

    return () => ctx.revert(); // Cleanup
  }, []);

  return elementRef;
};

/**
 * Hook for parallax scroll effect
 */
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [speed]);

  return elementRef;
};

/**
 * Hook for fade in on scroll
 */
export const useFadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getInitialPosition = () => {
      switch (direction) {
        case 'up': return { y: 100, x: 0 };
        case 'down': return { y: -100, x: 0 };
        case 'left': return { y: 0, x: 100 };
        case 'right': return { y: 0, x: -100 };
      }
    };

    const ctx = gsap.context(() => {
      gsap.from(element, {
        ...getInitialPosition(),
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, element);

    return () => ctx.revert();
  }, [direction]);

  return elementRef;
};