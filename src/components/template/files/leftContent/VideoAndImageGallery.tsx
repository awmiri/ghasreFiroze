import Image from "next/image";
import React from "react";

function VideoAndImageGallery() {
  return (
    <>
      {/* main amd big gallery*/}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ height: "480px", lg: "390px" } as any}
      >
        <Image
          src="/routePageAlbum/69b1235cc39f2.webp"
          alt="تصویر اصلی ملک"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute font-IRANYekanX-medium bottom-3 left-3 flex items-center gap-1 bg-black/55 text-white text-xs px-3 py-1.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          ۱ / ۱۲ عکس
        </div>
      </div>

      {/* more video and pic*/}
      <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {[
          "/routePageAlbum/69b1235cc39f2.webp",
          "/routePageAlbum/69b1235cef0d2.webp",
          "/routePageAlbum/69b1235df2338.webp",
          "/routePageAlbum/69b1235df2338.webp",
        ].map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-1/3 lg:flex-1 rounded-xl overflow-hidden h-20 lg:h-23 relative snap-start"
          >
            <Image
              src={src}
              alt={`بند انگشتی ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="shrink-0 w-1/3 lg:flex-1 rounded-xl h-20 lg:h-23 relative overflow-hidden cursor-pointer bg-black/55 snap-start">
          <Image
            src="/routePageAlbum/69b1235df2338.webp"
            alt="عکس‌های بیشتر"
            fill
            className="object-cover"
          />
          <div className="absolute font-IRANYekanX-medium inset-0 bg-black/55 flex flex-col items-center justify-center">
            <span className="text-white font-semibold text-sm">+۷</span>
            <span className="text-white text-xs opacity-80">بیشتر</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoAndImageGallery;
