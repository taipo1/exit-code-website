'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type GsapWrapperProps = {
  children?: React.ReactNode;
  className?: string;
};

const GsapFloater = ({ children, className }: GsapWrapperProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.fromTo(wrapperRef.current,{ x: 0, y: 0, rotateZ: 25 }, {
        
        y: '-=20',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 2,
      });
    }
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default GsapFloater;
