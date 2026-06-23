"use client";
import React, { useState } from "react";
import { IoArrowForward, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import SecondStep from "./EnterTheMoreInformation";
import EnterTheInformation from "./EnterTheInformation";
import EnterTheMoreInformation from "./EnterTheMoreInformation";
import { Image, LocateIcon, Phone } from "lucide-react";
import HomeLocation from "./HomeLocation";
import AdMediaUploader from "./ImageContent";
import AddSellerNumber from "./AddSellerNumber";

function MainContent() {
  const [stepUser, setStepUser] = useState(1);
  return (
    <div className="flex flex-col gap-3 h-full max-h-full overflow-hidden">
      <div className="bg-white rounded-xl p-2 flex items-center gap-4">
        <div
          className={`flex flex-col flex-1 items-center transition-all justify-center font-kalame-Medium rounded-xl p-2 gap-1 ${stepUser === 1 ? "bg-pink-600 text-white" : "bg-slate-200"}`}
        >
          <IoDocumentTextOutline size={20} />
          <h4>ثبت اطلاعات اگهی</h4>
        </div>
        <div
          className={`flex flex-col flex-1 items-center transition-all justify-center font-kalame-Medium rounded-xl p-2 gap-1 ${stepUser === 2 ? "bg-pink-600 text-white" : "bg-slate-200"}`}
        >
          <MdOutlineInfo size={20} />
          <h4>ثبت اطلاعات تکمیلی</h4>
        </div>
        <div
          className={`flex flex-col flex-1 items-center transition-all justify-center font-kalame-Medium rounded-xl p-2 gap-1 ${stepUser === 3 ? "bg-pink-600 text-white" : "bg-slate-200"}`}
        >
          <LocateIcon size={20} />
          <h4>موقعیت مکانی</h4>
        </div>
        <div
          className={`flex flex-col flex-1 items-center transition-all justify-center font-kalame-Medium rounded-xl p-2 gap-1 ${stepUser === 4 ? "bg-pink-600 text-white" : "bg-slate-200"}`}
        >
          <Image size={20} />
          <h4>گالری تصاویر</h4>
        </div>
        <div
          className={`flex flex-col flex-1 items-center transition-all justify-center font-kalame-Medium rounded-xl p-2 gap-1 ${stepUser === 5 ? "bg-pink-600 text-white" : "bg-slate-200"}`}
        >
          <Phone size={20} />
          <h4>اطلاعات تماس</h4>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-y-auto custom-scroll p-2 flex flex-col gap-4 flex-1">
        <div className="flex-1 space-y-4">
          {stepUser === 1 && (
            <EnterTheInformation nextItem={() => setStepUser(2)} />
          )}
          {stepUser === 2 && (
            <EnterTheMoreInformation nextItem={() => setStepUser(3)} />
          )}
          {stepUser === 3 && <HomeLocation nextItem={() => setStepUser(4)} />}
          {stepUser === 4 && (
            <AdMediaUploader nextItem={() => setStepUser(5)} />
          )}
          {stepUser === 5 && <AddSellerNumber />}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
