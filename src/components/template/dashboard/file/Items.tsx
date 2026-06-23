import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

function Items({ item }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-3">
      {item.map((img, index) => (
        <div
          key={index}
          className={`flex flex-row-reverse justify-between shadow-sm rounded-lg bg-white p-3 gap-2 hover:scale-105 transition-all`}
        >
          <Image
            src={img}
            alt="img"
            height={70}
            width={70}
            className="rounded-lg object-center w-32 h-35"
          />
          <div className="text-end flex items-start flex-col space-y-1.5">
            <p className="font-IRANYekanX-medium">اپارتمان 100 متری الهیه</p>
            <span className="text-start font-IRANYekanX-medium text-sm">
              <span className="text-black/60">وضعیت : </span>
              <span className="font-kalame-Bold text-black/75">اجاره</span>
            </span>
            <span className="font-IRANYekanX-medium text-sm">
              <span className="text-black/60"> قیمت : </span>
              <span className="font-kalame-Bold text-black/75">
                1,000,000,000 تومان
              </span>
            </span>
            <span className="font-IRANYekanX-medium flex items-center gap-1">
              <span className="text-black/60 flex items-center">
                <CiLocationOn className="size-5" />
                <span> : </span>
              </span>
              <span className="font-kalame-Bold text-black/75 text-xs">
                <span> مشهد </span>
                <span> , </span>
                <span> احمداباد </span>
              </span>
            </span>
            <span className="font-IRANYekanX-medium text-xs">
              <span className="text-black/60"> وضعیت انتشار : </span>
              <span className="font-kalame-Bold text-green-600/75">
                منتشر شده
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
