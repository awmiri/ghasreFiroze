import { Antenna, Building, Clock, MapPin } from "lucide-react";
import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

function InfoAddresBox() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
      {/* Address Card */}
      <div className="bg-CardBgColor hover:shadow-center hover:shadow-tagsColor/20 rounded-[14px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:border-[#b5975a]">
        <div className="w-9.5 h-9.5 rounded-[10px] bg-tagsColor/25 flex items-center justify-center mb-4">
          <MapPin className="text-[1.1rem] text-tagsColor" />
        </div>
        <p className="text-[0.65rem] tracking-[0.18em] font-IRANYekanX-medium text-whiteTextColorPrime mb-2">
          دفتر ما
        </p>
        <p className="font-IRANYekanX-medium text-xl text-whiteTextColorMain mb-1">
          ما را اینجا پیدا کنید
        </p>
        <p className="text-[0.85rem] text-whiteTextColorPrime font-IRANYekanX-Regular leading-relaxed">
          بلوار آناتول فرانس ۵
          <br />
          شان دو مارس، ۷۵۰۰۷
          <br />
          پاریس، فرانسه
        </p>
      </div>

      {/* Phone Card */}
      <div className="bg-CardBgColor hover:shadow-center hover:shadow-tagsColor/20 rounded-[14px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:border-[#b5975a]">
        <div className="w-9.5 h-9.5 rounded-[10px] bg-tagsColor/25 flex items-center justify-center mb-4">
          <Building className="text-[1.1rem] text-tagsColor" />
        </div>
        <p className="text-[0.65rem] tracking-[0.18em] font-IRANYekanX-medium text-whiteTextColorPrime mb-2">
          خط دفتر
        </p>
        <p className="font-IRANYekanX-medium text-xl  text-whiteTextColorMain mb-1">
          با ما تماس بگیرید
        </p>
        <p className="text-[0.85rem] font-IRANYekanX-Regular text-whiteTextColorPrime leading-relaxed">
          <a
            href="tel:+33123456789"
            className="text-whiteTextColorPrime no-underline border-b border-transparent transition-all duration-150 hover:text-[#b5975a] hover:border-[#b5975a]"
          >
            +۳۳ ۱ ۲۳ ۴۵ ۶۷ ۸۹
          </a>
          <br />
          <a
            href="tel:+33198765432"
            className="text-whiteTextColorPrime no-underline border-b border-transparent transition-all duration-150 hover:text-[#b5975a] hover:border-[#b5975a]"
          >
            +۳۳ ۱ ۹۸ ۷۶ ۵۴ ۳۲
          </a>
        </p>
      </div>

      {/* Hours Card */}
      <div className="bg-CardBgColor hover:shadow-center hover:shadow-tagsColor/20 rounded-[14px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:border-[#b5975a]">
        <div className="w-9.5 h-9.5 rounded-[10px] bg-tagsColor/25 flex items-center justify-center mb-4">
          <Clock className="text-[1.1rem] text-tagsColor" />
        </div>
        <p className="text-[0.65rem] tracking-[0.18em] font-IRANYekanX-medium text-whiteTextColorPrime mb-2">
          ساعات کاری
        </p>
        <p className=" text-xl font-IRANYekanX-medium text-whiteTextColorMain mb-1">
          ما باز هستیم
        </p>
        <div className="mt-2 font-IRANYekanX-Regular">
          <div className="flex justify-between items-center py-2 border-b border-[#f0efe9] text-[0.83rem]">
            <span className="text-whiteTextColorPrime">دوشنبه – جمعه</span>
            <span className="text-[0.72rem] font-medium text-[#3B6D11] bg-[#EAF3DE] rounded-md px-2 py-0.5">
              ۱۰:۰۰ – ۲۲:۳۰
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#f0efe9] text-[0.83rem]">
            <span className="text-whiteTextColorPrime">شنبه</span>
            <span className="text-[0.72rem] font-medium text-[#3B6D11] bg-[#EAF3DE] rounded-md px-2 py-0.5">
              ۱۰:۰۰ – ۲۲:۳۰
            </span>
          </div>
          <div className="flex justify-between items-center py-2 text-[0.83rem]">
            <span className="text-whiteTextColorPrime">یکشنبه</span>
            <span className="text-[0.72rem] font-medium text-[#A32D2D] bg-[#FCEBEB] rounded-md px-2 py-0.5">
              تعطیل
            </span>
          </div>
        </div>
      </div>

      {/* Social Card */}
      <div className="bg-CardBgColor hover:shadow-center hover:shadow-tagsColor/20 rounded-[14px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:border-[#b5975a]">
        <div className="w-9.5 h-9.5 rounded-[10px] bg-tagsColor/25 flex items-center justify-center mb-4">
          <Antenna className="text-[1.1rem] text-tagsColor" />
        </div>
        <p className="text-[0.65rem] tracking-[0.18em] font-IRANYekanX-medium text-whiteTextColorPrime mb-2">
          در ارتباط باشید
        </p>
        <p className=" text-xl font-IRANYekanX-medium text-whiteTextColorMain mb-1">
          قصرفیروزه را دنبال کنید
        </p>
        <div className="grid grid-cols-2 gap-2 mt-4 font-IRANYekanX-Regular">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.7rem] text-whiteTextColorMain hover:text-fillBtn border border-white/25 hover:border-fillBtn rounded-lg py-2 px-3 no-underline transition-all duration-150"
          >
            <BsInstagram className="text-base transition-colors duration-150" />
            اینستاگرام
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.7rem] text-whiteTextColorMain hover:text-fillBtn border border-white/25 hover:border-fillBtn rounded-lg py-2 px-3 transition-all duration-150"
          >
            <FaFacebook className="text-base  transition-colors duration-150" />
            فیسبوک
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.7rem] font-normal text-whiteTextColorMain hover:text-fillBtn border border-white/25 hover:border-fillBtn rounded-lg py-2 px-3 no-underline transition-all duration-150"
          >
            <BsWhatsapp className="text-base transition-colors duration-150" />
            واتساپ
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.7rem] text-whiteTextColorMain hover:text-fillBtn border border-white/25 hover:border-fillBtn rounded-lg py-2 px-3 no-underline transition-all duration-150"
          >
            <LiaLinkedin className="text-base transition-colors duration-150" />
            لینکدین
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoAddresBox;
