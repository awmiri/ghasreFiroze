import { Bath, Car, Cctv, Check, PhoneCall, Warehouse } from "lucide-react";
import React from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdElevator } from "react-icons/md";

function MoreInfoOfProduct() {
  return (
    <div className="bg-white mt-5 rounded-xl p-4 divide-slate-300 space-y-4">
      <div dir="rtl" className="space-y-5 grid grid-cols-2 gap-5 items-start">
        <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2 flex items-center justify-between font-IRANYekanX-medium text-xs sm:text-[15px] rounded-lg">
          <span>متراژ</span>
          <span className="text-black/50 text-[11px] sm:text-sm">300 متر</span>
        </div>
        <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2 flex items-center justify-between font-IRANYekanX-medium text-xs sm:text-[15px] rounded-lg">
          <span>تعداد کل طبقات</span>
          <span className="text-black/50 text-[11px] sm:text-sm"> 22 طبقه</span>
        </div>
        <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2 flex items-center justify-between font-IRANYekanX-medium text-xs sm:text-[15px] rounded-lg">
          <span>طبقه</span>
          <span className="text-black/50 text-[11px] sm:text-sm">5</span>
        </div>
        <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2 flex items-center justify-between font-IRANYekanX-medium text-xs sm:text-[15px] rounded-lg">
          <span>جهت</span>
          <span className="text-black/50 text-[11px] sm:text-sm">شمالی</span>
        </div>
        <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2 flex items-center justify-between font-IRANYekanX-medium text-xs sm:text-[15px] rounded-lg">
          <span>پارکینگ</span>
          <span className="text-black/50 text-[11px] sm:text-sm">دارد</span>
        </div>
        <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2 flex items-center justify-between font-IRANYekanX-medium text-xs sm:text-[15px] rounded-lg">
          <span>آسانسور</span>
          <span className="text-black/50 text-[11px] sm:text-sm">ندارد</span>
        </div>
        <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2 flex items-center justify-between font-IRANYekanX-medium text-xs sm:text-[15px] rounded-lg">
          <span>سال ساخت</span>
          <span className="text-black/50 text-[11px] sm:text-sm">1400</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-start">
        <h2 className=" mb-3 font-IRANYekanX-medium text-black/70">ویژگی ها</h2>
        <div className="max-md:grid grid-cols-2 query496:grid-cols-3 sm:grid-cols-4 md:flex flex-wrap gap-3">
          <div className="bg-slate-50 p-3 rounded-lg border border-green-600 text-green-600 flex items-center justify-between  min-w-37.5 ">
            <div className="flex items-center gap-2 ">
              <Car size={18} />
              <p className="text-sm">پارکینگ</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
              <Check size={14} />
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-green-600 text-green-600 flex items-center justify-between  min-w-37.5 ">
            <div className="flex items-center gap-2 ">
              <Bath size={18} />
              <p className="text-sm">حمام</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
              <Check size={14} />
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-red-600 text-red-600 flex items-center justify-between  min-w-37.5 ">
            <div className="flex items-center gap-2 ">
              <FaSwimmingPool size={18} />
              <p className="text-sm">استخر</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center">
              <FaXmark size={14} />
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-red-600 text-red-600 flex items-center justify-between  min-w-37.5 ">
            <div className="flex items-center gap-2 ">
              <Cctv size={18} />
              <p className="text-sm">دوربین</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center">
              <FaXmark size={14} />
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-green-600 text-green-600 flex items-center justify-between min-w-37.5 ">
            <div className="flex items-center gap-2 ">
              <Warehouse size={18} />
              <p className="text-sm">انباری</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
              <Check size={14} />
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-green-600 text-green-600 flex items-center justify-between min-w-37.5 ">
            <div className="flex items-center gap-2 ">
              <MdElevator size={18} />
              <p className="text-sm">آسانسور</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
              <Check size={14} />
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-green-600 text-green-600 flex items-center justify-between min-w-37.5 ">
            <div className="flex items-center gap-2 ">
              <PhoneCall size={18} />
              <p className="text-sm">خط تلفن</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
              <Check size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoOfProduct;
