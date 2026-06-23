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
          {stepUser === 1 && <EnterTheInformation />}
          {stepUser === 2 && <EnterTheMoreInformation />}
          {stepUser === 3 && <HomeLocation />}
          {stepUser === 4 && <AdMediaUploader />}
          {stepUser === 5 && <AddSellerNumber />}
        </div>
        <button
          className="bg-blue-500 group cursor-pointer transition-all hover:bg-blue-600 text-white p-1.5 w-full rounded-xl font-kalame-Medium flex items-center justify-center relative h-11"
          onClick={() => setStepUser((prev) => Math.min(prev + 1, 5))}
          disabled={stepUser === 5}
        >
          {stepUser === 1 ? (
            <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
              ثبت اطلاعات اگهی
            </p>
          ) : null}
          {stepUser === 2 ? (
            <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
              ثبت اطلاعات تکمیلی
            </p>
          ) : null}
          {stepUser === 3 ? (
            <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
              ثبت موقعیت مکانی
            </p>
          ) : null}
          {stepUser === 4 ? (
            <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
              ثبت گالری تصاویر
            </p>
          ) : null}
          {stepUser === 5 ? (
            <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
              ثبت اطلاعات تماس
            </p>
          ) : null}

          <IoArrowForward
            size={25}
            className="transition-all rotate-180 duration-300 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </button>
      </div>
    </div>
  );
}

export default MainContent;
