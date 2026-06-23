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
  const [blogList, setBlogList] = useState(false);
  const [searchSetting, setSearchSetting] = useState("");

  const route = usePathname();

  // لیست تمام آیتم‌های منو با برچسب‌هایشان برای جستجو
  const menuLabels = {
    home: "صفحه اصلی",
    account: "حساب کاربری",
    advertisement: "اگهی",
    advertisement_list: "لیست آگهی ها",
    advertisement_create: "ایجاد آگهی جدید",
    blog: "بلاگ‌ها",
    blog_list: "لیست بلاگ ها",
    blog_create: "ایجاد بلاگ جدید",
    claimant: "خواهان",
    claimant_list: "لیست خواهان",
    claimant_create: "ایجاد درخواست جدید",
    map: "نقشه",
    request: "درخواست مشتریان",
    request_list: "درخواست مشتریان",
    about: "درباره ما",
  };

  // تابع برای بررسی تطابق با جستجو
  const matchesSearch = (...keywords: string[]) => {
    if (!searchSetting.trim()) return true;
    const searchTerm = searchSetting.toLowerCase().trim();
    return keywords.some((keyword) =>
      keyword.toLowerCase().includes(searchTerm),
    );
  };

  // تعیین اینکه کدام آیتم‌ها نمایش داده شوند
  const showItem = {
    home: matchesSearch(menuLabels.home),
    account: matchesSearch(menuLabels.account),
    advertisement: matchesSearch(
      menuLabels.advertisement,
      menuLabels.advertisement_list,
      menuLabels.advertisement_create,
    ),
    blog: matchesSearch(
      menuLabels.blog,
      menuLabels.blog_list,
      menuLabels.blog_create,
    ),
    claimant: matchesSearch(
      menuLabels.claimant,
      menuLabels.claimant_list,
      menuLabels.claimant_create,
    ),
    map: matchesSearch(menuLabels.map),
    request: matchesSearch(menuLabels.request, menuLabels.request_list),
    about: matchesSearch(menuLabels.about),
  };

  // اگر جستجو خالی است، همه را نشان بده
  const shouldShowAll = !searchSetting.trim();

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
          value={searchSetting}
          onChange={(e) => setSearchSetting(e.target.value)}
          placeholder="جستجو در تنظیمات..."
          className="w-full border-0 outline-0 p-2 placeholder:font-kalame-Medium placeholder:text-sm placeholder:text-black/30"
        />
      </div>

      {/* lists */}
      <ul className="w-full space-y-2 overflow-y-auto flex-1">
        {/* صفحه اصلی */}
        {(shouldShowAll || showItem.home) && (
          <Link
            href={"/"}
            className="flex items-center flex-row-reverse justify-end gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
          >
            <li className="text-[16px] font-IRANYekanX-Regular">صفحه اصلی</li>
            <AiOutlineHome size={20} />
          </Link>
        )}

        {/* حساب کاربری */}
        {(shouldShowAll || showItem.account) && (
          <Link
            href={"/"}
            className="flex items-center flex-row-reverse justify-between hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
          >
            <HiOutlineArrowRight
              className="rotate-180 text-black/45"
              size={20}
            />
            <div className="flex items-center gap-2">
              <FaRegUser size={20} />
              <li className="text-[16px] font-IRANYekanX-Regular">
                حساب کاربری
              </li>
            </div>
          </Link>
        )}

        {/* Advertisement */}
        {(shouldShowAll || showItem.advertisement) && (
          <div className="flex flex-col items-end relative justify-end transition-all group">
            <div
              className="flex justify-between flex-row-reverse items-center gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 w-full cursor-pointer"
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
            <ul
              className={`text-[14px] font-IRANYekanX-medium flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out ${
                advertisement || route.includes("/dashboard/file")
                  ? "max-h-40 opacity-100 p-2 space-y-2"
                  : "max-h-0 opacity-0 p-0 m-0 space-y-0"
              }`}
            >
              {(shouldShowAll || showItem.advertisement_list) && (
                <Link
                  href={"/dashboard/file"}
                  className={`${Style.navbar_setting_list} ${
                    route === "/dashboard/file"
                      ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]"
                      : ""
                  }`}
                >
                  <li>لیست آگهی ها</li>
                </Link>
              )}
              {(shouldShowAll || showItem.advertisement_create) && (
                <Link
                  href={"/dashboard/file/create"}
                  className={`${Style.navbar_setting_list} ${
                    route === "/dashboard/file/create"
                      ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]"
                      : ""
                  }`}
                >
                  <li>ایجاد آگهی جدید</li>
                </Link>
              )}
            </ul>
          </div>
        )}

        {/* Blog */}
        {(shouldShowAll || showItem.blog) && (
          <div className="flex flex-col items-end relative justify-end transition-all group">
            <div
              className="flex justify-between flex-row-reverse items-center gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 w-full cursor-pointer"
              onClick={() => {
                setBlogList((prev) => !prev);
                if (advertisement || siteRequest) {
                  setAdvertisement(false);
                  setSiteRequest(false);
                  setSetting(false);
                }
              }}
            >
              <MdKeyboardArrowDown
                className={`${blogList ? "rotate-180" : "rotate-0"} transition-all`}
                size={18}
              />
              <div className="flex items-center gap-2">
                <FaRegFile size={20} />
                <p className="text-[16px] font-IRANYekanX-Regular">بلاگ‌ها</p>
              </div>
            </div>
            <ul
              className={`text-[14px] font-IRANYekanX-medium flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out ${
                blogList || route.includes("/dashboard/blog")
                  ? "max-h-40 opacity-100 p-2 space-y-2"
                  : "max-h-0 opacity-0 p-0 m-0 space-y-0"
              }`}
            >
              {(shouldShowAll || showItem.blog_list) && (
                <Link
                  href={"/dashboard/blog"}
                  className={`${Style.navbar_setting_list} ${
                    route === "/dashboard/blog"
                      ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]"
                      : ""
                  }`}
                >
                  <li>لیست بلاگ ها</li>
                </Link>
              )}
              {(shouldShowAll || showItem.blog_create) && (
                <Link
                  href={"/dashboard/blog/create"}
                  className={`${Style.navbar_setting_list} ${
                    route === "/dashboard/blog/create"
                      ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]"
                      : ""
                  }`}
                >
                  <li>ایجاد بلاگ جدید</li>
                </Link>
              )}
            </ul>
          </div>
        )}

        {/* Claimant (خواهان) */}
        {(shouldShowAll || showItem.claimant) && (
          <div className="flex flex-col items-end relative justify-end transition-all group">
            <div
              className="flex justify-between flex-row-reverse items-center gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 w-full cursor-pointer"
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
            <ul
              className={`text-[14px] font-IRANYekanX-medium flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out ${
                setting || route.includes("/dashboard/claimantment")
                  ? "max-h-40 opacity-100 p-2 space-y-2"
                  : "max-h-0 opacity-0 p-0 m-0 space-y-0"
              }`}
            >
              {(shouldShowAll || showItem.claimant_list) && (
                <Link
                  href={"/dashboard/claimantment"}
                  className={`${Style.navbar_setting_list} ${
                    route === "/dashboard/claimantment"
                      ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]"
                      : ""
                  }`}
                >
                  <li>لیست خواهان</li>
                </Link>
              )}
              {(shouldShowAll || showItem.claimant_create) && (
                <Link
                  href={"/dashboard/claimantment/create"}
                  className={`${Style.navbar_setting_list} ${
                    route === "/dashboard/claimantment/create"
                      ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]"
                      : ""
                  }`}
                >
                  <li>ایجاد درخواست جدید</li>
                </Link>
              )}
            </ul>
          </div>
        )}

        {/* نقشه */}
        {(shouldShowAll || showItem.map) && (
          <Link
            href={""}
            className="flex items-center flex-row-reverse justify-end gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
          >
            <li className="text-[16px] font-IRANYekanX-Regular">نقشه</li>
            <FiMap size={20} />
          </Link>
        )}

        {/* Request (درخواست مشتریان) */}
        {(shouldShowAll || showItem.request) && (
          <div className="flex flex-col items-end relative justify-end transition-all group">
            <div
              className="flex justify-between flex-row-reverse items-center gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 w-full cursor-pointer"
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
            <ul
              className={`text-[14px] font-IRANYekanX-medium flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out ${
                siteRequest || route.includes("/dashboard/request")
                  ? "max-h-40 opacity-100 p-2 space-y-2"
                  : "max-h-0 opacity-0 p-0 m-0 space-y-0"
              }`}
            >
              {(shouldShowAll || showItem.request_list) && (
                <Link
                  href={"/dashboard/request"}
                  className={`${Style.navbar_setting_list} ${
                    route === "/dashboard/request"
                      ? "bg-black/10 rounded-tl-lg rounded-bl-[10px]"
                      : ""
                  }`}
                >
                  <li>درخواست مشتریان</li>
                </Link>
              )}
            </ul>
          </div>
        )}

        {/* درباره ما */}
        {(shouldShowAll || showItem.about) && (
          <Link
            href={""}
            className="flex items-center flex-row-reverse justify-end gap-2 hover:bg-black/10 hover:rounded-lg p-1.5 transition-all"
          >
            <li className="text-[16px] font-IRANYekanX-Regular">درباره ما</li>
            <IoAlertCircleOutline size={20} />
          </Link>
        )}

        {/* social media - همیشه نمایش داده می‌شود */}
        <div className="flex items-center flex-row-reverse justify-center mt-7 gap-4 pt-4 border-t border-gray-100">
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
