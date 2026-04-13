import { Variants } from 'framer-motion';

const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

const noMotion = { initial: {}, animate: {}, whileInView: {} };

export const fadeUp: Variants = prefersReducedMotion ? noMotion : {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

export const fadeIn: Variants = prefersReducedMotion ? noMotion : {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.4 } },
};

export const slideLeft: Variants = prefersReducedMotion ? noMotion : {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

export const slideRight: Variants = prefersReducedMotion ? noMotion : {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

export const scaleIn: Variants = prefersReducedMotion ? noMotion : {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export const springUp: Variants = prefersReducedMotion ? noMotion : {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 90 } },
};

export const staggerContainer: Variants = {
  whileInView: { transition: { staggerChildren: 0.08 } },
};

export const staggerContainerSlow: Variants = {
  whileInView: { transition: { staggerChildren: 0.15 } },
};

export const hoverLift = prefersReducedMotion ? {} : {
  y: -8,
  borderColor: 'rgba(196,162,101,0.5)',
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  transition: { duration: 0.2 },
};

export const viewportOnce = { once: true, margin: '-50px' as any };
