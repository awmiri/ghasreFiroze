import Image from "next/image";
import React from "react";

function ConsultantsBox() {
  return (
    <div>
      <p
        className="text-[10px]  tracking-widest font-IRANYekanX-Bold mb-3"
        style={{ color: "#8a8880" }}
      >
        مشاور املاک
      </p>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-full shrink-0 border-2 shadow-md overflow-hidden relative"
          style={{ borderColor: "#40e0d0", backgroundColor: "#3c4142" }}
        >
          <Image
            src="https://i.pravatar.cc/80?img=12"
            alt="مشاور"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div
            className="font-IRANYekanX-Bold text-sm"
            style={{ color: "#d4cfc8" }}
          >
            جولیان وین
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="flex-1 border rounded-xl py-2.5 flex items-center justify-center transition hover:bg-[#474f50] hover:text-[#d4cfc8]"
          style={{ borderColor: "#474f50", color: "#8a8880" }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
        <button
          className="flex-1 border rounded-xl py-2.5 flex items-center justify-center transition hover:bg-[#474f50] hover:text-[#d4cfc8]"
          style={{ borderColor: "#474f50", color: "#8a8880" }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ConsultantsBox;
