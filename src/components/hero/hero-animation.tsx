"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const HeroAnimation = () => {
  useEffect(() => {
    const words = [
      "websites.",
      "",
      "webapps.",
      "",
      "tools.",
      "",
      "dashboards.",
      "",
    ];
    const el = "#hero-products";

    const tlHero = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    words.forEach((word) => {
      tlHero.to(el, {
        text: word,
        duration: 0.5,
        delay: word === "" ? 1.5 : 0,
        ease: "none",
      });
    });

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
