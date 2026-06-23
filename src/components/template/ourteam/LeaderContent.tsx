import { Mail, Star } from "lucide-react";
import React from "react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

function LeaderContent() {
  return (
    <div
      className="mb-14 animate-fadeUp opacity-0"
      style={{ animation: "fadeUp 0.7s 0.15s ease forwards" }}
    >
      <div className="flex items-center gap-3 text-[11px] tracking-[0.16em] text-tagsColor mb-5">
        <span className="flex-1 h-px bg-tagsColor font-IRANYekanX-Bold" /> رهبری{" "}
        <span className="flex-1 h-px bg-tagsColor" />
      </div>

      <div className="grid grid-cols-[300px_1fr] bg-CardBgColor rounded-2xl overflow-hidden border border-white/[0.07] hover:shadow-center hover:shadow-fillBtn/20">
        <div className="bg-[#1f1f1f] p-8 flex flex-col justify-between border-l border-white/[0.07] relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-fillBtn/[0.07]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-fillBtn text-white text-[11px] px-3 py-1.5 rounded-full">
              <Star size={10} className="fill-white" /> بنیانگذار و مدیرعامل
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-18 h-18 rounded-full bg-[#2a2a2a] border-[1.5px] border-fillBtn flex items-center justify-center text-fillBtn font-bold text-base flex-shrink-0">
                الف.ج
              </div>
              <div>
                <div className="text-lg font-bold text-whiteTextColorMain">
                  الکس جانسون
                </div>
                <div className="text-sm text-fillBtn mt-1">مدیرعامل</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <blockquote className="text-sm text-whiteTextColorPrime leading-[1.8] border-r-2 border-fillBtn pr-4 italic mb-6">
              "ما نه فقط محصول، بلکه تجربه‌هایی می‌سازیم..."
            </blockquote>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                { label: "مکان", val: "برلین، آلمان" },
                { label: "سابقه", val: "۱۲+ سال" },
                { label: "حوزه تخصص", val: "استراتژی و چشم‌انداز" },
                { label: "تاریخ عضویت", val: "بنیان‌گذار، ۲۰۱۸" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#222] rounded-xl p-3 border border-white/[0.07]"
                >
                  <div className="text-[10px] text-whiteTextColorPrime uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-whiteTextColorMain font-medium">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="border-t border-white/[0.07] mb-4" />
            <div className="flex gap-2">
              {[BsLinkedin, BsTwitterX, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/[0.07] bg-[#222] flex items-center justify-center text-whiteTextColorPrime hover:bg-fillBtn hover:border-fillBtn hover:text-white transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderContent;
