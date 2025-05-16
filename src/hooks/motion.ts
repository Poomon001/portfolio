/**
 * A motion annimation powered by framer-motion
 **/
const useVerticalFadeInMotion = () => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.05 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
});

const useHorizontalFadeInMotion = () => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
});

export { useVerticalFadeInMotion, useHorizontalFadeInMotion };
