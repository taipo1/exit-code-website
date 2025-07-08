"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const JourneyAnimation = () => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 768px)": function () {
        gsap.fromTo(
          "#journey-heading",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#journey-intro",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          "#journey-subtext",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#journey-intro",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          "#big-icon",
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: "#journey-cards",
              start: "bottom 100%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          ".journey-card",
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: {
              each: 0.2,
              from: "start",
            },
            scrollTrigger: {
              trigger: "#journey-cards",
              start: "bottom 105%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          "#journey-icon",
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.4,
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#journey-cards",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      },

      // Mobile
      "(max-width: 767px)": function () {
        gsap.fromTo(
          "#journey-heading",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#journey-intro",
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          "#journey-subtext",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#journey-intro",
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          ".journey-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: "#journey-cards",
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );

        // Skip animating icon on mobile for speed
      },
    });
  }, []);

  return null;
};

export default JourneyAnimation;
