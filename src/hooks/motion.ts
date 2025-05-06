/**
 * A motion annimation powered by framer-motion
 **/
const useVerticalFadeInMotion = () => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
});

const useHorizontalFadeInMotion = () => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
});

export { useVerticalFadeInMotion, useHorizontalFadeInMotion };
