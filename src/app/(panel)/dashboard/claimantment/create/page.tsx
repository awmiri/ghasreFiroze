"use client";
import {
  MakeMap,
  situationOfContact,
  typeOfContact,
  typeOfReq,
} from "@/config/data";
import useDataDropDown from "@/utils/tools/hook/useDataDropDown";
import { ToolsDropDown } from "@/utils/tools/ui";
import { ToolsRowExpand } from "@/utils/tools/ui/row_expand";
import ToolsInputText1 from "@/utils/tools/ui/ToolsInputText";
import React, { useState } from "react";
import { DatePicker } from "react-persian-range-picker";

function Page() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const category = useDataDropDown<string>(null, MakeMap(typeOfReq));
  const contactType = useDataDropDown<string>(null, MakeMap(typeOfContact));
  const situation = useDataDropDown<string>(null, MakeMap(situationOfContact));

  return (
    <div className="bg-slate-200 w-full min-h-screen rounded-tr-2xl p-4">
      <div className="bg-white rounded-xl p-6">
        <h3 className="font-IRANYekanX-Bold text-lg mb-4">ساخت خواهان جدید</h3>
        <div className="bg-slate-100 p-4 rounded-lg space-y-3 font-IRANYekanX-medium text-sm ">
          <ToolsRowExpand>
            <ToolsInputText1
              type="text"
              title="شماره تلفن"
              direction="ltr"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e)}
            />
            <ToolsInputText1
              type="text"
              title="نام و نام خانوادگی"
              value={userName}
              onChange={(e) => setUserName(e)}
            />
            <DatePicker
              value={selectedDate}
              placeholder="تاریخ تماس"
              onChange={(date) => setSelectedDate(date)}
              locale="fa"
              className="datepicker-input"
            />
          </ToolsRowExpand>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg space-y-3 mt-4 font-IRANYekanX-medium text-sm">
          <ToolsRowExpand>
            <ToolsDropDown
              label="نوع درخواست"
              data={category}
              searchable
              clearable
            />
            <ToolsDropDown
              label="نوع مخاطب"
              data={contactType}
              searchable
              clearable
            />
            <ToolsDropDown
              label="وضعیت"
              data={situation}
              searchable
              clearable
            />
          </ToolsRowExpand>
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="">توضیحات</label>
            <textarea
              name=""
              id=""
              placeholder="توضیحات"
              className="bg-white outline-0 p-2 rounded-2xl h-40 placeholder:text-sm font-IRANYekanX-medium"
            ></textarea>
          </div>
          <div className="flex items-center justify-end mt-6">
            <button className="bg-blue-500 font-IRANYekanX-Bold text-white h-10 w-20 rounded-2xl text-base">
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
