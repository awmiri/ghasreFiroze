import { Calendar, Database, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FiCalendar } from "react-icons/fi";

function ItemBox() {
  return (
    <div className="bg-white p-2 rounded-xl flex flex-col space-y-2 font-IRANYekanX-medium text-sm shadow-sm hover:scale-102 transition-all">
      <div className="flex items-center justify-between border-b border-b-slate-300 pb-2">
        <div className="flex items-center gap-1.5 ">
          <FiCalendar className="w-4 h-4" />
          <span>۱۴۰۴/۰۳/۰۴</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="p-1.5 px-2 bg-green-500 rounded-xl text-white text-xs">
            {" "}
            پیگیری شده{" "}
          </span>
          <Link
            href={"/claimantment/edit"}
            className="bg-blue-400 hover:bg-blue-500/50 cursor-pointer block p-1.5 text-white rounded-full"
          >
            <Pen size={18} />
          </Link>
        </div>
      </div>
      <span>
        <span>شماره تلفن : </span>
        <span> 09330296968 </span>
      </span>
      <span>
        <span>نام و نام‌خانوادگی : </span>
        <span> امیرعلی هادی زاده </span>
      </span>
      <div className="flex items-center justify-between">
        <span>
          <span>نوع درخواست: </span>
          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md text-xs font-medium">
            {" "}
            خریدار{" "}
          </span>
        </span>
        <span>
          <span>نوع مخاطب: </span>
          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md text-xs font-medium">
            {" "}
            مشاور املاک{" "}
          </span>
        </span>
      </div>
      <span className="flex flex-col gap-2">
        <span>توضیحات : </span>
        <span className="p-2 bg-slate-200 rounded-lg">
          {" "}
          خریدار خریدار خریدار خریدار خریدار خریدار خریدار{" "}
        </span>
      </span>
    </div>
  );
}

export default ItemBox;
