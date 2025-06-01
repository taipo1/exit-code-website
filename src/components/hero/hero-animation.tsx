"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const HeroAnimation = () => {
  useEffect(() => {
    // Hero fades out
    gsap.to("#hero", {
      opacity: 0,
      y: -100,
      ease: "power2.in",
      duration: 0.3,
      scrollTrigger: {
        trigger: "#hero",
        start: "top-=100 top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default HeroAnimation;
