"use client";
import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-2 max-lg:grid-cols-1 relative overflow-hidden"
    >
      <div className="flex flex-col justify-center px-15 pt-30 pb-20 relative z-10 max-lg:px-7.5 max-lg:pt-25 max-lg:pb-15">
        <div className="flex items-center gap-2.5 text-[11px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-6">
          <span className="w-8 h-0.5 bg-[#40E0D0] inline-block" />
          تأسیس ۱۳۷۷ · سازندگان معتمد
        </div>

        <h1 className="font-IRANYekanX-medium text-[clamp(64px,8vw,110px)] leading-[1.1] tracking-[2px] text-[#D4CFC8] mb-6">
          ما می‌سازیم
          <br />
          <span className="text-[#40E0D0] block">آینده‌ای که</span>
          تصور می‌کنید
        </h1>
        <p className="text-[15px] leading-[1.8] text-[#8a8880] max-w-105 mb-8 font-IRANYekanX-Regular">
          از آغاز گودبرداری تا افتتاح رسمی — آیرون‌کلد سازه‌هایی با دقت بالا
          تحویل می‌دهد که نسل‌ها ماندگار است. تجاری، مسکونی و صنعتی.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 bg-[#40E0D0] hover:bg-[#2ecfc0] text-[#3c4142] text-[13px] font-IRANYekanX-Bold tracking-[2px] uppercase px-8 py-4 clip-btn transition-all hover:translate-x-1"
          >
            مشاهده کارها
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 border border-[#D4CFC8]/25 hover:border-[#40E0D0] hover:text-[#40E0D0] text-[#D4CFC8] text-[13px] font-IRANYekanX-Bold tracking-[2px] px-8 py-4 transition-all"
          >
            مشاوره رایگان
          </a>
        </div>

        <div className="flex gap-10 mt-[60px] pt-10 border-t border-[#D4CFC8]/[0.07] flex-wrap max-lg:gap-6">
          {[
            ["۵۰۰", "+", "پروژه انجام‌شده"],
            ["۲۵", "سال", "تجربه"],
            ["۹۸", "%", "رضایت مشتری"],
          ].map(([num, suf, label]) => (
            <div key={label}>
              <div className="font-IRANYekanX-medium text-[42px] text-[#D4CFC8] leading-none">
                {num}
                <span className="text-[#40E0D0]">{suf}</span>
              </div>
              <div className="text-[11px] tracking-[2px] font-IRANYekanX-Regular text-[#8a8880] mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden max-lg:hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#3c4142] to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#3c4142] to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
          alt="کارگاه ساخت"
          className="w-full h-full object-cover brightness-[0.55] saturate-80"
        />
        <div className="absolute bottom-15 left-10 z-20 w-32.5 h-32.5 bg-[#40E0D0] rounded-full flex flex-col items-center justify-center text-center badge-rotate">
          <div className="font-IRANYekanX-medium text-[36px] leading-none text-[#3c4142]">
            ISO
          </div>
          <div className="text-[12px] tracking-[1px] font-IRANYekanX-medium text-[#3c4142]/80">
            گواهی‌نامه
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
