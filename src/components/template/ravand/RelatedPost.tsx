import { Bath, Bed, ChevronLeft, LayoutGrid, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import RelatedCard from "./RelatedCard";

function RelatedPost() {
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
  return (
    <div>
      <div className="flex items-end justify-between gap-3 flex-wrap mb-6">
        <div>
          <h2 className="font-IRANYekanX-Bold text-[20px] sm:text-[22px] text-[#D4CFC8] mb-1">
            مجموعه‌های مرتبط
          </h2>
          <p className="text-whiteTextColorPrime text-[14px] sm:text-[14.5px] font-IRANYekanX-Regular">
            فایل های این مجموعه
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
        {RELATED_LISTINGS.map((listing, index) => (
          <RelatedCard listing={listing} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RelatedPost;
