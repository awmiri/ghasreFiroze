import React from "react";

function AboutInHome() {
  return (
    <section
      id="about"
      className="grid grid-cols-2 gap-20  px-15 py-25 bg-[#444e4f] max-lg:grid-cols-1 max-lg:px-7.5 max-lg:py-15"
    >
      <div className="relative reveal max-lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
          alt="درباره ما"
          className="w-full aspect-4/5 object-cover brightness-75"
        />
        <div className="absolute top-6 right-6 -left-6 -bottom-6 border-2 border-[#40E0D0] -z-10" />
        <div
          className="absolute -bottom-5 left-7.5 bg-[#40E0D0] px-7 py-5"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)",
          }}
        >
          <div className="font-IRANYekanX-medium text-[52px] leading-none text-[#3c4142]">
            ۲۵
          </div>
          <div className="text-[11px] tracking-[2px] font-IRANYekanX-medium text-[#3c4142]/80">
            سال
            <br />
            تجربه
          </div>
        </div>
      </div>

      <div className="reveal">
        <div className="flex items-center gap-2.5 text-[11px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-5">
          <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
          ما کی هستیم
        </div>
        <h2 className="font-IRANYekanX-medium text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-[1px] text-[#D4CFC8] mb-5">
          ساخت با <span className="text-[#40E0D0]">هدف</span>
          <br />
          از سال ۱۳۷۷
        </h2>
        <p className="text-[16px] text-[#8a8880] leading-[1.8] max-w-140 font-IRANYekanX-Regular">
          شرکت ساختمانی آیرون‌کلد بیش از دو دهه است که چشم‌اندازها و جوامع را
          متحول می‌سازد. ما مهندسی پیشرفته را با صنعتگری بی‌نظیر ترکیب می‌کنیم.
        </p>
        <div className="grid grid-cols-2 gap-5 mt-9 max-sm:grid-cols-1">
          {[
            {
              icon: "🏗️",
              title: "تیم متخصص",
              desc: "بیش از ۲۰۰ مهندس، معمار و تکنسین گواهی‌دار.",
            },
            {
              icon: "🛡️",
              title: "ایمنی اول",
              desc: "پروتکل‌های ایمنی بدون سازش در هر پروژه.",
            },
            {
              icon: "📐",
              title: "ساخت دقیق",
              desc: "فرآیندهای ISO برای کیفیت مستمر.",
            },
            {
              icon: "🌿",
              title: "پایدار",
              desc: "روش‌های ساخت سبز سازگار با LEED.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 bg-[#D4CFC8]/5 border border-[#D4CFC8]/[0.07] p-4.5"
            >
              <div className="w-9 h-9 bg-[#40E0D0] flex items-center justify-center shrink-0 text-base">
                {f.icon}
              </div>
              <div>
                <div className="text-[13px] font-IRANYekanX-Bold tracking-[1px] uppercase text-[#D4CFC8] mb-1">
                  {f.title}
                </div>
                <div className="text-[12px] text-[#8a8880] leading-normal font-IRANYekanX-Regular">
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutInHome;
