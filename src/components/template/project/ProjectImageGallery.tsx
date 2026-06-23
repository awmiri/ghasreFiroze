"use client";
import React, { useEffect, useRef, useState } from "react";

interface ProjectImageGalleryProps {
  images: string[];
  projectName: string;
  statusLabel: string;
}
function ProjectImageGallery({
  images,
  projectName,
  statusLabel,
}: ProjectImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  let intervalRef = useRef(null);

  const startSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isHovered) {
      startSlideshow();
    } else {
      stopSlideshow();
      setCurrentIndex(0);
    }
    return () => stopSlideshow();
  }, [isHovered]);

  return (
    <div
      className="w-full h-50 rounded-lg overflow-hidden shrink-0 bg-[#3c4142] relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={images[currentIndex]}
        className="w-full h-full object-cover transition-all duration-500"
        alt={`${projectName} - ${currentIndex + 1}`}
        loading="lazy"
      />

      {/* دکمه‌های قبلی و بعدی */}
      {images.length > 1 && isHovered && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#3c4142]/70 hover:bg-[#3c4142]/90 text-[#D4CFC8] rounded-full w-8 h-8 flex items-center justify-center transition-all z-20"
          >
            ❯
          </button>
          <button
            onClick={goToNext}
            className="absolute rotate-180 right-2 top-1/2 -translate-y-1/2 bg-[#3c4142]/70 hover:bg-[#3c4142]/90 text-[#D4CFC8] rounded-full w-8 h-8 flex items-center justify-center transition-all z-20"
          >
            ❯
          </button>
        </>
      )}

      {/* نشانگر تعداد عکس‌ها */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#3c4142]/70 text-[#D4CFC8] text-[10px] px-2 py-0.5 rounded-full z-20">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* نشان وضعیت پروژه */}
      <div className="flex items-center gap-1.5 font-IRANYekanX-medium absolute z-10 bg-[#474f50]/90 left-3 top-3 px-2 py-0.5 rounded-full shadow-lg">
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            statusLabel === "پیش‌فروش"
              ? "bg-orange-500"
              : statusLabel === "در حال ساخت"
                ? "bg-yellow-500"
                : "bg-green-500"
          }`}
        ></span>
        <p
          className={`text-[11px] font-IRANYekanX-medium m-0 ${
            statusLabel === "پیش‌فروش"
              ? "text-orange-500"
              : statusLabel === "در حال ساخت"
                ? "text-yellow-500"
                : "text-green-500"
          }`}
        >
          {statusLabel}
        </p>
      </div>

      {/* افکت گرادیانت روی عکس */}
      <div className="absolute inset-0 bg-linear-to-t from-[#3c4142]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export default ProjectImageGallery;
