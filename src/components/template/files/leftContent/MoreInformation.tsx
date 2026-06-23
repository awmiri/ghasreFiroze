import React from "react";

function MoreInformation() {
  return (
    <div>
      <h2
        className="text-[15px] font-IRANYekanX-Bold mb-2"
        style={{ color: "#40e0d0" }}
      >
        نمای کلی ملک
      </h2>
      <p
        className="text-sm leading-relaxed font-IRANYekanX-medium"
        style={{ color: "#d4cfc8" }}
      >
        در این پنت‌هاوس بی‌نظیر که در قلب منطقه اسکای هاربر بی واقع شده،
        تجربه‌ای از لوکس‌ترین سبک زندگی را خواهید داشت. با تراس‌های فراگیر و
        متریال‌های خاص، این ملک زندگی ساحلی را با چشم‌اندازهایی از خط آسمان شهر
        تا افق دریای نیلگون بازتعریف می‌کند. فضای داخلی شامل مجموعه‌ای از سنگ
        مرمر کمیاب ایتالیایی، کف‌پوش‌های بلوط فرانسوی و...
      </p>
      <button
        className="mt-2 flex items-center gap-1 text-sm font-IRANYekanX-medium"
        style={{ color: "#40e0d0" }}
      >
        نمایش بیشتر
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "#40e0d0" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default MoreInformation;
