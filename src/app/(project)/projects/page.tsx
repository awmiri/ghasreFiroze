// src/app/(project)/projects/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, Search } from "lucide-react";
import FilterBar from "@/components/template/project/FillterBar";
import ProjectContent from "@/components/template/project/ProjectContent";
import MapShowComponent from "@/components/template/project/MapShowComponent";

// کامپوننت اصلی
export default function ProjectsPage() {
  return (
    <div
      className="flex flex-col h-screen font-sora bg-[#3c4142] text-[#D4CFC8]"
      dir="rtl"
    >
      {/* بدنه اصلی */}
      <div className="flex flex-col flex-1 overflow-hidden pt-18 pb-5">
        <FilterBar />
        <div className="flex-1 flex overflow-hidden rounded-lg border border-[#D4CFC8]/[0.07] bg-[#3c4142] shadow-lg relative h-170">
          {/* نقشه */}
          <div className="flex-1 relative z-0">
            <MapShowComponent />
            <div className="absolute top-4 left-4 z-999 bg-[#3c4142cc] backdrop-blur-md border border-[#D4CFC8]/[0.07] rounded-lg px-3.5 py-2 text-sm text-[#D4CFC8]">
              <span className="font-semibold">8</span> پروژه در این منطقه
            </div>
          </div>

          {/* پنل راست */}
          <div className="bg-[#3c4142] border-r border-[#D4CFC8]/[0.07] overflow-y-auto shrink-0 p-3 relative">
            <ProjectContent />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .leaflet-tile {
          filter: brightness(0.85) saturate(0.4) hue-rotate(140deg) invert(1)
            hue-rotate(180deg);
        }
        .leaflet-popup-content-wrapper {
          background: #474f50;
          border: 1px solid rgba(212, 207, 200, 0.07);
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }
        .leaflet-popup-content {
          margin: 0;
          width: 220px !important;
        }
        .leaflet-popup-tip-container {
          display: none;
        }
        .leaflet-popup-close-button {
          display: none;
        }
      `}</style>
    </div>
  );
}
