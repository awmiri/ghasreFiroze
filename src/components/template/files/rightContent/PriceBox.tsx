import React from "react";

function PriceBox() {
  return (
    <div
      className="rounded-2xl p-5 border"
      style={{ borderColor: "#474f50", backgroundColor: "#474f50" }}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className="text-[11px] tracking-widest font-IRANYekanX-Bold"
          style={{ color: "#8a8880" }}
        >
          برای فروش
        </span>
        <span
          className="text-xs font-IRANYekanX-Bold cursor-pointer"
          style={{ color: "#40e0d0" }}
        >
          قابل مذاکره
        </span>
      </div>
      <div
        className="text-[28px] font-IRANYekanX-Bold leading-tight mb-1"
        style={{ color: "#d4cfc8" }}
      >
        ۱۲,۴۵۰,۰۰۰
      </div>
      <div
        className="flex items-center font-IRANYekanX-Regular gap-1 text-[12px]"
        style={{ color: "#8a8880" }}
      >
        $۲۵,۹۳۷ برای هر متر مربع
        <svg
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{ color: "#8a8880" }}
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default PriceBox;
