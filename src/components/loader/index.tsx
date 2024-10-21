"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Cube from "@/svg/cube";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const logo = useRef<SVGCircleElement | null>(null);
  const front = useRef<SVGCircleElement | null>(null);
  const top = useRef<SVGCircleElement | null>(null);
  const right = useRef<SVGCircleElement | null>(null);
  const largeCube = useRef<HTMLDivElement | null>(null);
  const mediumCube = useRef<HTMLDivElement | null>(null);
  const smallCube = useRef<HTMLDivElement | null>(null);

  const refObj = {
    logo,
    front,
    top,
    right,
  };

  useEffect(() => {
    if (loaderRef.current) {

      // gsap.to(loaderRef.current, {
      //   opacity: 0,
      //   delay: 0.2,
      //   duration: 0.5,
      //   ease: 'power2.out',
      //   onComplete: () => {
      //     if (loaderRef.current) {
      //       loaderRef.current.style.display = 'none';
      //     }
      //   },
      // });

      gsap.fromTo(largeCube.current,{}, {
        y: -22,
        duration: .7,
        repeat: 1,
        yoyo: true,
        ease: 'power1.easeIn',
      })
      gsap.fromTo(largeCube.current,{}, {
        y: -22,
        duration: .7,
        repeat: 1,
        yoyo: true,
        ease: 'power1.easeIn',
      })
    }
  }, []);
  return (
    <div ref={loaderRef} className="fixed inset-0 flex items-center justify-center bg-dark-500 z-50">
      <div className="relative w-3">
        <div className="z-30 absolute top-10 right-40" ref={smallCube}>
          <Cube className="w-56 h-56" />
        </div>
        <div className="z-20 right-[10px] -top-[68px] absolute" ref={mediumCube}>
          <Cube className="w-64 h-64" />
        </div>
        <div className=" z-10 absolute -right-[160px] -top-[188px]" ref={largeCube}>
          <Cube className="w-72 h-72" showLogo />
        </div>

      </div>
    </div>
  );
};

export { Loader };