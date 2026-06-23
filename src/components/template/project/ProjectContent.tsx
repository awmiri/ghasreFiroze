import React from "react";
import ProjectBox from "./ProjectBox";

function ProjectContent() {
  const projects = [
    {
      id: 1,
      name: "گرین‌فیلد رزیدنسی",
      status: "ready",
      lat: 40.728,
      lng: -73.994,
      price: "۱۸۵,۰۰۰ دلار",
      units: "۲–۳ خوابه",
      loc: "بخش شمالی",
      sqm: "۱۲۰ متر مربع",
      room: "2 خوابه",
      label: "پیش‌فروش",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80",
        "https://images.unsplash.com/photo-1560185008-aa7f44d8a80a?w=600&q=80",
        "https://images.unsplash.com/photo-1560185121-6ed189bf02f4?w=600&q=80",
      ],
      desc: "مجتمع کاملاً تکمیل شده با دروازه‌بانی، پارک‌ها، مسیرهای پیاده‌روی و کلاب‌هاوس. آماده انتقال فوری.",
    },
    {
      id: 2,
      name: "اسکای‌لاین تاورز",
      status: "construction",
      lat: 40.748,
      lng: -73.985,
      price: "۲۴۰,۰۰۰ دلار",
      units: "۳–۴ خوابه",
      loc: "منطقه مرکزی",
      sqm: "۱۸۵ متر مربع",
      room: "3 خوابه",
      label: "پیش‌فروش",
      images: [
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
      ],
      desc: "برج‌های بلندمرتبه با ۶۰٪ پیشرفت فیزیکی. سازه تکمیل شده، کارهای داخلی در حال انجام. تحویل مورد انتظار ۲۰۲۷.",
    },
    {
      id: 3,
      name: "ریورساید هومز",
      status: "ready",
      lat: 40.739,
      lng: -73.97,
      price: "۱۶۵,۰۰۰ دلار",
      units: "۲ خوابه",
      loc: "بلوار ریورساید",
      sqm: "۹۵ متر مربع",
      room: "1 خوابه",
      label: "پیش‌فروش",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      ],
      desc: "ویلاهای آماده تحویل در کنار تفرجگاه رودخانه. واحدهای مبله نمایشی برای بازدید موجود است.",
    },
    {
      id: 4,
      name: "سانرایز هایتس",
      status: "construction",
      lat: 40.715,
      lng: -73.98,
      price: "۲۱۰,۰۰۰ دلار",
      units: "۲–۳ خوابه",
      loc: "بخش شرقی",
      sqm: "۱۴۰ متر مربع",
      room: "2 خوابه",
      label: "در حال ساخت",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
      ],
      desc: "فونداسیون و اسکلت تکمیل شده. کارهای نما و تکمیلی در حال انجام، در مسیر تحویل سال آینده.",
    },
    {
      id: 5,
      name: "میپل کورت",
      status: "upcoming",
      lat: 40.755,
      lng: -74.005,
      price: "۱۹۵,۰۰۰ دلار",
      units: "۳ خوابه",
      loc: "هیلز غربی",
      sqm: "۱۳۰ متر مربع",
      room: "2 خوابه",
      label: "در حال ساخت",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      ],
      desc: "فاز پیش‌راه‌اندازی با ثبت‌نام باز. عملیات خاک‌برداری برای سه‌ماهه آینده برنامه‌ریزی شده است.",
    },
    {
      id: 6,
      name: "پرل رزیدنسی",
      status: "ready",
      lat: 40.708,
      lng: -73.96,
      price: "۲۲۰,۰۰۰ دلار",
      units: "۳–۴ خوابه",
      loc: "پارک جنوبی",
      sqm: "۱۶۰ متر مربع",
      room: "3 خوابه",
      label: "در حال ساخت",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      ],
      desc: "به تازگی تحویل داده شده و کاملاً آماده است. باغ‌های محوطه‌سازی شده و امکانات ساکنین در جای خود قرار دارد.",
    },
    {
      id: 7,
      name: "ارکید انکلیو",
      status: "upcoming",
      lat: 40.722,
      lng: -74.012,
      price: "۱۷۵,۰۰۰ دلار",
      units: "۲ خوابه",
      loc: "جاده لیک ویو",
      sqm: "۸۸ متر مربع",
      room: "1 خوابه",
      label: "آماده تحویل",
      images: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      ],
      desc: "طرح جامع تصویب شده، آماده‌سازی سایت به زودی آغاز می‌شود. تخفیف‌های ثبت‌نام زودهنگام موجود است.",
    },
    {
      id: 8,
      name: "کریستال پارک",
      status: "construction",
      lat: 40.702,
      lng: -73.99,
      price: "۲۵۵,۰۰۰ دلار",
      units: "۳–۴ خوابه",
      loc: "منطقه کریستال",
      sqm: "۲۰۰ متر مربع",
      room: "3 خوابه",
      label: "آماده تحویل",
      images: [
        "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=600&q=80",
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      ],
      desc: "اسکلت برج به اوج رسیده. کارهای داخلی و ساخت امکانات رفاهی در حال پیشرفت است.",
    },
  ];
  return (
    <div>
      <div className="px-2 pt-2 pb-3 text-xs text-[#8a8880] font-IRANYekanX-medium tracking-wide">
        8 پروژه
      </div>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectBox {...p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

export default ProjectContent;
