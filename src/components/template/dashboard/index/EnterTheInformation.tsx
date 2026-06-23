"use client";
import { dealTypes, MakeMap, propertyTypes } from "@/config/data";
import useDataDropDown from "@/utils/tools/hook/useDataDropDown";
import useMultiSelectDropDown from "@/utils/tools/hook/useDataDropDownMulti";
import { ToolsDropDown, ToolsDropDownMulti } from "@/utils/tools/ui";
import ToolsInputText from "@/utils/tools/ui/input";
import { ToolsRowExpand } from "@/utils/tools/ui/row_expand";
import ToolsInputText1 from "@/utils/tools/ui/ToolsInputText";
import React, { useState } from "react";
import { BiMoney } from "react-icons/bi";
import { IoArrowForward, IoCall } from "react-icons/io5";

interface EnterTheInformationProp {
  nextItem: () => void;
}
function EnterTheInformation({ nextItem }: EnterTheInformationProp) {
  const category = useDataDropDown<string>(null, MakeMap(propertyTypes));

  const subcategory = useDataDropDown<string>(null, MakeMap(dealTypes));

  const [metrePrice, setMetrePrice] = useState("");
  const [fullPrice, setFullPrice] = useState("");
  const [title, setTitle] = useState("");
  const [rentHousePrice, setRentHousePrice] = useState("");
  const [fullRentHousePrice, setFullRentHousePrice] = useState("");
  const [ovarde, setOvarde] = useState("");
  const [changeable, setChangeable] = useState(false);
  return (
    <div className=" w-full space-y-4 ">
      <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
        <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
          نوع ملک
        </h4>

        <ToolsRowExpand>
          <ToolsDropDown
            label="انتخاب نوع ملک"
            data={category}
            searchable
            clearable
          />
          <ToolsDropDown
            label="نوع معامله"
            data={subcategory}
            searchable
            clearable
          />
        </ToolsRowExpand>
      </div>

      {category.value && subcategory.value ? (
        <>
          <div className="bg-slate-100 p-4 rounded-lg space-y-3 font-IRANYekanX-medium text-sm">
            <h4 className="text-lg font-IRANYekanX-Bold  text-right">
              اطلاعات قیمتی
            </h4>
            {category.value && subcategory.value ? (
              <>
                {subcategory.value === "فروش" ? (
                  <>
                    <ToolsRowExpand>
                      <ToolsInputText1
                        type="text"
                        title="قیمت هر متر"
                        value={metrePrice}
                        onChange={(e) => setMetrePrice(e)}
                        direction="ltr"
                      />
                      <ToolsInputText1
                        type="text"
                        title="قیمت کل"
                        direction="ltr"
                        value={fullPrice}
                        onChange={(e) => setFullPrice(e)}
                      />
                    </ToolsRowExpand>
                  </>
                ) : subcategory.value === "رهن کامل" ? (
                  <ToolsInputText1
                    type="text"
                    title="قیمت رهن"
                    value={rentHousePrice}
                    direction="ltr"
                    onChange={(e) => setRentHousePrice(e)}
                  />
                ) : subcategory.value === "رهن و اجاره" ? (
                  <>
                    <ToolsRowExpand>
                      <ToolsInputText1
                        type="text"
                        title="قسمت رهن"
                        direction="ltr"
                        value={rentHousePrice}
                        onChange={(e) => setRentHousePrice(e)}
                      />
                      <ToolsInputText1
                        type="text"
                        title="قیمت اجاره"
                        direction="ltr"
                        value={fullRentHousePrice}
                        onChange={(e) => setFullRentHousePrice(e)}
                      />
                      <label className="flex items-center justify-between w-full px-4 py-2 rounded-xl cursor-pointer md:px-6 bg-white">
                        <div className="flex items-center flex-1 gap-3">
                          <div className="flex items-center justify-center text-blue-600 rounded-lg w-9 h-9 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400">
                            <BiMoney className="size-6  " />
                          </div>
                          <span className="text-sm font-IRANYekanX-medium text-black/50">
                            قابل تبدیل
                          </span>
                        </div>
                        <input
                          id="contact-toggle-phone"
                          data-contact-toggle="phone"
                          name="show_phone"
                          type="checkbox"
                          checked={changeable}
                          onChange={(e) => setChangeable(e.target.checked)}
                          value="1"
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-colors duration-200 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                      </label>
                    </ToolsRowExpand>
                  </>
                ) : subcategory.value === "پیش فروش" ? (
                  <>
                    <ToolsRowExpand>
                      <ToolsInputText1
                        type="text"
                        title="قیمت هر متر"
                        value={metrePrice}
                        onChange={(e) => setMetrePrice(e)}
                        direction="ltr"
                      />
                      <ToolsInputText1
                        type="text"
                        title="قیمت کل"
                        value={fullPrice}
                        direction="ltr"
                        onChange={(e) => setFullPrice(e)}
                      />
                      <ToolsInputText1
                        type="text"
                        title="قیمت اورده"
                        direction="ltr"
                        value={ovarde}
                        onChange={(e) => setOvarde(e)}
                      />
                    </ToolsRowExpand>
                  </>
                ) : subcategory.value === "معاوضه" ? (
                  <>
                    <ToolsRowExpand>
                      <ToolsInputText1
                        type="text"
                        title="قیمت هر متر"
                        value={metrePrice}
                        onChange={(e) => setMetrePrice(e)}
                        direction="ltr"
                      />
                      <ToolsInputText1
                        type="text"
                        title="قیمت کل"
                        value={fullPrice}
                        direction="ltr"
                        onChange={(e) => setFullPrice(e)}
                      />
                    </ToolsRowExpand>
                  </>
                ) : null}
              </>
            ) : (
              <p className="text-xl text-center mt-6 font-IRANYekanX-Bold text-black/40">
                هنوز نوع ملک را انتخاب نکردین
              </p>
            )}
          </div>

          <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
            <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
              عنوان اگهی
            </h4>

            <ToolsRowExpand>
              <ToolsInputText1
                type="text"
                title="عنوان اگهی"
                value={title}
                onChange={(e) => setTitle(e)}
              />
            </ToolsRowExpand>
          </div>

          <div className="overflow-hidden rounded-xl w-full h-22">
            <textarea
              cols={4}
              name=""
              id=""
              className="bg-slate-100 border-0 outline-0 w-full h-30 p-2 placeholder:font-IRANYekanX-medium placeholder:text-xs placeholder:text-black/30"
              placeholder={`توضیحات ${subcategory.value ? subcategory.value : ""} ${category.value ? category.value : ""}`}
            ></textarea>
          </div>
        </>
      ) : null}
      <button
        onClick={nextItem}
        className="bg-blue-500 group cursor-pointer transition-all hover:bg-blue-600 text-white p-1.5 w-full rounded-xl font-kalame-Medium flex items-center justify-center relative h-11"
      >
        <p className="transition-all duration-300 absolute group-hover:opacity-0 group-hover:translate-x-3">
          ثبت اطلاعات اگهی
        </p>

        <IoArrowForward
          size={25}
          className="transition-all rotate-180 duration-300 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </button>
    </div>
  );
}

export default EnterTheInformation;
