import React from "react";

function EmploysContent() {
  const employees = [
    {
      initials: "ن.ب",
      name: "نینا بهرامی",
      dept: "مهندسی",
      desc: "توسعه‌دهنده فول‌استک با تمرکز بر عملکرد و معماری مقیاس‌پذیر.",
      tags: ["React", "Node.js"],
      deptColor: "dept-eng",
    },
    {
      initials: "ا.و",
      name: "عمران وفایی",
      dept: "طراحی",
      desc: "طراح محصول با رویکرد کاربرمحور و خلق تجربه‌های دیجیتال تمیز.",
      tags: ["Figma", "UX"],
      deptColor: "dept-design",
    },
    {
      initials: "ل.س",
      name: "لیلا سعیدی",
      dept: "بازاریابی",
      desc: "استراتژی محتوا، حضور در شبکه‌های اجتماعی و داستان‌سرایی برند.",
      tags: ["تولید محتوا", "برندینگ"],
      deptColor: "dept-mkt",
    },
    {
      initials: "د.پ",
      name: "دانیال پوراحمد",
      dept: "محصول",
      desc: "برنامه‌ریزی نقشه راه، مدیریت اسپرینت و هماهنگی ذی‌نفعان.",
      tags: ["Agile", "نقشه راه"],
      deptColor: "dept-prod",
    },
    {
      initials: "ف.گ",
      name: "فاطمه گلشنی",
      dept: "داده",
      desc: "تبدیل اعداد خام به بینش‌های روشن و قابل اجرا برای کسب‌وکار.",
      tags: ["Python", "SQL"],
      deptColor: "dept-data",
    },
    {
      initials: "ط.ح",
      name: "طاها حسینی",
      dept: "پشتیبانی",
      desc: "موفقیت مشتری، فرآیندهای خوش‌آمدگویی و حفظ رضایت کاربران.",
      tags: ["تجربه مشتری", "مستندات"],
      deptColor: "dept-sup",
    },
    {
      initials: "ج.ک",
      name: "جسیکا کریمی",
      dept: "مهندسی",
      desc: "مهندس بک‌اند متخصص در API، میکروسرویس‌ها و دواپس.",
      tags: ["Go", "Docker"],
      deptColor: "dept-eng",
    },
    {
      initials: "ر.م",
      name: "رویا معینی",
      dept: "منابع انسانی",
      desc: "استخدام، ساخت فرهنگ سازمانی و اطمینان از پیشرفت تیم.",
      tags: ["HR", "فرهنگ"],
      deptColor: "dept-hr",
    },
  ];

  const getDeptClass = (dept: string) => {
    const map: Record<string, string> = {
      فنی: "bg-fillBtn/10 text-fillBtn border-fillBtn/20",
      طراحی: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      بازاریابی: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      مالی: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };
    return (
      map[dept] ??
      "bg-white/[0.05] text-whiteTextColorPrime border-white/[0.07]"
    );
  };
  return (
    <div
      className="animate-fadeUp opacity-0"
      style={{ animation: "fadeUp 0.7s 0.35s ease forwards" }}
    >
      <div className="flex items-center gap-3 text-[11px] font-IRANYekanX-Bold tracking-[0.16em] text-tagsColor mb-5">
        <span className="flex-1 h-px bg-tagsColor" /> اعضای تیم{" "}
        <span className="flex-1 h-px bg-tagsColor" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {employees.map((emp, idx) => (
          <div
            key={idx}
            className="bg-CardBgColor border border-white/[0.07] rounded-xl p-5 transition-all duration-200 hover:border-white/20 hover:shadow-center hover:shadow-fillBtn/15 hover:-translate-y-0.5"
          >
            {/* آواتار */}
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-IRANYekanX-Bold text-whiteTextColorPrime text-sm border border-white/[0.07] mb-3">
              {emp.initials}
            </div>

            {/* اسم */}
            <div className="font-IRANYekanX-Bold text-whiteTextColorMain text-base">
              {emp.name}
            </div>

            {/* بج دپارتمان */}
            <span
              className={`inline-block text-[10px] font-IRANYekanX-Bold tracking-wide uppercase px-2.5 py-1 rounded-full border mb-3 ${getDeptClass(emp.dept)}`}
            >
              {emp.dept}
            </span>

            {/* توضیح */}
            <div className="text-whiteTextColorPrime text-[12.5px] leading-relaxed font-IRANYekanX-Regular mb-3">
              {emp.desc}
            </div>

            {/* تگ‌ها */}
            <div className="flex flex-wrap gap-1.5">
              {emp.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-[11px] font-IRANYekanX-medium px-2 py-0.5 rounded-full bg-white/5 text-whiteTextColorPrime border border-white/[0.07]"
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

export default EmploysContent;
