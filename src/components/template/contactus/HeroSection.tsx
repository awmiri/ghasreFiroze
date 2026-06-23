import React from "react";

function HeroSection() {
  return (
    <section className="py-20 pt-25 pb-14 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-12 items-end">
      <div>
        <p className="text-[0.7rem] font-IRANYekanX-Bold text-tagsColor mb-4 flex items-center gap-3 before:content-[''] before:w-7 before:h-px before:bg-tagsColor">
          تماس با ما
        </p>
        <h1 className="font-IRANYekanX-Regular text-[clamp(3rem,6vw,4.8rem)] leading-[1.1] text-whiteTextColorMain">
          بیایید فضای
          <br />
          <em className="italic text-tagsColor">مناسب شما را پیدا کنیم</em>
        </h1>
      </div>

      <div className="bg-[#c8c8be] self-stretch hidden md:block"></div>

      <div>
        <p className="text-[0.9rem] text-whiteTextColorPrime font-IRANYekanX-medium leading-[1.8] max-w-90">
          چه در حال خرید، فروش یا جستجو باشید — تیم ما هر روز هفته در کنار شماست
          تا شما را در هر مرحله از این مسیر راهنمایی کند.
        </p>
        <div className="mt-8 flex gap-10">
          <div>
            <p className=" text-3xl font-IRANYekanX-Regular text-whiteTextColorMain leading-none">
              ۱۴+
            </p>
            <p className="text-[0.68rem] tracking-[0.15em] font-IRANYekanX-medium text-whiteTextColorPrime mt-1">
              سال فعالیت
            </p>
          </div>
          <div>
            <p className=" text-3xl font-IRANYekanX-Regular text-whiteTextColorMain leading-none">
              ۲,۴۰۰
            </p>
            <p className="text-[0.68rem] tracking-[0.15em] font-IRANYekanX-medium  text-whiteTextColorPrime mt-1">
              خانه فروخته شده
            </p>
          </div>
          <div>
            <p className=" text-3xl font-IRANYekanX-Regular text-whiteTextColorMain leading-none">
              ۹۸٪
            </p>
            <p className="text-[0.68rem] tracking-[0.15em] font-IRANYekanX-medium  text-whiteTextColorPrime mt-1">
              رضایت مشتری
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
