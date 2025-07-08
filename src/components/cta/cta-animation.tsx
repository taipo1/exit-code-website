"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const CtaAnimation = () => {
  useEffect(() => {
    // Animate the CTA card
    gsap.fromTo(
      "#cta-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate CTA buttons with stagger (using class, as per your rule)
    gsap.fromTo(
      ".cta-button",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.15,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return null;
};

export default CtaAnimation;
