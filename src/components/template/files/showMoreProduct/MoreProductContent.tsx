import React from "react";
import ProductBox from "./ProductBox";

function MoreProductContent() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-[15px] font-IRANYekanX-Bold"
          style={{ color: "#40e0d0" }}
        >
          پروژه‌های مرتبط
        </h2>
        <div className="flex gap-2">
          <button
            className="w-8 h-8 rounded-full border flex items-center justify-center transition"
            style={{
              borderColor: "#474f50",
              backgroundColor: "#474f50",
              color: "#8a8880",
            }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            className="w-8 h-8 rounded-full border flex items-center justify-center transition"
            style={{
              borderColor: "#474f50",
              backgroundColor: "#474f50",
              color: "#8a8880",
            }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            title: "ویلای خلیج یاقوت",
            price: "$۸.۲M",
            size: "۳۲۰ متر مربع",
            img: "/routePageAlbum/69b1235cc39f2.webp",
          },
          {
            title: "آپارتمان‌های زنیت",
            price: "$۴.۵M",
            size: "۲۱۰ متر مربع",
            img: "/routePageAlbum/69b1235cef0d2.webp",
          },
          {
            title: "عمارت آتریوم",
            price: "$۱۵.۰M",
            size: "۶۵۰ متر مربع",
            img: "/routePageAlbum/69b1235df2338.webp",
          },
          {
            title: "عمارت آتریوم",
            price: "$۱۵.۰M",
            size: "۶۵۰ متر مربع",
            img: "/routePageAlbum/69b1235df2338.webp",
          },
        ].map((project, index) => (
          <ProductBox project={project} key={index} />
        ))}
      </div>
    </>
  );
}

export default MoreProductContent;
