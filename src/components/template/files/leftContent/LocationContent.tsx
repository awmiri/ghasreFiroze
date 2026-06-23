import React from "react";

import Map from "./Map";
import Link from "next/link";

function LocationContent() {
  const position: [number, number] = [35.6892, 51.389];
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h2
          className="text-[15px] font-IRANYekanX-Bold"
          style={{ color: "#40e0d0" }}
        >
          جزئیات موقعیت
        </h2>

        <span
          className="text-xs font-IRANYekanX-medium"
          style={{ color: "#8a8880" }}
        >
          تاریخ ثبت: ۲ آبان ۱۴۰۲
        </span>
      </div>

      <div
        className="rounded-2xl overflow-hidden border grid grid-cols-1 lg:grid-cols-[200px_1fr]"
        style={{
          borderColor: "#474f50",
          backgroundColor: "#474f50",
        }}
      >
        <div className="p-5 flex flex-col gap-3">
          <div>
            <p
              className="text-[9px] uppercase tracking-widest font-IRANYekanX-Bold mb-0.5"
              style={{ color: "#8a8880" }}
            >
              شهر و منطقه
            </p>

            <p
              className="text-sm font-IRANYekanX-Bold"
              style={{ color: "#d4cfc8" }}
            >
              اسکای هاربر، منطقه نخبگان
            </p>
          </div>

          <div>
            <p
              className="text-[9px] uppercase tracking-widest font-IRANYekanX-Bold mb-0.5"
              style={{ color: "#8a8880" }}
            >
              آدرس کامل
            </p>

            <p
              className="text-sm leading-relaxed font-IRANYekanX-medium"
              style={{ color: "#d4cfc8" }}
            >
              سوئیت ۴۵۰۱، برج‌های شبه‌جزیره آبی، بلوار اوشنیک، SH 90210
            </p>
          </div>

          <Link
            href={`https://neshan.org/maps/routing/car/destination/${position[0]},${position[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-1.5 text-sm border text-[#40e0d0] hover:bg-[#40e0d0] hover:text-[#3c4142] rounded-xl px-3 py-2 transition w-fit font-IRANYekanX-medium"
            style={{ borderColor: "#40e0d0" }}
          >
            نمایش روی نقشه
          </Link>
        </div>

        <div className="h-75 w-full">
          {" "}
          <Map />{" "}
        </div>
      </div>
    </div>
  );
}

export default LocationContent;
