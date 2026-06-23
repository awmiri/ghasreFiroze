import React from "react";

function Tesrimonials() {
  const testimonials = [
    {
      text: "آیرون‌کلد برج اداری ۱۲ طبقه ما را ۳ هفته زودتر از موعد و زیر بودجه تحویل داد. کیفیت کار استثنایی است — به هیچ شرکت دیگری اعتماد نمی‌کردم.",
      name: "جیمز هارتلی",
      role: "مدیرعامل، گروه هارتلی",
      img: "https://i.pravatar.cc/150?img=11",
    },
    {
      text: "تیم پروژه مجتمع صنعتی ما را از مجوز تا تحویل مدیریت کرد. ارتباطات بی‌نقص بود. هر دغدغه‌ای همان روز حل می‌شد.",
      name: "سارا چن",
      role: "مدیر عملیات، لجستیک پاسیفیک",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      text: "ویلای لوکس ما دقیقاً طبق هر مشخصه‌ای که رویایش را داشتیم ساخته شد. صنعتگری بی‌نظیر است. آیرون‌کلد رویای خانوادگی ما را به واقعیت تبدیل کرد.",
      name: "مایکل ریوز",
      role: "مشتری خصوصی",
      img: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <section
      id="testimonials"
      className="px-15 py-25 bg-[#474f50] max-lg:px-7.5 max-lg:py-17.5"
    >
      <div className="text-center mb-15">
        <div className="inline-flex items-center gap-2.5 text-[11px] font-IRANYekanX-Bold tracking-[3px] uppercase text-[#40E0D0] mb-5">
          <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
          نظرات مشتریان
        </div>
        <h2 className="font-IRANYekanX-medium text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-[1px] text-[#D4CFC8]">
          مشتریان چه <span className="text-[#40E0D0]">می‌گویند</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="reveal bg-[#3c4142] border border-[#D4CFC8]/[0.07] hover:border-[#40E0D0] p-9 relative transition-all hover:-translate-y-1.5"
          >
            <div className="font-bebas text-[80px] leading-[0.6] text-[#40E0D0] opacity-30 mb-4">
              "
            </div>
            <p className="text-[15px] text-[#D4CFC8] leading-[1.8] mb-7 italic font-IRANYekanX-Regular">
              {t.text}
            </p>
            <div className="flex items-center gap-3.5">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#40E0D0]"
              />
              <div>
                <div className="text-[#40E0D0] text-[12px] tracking-[2px] mb-0.5">
                  ★★★★★
                </div>
                <div className="text-[14px] font-IRANYekanX-Bold tracking-[1px] uppercase text-[#D4CFC8]">
                  {t.name}
                </div>
                <div className="text-[12px] text-[#8a8880] font-IRANYekanX-Regular">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tesrimonials;
