// components/HeroPart.tsx
import React from "react";

function HeroPart() {
  return (
    <div
      id="hero"
      className="min-h-screen flex items-center pt-10 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(91,33,182,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(91,33,182,0.05)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_80%_60%_at_50%_40%,black_30%,transparent_100%)]"></div>
        <div className="absolute w-150 h-150 bg-[rgba(91,33,182,0.12)] rounded-full blur-[100px] -top-50 -right-25"></div>
        <div className="absolute w-100 h-100 bg-[rgba(13,148,136,0.08)] rounded-full blur-[100px] -bottom-25 -left-20"></div>
        <div className="absolute w-75 h-75 bg-[rgba(139,92,246,0.1)] rounded-full blur-[100px] top-[40%] left-[40%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-300 mx-auto px-[clamp(20px,5vw,60px)]">
        <div className="grid lg:grid-cols-2 gap-15 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-CardBgColor font-IRANYekanX-medium border border-fillBtn shadow-2xl-fillBtn rounded-full py-1.5 px-3.5 pr-2 text-xs text-whiteTextColorMain mb-7">
              <span className="w-1.5 h-1.5 bg-[#059669] rounded-full"></span>
              در حال حاضر به ۱۲,۰۰۰+ تیم در سراسر جهان خدمات می‌دهیم
            </div>

            <h1 className="text-[clamp(44px,7vw,82px)] leading-none mb-6 font-IRANYekanX-Bold text-whiteTextColorMain">
              ما میسازیم
              <br />
              <span className="text-fillBtn">زیرساخت های</span>
              <br />
              فردا را
            </h1>

            <p className="text-lg text-whiteTextColorPrime leading-relaxed max-w-120 mb-10 font-IRANYekanX-medium">
              مریدین یک پلتفرم توسعه‌دهنده محور است که به تیم‌های مهندسی کمک
              می‌کند سریع‌تر تحویل دهند، هوشمندانه‌تر مقیاس کنند و نرم‌افزاری
              بسازند که ماندگار باشد. تاسیس در ۲۰۱۹، مورد اعتماد بلندپروازانه
              ‌ترین شرکت‌های جهان.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="inline-flex items-center gap-2 bg-fillBtn text-white px-7 py-3.5 rounded-[14px] text-[15px] shadow-[0_4px_12px_rgba(91,33,182,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(91,33,182,0.4)] transition-all duration-300 relative overflow-hidden group">
                <span className="absolute inset-0 bg-linear-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                مشاهده کارهای ما
              </button>
              <button className="inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-[14px] text-[15px] border border-white/30 bg-transparent hover:border-fillBtn hover:text-fillBtn hover:bg-[#5B21B6]/8 transition-all duration-300 font-IRANYekanX-medium">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l6 4-6 4V8z" />
                </svg>
                تماشای داستان ما
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-105">
              <div className="bg-CardBgColor hover:shadow-center hover:shadow-fillBtn/20 backdrop-blur-[20px] rounded-[22px] p-6 mb-4 transition-all duration-300hover:translate-x-1">
                <div className="text-xs text-whiteTextColorPrime tracking-[0.08em] mb-2 font-IRANYekanX-Bold">
                  توسعه‌دهندگان فعال ماهانه
                </div>
                <div className="text-[32px] text-whiteTextColorMain font-IRANYekanX-medium">
                  ۸۴۷K
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-[#059669] mt-1 font-IRANYekanX-medium">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                  +۲۳٫۴٪ نسبت به سه ماهه قبل
                </div>
              </div>
              <div className="bg-CardBgColor hover:shadow-center hover:shadow-fillBtn/20 backdrop-blur-[20px] rounded-[22px] p-6 mb-4 transition-all duration-300 hover:translate-x-1">
                <div className="text-xs text-whiteTextColorPrime tracking-[0.08em] uppercase mb-2 font-IRANYekanX-Bold">
                  قابلیت اطمینان زیرساخت
                </div>
                <div className="text-[32px] text-whiteTextColorMain font-IRANYekanX-medium">
                  ۹۹٫۹۹٪
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-[#059669] mt-1 font-IRANYekanX-medium">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                  در دسترس بودن SLA در سال جاری
                </div>
              </div>
              <div className="bg-CardBgColor hover:shadow-center hover:shadow-fillBtn/20 backdrop-blur-[20px] rounded-[22px] p-6 transition-all duration-300 hover:translate-x-1">
                <div className="text-xs text-whiteTextColorPrime tracking-[0.08em] uppercase mb-2 font-IRANYekanX-Bold">
                  استقرارهای امروز
                </div>
                <div className="text-[32px] text-whiteTextColorMain font-IRANYekanX-medium">
                  ۱٫۲M
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-[#059669] mt-1 font-IRANYekanX-medium">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                  در ۱۴۰ کشور
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPart;
