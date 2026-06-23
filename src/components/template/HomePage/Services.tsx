import React from "react";

function Services() {
  const services = [
    {
      num: "۰۱",
      icon: "🏢",
      title: "ساخت تجاری",
      desc: "برج‌های اداری، مراکز خرید، هتل‌ها و پروژه‌های مختلط با بالاترین استانداردهای تجاری.",
    },
    {
      num: "۰۲",
      icon: "🏠",
      title: "پروژه‌های مسکونی",
      desc: "خانه‌های اختصاصی، ویلاهای لوکس و مجتمع‌های مسکونی — هر کدام متناسب با دیدگاه شما.",
    },
    {
      num: "۰۳",
      icon: "🏭",
      title: "تأسیسات صنعتی",
      desc: "انبارها، کارخانه‌ها و مجتمع‌های صنعتی طراحی‌شده برای بهره‌وری عملیاتی حداکثری.",
    },
    {
      num: "۰۴",
      icon: "🔨",
      title: "بازسازی و مرمت",
      desc: "بازگرداندن حیات به سازه‌های موجود با حفظ هویت و بهبود کارایی آن‌ها.",
    },
    {
      num: "۰۵",
      icon: "📏",
      title: "مهندسی سازه",
      desc: "از پی تا قاب — مهندسان ما اطمینان می‌دهند هر سازه‌ای ایمن، محکم و ماندگار است.",
    },
    {
      num: "۰۶",
      icon: "🗂️",
      title: "مدیریت پروژه",
      desc: "نظارت جامع از ابتدا تا انتها برای تحویل به‌موقع، در بودجه و دقیق.",
    },
  ];

  return (
    <section
      id="services"
      className="px-15 py-25 bg-[#3c4142] max-lg:px-7.5 max-lg:py-17.5"
    >
      <div className="flex justify-between items-end mb-15 max-lg:flex-col max-lg:items-start max-lg:gap-5">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-5">
            <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
            خدمات ما
          </div>
          <h2 className="font-IRANYekanX-medium text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-[1px] text-[#D4CFC8]">
            خدمات <span className="text-[#40E0D0]">اصلی</span>
          </h2>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 border border-[#D4CFC8]/25 hover:border-[#40E0D0] hover:text-[#40E0D0] text-[#D4CFC8] no-underline text-[13px] font-IRANYekanX-medium tracking-[2px] px-8 py-4 transition-all"
        >
          همه خدمات
        </a>
      </div>

      <div className="grid grid-cols-3 gap-0.5 max-lg:grid-cols-1">
        {services.map((s) => (
          <div
            key={s.num}
            className="service-card group bg-[#474f50] hover:bg-[#4d5557] px-9 py-11 relative overflow-hidden cursor-default border-b-[3px] border-transparent hover:border-[#40E0D0] transition-all"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[rgba(64,224,208,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="service-num-ghost font-IRANYekanX-medium text-[64px] leading-none text-[#D4CFC8]/4 absolute top-5 left-6 transition-colors select-none">
              {s.num}
            </div>
            <span className="text-[36px] mb-6 block">{s.icon}</span>
            <div className="font-condensed text-[22px] font-IRANYekanX-Bold tracking-[1px] uppercase text-[#D4CFC8] mb-3.5">
              {s.title}
            </div>
            <p className="text-[14px] text-[#8a8880] leading-[1.7] font-IRANYekanX-Regular mb-6">
              {s.desc}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[12px] font-IRANYekanX-Bold tracking-[2px] uppercase text-[#40E0D0] no-underline hover:gap-3.5 transition-all"
            >
              بیشتر →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
