"use client";
import React, { useRef, useEffect } from "react";
import "./heroSection.css";
import SignUpButton from "@/components/SignUpForm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  // const boardRef = useRef(null);
  // const trophyRef = useRef(null);
  // const studyRef = useRef(null);
  // const starRef = useRef(null);
  // const calculatorRef = useRef(null);
  // const cardRef = useRef(null);

  useGSAP(() => {
    gsap.to("#board", {
      duration: 2.5,
      x: -20,
      y: -20,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });

    gsap.to("#trophy", {
      duration: 2.5,
      x: 20,
      y: -20,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });

    gsap.to("#study", {
      duration: 2.5,
      x: -20,
      y: 20,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });

    gsap.to("#star", {
      duration: 2.5,
      x: 20,
      y: 20,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });

    gsap.to("#calculator", {
      duration: 2.5,
      x: -20,
      y: -20,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });

    gsap.to("#card", {
      duration: 2.5,
      x: 20,
      y: -20,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });

  });


  return (
    <div className="hero-section" id="#heroSection" style={{ height: "calc(100vh + 2px)" }}>
      <div className="content-container">
        <h1 className="title-h1 text-4xl leading-normal lg:text-5xl font-semibold text-center mx-auto px-4 lg:px-0 max-w-screen-lg title-with-gradient">
          <span className="title-span-non">Unlock Your Financial Potential,</span>
          &nbsp;
          <span className="title-s2 title-span">Gamify Your Learning Journey</span>
        </h1>
        <p className="subtitle text-base lg:text-lg text-center mx-auto px-4 lg:px-0 mt-4 lg:mt-6 max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl whitespace-normal">
          Say goodbye to boring finance lessons and get ahead financially while having a blast with Effinity!
        </p>
        <SignUpButton />
      </div>
      <img id="board" src="/heroIcons/Board.png" alt="Board icon" className="backdrop board" />
      <img id="trophy" src="/heroIcons/trophy.png" alt="Trophy icon" className="backdrop trophy" />
      <img id="study" src="/heroIcons/Online-Study.png" alt="Study icon" className="backdrop study" />
      <img id="star" src="/heroIcons/Star-1.png" alt="Star icon" className="backdrop star" />
      <img id="calculator" src="/heroIcons/Calculator-1.png" alt="Calculator icon" className="backdrop calculator" />
      <img id="card" src="/heroIcons/Card-1.png" alt="Card icon" className="backdrop credit" />
    </div>
  );
};

export default HeroSection;
