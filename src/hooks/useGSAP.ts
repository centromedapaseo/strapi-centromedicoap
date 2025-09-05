import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPScrollAnimation = (
  trigger: string | Element | undefined,
  animation: (element: Element) => gsap.core.Timeline | void,
  dependencies: React.DependencyList = []
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const memoizedAnimation = useCallback(animation, [animation]);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    const result = memoizedAnimation(element);
    if (result) {
      tl.add(result);
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [trigger, memoizedAnimation, ...dependencies]);

  return elementRef;
};

export const useGSAPTimeline = (animation: () => gsap.core.Timeline, dependencies: React.DependencyList = []) => {
  const memoizedAnimation = useCallback(animation, [animation]);
  
  useEffect(() => {
    const tl = memoizedAnimation();
    return () => {
      tl.kill();
    };
  }, [memoizedAnimation, ...dependencies]);
};