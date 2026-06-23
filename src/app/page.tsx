"use client";

import AboutInHome from "@/components/template/HomePage/AboutInHome";
import HeroSection from "@/components/template/HomePage/HeroSection";
import Process from "@/components/template/HomePage/Process";
import Project from "@/components/template/HomePage/Project";
import Services from "@/components/template/HomePage/Services";
import Tesrimonials from "@/components/template/HomePage/Tesrimonials";
import Ticker from "@/components/template/HomePage/Ticker";
import { useEffect, useRef, useState } from "react";

export default function IroncladPage() {
  return (
    <>
      <style>{`
        .ticker-track { display: inline-flex; animation: ticker 30s linear infinite; }
        @keyframes ticker { to { transform: translateX(50%); } }

        @keyframes rotateBadge { to { transform: rotate(360deg); } }
        .badge-rotate { animation: rotateBadge 20s linear infinite; }
        .project-card:hover .project-img { transform: scale(1.05); filter: brightness(0.4) saturate(0.5); }
        .project-card:hover .project-hover-btn-wrap { opacity: 1; }
        .project-img { transition: transform 0.6s, filter 0.4s; filter: brightness(0.6) saturate(0.7); }
        .project-hover-btn-wrap { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
      `}</style>
      <div className="bg-mainBgColor text-whiteTextColorMain overflow-x-hidden">
        <HeroSection />
        <Ticker />
        <AboutInHome />
        <Services />
        <Project />
        <Process />
        <Tesrimonials />
      </div>
    </>
  );
}
