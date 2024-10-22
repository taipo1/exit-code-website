"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Cube from "@/svg/cube";
import GrayScaleWrapper from "../gsap/gray-scale-wrapper";
import RevealWrapper from "../gsap/reveal-wrapper";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const largeCube = useRef<HTMLDivElement | null>(null);
  const mediumCube = useRef<HTMLDivElement | null>(null);
  const smallCube = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loaderRef.current) {

      gsap.to(loaderRef.current, {
        opacity: 0,
        delay: 1.2,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        },
      });

      gsap.fromTo(largeCube.current,{}, {
        y: -30,
        duration: .7,
        repeat: 2,
        delay: .3,
        yoyo: true,
        ease: 'power1.easeIn',
      })
      gsap.fromTo(mediumCube.current,{y: 0}, {
        y: -30,
        duration: .7,
        repeat: 2,
        delay: .2,
        yoyo: true,
        ease: 'power1.easeIn',
      })
      gsap.fromTo(smallCube.current,{y: 0}, {
        y: -30,
        duration: .7,
        repeat: 2,
        yoyo: true,
        ease: 'power1.easeIn',
      })
    }
  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 flex items-center justify-center bg-dark-500 z-50">
      <RevealWrapper duration={.5} Element="div" className="flex flex-col items-center justify-center opacity-0">
        <GrayScaleWrapper>
          <div className="scale-50 relative w-3">
            <div className="z-30 absolute  right-40 drop-shadow-lg grayscale-0" ref={smallCube}>
              <Cube  className="w-56 h-56 small" />
            </div>
            <div className="z-20 -right-[20px] -bottom-[130px] absolute drop-shadow-lg" ref={mediumCube}>
              <Cube className="w-72 h-[270px]" />
            </div>
            <div  className=" z-10 absolute -right-[250px] -bottom-[30px] drop-shadow-lg"  ref={largeCube}>
              <Cube className="w-[380px] h-[340px]" showLogo />
            </div>
          </div>
        </GrayScaleWrapper>
      </RevealWrapper>
    </div>
  );
};

export { Loader };