// components/StoryPart.tsx
import React from "react";

function StoryPart() {
  const timelineItems = [
    {
      year: "۲۰۱۹",
      title: "آغاز",
      desc: "تاسیس در سانفرانسیسکو. اولین نسخه مریدین برای ۱۲ تیم بتا، همگی دوستان ما، عرضه شد.",
    },
    {
      year: "۲۰۲۰",
      title: "سری ای — ۱۸ میلیون دلار",
      desc: "جذب ۱۸ میلیون دلار به رهبری سکویا. رشد به ۴۰۰۰ تیم پولی. راه‌اندازی ابزار خط فرمان — ۲۰۰ هزار دانلود در هفته اول.",
    },
    {
      year: "۲۰۲۲",
      title: "مقیاس جهانی",
      desc: "گسترش به اروپا و آسیا-اقیانوسیه. ۱۰۰ هزار تیم عضو شدند. افتتاح دفاتر در لندن و سنگاپور.",
    },
    {
      year: "۲۰۲۴",
      title: "سری سی — ۲۱۰ میلیون دلار",
      desc: "سری سی ۲۱۰ میلیون دلاری با ارزش‌گذاری ۲٫۱ میلیارد دلار. راه‌اندازی مریدین هوش مصنوعی — تشخیص ناهنجاری و مقیاس‌گذاری خودکار هوشمند.",
    },
    {
      year: "۲۰۲۵",
      title: "امروز",
      desc: "۱۲,۰۰۰+ تیم، ۴۰۰ کارمند در ۸ دفتر. پردازش بیش از ۱٫۲ میلیون استقرار در روز با ۹۹٫۹۹٪ در دسترس بودن.",
    },
  ];

  return (
    <section className="py-[clamp(40px,10vw,70px)] mt-10">
      <div className="w-full max-w-300 mx-auto px-[clamp(20px,5vw,60px)]">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-sm tracking-[0.12em] font-IRANYekanX-medium text-tagsColor mb-4.5 lg:text-lg">
              <span className="block w-4.5 h-0.5 bg-tagsColor rounded-xs"></span>
              داستان ما
            </div>
            <h2 className="text-[clamp(32px,5vw,56px)] mb-4 font-IRANYekanX-Bold text-whiteTextColorMain">
              از یک گاراژ تا
              <br />
              زیرساخت جهانی
            </h2>
            <div className="mt-7 space-y-4">
              <p className="text-[17px]  leading-relaxed font-IRANYekanX-medium text-whiteTextColorPrime">
                با مشکلی شروع شد که نمی‌توانستیم نادیده بگیریم. در سال ۲۰۱۹،
                بنیان‌گذاران ما — سه مهندس ناامید از خطوط لوله CI/CD شکسته و
                زیرساخت‌های استقرار غیرقابل اعتماد — تصمیم گرفتند ابزارهایی را
                بسازند که آرزو می‌کردند وجود داشته باشند.
              </p>
              <p className="text-[17px]  leading-relaxed font-IRANYekanX-medium text-whiteTextColorPrime">
                آنچه به عنوان یک پروژه جانبی آغاز شد به یک مأموریت تبدیل شد.
                <strong className="text-tagsColor">
                  ما معتقد بودیم که تجربه توسعه‌دهنده نباید یک فکر بعدی باشد
                </strong>
                — بلکه باید خود محصول باشد.
              </p>
              <p className="text-[17px] text-whiteTextColorPrime leading-relaxed font-IRANYekanX-medium">
                امروز، مریدین زیرساخت استقرار را برای شرکت‌هایی که از
                استارتاپ‌های جسور در مرحله بذر تا شرکت‌های سهامی عام که
                میلیاردها تراکنش را پردازش می‌کنند، تأمین می‌کند.
              </p>
            </div>
          </div>

          <div>
            <div className="relative pr-8">
              <div className="absolute -right-8 top-2 bottom-0 w-0.5 bg-fillBtn/50 to-transparent rounded-full"></div>
              {timelineItems.map((item, idx) => (
                <div className="relative pb-11 last:pb-0 group" key={idx}>
                  <div className="absolute -right-17 top-1 w-3 h-3 rounded-full bg-fillBtn"></div>
                  <div className="text-[11px] text-tagsColor tracking-widest mb-1.5 font-IRANYekanX-medium">
                    {item.year}
                  </div>
                  <div className="text-lg text-whiteTextColorMain mb-1.5 font-IRANYekanX-Bold">
                    {item.title}
                  </div>
                  <p className="text-sm text-whiteTextColorPrime leading-relaxed font-IRANYekanX-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryPart;
