"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function Footer() {
  const route = usePathname();
  const hideModals = route?.startsWith("/dashboard");
  const hideModalsLogin = route?.startsWith("/register");

  return (
    <footer
      className={`bg-[#353b3c] px-15 pt-17.5 pb-7.5 border-t border-[#D4CFC8]/[0.07] max-lg:px-7.5 ${hideModals || hideModalsLogin ? "hidden" : ""}`}
    >
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-15 mb-15 max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1">
        <div>
          <div className="font-IRANYekanX-Bold text-[32px] tracking-[3px] text-[#D4CFC8] mb-4">
            قصرف<span className="text-[#40E0D0]">یروزه</span>
          </div>
          <p className="text-[14px] text-[#8a8880] leading-[1.8] max-w-70 font-IRANYekanX-Regular">
            ساخت برتری از سال ۱۳۷۷. شرکت ساختمانی آیرون‌کلد پروژه‌های تجاری،
            مسکونی و صنعتی در سراسر ایران تحویل می‌دهد.
          </p>
        </div>
        {[
          {
            title: "خدمات",
            links: ["تجاری", "مسکونی", "صنعتی", "بازسازی", "مهندسی"],
          },
          {
            title: "شرکت",
            links: [
              { tag: "درباره ما", href: "/about-us" },
              { tag: "تیم ما", href: "/ourteam" },
              { tag: "وبلاگ ها", href: "/blogspage" },
              { tag: "ارتباط با ما", href: "/contactus" },
              { tag: "پروژه ها", href: "/projects" },
            ],
          },
          {
            title: "تماس",
            links: [
              "۰۲۱-۸۸۸۸-۴۷۶۶",
              "projects@ironclad.build",
              "دریافت مشاوره",
              "برنامه‌ریزی تماس",
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-[13px] font-IRANYekanX-Bold tracking-[3px] text-[#D4CFC8] mb-4">
              {col.title}
            </div>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link, index) => (
                <li key={index}>
                  {typeof link === "object" && link?.href ? (
                    <Link
                      href={link.href}
                      className="text-[14px] text-[#8a8880] font-IRANYekanX-Regular hover:text-[#40E0D0] transition-colors"
                    >
                      {link.tag}
                    </Link>
                  ) : (
                    <span className="text-[14px] text-[#8a8880] font-IRANYekanX-Regular">
                      {typeof link === "string" ? link : link?.tag}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-7.5 border-t border-[#D4CFC8]/[0.07] max-sm:flex-col max-sm:gap-4 max-sm:text-center">
        <div className="text-[13px] text-[#8a8880] font-IRANYekanX-medium">
          © ۱۴۰۳{" "}
          <span className="text-[#40E0D0] font-IRANYekanX-Bold">قصرفیروزه</span>{" "}
          ساختمان. تمامی حقوق محفوظ است.
        </div>
        <div className="flex gap-3">
          {["in", "fb", "ig", "yt"].map((s) => (
            <a
              key={s}
              href="#"
              className="w-9.5 h-9.5 border border-[#D4CFC8]/[0.07] flex items-center justify-center text-[14px] text-[#8a8880] no-underline hover:bg-[#40E0D0] hover:border-[#40E0D0] hover:text-[#3c4142] transition-all"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
