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
        ease: "power2.out",
        onComplete: () => {
          if (loaderRef.current) {
            loaderRef.current.style.display = "none";
          }
        },
      });

      gsap.fromTo(
        largeCube.current,
        {},
        {
          y: -30,
          duration: 0.7,
          repeat: 2,
          delay: 0.3,
          yoyo: true,
          ease: "power1.easeIn",
        },
      );
      gsap.fromTo(
        mediumCube.current,
        { y: 0 },
        {
          y: -30,
          duration: 0.7,
          repeat: 2,
          delay: 0.2,
          yoyo: true,
          ease: "power1.easeIn",
        },
      );
      gsap.fromTo(
        smallCube.current,
        { y: 0 },
        {
          y: -30,
          duration: 0.7,
          repeat: 2,
          yoyo: true,
          ease: "power1.easeIn",
        },
      );
    }
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-500"
    >
      <RevealWrapper
        duration={0.5}
        Element="div"
        className="flex flex-col items-center justify-center opacity-0"
      >
        <GrayScaleWrapper>
          <div className="relative w-3 scale-50">
            <div
              className="absolute right-40 z-30 drop-shadow-lg grayscale-0"
              ref={smallCube}
            >
              <Cube className="small h-56 w-56" />
            </div>
            <div
              className="absolute -bottom-[130px] -right-[20px] z-20 drop-shadow-lg"
              ref={mediumCube}
            >
              <Cube className="h-[270px] w-72" />
            </div>
            <div
              className="absolute -bottom-[30px] -right-[250px] z-10 drop-shadow-lg"
              ref={largeCube}
            >
              <Cube className="h-[340px] w-[380px]" showLogo />
            </div>
          </div>
        </GrayScaleWrapper>
      </RevealWrapper>
    </div>
  );
};

export { Loader };
