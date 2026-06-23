import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <div className="bg-white w-full p-5 mt-auto flex items-center gap-3">
      {/* search box */}
      <div className="bg-sky-50 border-2 border-sky-200 w-full relative rounded-xl">
        <input
          dir="rtl"
          type="text"
          placeholder="جستجو در اگهی ها..."
          className="w-full border-0 outline-0 p-2 placeholder:font-kalame-Medium placeholder:text-sm placeholder:text-black/30 "
        />
      </div>

      <Link
        href={"/dashboard/file/create"}
        className="text-nowrap bg-blue-500 hover:bg-blue-600 transition-all text-white text-sm font-IRANYekanX-medium p-2 rounded-lg"
      >
        ثبت اگهی
      </Link>
    </div>
  );
}

export default TopBar;
