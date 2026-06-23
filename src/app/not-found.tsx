"use client";
import React from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

function Notfound() {
  const router = useRouter();

  return (
    <div className="w-full h-dvh bg-[#3c4142] flex items-center justify-center relative overflow-hidden px-7.5">
      {/* اشکال دکوراتیو پس‌زمینه */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-[#40E0D0]/10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-[#40E0D0]/10" />
      <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-[#40E0D0]/40 max-lg:hidden" />
      <div className="absolute bottom-1/4 right-16 w-3 h-3 rounded-full bg-[#40E0D0]/30 max-lg:hidden" />

      <div className="flex items-center flex-col gap-5 text-center relative z-10">
        <div className="flex items-center gap-2.5 text-[11px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-2">
          <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
          خطا
          <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
        </div>

        <h1 className="font-IRANYekanX-medium text-[clamp(90px,15vw,180px)] leading-none tracking-[2px] text-[#D4CFC8] relative">
          4<span className="text-[#40E0D0]">0</span>4
        </h1>

        <p className="text-lg sm:text-xl font-IRANYekanX-medium text-[#8a8880] max-w-md leading-[1.8]">
          متاسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد یا حذف شده است.
        </p>

        <div className="flex gap-4 flex-wrap justify-center mt-4">
          <button
            onClick={() => router.back()}
            className="border border-[#D4CFC8]/25 hover:border-[#40E0D0] hover:text-[#40E0D0] text-[#D4CFC8] text-[13px] font-IRANYekanX-Bold tracking-[2px] px-8 py-4 transition-all cursor-pointer"
          >
            بازگشت
          </button>
          <button
            onClick={() => router.replace("/")}
            className="bg-[#40E0D0] hover:bg-[#2ecfc0] text-[#3c4142] text-[13px] font-IRANYekanX-Bold tracking-[2px] uppercase px-8 py-4 clip-btn transition-all hover:translate-x-1 cursor-pointer"
          >
            بازگشت به خانه
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
