import React from "react";

function SeoContent() {
  const seoMembers = [
    {
      initials: "س.ر",
      name: "سارا رضایی",
      role: "مدیر ارشد سئو",
      desc: "رهبری استراتژی رشد ارگانیک، تحقیق کلمات کلیدی و بهینه‌سازی محتوا در تمام کانال‌ها.",
      tags: ["سئو داخلی", "تحلیل داده", "استراتژی محتوا"],
    },
    {
      initials: "م.ل",
      name: "مهدی لطفی",
      role: "کارشناس فنی سئو",
      desc: "مدیریت عملکرد سایت، دیتای ساختاریافته، خزش‌پذیری و بهبود Core Web Vitals.",
      tags: ["اسکیما مارکاپ", "سرعت سایت", "سئو تکنیکال"],
    },
    {
      initials: "پ.ت",
      name: "پریا تهرانی",
      role: "نویسنده محتوای سئو",
      desc: "نوشتن محتوای پربازده و بهینه برای موتورهای جستجو که رتبه می‌گیرد و مخاطب را جذب می‌کند.",
      tags: ["تولید محتوا", "سئو محتوا", "لینک‌سازی"],
    },
  ];
  return (
    <div
      className="mb-12 animate-fadeUp opacity-0"
      style={{ animation: "fadeUp 0.7s 0.25s ease forwards" }}
    >
      <div className="flex items-center gap-3 text-[11px] font-IRANYekanX-Bold tracking-[0.16em] text-tagsColor mb-5">
        <span className="flex-1 h-px bg-tagsColor" /> سئو و رشد{" "}
        <span className="flex-1 h-px bg-tagsColor" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {seoMembers.map((seo, idx) => (
          <div
            key={idx}
            className="bg-CardBgColor border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-center hover:shadow-fillBtn/15 hover:-translate-y-1"
          >
            {/* نوار بالا */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-fillBtn" />

            {/* بج */}
            <div className="absolute top-4 left-4 text-[10px] font-IRANYekanX-Bold tracking-wider text-fillBtn bg-fillBtn/10 px-2.5 py-1 rounded-full border border-fillBtn/20">
              سئو
            </div>

            {/* آواتار */}
            <div className="w-14 h-14 rounded-full bg-fillBtn/10 flex items-center justify-center font-IRANYekanX-Bold text-fillBtn text-base mb-3 border-2 border-fillBtn/30">
              {seo.initials}
            </div>

            {/* اسم */}
            <div className="font-IRANYekanX-Bold text-lg text-whiteTextColorMain">
              {seo.name}
            </div>

            {/* نقش */}
            <div className="text-[12px] font-IRANYekanX-Bold uppercase tracking-wide text-fillBtn mt-0.5 mb-2">
              {seo.role}
            </div>

            {/* توضیح */}
            <div className="text-whiteTextColorPrime text-[13px] leading-relaxed font-IRANYekanX-Regular mb-4">
              {seo.desc}
            </div>

            {/* تگ‌ها */}
            <div className="flex flex-wrap gap-1.5">
              {seo.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-[11px] font-IRANYekanX-medium px-3 py-1 rounded-full bg-fillBtn/10 text-fillBtn border border-fillBtn/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeoContent;
