"use client";
import { Banknote, Clock, Map, MapPin } from "lucide-react";
import React, { useState } from "react";

function DetailContent() {
  const price = 12_000_000_000;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="p-3 lg:p-4">
      <div className=" space-y-4 border-b border-b-slate-300 pb-6 lg:pb-8 ">
        <div className="text-[11px] lg:text-[13px] font-IRANYekanX-medium flex items-center justify-between  bg-slate-50 border border-slate-200/60 p-2 rounded-lg shadow-sm">
          <div className="flex gap-2 items-center ">
            <Banknote className="size-5 lg:size-6" />
            <p>{price.toLocaleString("fa-IR")}</p>
          </div>
          <p>تومان</p>
        </div>
        <div className="text-[11px] lg:text-[13px] font-IRANYekanX-medium flex items-center justify-between  bg-slate-50 border border-slate-200/60 p-2 rounded-lg shadow-sm">
          <div className="flex gap-2 items-center">
            <Map className="size-5 lg:size-6" />
            <p>شهر</p>
          </div>
          <p className="text-black/50 font-kalame-Medium">مشهد</p>
        </div>
        <div className="text-[11px] lg:text-[13px] font-IRANYekanX-medium flex items-center justify-between  bg-slate-50 border border-slate-200/60 p-2 rounded-lg shadow-sm">
          <div className="flex gap-2 items-center">
            <MapPin className="size-5 lg:size-6" />
            <p>محله</p>
          </div>
          <p className="text-black/50 font-kalame-Medium">خیابان رضا</p>
        </div>
        <div className=" text-[11px] lg:text-[13px] font-IRANYekanX-medium flex items-center justify-between  bg-slate-50 border border-slate-200/60 p-2 rounded-lg shadow-sm">
          <div className="flex gap-2 items-center">
            <Clock className="size-5 lg:size-6" />
            <p>تاریخ انتشار</p>
          </div>
          <p className=" text-black/50 font-kalame-Medium">
            {new Date().toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsLoading(true)}
        disabled={isLoading}
        dir="ltr"
        className="group relative md:inline-flex h-14 items-center justify-center rounded-lg py-1 pr-6 pl-14 font-medium w-full mt-5 bg-blue-100  text-blue-500  hover:text-white transition-all duration-300"
      >
        <span className="z-40 relative -pl-1 lg:pl-2 group-hover:text-white font-IRANYekanX-medium text-xs lg:text-base">
          تماس تلفنی
        </span>

        <div className="absolute z-10 left-1 top-1 inline-flex h-12 w-12 items-center justify-end rounded-lg transition-all duration-300 group-hover:w-[calc(100%-8px)] bg-blue-500">
          <div className="me-3.5 flex items-center justify-center">
            {!isLoading ? (
              <svg className="size-5 lg:size-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 animate-spin text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
                />
              </svg>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

export default DetailContent;
