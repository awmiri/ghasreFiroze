import React from "react";

function Ticker() {
  return (
    <div className="bg-[#40E0D0] py-3.5 overflow-hidden whitespace-nowrap tickerLoop">
      <div className="ticker-track">
        {[
          "ساخت تجاری",
          "پروژه مسکونی",
          "تأسیسات صنعتی",
          "بازسازی و مرمت",
          "مهندسی سازه",
          "مدیریت پروژه",
          "دکوراسیون داخلی",
          "ساخت تجاری",
          "پروژه مسکونی",
          "تأسیسات صنعتی",
          "بازسازی و مرمت",
          "مهندسی سازه",
          "مدیریت پروژه",
          "دکوراسیون داخلی",
        ].map((item, i) => (
          <span
            key={i}
            className="font-IRANYekanX-medium text-[15px] tracking-[3px] text-[#3c4142] px-10 inline-flex items-center gap-5"
          >
            {item} <span className="text-[20px] opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
