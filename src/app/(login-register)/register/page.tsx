"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-dvh w-full bg-CardBgColor flex items-center justify-center relative overflow-hidden px-4 sm:px-7.5 py-4 sm:py-8">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#40E0D0]/15" />
      <div className="absolute -bottom-40 -left-40 w-md h-112 rounded-full border border-[#40E0D0]/10" />

      <div className="w-full max-w-4xl max-h-full relative z-10 grid grid-cols-2 max-xl:grid-cols-1 bg-CardBgColor border border-[#D4CFC8]/[0.07] rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative max-xl:hidden">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
            alt="ایرون‌کلد"
            className="w-full h-full object-cover brightness-[0.55] saturate-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-mainBgColor to-transparent" />
          <div className="absolute bottom-8 right-8 left-8">
            <div className="font-IRANYekanX-Bold text-[28px] text-[#D4CFC8] mb-2">
              قصرف<span className="text-[#40E0D0]">یروزه</span>
            </div>
            <p className="text-[13px] text-whiteTextColorPrime font-IRANYekanX-Regular leading-[1.8]">
              ساخت آینده‌ای که تصور می‌کنید — از سال ۱۳۷۷.
            </p>
          </div>
        </div>

        {/* فرم */}
        <div className="p-5 sm:p-8 max-h-[calc(100dvh-2rem)] overflow-y-auto">
          {/* لوگو موبایل/تبلت */}
          <div className="flex justify-center mb-4 xl:hidden">
            <div className="font-IRANYekanX-Bold text-[22px] text-[#D4CFC8]">
              قصرف<span className="text-[#40E0D0]">یروزه</span>
            </div>
          </div>

          {/* button action */}
          <div className="flex gap-1 mb-5 sm:mb-6 border border-[#D4CFC8]/[0.07] rounded-xl p-1">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 text-[12px] sm:text-[13px] font-IRANYekanX-Bold tracking-[1px] py-2.5 rounded-lg transition-all cursor-pointer ${
                mode === "login"
                  ? "bg-[#40E0D0] text-[#3c4142]"
                  : "text-[#8a8880] hover:text-[#D4CFC8]"
              }`}
            >
              ورود
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 text-[12px] sm:text-[13px] font-IRANYekanX-Bold tracking-[1px] py-2.5 rounded-lg transition-all cursor-pointer ${
                mode === "signup"
                  ? "bg-[#40E0D0] text-[#3c4142]"
                  : "text-[#8a8880] hover:text-[#D4CFC8]"
              }`}
            >
              ثبت‌نام
            </button>
          </div>

          {/* titles */}
          <div className="mb-5 sm:mb-6">
            <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-IRANYekanX-Bold tracking-[3px] text-[#40E0D0] mb-2">
              <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
              {mode === "login" ? "خوش آمدید" : "ساخت حساب"}
            </div>
            <h1 className="font-IRANYekanX-medium text-[22px] sm:text-[26px] leading-[1.2] text-[#D4CFC8]">
              {mode === "login" ? (
                <>
                  ورود به <span className="text-[#40E0D0]">حساب</span> کاربری
                </>
              ) : (
                <>
                  ساخت حساب <span className="text-[#40E0D0]">جدید</span>
                </>
              )}
            </h1>
          </div>

          {/* فرم */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {mode === "signup" && (
              <div className="relative">
                <User className="absolute right-0 top-1/2 -translate-y-1/2 text-[#40E0D0] size-4.5" />
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="w-full pr-7 py-2.5 bg-transparent border-b-2 border-[#D4CFC8]/15 text-sm text-[#D4CFC8] placeholder-whiteTextColorPrime font-IRANYekanX-medium outline-none focus:border-[#40E0D0] transition"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-[#40E0D0] size-4.5" />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full pr-7 py-2.5 bg-transparent border-b-2 border-[#D4CFC8]/15 text-sm text-[#D4CFC8] placeholder-whiteTextColorPrime font-IRANYekanX-medium outline-none focus:border-[#40E0D0] transition"
              />
            </div>

            <div className="relative">
              <Lock className="absolute right-0 top-1/2 -translate-y-1/2 text-[#40E0D0] size-4.5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="رمز عبور"
                className="w-full pr-7 pl-7 py-2.5 bg-transparent border-b-2 border-[#D4CFC8]/15 text-sm text-[#D4CFC8] placeholder-whiteTextColorPrime font-IRANYekanX-medium outline-none focus:border-[#40E0D0] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-whiteTextColorPrime hover:text-[#40E0D0] transition cursor-pointer"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {mode === "signup" && (
              <div className="relative">
                <Lock className="absolute right-0 top-1/2 -translate-y-1/2 text-[#40E0D0] size-4.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="تکرار رمز عبور"
                  className="w-full pr-7 py-2.5 bg-transparent border-b-2 border-[#D4CFC8]/15 text-sm text-[#D4CFC8] placeholder-whiteTextColorPrime font-IRANYekanX-medium outline-none focus:border-[#40E0D0] transition"
                />
              </div>
            )}

            {mode === "login" && (
              <div className="flex items-center justify-between -mt-1">
                <label className="flex items-center gap-2 text-[11px] sm:text-[12px] text-whiteTextColorPrime font-IRANYekanX-medium cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#40E0D0] cursor-pointer"
                  />
                  مرا به خاطر بسپار
                </label>
                <a
                  href="#"
                  className="text-[11px] sm:text-[12px] text-[#40E0D0] hover:text-[#2ecfc0] font-IRANYekanX-medium transition"
                >
                  فراموشی رمز عبور؟
                </a>
              </div>
            )}

            <button className="w-full bg-[#40E0D0] hover:bg-[#2ecfc0] rounded-md text-mainBgColor text-[12px] sm:text-[13px] font-IRANYekanX-Bold tracking-[2px] py-3 sm:py-3.5 clip-btn transition-all mt-1 cursor-pointer">
              {mode === "login" ? "ورود" : "ثبت‌نام"}
            </button>
          </div>

          {/* تغییر حالت */}
          <p className="text-center text-[12px] sm:text-[13px] text-whiteTextColorPrime font-IRANYekanX-medium mt-5">
            {mode === "login" ? (
              <>
                حساب کاربری ندارید؟{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-[#40E0D0] hover:text-[#2ecfc0] font-IRANYekanX-Bold transition cursor-pointer"
                >
                  ثبت‌نام کنید
                </button>
              </>
            ) : (
              <>
                قبلاً حساب ساخته‌اید؟{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-[#40E0D0] hover:text-[#2ecfc0] font-IRANYekanX-Bold transition cursor-pointer"
                >
                  وارد شوید
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
