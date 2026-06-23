import React from "react";

function SpatialFuture() {
  return (
    <div>
      <h2
        className="text-[15px] font-IRANYekanX-Bold mb-4"
        style={{ color: "#40e0d0" }}
      >
        امکانات ویژه
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {[
          { name: "خانه هوشمند" },
          { name: "شارژر برق" },
          { name: "باشگاه" },
          { name: "استودیو یوگا" },
          { name: "کانسیرژ ۲۴/۷" },
          { name: "بار پشت بام" },
        ].map((amenity, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border"
            style={{
              borderColor: "#474f50",
              backgroundColor: "#474f50",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#3c4142" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#40e0d0" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span
              className="text-[11px] font-IRANYekanX-medium text-center leading-tight"
              style={{ color: "#d4cfc8" }}
            >
              {amenity.name}
            </span>
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: "#40e0d0" }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpatialFuture;
