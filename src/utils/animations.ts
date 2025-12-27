import { Variants } from 'framer-motion';
import { ANIMATION_DURATION, EASING } from './constants';

// Fade In Up Animation
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

// Fade In Down Animation
export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

// Fade In Left Animation
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

// Fade In Right Animation
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

// Scale In Animation
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.spring,
    },
  },
};

// Stagger Container
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Text Reveal Animation
export const textReveal: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: EASING.easeOut,
    },
  },
};

// Page Transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.smooth,
    },
  },
};

// Card Hover Animation
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.smooth,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.spring,
    },
  },
};

// Magnetic Button Effect
export const magneticEffect = (x: number, y: number) => ({
  x: x * 0.3,
  y: y * 0.3,
  transition: {
    type: 'spring',
    stiffness: 150,
    damping: 15,
  },
});

// Cursor Follow Animation
export const cursorVariants: Variants = {
  default: {
    x: -16,
    y: -16,
    backgroundColor: 'rgba(0, 240, 255, 0.3)',
    mixBlendMode: 'normal',
    transition: {
      type: 'spring',
      mass: 0.2,
    },
  },
  hover: {
    x: -32,
    y: -32,
    backgroundColor: 'rgba(168, 85, 247, 0.5)',
    mixBlendMode: 'difference',
    scale: 2,
  },
};