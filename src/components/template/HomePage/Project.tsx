"use client";
import React, { useState } from "react";

function Project() {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = [
    {
      cat: "تجاری · ۱۴۰۳",
      name: "برج تجاری اپکس — ۴۲ طبقه",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
      span: "col-span-7",
    },
    {
      cat: "مسکونی · ۱۴۰۳",
      name: "ویلای لوکس هیلکرست",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      span: "col-span-5",
    },
    {
      cat: "صنعتی · ۱۴۰۲",
      name: "مرکز لجستیک ملایر",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
      span: "col-span-4",
    },
    {
      cat: "تجاری · ۱۴۰۲",
      name: "پارک خرده‌فروشی شمالی",
      img: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=600&q=80",
      span: "col-span-4",
    },
    {
      cat: "مسکونی · ۱۴۰۱",
      name: "مجتمع مسکونی کنار رود",
      img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80",
      span: "col-span-4",
    },
  ];

  return (
    <section
      id="projects"
      className="px-15 py-25 bg-[#444e4f] max-lg:px-7.5 max-lg:py-17.5"
    >
      <div className="flex justify-between items-end mb-12 max-lg:flex-col max-lg:items-start max-lg:gap-5">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-5">
            <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
            نمونه کارها
          </div>
          <h2 className="font-IRANYekanX-medium text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-[1px] text-[#D4CFC8]">
            پروژه‌های <span className="text-[#40E0D0]">برجسته</span>
          </h2>
        </div>
        <div className="flex gap-1 flex-wrap">
          {[
            ["all", "همه"],
            ["commercial", "تجاری"],
            ["residential", "مسکونی"],
            ["industrial", "صنعتی"],
          ].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setActiveFilter(val)}
              className={`border text-[11px] font-IRANYekanX-Bold tracking-[2px] px-5 py-2.5 cursor-pointer transition-all
                ${
                  activeFilter === val
                    ? "bg-[#40E0D0] border-[#40E0D0] text-[#3c4142]"
                    : "bg-transparent border-[#D4CFC8]/[0.07] text-[#8a8880] hover:bg-[#40E0D0] hover:border-[#40E0D0] hover:text-[#3c4142]"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 max-lg:grid-cols-1">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-card relative overflow-hidden cursor-pointer ${p.span} max-lg:col-span-1`}
          >
            <img
              src={p.img}
              alt={p.name}
              className={`project-img w-full object-cover ${i === 0 ? "h-105" : "h-80"} max-lg:h-60`}
            />
            <div className="absolute inset-0 p-7 flex flex-col justify-end bg-linear-to-t from-black/80 to-transparent">
              <div className="text-[10px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-2">
                {p.cat}
              </div>
              <div className="font-IRANYekanX-medium text-[20px] font-bold tracking-[1px] text-[#D4CFC8]">
                {p.name}
              </div>
            </div>
            <div className="project-hover-btn-wrap">
              <button className="bg-[#40E0D0] text-[#3c4142] text-[12px] font-IRANYekanX-Bold tracking-[2px] uppercase px-7 py-3.5 border-none cursor-pointer clip-btn-sm">
                مشاهده پروژه
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
