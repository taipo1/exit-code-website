'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type GsapWrapperProps = {
  children?: React.ReactNode;
  className?: string;
};

const MouseTracker = ({ children, className }: GsapWrapperProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (wrapperRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;

        gsap.to(wrapperRef.current, {
          x: (xPercent - 50) * 0.4, // You can adjust multiplier to control movement amount
          y: (yPercent - 50) * 0.2,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default MouseTracker;
