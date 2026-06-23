"use client";
import React, { useEffect, useRef, useState } from "react";

function Process() {
  const [processActive, setProcessActive] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);
  const steps = [
    {
      num: "۰۱",
      title: "مشاوره",
      desc: "دیدگاه، اهداف، بودجه و زمان‌بندی شما را در جلسات کشف تفصیلی می‌فهمیم.",
    },
    {
      num: "۰۲",
      title: "طراحی و برنامه‌ریزی",
      desc: "معماران و مهندسان نقشه‌های دقیق، مدل‌های سه‌بعدی و نقشه راه پروژه می‌سازند.",
    },
    {
      num: "۰۳",
      title: "ساخت",
      desc: "تیم‌های ما با دقت کامل اجرا می‌کنند و از کنترل کیفیت و ایمنی سختگیرانه پیروی می‌نمایند.",
    },
    {
      num: "۰۴",
      title: "تحویل",
      desc: "بازرسی نهایی، تحویل پروژه و پشتیبانی مداوم برای رضایت کامل شما.",
    },
  ];

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => obs.observe(el));

    const procObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setProcessActive(true);
      },
      { threshold: 0.3 },
    );
    if (processRef.current) procObs.observe(processRef.current);

    return () => {
      obs.disconnect();
      procObs.disconnect();
    };
  }, []);

  return (
    <section
      id="process"
      className="px-15 py-25 bg-[#3c4142] max-lg:px-7.5 max-lg:py-17.5"
      ref={processRef}
    >
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2.5 text-[11px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-5">
          <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
          روش کار ما
        </div>
        <h2 className="font-IRANYekanX-medium text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-[1px] text-[#D4CFC8] mb-5">
          فرآیند <span className="text-[#40E0D0]">اثبات‌شده</span>
        </h2>
        <p className="text-[16px] text-[#8a8880] leading-[1.8] max-w-140 font-IRANYekanX-Regular mx-auto">
          هر ساخت عالی با یک برنامه محکم آغاز می‌شود. فرآیند چهارمرحله‌ای ما دقت
          در هر قدم را تضمین می‌کند.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-0 relative max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1">
        <div className="absolute top-9 right-[12.5%] left-[12.5%] h-px bg-[#D4CFC8]/[0.07] max-lg:hidden" />
        <div
          className="absolute top-9 right-[12.5%] h-px bg-[#40E0D0] transition-all duration-1500 ease-out max-lg:hidden"
          style={{ width: processActive ? "75%" : "0" }}
        />

        {steps.map((s, i) => (
          <div key={s.num} className="text-center px-6 relative">
            <div
              className={`w-18 h-18 border-2 rounded-full font-IRANYekanX-medium flex items-center justify-center mx-auto mb-7 font-bebas text-[26px] relative z-10 transition-all duration-500
                ${
                  processActive
                    ? "border-[#40E0D0] text-[#3c4142] bg-[#40E0D0] shadow-[0_0_0_8px_rgba(64,224,208,0.15)]"
                    : "border-[#D4CFC8]/[0.07] text-[#8a8880] bg-[#3c4142]"
                }`}
              style={{
                transitionDelay: processActive ? `${i * 400}ms` : "0ms",
              }}
            >
              {s.num}
            </div>
            <div className="font-IRANYekanX-Bold text-[18px] font-bold uppercase tracking-[1px] text-[#D4CFC8] mb-3">
              {s.title}
            </div>
            <p className="text-[13px] text-[#8a8880] leading-[1.7] font-IRANYekanX-Regular">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
