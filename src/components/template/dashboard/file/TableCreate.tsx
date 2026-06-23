import { situations } from "@/utils/constantWord";
import { LocateFixed, Table } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

function TableCreate({ item }) {
  return (
    <div className="overflow-hidden mt-3">
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-gray-100 border-b">
          <tr className="text-right font-IRANYekanX-medium text-sm text-black/70">
            <th className="px-4 py-3">تصویر</th>
            <th className="px-4 py-3">آدرس / نام ملک</th>
            <th className="px-4 py-3">وضعیت</th>
            <th className="px-4 py-3">قیمت (تومان)</th>
            <th className="px-4 py-3">موقعیت</th>
            <th className="px-4 py-3">وضعیت انتشار</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-300">
          {item.map((img, index) => (
            <tr key={index} className={`hover:bg-gray-50 transition-all `}>
              {/* ستون تصویر */}
              <td className="px-4 py-3">
                <Image
                  src={img}
                  alt="img"
                  width={70}
                  height={70}
                  className="rounded-lg object-cover w-20 h-20"
                />
              </td>

              {/* ستون عنوان ملک */}
              <td className="px-4 py-3 font-IRANYekanX-medium">
                آپارتمان ۱۰۰ متری الهیه
              </td>

              {/* ستون وضعیت (اجاره/فروش) */}
              <td className="px-4 py-3 font-IRANYekanX-medium text-sm">
                <span className="font-kalame-Bold text-black/75">اجاره</span>
              </td>

              {/* ستون قیمت */}
              <td className="px-4 py-3 font-IRANYekanX-medium text-sm">
                <span className="font-kalame-Bold text-black/75">
                  ۱,۰۰۰,۰۰۰,۰۰۰ تومان
                </span>
              </td>

              {/* ستون موقعیت (مشهد، احمدآباد) */}
              <td className="px-4 py-3">
                <span className="font-IRANYekanX-medium flex items-center gap-1 text-xs">
                  <CiLocationOn className="size-4 text-black/60" />
                  <span className="font-kalame-Bold text-black/75">
                    مشهد، احمدآباد
                  </span>
                </span>
              </td>

              {/* ستون وضعیت انتشار */}
              <td className="px-4 py-3">
                <span className="font-IRANYekanX-medium text-xs">
                  <span className="font-kalame-Bold text-green-600/75">
                    منتشر شده
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCreate;
