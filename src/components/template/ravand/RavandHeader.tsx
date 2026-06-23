import { MapPin } from "lucide-react";
import React from "react";

function RavandHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
      <div>
        <h1 className="font-IRANYekanX-Bold text-[28px] sm:text-[34px] lg:text-[40px] tracking-[0.5px] text-[#D4CFC8] mb-2">
          عمارت آمبروود
        </h1>
        <p className="flex items-center gap-1.5 text-whiteTextColorPrime text-[14px] sm:text-[15px] font-IRANYekanX-medium mb-7">
          <MapPin className="size-4 text-[#40E0D0] shrink-0" />
          خیابان آمبروود، پلاک ۱۲۰۴، بورلی هیلز
        </p>
      </div>
    </div>
  );
}

export default RavandHeader;
