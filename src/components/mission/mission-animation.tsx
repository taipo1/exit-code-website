"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const apes = ["#ape-1", "#ape-2", "#ape-3", "#ape-4"];

const MissionAnimation = () => {
  useEffect(() => {
    // ✅ Scroll-triggered reveal for the mission section
    const tlMissionEntry = gsap.timeline({
      scrollTrigger: {
        trigger: "#mission-wrapper",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    tlMissionEntry.fromTo(
      "#mission",
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );

    tlMissionEntry.fromTo(
      "#mission-title",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3",
    );

    tlMissionEntry.to(
      "#mission-highlight",
      {
        text: "krachtpatser.",
        duration: 0.6,
        ease: "power1.inOut",
      },
      ">-0.2",
    );

    tlMissionEntry.fromTo(
      ".mission-description",
      { opacity: 0, x: 5 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
      ">-0.1",
    );

    tlMissionEntry.to("#mission-highlight", {
      color: "#D6452D",
      duration: 0.3,
      ease: "power1.inOut",
    });

    // ✅ Looping ape reveal animation
    const tlApes = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    apes.forEach((ape) => {
      tlApes
        .fromTo(
          ape,
          { opacity: 0 },
          { opacity: 1, duration: 0.2, ease: "power2.out" },
        )
        .to(ape, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
          delay: 0.5,
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tlApes.kill();
    };
  }, []);

  return null;
};

export default MissionAnimation;
