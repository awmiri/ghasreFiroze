// components/MissionPart.tsx
import React from "react";

function MissionPart() {
  return (
    <section className="py-[clamp(40px,10vw,70px)]">
      <div className="w-full max-w-300 mx-auto px-[clamp(20px,5vw,60px)]">
        <div className="text-center max-w-150 mx-auto">
          <div className="inline-flex items-center gap-2 text-sm tracking-[0.12em] font-IRANYekanX-medium text-tagsColor mb-4.5">
            <span className="block w-4.5 h-0.5 bg-tagsColor rounded-xs"></span>
            هدف
          </div>
          <h2 className="text-[clamp(32px,5vw,56px)] mb-4 font-IRANYekanX-Bold text-whiteTextColorMain">
            چرا وجود داریم
          </h2>
          <p className="text-[17px] text-whiteTextColorPrime leading-relaxed max-w-130 mx-auto font-IRANYekanX-medium">
            دو اصل هر تصمیمی را که می‌گیریم، هر ویژگی که عرضه می‌کنیم، هر
            استخدامی که انجام می‌دهیم هدایت می‌کند.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-15">
          <div className="relative bg-CardBgColor hover:shadow-center hover:shadow-fillBtn/20 rounded-4xl p-12 overflow-hidden transition-all duration-500 cursor-default hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)] group">
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(91,33,182,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-13 h-13 rounded-[14px] bg-[#0d948814] grid place-items-center mb-7 relative z-10">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#0d9488"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-[26px] mb-4 relative z-10 font-IRANYekanX-Bold text-whiteTextColorMain">
              رسالت ما
            </h3>
            <p className="text-base text-whiteTextColorPrime leading-relaxed relative z-10 font-IRANYekanX-medium">
              از بین بردن شکاف زیرساختی بین استارتاپ‌ها و شرکت‌های بزرگ — دادن
              قابلیت اطمینان، مشاهده‌پذیری و سرعتی به هر تیم مهندسی که فقط
              بهترین شرکت‌های با منابع بالا از آن لذت می‌بردند.
            </p>
            <p className="text-[15px] text-whiteTextColorPrime mt-4 relative z-10 font-IRANYekanX-medium">
              ما موفقیت را با این می‌سنجیم که توسعه‌دهندگان چقدر زمان می‌توانند
              صرف ساختن کنند، نه مبارزه با ابزارهایشان.
            </p>
          </div>

          <div className="relative bg-CardBgColor hover:shadow-center hover:shadow-fillBtn/20 rounded-4xl p-12 overflow-hidden transition-all duration-500 cursor-default hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)] group">
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(13,148,136,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-13 h-13 rounded-[14px] bg-[#0d948814] grid place-items-center mb-7 relative z-10">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#0d9488"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-[26px] mb-4 relative z-10 font-IRANYekanX-Bold text-whiteTextColorMain">
              چشم‌انداز ما
            </h3>
            <p className="text-base text-whiteTextColorPrime leading-relaxed relative z-10 font-IRANYekanX-medium">
              جهانی که در آن هر تیمی — بدون توجه به اندازه، مکان یا بودجه —
              بتواند با اطمینان یک شرکت تریلیون دلاری استقرار انجام دهد. زیرساخت
              نرم‌افزار باید نامرئی، قابل اعتماد و لذت‌بخش برای استفاده باشد.
            </p>
            <p className="text-[15px] text-whiteTextColorPrime mt-4 relative z-10 font-IRANYekanX-medium">
              ما پلتفرمی می‌سازیم که تا سال ۲۰۳۰ آن جهان را واقعی کند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionPart;
