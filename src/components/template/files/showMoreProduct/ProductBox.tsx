import Image from "next/image";
import React from "react";

interface ProductBoxProps {
  project: {
    title: string;
    price: string;
    size: string;
    img: string;
  };
}
function ProductBox({ project }: ProductBoxProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden hover:shadow-center hover:shadow-fillBtn/20 cursor-pointer transition-shadow hover:-translate-y-0.5"
      style={{ backgroundColor: "#474f50" }}
    >
      <div className="h-40 relative">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div
          className="absolute top-3 right-3 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "#40e0d0" }}
        >
          {project.price}
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-sm mb-2" style={{ color: "#d4cfc8" }}>
          {project.title}
        </div>
        <div
          className="flex items-center justify-between text-[11px]"
          style={{ color: "#8a8880" }}
        >
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#8a8880" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            {project.size}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#8a8880" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            منطقه نخبگان
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
