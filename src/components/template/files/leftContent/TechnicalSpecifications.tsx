import React from "react";

function TechnicalSpecifications() {
  const specifications = [
    { label: "مساحت", value: "۴۸۰ متر مربع" },
    { label: "سال ساخت", value: "۱۴۰۲" },
    { label: "تعداد طبقات", value: "۴۵" },
    { label: "انباری", value: "دارد (۲۴ متر مربع)" },
    { label: "طبقه", value: "پنت‌هاوس (۴۵ام)" },
    { label: "خط تلفن", value: "فیبر نوری" },
    { label: "جهت‌گیری", value: "شمال شرقی" },
    { label: "اتاق خواب", value: "۴ عدد (همگی سرویس اختصاصی)" },
    { label: "پارکینگ", value: "۳ جای رزرو" },
    { label: "سرویس بهداشتی", value: "۵/۵ عدد" },
    { label: "آسانسور", value: "خصوصی و فوق‌سریع" },
    { label: "نوع سند", value: "مالکیت آزاد" },
  ];

  const mid = Math.ceil(specifications.length / 2);

  const rightColumn = specifications.slice(0, mid);
  const leftColumn = specifications.slice(mid);
  return (
    <div>
      <h2
        className="text-[15px] font-IRANYekanX-Bold mb-4"
        style={{ color: "#40e0d0" }}
      >
        مشخصات فنی
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        {/* ستون اول */}
        <div>
          {rightColumn.map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-3 border-b"
              style={{ borderColor: "#3c4142" }}
            >
              <span
                className="text-sm font-IRANYekanX-Bold"
                style={{ color: "#8a8880" }}
              >
                {item.label}
              </span>

              <span
                className="text-sm font-IRANYekanX-medium"
                style={{ color: "#d4cfc8" }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* ستون دوم */}
        <div>
          {leftColumn.map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-3 border-b"
              style={{ borderColor: "#3c4142" }}
            >
              <span
                className="text-sm font-IRANYekanX-Bold"
                style={{ color: "#8a8880" }}
              >
                {item.label}
              </span>

              <span
                className="text-sm font-IRANYekanX-medium"
                style={{ color: "#d4cfc8" }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnicalSpecifications;
