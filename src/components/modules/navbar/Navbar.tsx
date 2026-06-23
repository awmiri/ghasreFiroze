"use client";
import Image from "next/image";
import Link from "next/link";
import Style from "@/components/modules/navbar/navbar.module.css";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  FaInstagram,
  FaRegFile,
  FaRegUser,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaHeadphones, FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { FiMap } from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

function Navbar() {
  const [setting, setSetting] = useState(false);
  const [advertisement, setAdvertisement] = useState(false);
  const [siteRequest, setSiteRequest] = useState(false);

  const route = usePathname();
  console.log("usePathname", route);

  return (
    <div className="bg-white h-dvh w-78 text-black p-2.5 flex flex-col ml-auto items-center space-y-3">
      {/* logo */}

      <Link href={"/"} className="flex justify-center w-full">
        <Image
          src={"/logo-v1.png"}
          alt="logo"
          width={200}
          height={100}
          priority
          style={{ width: "auto", height: "auto" }}
          className="px-5"
        />
      </Link>

      {/* search box */}

      <div className="bg-sky-50 border-2 border-sky-200 w-full relative rounded-xl">
        <input
          dir="rtl"
          type="text"
          placeholder="جستجو در تنظیمات..."
          className="w-full border-0 outline-0 p-2 placeholder:font-kalame-Medium placeholder:text-sm placeholder:text-black/30 "
        />
      </div>

      {/* lists  */}

      <ul className=" w-full space-y-2">
        <Link
          href={"/"}
          className="flex items-center flex-row-reverse justify-end gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
        >
          <li className="text-[16px] font-IRANYekanX-Regular">صفحه اصلی</li>
          <AiOutlineHome size={20} />
        </Link>
        <Link
          href={"/"}
          className="flex items-center flex-row-reverse justify-between  hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
        >
          <HiOutlineArrowRight className="rotate-180 text-black/45" size={20} />
          <div className="flex items-center gap-2">
            <FaRegUser size={20} />
            <li className="text-[16px] font-IRANYekanX-Regular">حساب کاربری</li>
          </div>
        </Link>
        {/* drop down list */}
        <div className="flex flex-col items-end relative justify-end transition-all group">
          {/* drop down title */}
          <div
            className="flex justify-between flex-row-reverse items-center gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 w-full"
            onClick={() => {
              setAdvertisement((prev) => !prev);
              if (setting || siteRequest) {
                setSetting(false);
                setSiteRequest(false);
              }
            }}
          >
            <MdKeyboardArrowDown
              className={`${advertisement ? "rotate-180" : "rotate-0"} transition-all`}
              size={18}
            />
            <div className="flex items-center gap-2">
              <BsBoxSeam size={20} />
              <p className="text-[16px] font-IRANYekanX-Regular">اگهی</p>
            </div>
          </div>
          {/* drop down content */}
          <ul
            className={`text-[14px] font-IRANYekanX-medium flex  flex-col w-full overflow-hidden transition-all duration-300 ease-in-out ${
              advertisement || route.includes("/dashboard/file")
                ? "max-h-40 opacity-100 p-2  space-y-2"
                : "max-h-0 opacity-0 p-0 m-0 space-y-0"
            }`}
          >
            <Link
              href={"/dashboard/file"}
              className={`${Style.navbar_setting_list} ${route === "/dashboard/file" ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]" : ""}`}
              data-active={route === "/dashboard/file"}
            >
              <li>لیست آگهی ها</li>
            </Link>
            <Link
              href={"/dashboard/file/create"}
              className={`${Style.navbar_setting_list} ${route === "/dashboard/file/create" ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]" : ""}`}
              data-active={route === "/dashboard/file/create"}
            >
              <li>ایجاد آگهی جدید</li>
            </Link>
          </ul>
        </div>
        <Link
          href={""}
          className="flex items-center flex-row-reverse justify-end gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
        >
          <li className="text-[16px] font-IRANYekanX-Regular">بلاگ‌ها</li>
          <FaRegFile size={20} />
        </Link>
        <div className="flex flex-col items-end relative justify-end transition-all group">
          {/* drop down title */}
          <div
            className="flex justify-between flex-row-reverse items-center gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 w-full"
            onClick={() => {
              setSetting((prev) => !prev);
              if (advertisement || siteRequest) {
                setAdvertisement(false);
                setSiteRequest(false);
              }
            }}
          >
            <MdKeyboardArrowDown
              className={`${setting ? "rotate-180" : "rotate-0"} transition-all`}
              size={18}
            />
            <div className="flex items-center gap-2">
              <FaHeadphones size={20} />
              <p className="text-[16px] font-IRANYekanX-Regular">خواهان</p>
            </div>
          </div>
          {/* drop down content */}
          <ul
            className={`text-[14px] font-IRANYekanX-medium flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out ${
              setting || route.includes("/dashboard/claimantment")
                ? "max-h-40 opacity-100 p-2 space-y-2"
                : "max-h-0 opacity-0 p-0 m-0 space-y-0"
            }`}
          >
            <Link
              href={"/dashboard/claimantment"}
              className={`${Style.navbar_setting_list} ${route === "/dashboard/claimantment" ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]" : ""}`}
              data-active={route === "/dashboard/claimantment"}
            >
              <li>لیست خواهان</li>
            </Link>
            <Link
              href={"/dashboard/claimantment/create"}
              className={`${Style.navbar_setting_list} ${route === "/dashboard/claimantment/create" ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]" : ""}`}
              data-active={route === "/dashboard/claimantment/create"}
            >
              <li>ایجاد درخواست جدید</li>
            </Link>
          </ul>
        </div>

        <Link
          href={""}
          className="flex items-center flex-row-reverse justify-end gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
        >
          <li className="text-[16px] font-IRANYekanX-Regular">نقشه</li>
          <FiMap size={20} />
        </Link>
        <div className="flex flex-col items-end relative justify-end transition-all group">
          {/* drop down title */}
          <div
            className="flex justify-between flex-row-reverse items-center gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 w-full"
            onClick={() => {
              setSiteRequest((prev) => !prev);
              if (advertisement || setting) {
                setAdvertisement(false);
                setSetting(false);
              }
            }}
          >
            <MdKeyboardArrowDown
              className={`${siteRequest ? "rotate-180" : "rotate-0"} transition-all`}
              size={18}
            />
            <div className="flex items-center gap-2">
              <LuSettings size={20} />
              <p className="text-[16px] font-IRANYekanX-Regular">
                درخواست مشتریان
              </p>
            </div>
          </div>
          {/* drop down content */}
          <ul
            className={`text-[14px] font-IRANYekanX-medium flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out ${
              siteRequest || route.includes("/dashboard/request")
                ? "max-h-40 opacity-100 p-2 space-y-2"
                : "max-h-0 opacity-0 p-0 m-0 space-y-0"
            }`}
          >
            <Link
              href={"/dashboard/request"}
              className={`${Style.navbar_setting_list} ${route === "/dashboard/request" ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]" : ""}`}
              data-active={route === "/dashboard/request"}
            >
              <li>درخواست مشتریان</li>
            </Link>
          </ul>
        </div>
        <Link
          href={""}
          className="flex items-center flex-row-reverse justify-end gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
        >
          <li className="text-[16px] font-IRANYekanX-Regular">درباره ما</li>
          <IoAlertCircleOutline size={20} />
        </Link>
        <div className="flex items-center flex-row-reverse justify-center mt-7 gap-4">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 transition-all duration-300 hover:scale-110"
          >
            <FaTelegramPlane size={18} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            className="text-gray-600 hover:text-black transition-all duration-300 hover:scale-110"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
