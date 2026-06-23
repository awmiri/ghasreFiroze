"use client";
import { Phone, User2Icon } from "lucide-react";
import { useState } from "react";
import { FaMapLocation, FaXmark } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const REQUEST_TYPES = [
  "پشتیبانی فنی",
  "سوال مالی",
  "سوال عمومی",
  "درخواست ویژگی جدید",
  "گزارش باگ",
  "مشکل حساب کاربری",
];

const CONTENT_TYPES = ["متن", "تصویر", "ویدئو", "صوت", "سند", "سایر"];

interface NewReqModalProp {
  isOpen: Boolean;
  onclose: () => void;
}

export default function NewReqModal({ isOpen, onclose }: NewReqModalProp) {
  return (
    <div
      onClick={onclose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#474f50] overflow-hidden p-2 flex rounded-2xl md:h-120"
      >
        {/* info content  */}
        <div className="bg-[#40E0D0] p-2.5 max-md:hidden rounded-xl pt-7 w-80 relative overflow-hidden">
          {/* title */}
          <h3 className="font-IRANYekanX-medium text-[#3c4142] text-xl mb-4">
            اطلاعات عمارت قصرفیروزه
          </h3>
          {/* description */}
          <p className="text-sm font-IRANYekanX-medium text-[#3c4142]/70 mb-9">
            با راهای ارتباطی زیر با ما در تماس باشید
          </p>
          {/* content */}
          <span className="space-y-2.5">
            <span className="flex items-center gap-5 font-IRANYekanX-medium text-[#3c4142]">
              <span className="w-7 h-7 rounded-full flex items-center justify-center border border-[#3c4142]/50">
                <Phone className="size-3.5" />
              </span>
              <span className="text-sm text-[#3c4142]/60 space-x-1">
                <span>شماره تماس : </span>
                <span>09330296968</span>
              </span>
            </span>
            <span className="flex items-center gap-5 font-IRANYekanX-medium text-[#3c4142]">
              <span className="w-7 h-7 rounded-full flex items-center justify-center border border-[#3c4142]/50">
                <MdEmail className="size-3.5" />
              </span>
              <span className="text-sm text-[#3c4142]/60 space-x-1">
                <span>ایمیل : </span>
                <span>amiraliht4hh@gmail.com </span>
              </span>
            </span>
            <span className="flex items-center gap-5 font-IRANYekanX-medium text-[#3c4142]">
              <span className="w-7 h-7 rounded-full flex items-center justify-center border border-[#3c4142]/50">
                <FaMapLocation className="size-3.5" />
              </span>
              <span className="text-sm flex items-center text-[#3c4142]/60 space-x-1">
                <span className="w-50 block">
                  <span>نشانی : </span>
                  تهران - میرداماد - امیریه 3-کوچه دوم - پلاک 27 - طبقه 2
                </span>
              </span>
            </span>
          </span>

          <span className="bg-[#3c4142]/15 w-20 h-20 absolute rounded-2xl -bottom-2 left-0"></span>
          <span className="bg-[#3c4142]/15 w-20 h-20 absolute rounded-2xl bottom-7 left-12"></span>
          <span className="bg-[#3c4142]/15 w-30 h-30 absolute rounded-2xl bottom-15 left-23"></span>
          <span className="bg-[#3c4142]/15 w-40 h-40 absolute rounded-2xl -bottom-10 right-0"></span>
        </div>
        {/* main inputs content  */}
        <div className="">
          <div className="flex items-start justify-between px-2 sm:px-4 md:px-8 pt-5 md:pt-7 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#40E0D0] inline-block" />
                <span className="text-[#40E0D0] text-xs font-IRANYekanX-Bold">
                  درخواست جدید
                </span>
              </div>
              <h2 className="text-[#D4CFC8] text-xl font-IRANYekanX-Bold tracking-tight">
                ثبت درخواست جدید
              </h2>
            </div>
            <div
              className="bg-[#3c4142] rounded-xl cursor-pointer hover:bg-[#2f3334] transition-colors"
              style={{
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              onClick={onclose}
            >
              <FaXmark style={{ fontSize: "18px", color: "#8a8880" }} />
            </div>
          </div>
          <div className="px-2 sm:px-4 md:px-8 pt-6 md:pt-10 max-md:pb-2">
            <div className="flex flex-col gap-8 md:gap-10 w-75 400px:w-80 sm:w-100 lg:w-120">
              {/* Name */}
              <div className="flex gap-5">
                <input
                  className={`w-full pr-1 py-3 border-b-2 border-[#D4CFC8]/[0.15] bg-transparent text-sm text-[#D4CFC8] placeholder:font-IRANYekanX-medium max-sm:placeholder:text-xs placeholder-[#8a8880] outline-none focus:border-[#40E0D0] transition `}
                  placeholder="نام‌ونام‌خانوادگی"
                />

                {/* Phone */}
                <input
                  className={`w-full pr-1 py-3 border-b-2 border-[#D4CFC8]/[0.15] bg-transparent text-sm text-[#D4CFC8] placeholder:font-IRANYekanX-medium max-sm:placeholder:text-xs placeholder-[#8a8880] outline-none focus:border-[#40E0D0] transition `}
                  placeholder="شماره همراه"
                  type="number"
                />
              </div>

              {/* Two dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                <select
                  className={`w-full pr-1 max-sm:text-xs py-3 border-b-2 border-[#D4CFC8]/[0.15] bg-transparent text-sm text-[#D4CFC8] font-IRANYekanX-medium outline-none focus:border-[#40E0D0] transition `}
                >
                  <option
                    value=""
                    className="font-IRANYekanX-medium bg-[#474f50]"
                  >
                    نوع درخواست
                  </option>
                  {REQUEST_TYPES.map((t) => (
                    <option
                      key={t}
                      value={t}
                      className="font-IRANYekanX-medium bg-[#474f50]"
                    >
                      {t}
                    </option>
                  ))}
                </select>

                <select
                  className={`w-full pr-1 py-3 border-b-2 border-[#D4CFC8]/[0.15] bg-transparent text-sm text-[#D4CFC8] max-sm:text-xs font-IRANYekanX-medium outline-none focus:border-[#40E0D0] transition `}
                >
                  <option
                    value=""
                    className="font-IRANYekanX-medium bg-[#474f50]"
                  >
                    نوع مخاطب
                  </option>
                  {CONTENT_TYPES.map((t) => (
                    <option
                      key={t}
                      value={t}
                      className="font-IRANYekanX-medium bg-[#474f50]"
                    >
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <textarea
                rows={1}
                className={`w-full pr-1 py-3 border-b-2 border-[#D4CFC8]/[0.15] bg-transparent text-sm text-[#D4CFC8] max-sm:placeholder:text-xs placeholder:font-IRANYekanX-medium placeholder-[#8a8880] outline-none focus:border-[#40E0D0] transition resize-none`}
                placeholder="توضیحات خود را وارد کنید ..."
              />

              {/* Actions */}
              <div className="flex gap-3 mt-1">
                <button
                  style={{ padding: "12px 0px", borderRadius: "12px" }}
                  className="flex-2 py-3 font-IRANYekanX-medium rounded-xl bg-[#40E0D0] hover:bg-[#2ecfc0] text-[#3c4142] text-sm font-semibold shadow-sm shadow-[#40E0D0]/20 transition"
                >
                  ثبت درخواست
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
