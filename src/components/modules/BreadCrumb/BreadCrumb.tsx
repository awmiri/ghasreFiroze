"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BreadCrumbProp {
  crumb: { id: number; crumbTitle: string; href: string; last: boolean }[];
}
function BreadCrumb({ crumb }: BreadCrumbProp) {
  return (
    <div className="flex">
      <span className="flex items-center gap-1 text-xs font-IRANYekanX-medium mb-4 ">
        {crumb.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            <Link
              href={item.href}
              className="text-whiteTextColorMain hover:text-whiteTextColorMain/60 transition-all "
            >
              {item.crumbTitle}
            </Link>
            <span
              className={`text-whiteTextColorMain/60 ${item.last ? "hidden" : ""}`}
            >
              {">"}
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}

export default BreadCrumb;
