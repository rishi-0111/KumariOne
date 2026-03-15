import { gsap } from 'gsap';

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay,
    ease: "power3.out"
  });
};

export const staggerFadeIn = (elements: string | Element[], stagger: number = 0.1) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 20,
    stagger,
    duration: 0.6,
    ease: "power2.out"
  });
};
