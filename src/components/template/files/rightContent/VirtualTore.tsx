import Image from "next/image";
import React from "react";

function VirtualTore() {
  return (
    <>
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ height: "128px" }}
      >
        <Image
          src="/routePageAlbum/69b1235e79e23.webp"
          alt="تور مجازی"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(60,65,66,0.8), rgba(60,65,66,0.2))",
          }}
        />
        <div
          className="absolute top-2.5 left-2.5 text-black/60 text-[9px] font-IRANYekanX-Bold uppercase tracking-wider px-2 py-1 rounded-md"
          style={{ backgroundColor: "#40e0d0" }}
        >
          آماده برای واقعیت مجازی
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div
            className="font-IRANYekanX-Bold text-[15px] leading-tight mb-0.5"
            style={{ color: "#d4cfc8" }}
          >
            تور مجازی ۳۶۰°
          </div>
          <div
            className="text-[11px] opacity-70 font-IRANYekanX-medium"
            style={{ color: "#d4cfc8" }}
          >
            در هر اتاق با کیفیت بالا قدم بزنید.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-1 -mt-1 font-IRANYekanX-medium">
        <span className="text-sm" style={{ color: "#8a8880" }}>
          قدم بزنید
        </span>
        <span
          className="text-sm font-medium flex items-center gap-1 cursor-pointer"
          style={{ color: "#40e0d0" }}
        >
          شروع
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "#40e0d0" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export default VirtualTore;
