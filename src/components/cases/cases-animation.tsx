"use client";
import { useEffect } from "react";
import { gsap } from 'gsap';

const CasesAnimation = () => {
useEffect(() => {
  // Animate Case Cards (from -> to)
  gsap.fromTo(
    ".case-card",
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#cases",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true,
      },
    }
  );

  // Animate CTA block after card stagger
  gsap.fromTo(
    ".case-cta",
    {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 2.5, // Sync with stagger
      scrollTrigger: {
        trigger: "#cases",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true,
      },
    }
  );
}, []);

useEffect(() => {
  // Existing entry animations (keep as is)...

  // Exit animation timeline
  const tlCasesExit = gsap.timeline({
    scrollTrigger: {
      trigger: "#cases",
      start: "center center",
      end: "bottom+=50 top", // when it's leaving the viewport
      scrub: true,
      markers: true,
    },
  });

  // Fade out cards
  tlCasesExit.to(".case-card", {
    opacity: 0,
    y: -30,
    stagger: {
      each: 0.2,
      from: "end", // 👈 reverse the order
    },
    ease: "power2.inOut",
    duration: 0.5,
  });

  // Fade out CTA
  tlCasesExit.to(".case-cta", {
    opacity: 0,
    y: -20,
    ease: "power2.inOut",
    duration: 0.4,
  }, "<+0.2"); // slightly after cards start fading out
}, []);

  return null;
}

export default CasesAnimation;
