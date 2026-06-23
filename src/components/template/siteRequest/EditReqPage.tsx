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
import { FaXmark } from "react-icons/fa6";
import { DatePicker } from "react-persian-range-picker";
import "./datePicker.module.css";
interface EditReqPageType {
  onClose: () => void;
}

function EditReqPage({ onClose }: EditReqPageType) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const category = useDataDropDown<string>(null, MakeMap(typeOfReq));
  const contactType = useDataDropDown<string>(null, MakeMap(typeOfContact));
  const situation = useDataDropDown<string>(null, MakeMap(situationOfContact));
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="absolute flex flex-col border rounded-lg right-0 left-0 top-30 mx-auto z-50 bg-white shadow w-150">
      <span className="flex items-center justify-between w-full border-b border-b-gray-400 py-3 px-2">
        <p className="text-sm font-IRANYekanX-medium">
          تغییر در درخواست مشتریان
        </p>
        <span
          onClick={onClose}
          className="text-black/50 hover:text-red-600 transition-all"
        >
          <FaXmark />
        </span>
      </span>
      <div className="bg-slate-100 p-4 rounded-lg space-y-3 font-IRANYekanX-medium text-sm mt-4">
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
          <ToolsDropDown label="وضعیت" data={situation} searchable clearable />
        </ToolsRowExpand>
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="">توضیحات</label>
          <textarea
            name=""
            id=""
            placeholder="توضیحات"
            className="bg-white outline-0 p-2 rounded-2xl h-30 placeholder:text-sm font-IRANYekanX-medium"
          ></textarea>
        </div>
        <div className="flex items-center justify-end mt-6">
          <button className="bg-blue-500 font-IRANYekanX-Bold text-white h-10 w-20 rounded-2xl text-base">
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditReqPage;
