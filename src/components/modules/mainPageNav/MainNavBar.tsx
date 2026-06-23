"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewReqModal from "../addNewReq/NewReqModal";
import { usePathname } from "next/navigation";

function MainNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const router = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return router === href;
    return router.includes(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const route = usePathname();
  const hideModals = route?.startsWith("/dashboard");
  const hideModalsLogin = route?.startsWith("/register");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex flex-row-reverse items-center justify-between px-15 transition-all duration-300 border-b border-[#D4CFC8]/7 backdrop-blur-xl
          ${scrolled ? "h-15 bg-[rgba(60,65,66,0.98)]" : "h-18 bg-[rgba(60,65,66,0.92)]"}
          max-lg:px-7.5 ${hideModals || hideModalsLogin ? "hidden" : ""}`}
      >
        <Link
          href="/"
          className="font-IRANYekanX-Bold text-[28px] text-[#D4CFC8]"
        >
          قصرف<span className="text-[#40E0D0] font-IRANYekanX-Bold">یروزه</span>
        </Link>

        {/* لینک‌های دسکتاپ */}
        <ul className="hidden lg:flex flex-row-reverse gap-9 list-none">
          {[
            ["/firozeproject", "پروژهای قصرفیروزه"],
            ["/about-us", "درباره ما"],
            ["/ourteam", "تیم ما"],
            ["/contactus", "ارتباط با ما"],
            ["/blogspage", "وبلاگ ها"],
            ["/projects", "اگهی ها"],
            ["/", "خانه"],
          ]
            .filter(Boolean)
            .map(([href, label]) => (
              <li key={href} className="flex items-center justify-center">
                <Link
                  href={href}
                  className={`text-[13px] font-IRANYekanX-medium tracking-[1.5px] hover:text-[#D4CFC8] ${label === "پروژهای قصرفیروزه" ? "text-[#40E0D0]" : "text-[#8a8880]"} transition-colors ${
                    isActive(href) ? "text-[#D4CFC8]" : "text-[#8a8880]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          <li>
            <button
              onClick={() => setOpenModal(true)}
              className=" text-[#3c4142] text-[12px] font-IRANYekanX-Bold px-6 py-2.5 bg-[#40E0D0] hover:bg-[#2ecfc0] transition-colors clip-btn-sm"
            >
              ثبت درخواست
            </button>
          </li>
        </ul>

        {/* همبرگر موبایل */}
        <button
          className="lg:hidden flex flex-col gap-1.25 cursor-pointer bg-transparent border-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="w-6.5 h-0.5 bg-[#D4CFC8] block transition-all" />
          <span className="w-6.5 h-0.5 bg-[#D4CFC8] block transition-all" />
          <span className="w-6.5 h-0.5 bg-[#D4CFC8] block transition-all" />
        </button>

        {/* منوی موبایل */}
        {navOpen && (
          <div className="lg:hidden absolute font-IRANYekanX-medium top-full left-0 right-0 bg-[rgba(60,65,66,0.98)] border-b border-[#D4CFC8]/[0.07] px-7.5 py-6 flex flex-col">
            {[
              ["#about", "درباره ما"],
              ["#services", "خدمات"],
              ["#projects", "پروژه‌ها"],
              ["#process", "فرآیند"],
              ["#contact", "دریافت مشاوره"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setNavOpen(false)}
                className="block py-3.5 border-b border-[#D4CFC8]/[0.07] text-[#8a8880] text-[14px] font-semibold tracking-[1.5px] hover:text-[#D4CFC8] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <NewReqModal isOpen={openModal} onclose={() => setOpenModal(false)} />
    </>
  );
}

export default MainNavBar;
