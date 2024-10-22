"use client";
import { useEffect, useRef, forwardRef } from "react";
import type { ReactNode, ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type RevealWrapperProps = {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  Element: ElementType;
};

// Ensure the ScrollTrigger plugin is registered before usage
gsap.registerPlugin(ScrollTrigger);

const RevealWrapper = forwardRef<HTMLDivElement, RevealWrapperProps>(({ children, delay, duration, className, Element }, ref): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targetRef = wrapperRef.current;
    if (targetRef) {
      gsap.fromTo(
        targetRef,
        { opacity: 0, },
        {
          opacity: 1,
          duration: duration || 1,
          delay: delay || 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: targetRef,
            start: 'top 80%',
            toggleActions: 'play none none none',
            markers: true, // Disable markers for clean view
          },
        }
      );
    }
  }, [delay, duration]);

  return <Element className={className} ref={ref ? (ref as React.RefObject<HTMLDivElement>) : wrapperRef}>{children}</Element>;
});

RevealWrapper.displayName = 'RevealWrapper';

export default RevealWrapper;
