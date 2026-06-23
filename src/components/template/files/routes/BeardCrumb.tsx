import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BeardCrumbProps {
  category: string;
  subCategory: string;
}

function BeardCrumb({ category, subCategory }: BeardCrumbProps) {
  return (
    <div className="flex items-center text-[13px] font-IRANYekanX-medium text-black/35 gap-2 mt-3 ">
      <Link href={"/dashboard"}>
        <Home size={17} />
      </Link>
      <span>{`>`}</span>
      <Link href={""}>{category}</Link>
      <span>{`>`}</span>
      <Link href={""}>{subCategory}</Link>
    </div>
  );
}

export default BeardCrumb;
