"use client";
import { ChevronDown, Search } from "lucide-react";
import React from "react";
import RoomFilterModal from "./RoomFilterModal";
import MetrajModal from "./MetrajModal";

function FilterBar() {
  // room filter
  const [openModal, setOpenModal] = React.useState(false);
  const [choseRoomFilter, setChoseRoomFilter] = React.useState(0);
  // meter filter
  const [openMeterModal, setOpenMeterModal] = React.useState(false);
  const [choseMetreFilter, setChoseMetreFilter] = React.useState("");
  return (
    <div className="border-b border-[#D4CFC8]/[0.07] bg-[#353b3c] px-5 py-4 flex flex-wrap items-center gap-3 relative z-20 shrink-0">
      {/* search input */}
      <div className="relative flex-1 w-100">
        <div className="relative">
          <input
            type="text"
            placeholder="جستجوی نام پروژه یا منطقه..."
            className="w-full bg-[#474f50] border border-[#D4CFC8]/[0.07] rounded-lg py-2.5 pr-10 pl-4 text-sm font-IRANYekanX-medium text-[#D4CFC8] placeholder:text-[#8a8880] placeholder:font-IRANYekanX-medium placeholder:text-xs outline-none focus:border-[#40E0D0]/60 transition-colors"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8880] size-4" />
        </div>
      </div>

      {/* situation content */}
      <div className="flex items-center gap-1 bg-[#474f50] border border-[#D4CFC8]/7 rounded-lg p-1 overflow-x-auto">
        <select
          name=""
          id=""
          className="bg-transparent text-sm text-[#D4CFC8] outline-none font-IRANYekanX-medium px-2 py-1.5 w-37"
        >
          <option value="all" className="bg-[#474f50]">
            همه وضعیت‌ها
          </option>
          <option value="active" className="bg-[#474f50]">
            ساخته شده
          </option>
          <option value="inactive" className="bg-[#474f50]">
            اماده تحویل
          </option>
          <option value="inactive" className="bg-[#474f50]">
            پیش فروش
          </option>
        </select>
      </div>

      {/* type of deal */}
      <div className="relative">
        <select className="appearance-none font-IRANYekanX-medium bg-[#474f50] border border-[#D4CFC8]/7 rounded-lg py-2.5 pl-8 pr-4 text-sm text-[#D4CFC8] outline-none cursor-pointer w-42">
          <option className="bg-[#474f50]">همه نوع معاملات</option>
          <option className="bg-[#474f50]">خرید</option>
          <option className="bg-[#474f50]">فروش</option>
          <option className="bg-[#474f50]">اجاره</option>
          <option className="bg-[#474f50]">رهن</option>
        </select>
        <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8880] size-4 pointer-events-none" />
      </div>

      {/* price range */}
      <div className="flex items-center gap-2 bg-[#474f50] border border-[#D4CFC8]/[0.07] rounded-lg p-1.5">
        <div className="relative border-l border-white/25">
          <input
            type="number"
            placeholder="از"
            className="w-34 bg-transparent text-sm font-kalame-Regular text-[#D4CFC8] placeholder:text-[#8a8880] placeholder:font-IRANYekanX-medium outline-none px-2  py-1.5"
          />
        </div>

        <div className="relative">
          <input
            type="number"
            placeholder="تا"
            className="w-30 bg-transparent text-sm font-kalame-Regular text-[#D4CFC8] placeholder:text-[#8a8880] placeholder:font-IRANYekanX-medium outline-none pl-2 py-1.5"
          />
        </div>
        <span className="text-[#8a8880] text-xs font-IRANYekanX-medium ml-1">
          تومان
        </span>
      </div>

      {/* room cunt */}
      <div
        className="relative w-40 bg-[#474f50] border border-[#D4CFC8]/[0.07] rounded-lg py-2 pl-8 group"
        onClick={() => setOpenModal((prev) => !prev)}
      >
        <span className="appearance-none  pr-4 text-xs font-IRANYekanX-medium text-[#D4CFC8] outline-none focus:border-[#40E0D0]/60 cursor-pointer ">
          {choseRoomFilter > 0 ? `${choseRoomFilter} خوابه` : "تعداد اتاق"}
        </span>
        <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8880] size-4  group-hover:rotate-180 transition-transform" />

        <RoomFilterModal
          open={openModal}
          onRoomSelect={(room) => {
            setChoseRoomFilter(room);
            setTimeout(() => setOpenModal(false), 0);
          }}
          onclose={() => setOpenModal(false)}
        />
      </div>

      {/* metraj filter */}
      <div
        className="relative w-40 bg-[#474f50] border border-[#D4CFC8]/[0.07] rounded-lg py-2 pl-8 group"
        onClick={() => setOpenMeterModal((prev) => !prev)}
      >
        <span className="appearance-none  pr-4 text-xs text-nowrap font-IRANYekanX-medium text-[#D4CFC8] outline-none focus:border-[#40E0D0]/60 cursor-pointer ">
          {choseMetreFilter !== "" ? `${choseMetreFilter} متراژ` : "متراژ"}
        </span>
        <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8880] size-4  group-hover:rotate-180 transition-transform" />

        <MetrajModal
          open={openMeterModal}
          onMeterSelect={(metre) => {
            setChoseMetreFilter(metre);
            setTimeout(() => setOpenMeterModal(false), 0);
          }}
          onclose={() => setOpenMeterModal(false)}
        />
      </div>
    </div>
  );
}

export default FilterBar;
