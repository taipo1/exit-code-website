"use client";
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MissionAnimation = () => {
      useEffect(() => {
    let hasRun = false; // <-- guard to prevent multiple executions
    // 🌀 Full mission timeline (scrubbed fade in + out)
    const tlMission = gsap.timeline({
      scrollTrigger: {
        trigger: "#mission-wrapper",
        start: "top center",
        end: "bottom+=450 center",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    tlMission.fromTo(
      "#mission",
      { opacity: 0, y: 100 },
      { opacity: 1, y: -200, duration: 0.5, ease: "power2.out" }
    );

    tlMission.call(() => {
      if (hasRun) return;
      hasRun = true;

      const tlMissionEntry = gsap.timeline();

      tlMissionEntry.fromTo(
        "#mission-title",
        { opacity: 0,},
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      tlMissionEntry.to(
        "#mission-highlight",
        { 
          text: "krachtpatser.",
          duration: 0.6,
          ease: "power1.inOut",
        },
        ">-0.2"
      );

      tlMissionEntry.fromTo(
        ".mission-description",
        { opacity: 0, x: 5 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        ">-0.1"
      );

      tlMissionEntry.to("#mission-highlight", {
        color: "#D6452D",
        duration: 0.3,
        ease: "power1.inOut",
      });
    }, undefined, "-=0.5");

    // STEP 3: Fade out entire section
    tlMission.to("#mission", {
      opacity: 0,
      y: -300,
      duration: 0.5,
      ease: "power2.in",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return null;
}

export default MissionAnimation;