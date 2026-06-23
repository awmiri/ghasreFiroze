import { InfoIcon, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import Swal from "sweetalert2";

function TableCreate({ item }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
        <thead className="bg-gray-100 border-b">
          <tr className="text-right font-IRANYekanX-medium text-sm text-black/70">
            <th className="px-4 py-3">تاریخ تماس</th>
            <th className="px-4 py-3">نام‌ونام‌خانوادگی</th>
            <th className="px-4 py-3">شماره تماس</th>
            <th className="px-4 py-3">نوع درخواست</th>
            <th className="px-4 py-3">نوع مخاطب</th>
            <th className="px-4 py-3">توضیحات</th>
            <th className="px-4 py-3">وضعیت‌ پیگیری</th>
            <th className="px-4 py-3">ویرایش</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-300">
          {item.map((index) => (
            <tr key={index} className={`hover:bg-gray-50 transition-all`}>
              <td className="px-4 py-3 flex items-center font-IRANYekanX-medium text-[13px] gap-1 text-black/50">
                <FiCalendar className="w-4 h-4" />
                <span>۱۴۰۴/۰۳/۰۴</span>
              </td>
              <td className="px-4 py-3 font-IRANYekanX-medium text-sm">
                امیرعلی هادی زاده
              </td>
              <td className="px-4 py-3 font-IRANYekanX-medium text-sm text-black/75">
                09330296968
              </td>
              <td className="px-4 py-3 font-IRANYekanX-medium text-sm">
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md text-xs font-medium">
                  {" "}
                  خریدار{" "}
                </span>
              </td>
              <td className="px-4 py-3 font-IRANYekanX-medium text-sm">
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md text-xs font-medium">
                  {" "}
                  خریدار{" "}
                </span>
              </td>
              <td className="px-4 py-3">
                <InfoIcon
                  className="cursor-pointer hover:text-black/50 transition"
                  onClick={() => {
                    Swal.fire({
                      text: "این یک متن تستی فارسی است.",
                      icon: "info",
                      confirmButtonText: "باشه",
                      confirmButtonColor: "#3085d6",
                    });
                  }}
                />
              </td>
              <td className="px-4 py-3">
                <span className="font-IRANYekanX-medium text-xs">
                  <span className="font-kalame-Bold text-green-600/75">
                    منتشر شده
                  </span>
                </span>
              </td>
              <td className="px-4 py-3 flex">
                <Link
                  href={"/claimantment/edit"}
                  className="bg-blue-400 hover:bg-blue-500/50 cursor-pointer block p-1.5 text-white rounded-full"
                >
                  <Pen size={18} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCreate;
