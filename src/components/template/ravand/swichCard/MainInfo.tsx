import {
  Bath,
  Bed,
  Building2,
  Calendar,
  Home,
  LayoutGrid,
  Phone,
  Shield,
} from "lucide-react";
import React from "react";

function MainInfo() {
  const INFO_ITEMS = [
    { icon: Bed, label: "تعداد خواب", value: "۴" },
    { icon: Bath, label: "سرویس بهداشتی", value: "۳.۵" },
    { icon: LayoutGrid, label: "متراژ بنا", value: "۳۸۵ متر مربع" },
    { icon: Building2, label: "نقشه ساختمان", value: "فضای باز" },
    { icon: Calendar, label: "سال ساخت", value: "۱۴۰۱" },
    { icon: Home, label: "نوع ملک", value: "ویلای مدرن" },
    { icon: Shield, label: "امنیت", value: "نگهبانی ۲۴ ساعته" },
    { icon: Building2, label: "شارژ ساختمان", value: "ندارد" },
  ];
  return (
    <>
      {/* کارت‌های اطلاعات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {INFO_ITEMS.map((item) => (
          <div
            key={item.label}
            className="border border-[#D4CFC8]/[0.07] rounded-xl p-4 flex items-start gap-3 hover:border-[#40E0D0]/30 transition-colors"
          >
            <div className="shrink-0 w-9.5 h-9.5 rounded-[9px] bg-[#40E0D0]/15 flex items-center justify-center text-[#40E0D0]">
              <item.icon className="size-4.5" />
            </div>
            <div>
              <div className="text-[11px] font-IRANYekanX-Bold tracking-[0.6px] text-whiteTextColorPrime mb-1">
                {item.label}
              </div>
              <div className="text-[16px] font-IRANYekanX-Bold text-[#D4CFC8]">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* توضیحات + نماینده */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start mb-8">
        <div>
          <h2 className="font-IRANYekanX-Bold text-[20px] sm:text-[22px] text-[#D4CFC8] mb-4">
            توضیحات
          </h2>
          <p className="text-[#D4CFC8]/75 text-[15px] sm:text-[15.5px] leading-[1.8] font-IRANYekanX-Regular mb-4">
            عمارت آمبروود در دل تپه‌های مرتفع و معتبر بورلی هیلز قرار گرفته و
            نمونه‌ای بی‌نظیر از معماری مدرن است. این ویلا که در سال ۱۴۰۱ ساخته
            شده، ۳۸۵ متر مربع فضای زندگی شیک را با تجربه‌ای یکپارچه از فضای
            داخلی و بیرونی و سیستم هوشمندسازی پیشرفته ترکیب می‌کند.
          </p>
          <p className="text-[#D4CFC8]/75 text-[15px] sm:text-[15.5px] leading-[1.8] font-IRANYekanX-Regular">
            طراحی فضای باز با سقف‌های ۳.۵ متری، مرمر وارداتی ایتالیایی و
            کابینت‌های اختصاصی چوب بلوط سفید همراه است. دیوارهای شیشه‌ای از کف
            تا سقف در جیب‌های پنهان جمع می‌شوند و استخر بی‌کران را با چشم‌انداز
            خط آسمان لس‌آنجلس به نمایش می‌گذارند.
          </p>
        </div>

        <div className="bg-linear-to-br from-[#40E0D0] to-[#2ecfc0] rounded-xl p-4 flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/120?img=33"
            alt="مارکوس وین"
            className="w-11.5 h-11.5 rounded-full object-cover border-2 border-mainBgColor/30 shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="font-IRANYekanX-Bold text-[15px] text-mainBgColor">
              مارکوس وین
            </div>
            <div className="text-[12.5px] text-mainBgColor/70 font-IRANYekanX-Regular">
              نماینده اصلی فروش
            </div>
          </div>
          <a
            href="tel:+989330296968"
            className="shrink-0 w-9.5 h-9.5 rounded-full bg-mainBgColor text-[#40E0D0] flex items-center justify-center hover:bg-[#2f3334] transition-colors"
          >
            <Phone className="size-4" />
          </a>
        </div>
      </div>
    </>
  );
}

export default MainInfo;
