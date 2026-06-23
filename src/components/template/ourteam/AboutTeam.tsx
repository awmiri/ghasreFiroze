import React from "react";

function AboutTeam() {
  return (
    <div
      className="grid md:grid-cols-[1fr_auto] gap-6 mb-16 animate-fadeUp opacity-0"
      style={{ animation: "fadeUp 0.7s ease forwards" }}
    >
      <div>
        <div className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-tagsColor mb-4">
          <span className="w-6 h-0.5 bg-tagsColor font-IRANYekanX-Bold" /> تیم
          ما
        </div>
        <h1 className="font-IRANYekanX-Bold text-5xl md:text-7xl tracking-[-0.02em] text-whiteTextColorMain leading-[1.05]">
          آدم‌هایی که
          <br />
          چیزهای <span className="text-tagsColor">بزرگ</span>
          <br />
          می‌سازند.
        </h1>
        <p className="text-whiteTextColorPrime font-IRANYekanX-medium text-base mt-4 max-w-md leading-relaxed">
          تیمی از آدم‌های پرشور که با هدف می‌سازند. هر نقشی مهم است، هر نفری
          ارزش دارد.
        </p>
      </div>

      <div className="flex flex-row md:flex-col gap-2 md:items-end mt-2 md:mt-0">
        <div className="flex flex-col items-start md:items-end">
          <span className="text-4xl md:text-5xl text-whiteTextColorMain font-IRANYekanX-Bold">
            ۱۲
          </span>
          <span className="text-[11px] text-whiteTextColorPrime font-IRANYekanX-medium">
            عضو تیم
          </span>
        </div>
        <div className="flex flex-col items-start md:items-end ml-6 md:ml-0">
          <span className="font-IRANYekanX-Bold text-4xl md:text-5xl  text-whiteTextColorMain">
            ۵
          </span>
          <span className="text-[11px] text-whiteTextColorPrime font-IRANYekanX-medium">
            دپارتمان
          </span>
        </div>
        <div className="flex flex-col items-start md:items-end ml-6 md:ml-0">
          <span className="font-IRANYekanX-Bold text-4xl md:text-5xl text-whiteTextColorMain">
            ۴
          </span>
          <span className="text-[11px] text-whiteTextColorPrime font-IRANYekanX-medium">
            کشور
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
