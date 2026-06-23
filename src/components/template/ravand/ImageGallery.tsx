import { Camera } from "lucide-react";
import Image from "next/image";
import React from "react";

function ImageGallery() {
  return (
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
          <span className="font-IRANYekanX-Bold text-[14px]">۲۴+ عکس</span>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
