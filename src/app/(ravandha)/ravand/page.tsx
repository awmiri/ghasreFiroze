"use client";
import React, { useState } from "react";

import RavandHeader from "@/components/template/ravand/RavandHeader";
import MainInfo from "@/components/template/ravand/swichCard/MainInfo";
import LocationTab from "@/components/template/ravand/swichCard/LocationTab";
import VirtualTore from "@/components/template/ravand/swichCard/VirtualTore";
import ImageGallery from "@/components/template/ravand/ImageGallery";
import RelatedPost from "@/components/template/ravand/RelatedPost";

const TABS = [
  { id: "overview", label: "نمای کلی" },
  { id: "location", label: "موقعیت" },
  { id: "media", label: "رسانه" },
];

function EstateListingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen" dir="rtl">
      <div className="max-w-375 mx-auto py-10 sm:py-14">
        <div className="p-5 sm:p-8 lg:p-12 pb-12">
          {/* header */}
          <RavandHeader />

          {/* image gallery */}
          <ImageGallery />

          {/* switch tabs */}
          <div className="flex gap-8 border-b border-[#D4CFC8]/[0.07] mb-7 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`bg-transparent border-0 font-IRANYekanX-Bold text-[14px] sm:text-[15px] pb-3.5 cursor-pointer border-b-[3px] whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-[#40E0D0] border-[#40E0D0]"
                    : "text-whiteTextColorPrime border-transparent hover:text-[#D4CFC8]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* tabs content */}
          <div className="mb-9">
            {activeTab === "overview" && <MainInfo />}

            {activeTab === "location" && <LocationTab />}

            {activeTab === "media" && <VirtualTore />}
          </div>

          {/* related files */}
          <RelatedPost />
        </div>
      </div>
    </div>
  );
}

export default EstateListingPage;
