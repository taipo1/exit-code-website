import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GrayscaleWrapper = ({ children }: { children: JSX.Element}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      // Define the grayscale animation using a mask-like effect
      gsap.fromTo(
        element,
        {
          // filter: 'grayscale(100%)',
          xPercent: 0, // Start from bottom left
          yPercent: 0,
        },
        {
          // filter: 'grayscale(0%)',
          xPercent: 100, // Move to top right
          yPercent: -100,
          duration: 2,
          ease: 'power2.inOut',
        }
      );
    }
  }, []);

  return (
    <div ref={wrapperRef} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

export default GrayscaleWrapper;
