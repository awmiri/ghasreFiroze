"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Bed,
  Bath,
  LayoutGrid,
  Calendar,
  Home,
  Shield,
  Building2,
  ChevronLeft,
  Phone,
  Camera,
} from "lucide-react";

const TABS = [
  { id: "overview", label: "نمای کلی" },
  { id: "details", label: "جزئیات" },
  { id: "location", label: "موقعیت" },
  { id: "media", label: "رسانه" },
];

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

const RELATED_LISTINGS = [
  {
    name: "رزیدنس سیلور اوک",
    location: "بل‌ایر، لس‌آنجلس",
    img: "/routePageAlbum/69b1235cc39f2.webp",
    beds: 3,
    baths: 3,
    area: "۳۲۰۰",
    price: "۱,۲۵۰,۰۰۰ دلار",
  },
  {
    name: "پنت‌هاوس امرالد بی",
    location: "ساحل مالیبو",
    img: "/routePageAlbum/69b1235cc39f2.webp",
    beds: 5,
    baths: 4.5,
    area: "۵۴۰۰",
    price: "۲,۸۰۰,۰۰۰ دلار",
  },
  {
    name: "لافت د هایتس",
    location: "وست هالیوود",
    img: "/routePageAlbum/69b1235cc39f2.webp",
    beds: 2,
    baths: 2,
    area: "۱۸۵۰",
    price: "۹۵۰,۰۰۰ دلار",
  },
];

// ✅ تگ‌های امکانات اضافی
const AMENITIES = [
  "استخر بی‌کران",
  "سالن سینما",
  "سیستم هوشمند",
  "آسانسور خصوصی",
  "گاراژ ۴ خودرو",
  "تراس پشت‌بام",
];

function EstateListingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen" dir="rtl">
      <div className="max-w-375 mx-auto py-10 sm:py-14">
        <div className="p-5 sm:p-8 lg:p-12 pb-12">
          {/* هدر */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <h1 className="font-IRANYekanX-Bold text-[28px] sm:text-[34px] lg:text-[40px] tracking-[0.5px] text-[#D4CFC8] mb-2">
                عمارت آمبروود
              </h1>
              <p className="flex items-center gap-1.5 text-whiteTextColorPrime text-[14px] sm:text-[15px] font-IRANYekanX-medium mb-7">
                <MapPin className="size-4 text-[#40E0D0] shrink-0" />
                خیابان آمبروود، پلاک ۱۲۰۴، بورلی هیلز
              </p>
            </div>
          </div>

          {/* گالری تصاویر */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.78fr_0.78fr] grid-rows-1 lg:grid-rows-2 gap-3.5 mb-9 h-auto lg:h-105">
            <div className="lg:row-span-2 rounded-2xl overflow-hidden relative h-56 sm:h-64 lg:h-full">
              <Image
                src="/routePageAlbum/69b1235cc39f2.webp"
                alt="نمای بیرونی عمارت با استخر در غروب"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-40 sm:h-45 lg:h-full">
              <Image
                src="/routePageAlbum/69b1235cc39f2.webp"
                alt="نشیمن مدرن"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-40 sm:h-45 lg:h-full">
              <Image
                src="/routePageAlbum/69b1235cc39f2.webp"
                alt="آشپزخانه مرمری"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-40 sm:h-45 lg:h-full">
              <Image
                src="/routePageAlbum/69b1235cc39f2.webp"
                alt="اتاق خواب با چشم‌انداز شهر"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-40 sm:h-45 lg:h-full group cursor-pointer">
              <Image
                src="/routePageAlbum/69b1235cc39f2.webp"
                alt="سرویس بهداشتی لوکس"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-mainBgColor/70 flex flex-col items-center justify-center gap-1.5 text-[#D4CFC8] backdrop-blur-[2px]">
                <Camera className="size-5.5" />
                <span className="font-IRANYekanX-Bold text-[14px]">
                  ۲۴+ عکس
                </span>
              </div>
            </div>
          </div>

          {/* تب‌ها */}
          <div className="flex gap-8 border-b border-[#D4CFC8]/[0.07] mb-7 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`bg-transparent border-0 font-IRANYekanX-Bold text-[14px] sm:text-[15px] pb-3.5 cursor-pointer border-b-[3px] whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-[#40E0D0] border-[#40E0D0]"
                    : "text-whiteTextColorPrime border-transparent hover:text-[#D4CFC8]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* محتوای تب‌ها */}
          <div className="mb-9">
            {activeTab === "overview" && (
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
                      عمارت آمبروود در دل تپه‌های مرتفع و معتبر بورلی هیلز قرار
                      گرفته و نمونه‌ای بی‌نظیر از معماری مدرن است. این ویلا که
                      در سال ۱۴۰۱ ساخته شده، ۳۸۵ متر مربع فضای زندگی شیک را با
                      تجربه‌ای یکپارچه از فضای داخلی و بیرونی و سیستم هوشمندسازی
                      پیشرفته ترکیب می‌کند.
                    </p>
                    <p className="text-[#D4CFC8]/75 text-[15px] sm:text-[15.5px] leading-[1.8] font-IRANYekanX-Regular">
                      طراحی فضای باز با سقف‌های ۳.۵ متری، مرمر وارداتی ایتالیایی
                      و کابینت‌های اختصاصی چوب بلوط سفید همراه است. دیوارهای
                      شیشه‌ای از کف تا سقف در جیب‌های پنهان جمع می‌شوند و استخر
                      بی‌کران را با چشم‌انداز خط آسمان لس‌آنجلس به نمایش
                      می‌گذارند.
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
            )}

            {activeTab === "details" && (
              <div>
                <h3 className="font-IRANYekanX-Bold text-[#D4CFC8] text-lg mb-4">
                  امکانات و ویژگی‌ها
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {AMENITIES.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[#D4CFC8]/80 font-IRANYekanX-Regular"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#40E0D0]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "location" && (
              <div className="bg-mainBgColor/50 rounded-2xl h-80 flex items-center justify-center text-[#8a8880]">
                <div className="text-center">
                  <MapPin className="size-10 mx-auto mb-2 text-[#40E0D0]" />
                  <p>نقشه تعاملی موقعیت ملک</p>
                  <p className="text-sm mt-1">
                    خیابان آمبروود، پلاک ۱۲۰۴، بورلی هیلز
                  </p>
                </div>
              </div>
            )}

            {activeTab === "media" && (
              <div>
                <h3 className="font-IRANYekanX-Bold text-[#D4CFC8] text-lg mb-4">
                  ویدئو و تور مجازی
                </h3>
                <div className="bg-mainBgColor/50 rounded-2xl h-56 flex items-center justify-center text-whiteTextColorPrime">
                  <div className="text-center">
                    <Camera className="size-10 mx-auto mb-2 text-[#40E0D0]" />
                    <p>تور مجازی ۳۶۰ درجه</p>
                    <p className="text-sm mt-1">برای مشاهده کلیک کنید</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* مجموعه‌های مرتبط */}
          <div className="flex items-end justify-between gap-3 flex-wrap mb-6">
            <div>
              <h2 className="font-IRANYekanX-Bold text-[20px] sm:text-[22px] text-[#D4CFC8] mb-1">
                مجموعه‌های مرتبط
              </h2>
              <p className="text-whiteTextColorPrime text-[14px] sm:text-[14.5px] font-IRANYekanX-Regular">
                املاک مشابه منتخب
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 text-[#40E0D0] hover:text-[#2ecfc0] font-IRANYekanX-Bold text-[14px] sm:text-[14.5px] no-underline transition-colors whitespace-nowrap"
            >
              مشاهده همه آگهی‌ها
              <ChevronLeft className="size-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RELATED_LISTINGS.map((listing) => (
              <div
                key={listing.name}
                className="border border-[#D4CFC8]/[0.07] rounded-2xl overflow-hidden bg-mainBgColor hover:border-[#40E0D0] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_-10px_#40E0D0]/20"
              >
                <div className="relative h-42.5">
                  <Image
                    src={listing.img}
                    alt={listing.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-[#40E0D0] text-mainBgColor text-[11.5px] font-IRANYekanX-Bold px-3 py-1.5 rounded-full">
                    ویژه
                  </span>
                </div>
                <div className="p-3.5 sm:p-4">
                  <h3 className="font-IRANYekanX-Bold text-[16px] text-[#D4CFC8] mb-1.5">
                    {listing.name}
                  </h3>
                  <p className="flex items-center gap-1.5 text-whiteTextColorPrime text-[13px] font-IRANYekanX-Regular mb-3">
                    <MapPin className="size-3.5 text-[#40E0D0] shrink-0" />
                    {listing.location}
                  </p>
                  <hr className="border-0 border-t border-[#D4CFC8]/[0.07] mb-3" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#D4CFC8] text-[12.5px] font-IRANYekanX-Bold">
                      <span className="flex items-center gap-1">
                        <Bed className="size-3.5 text-[#40E0D0]" />{" "}
                        {listing.beds}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="size-3.5 text-[#40E0D0]" />{" "}
                        {listing.baths}
                      </span>
                      <span className="flex items-center gap-1">
                        <LayoutGrid className="size-3.5 text-[#40E0D0]" />{" "}
                        {listing.area}
                      </span>
                    </div>
                    <div className="text-[#40E0D0] font-IRANYekanX-Bold text-[15px] whitespace-nowrap">
                      {listing.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstateListingPage;
