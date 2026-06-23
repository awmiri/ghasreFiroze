"use client";
import { ToolsRowExpand } from "@/utils/tools/ui/row_expand";
import ToolsInputText1 from "@/utils/tools/ui/ToolsInputText";
import { ImageDownIcon } from "lucide-react";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
interface EnterTheMoreInformationProp {
  nextItem: () => void;
}

function HomeLocation({ nextItem }: EnterTheMoreInformationProp) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  return (
    <div className="w-full space-y-3">
      <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm space-y-3">
        <h4 className="text-lg font-IRANYekanX-Bold text-right ">ثبت لوکیشن</h4>

        <ToolsRowExpand>
          <ToolsInputText1
            type="text"
            title="استان"
            value={country}
            onChange={(e) => setCountry(e)}
          />
          <ToolsInputText1
            type="text"
            title="شهر"
            value={city}
            onChange={(e) => setCity(e)}
          />
          <ToolsInputText1
            type="text"
            title=" نام محله یا خیابون"
            value={street}
            onChange={(e) => setStreet(e)}
          />
        </ToolsRowExpand>

        <div className="pt-3 overflow-hidden">
          <textarea
            className="w-full bg-slate-200 h-30 p-2 rounded-2xl border-0 outline-0"
            placeholder="ادرس کامل"
            name=""
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            id=""
          ></textarea>
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm space-y-3">
        <h4 className="text-lg font-IRANYekanX-Bold text-right ">
          انتخاب از روی نقشه
        </h4>
        <div className="w-full bg-black/50 text-white h-35 rounded-2xl flex flex-col items-center justify-center">
          <ImageDownIcon />
          <p>نقشه</p>
        </div>
      </div>
      <button
        onClick={nextItem}
        className="bg-blue-500 group cursor-pointer transition-all hover:bg-blue-600 text-white p-1.5 w-full rounded-xl font-kalame-Medium flex items-center justify-center relative h-11"
      >
        <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
          ثبت اطلاعات اگهی
        </p>

        <IoArrowForward
          size={25}
          className="transition-all rotate-180 duration-300 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </button>
    </div>
  );
}

export default HomeLocation;
