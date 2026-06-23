"use client";
import React, { useEffect, useState } from "react";
import PriceBox from "./PriceBox";
import VirtualTore from "./VirtualTore";
import ConsultantsBox from "./ConsultantsBox";

function RightContentLayout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`w-full lg:w-75 shrink-0 flex flex-col gap-4 lg:sticky lg:top-6 self-start transition-all duration-500 ${scrolled ? "pt-11" : ""}`}
    >
      <PriceBox />

      <VirtualTore />

      <div className="border-t" style={{ borderColor: "#474f50" }} />

      <ConsultantsBox />
    </div>
  );
}

export default RightContentLayout;
