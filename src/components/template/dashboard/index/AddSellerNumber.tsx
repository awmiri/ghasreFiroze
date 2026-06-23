"use client";
import { ToolsRowExpand } from "@/utils/tools/ui/row_expand";
import ToolsInputText1 from "@/utils/tools/ui/ToolsInputText";
import React, { useState } from "react";

function AddSellerNumber() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [allSeller, setAllSeller] = useState([]);
  console.log(allSeller);

  console.log(phone);
  console.log(name);

  const addSeller = () => {
    const user = {
      phone,
      name,
    };
    console.log(user);

    setAllSeller((prev) => [...prev, user]);
    setPhone("");
    setName("");
  };

  return (
    <div className="w-full space-y-3">
      <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-IRANYekanX-Bold text-right ">
            اطلاعات تماس
          </h4>
          <button
            className="bg-blue-300 hover:bg-blue-400 transition-all p-2 px-3 text-white rounded-xl"
            onClick={addSeller}
          >
            ثبت فروشنده
          </button>
        </div>

        <ToolsRowExpand>
          <ToolsInputText1
            type="text"
            title="نام فروشنده"
            value={name}
            onChange={(e) => setName(e)}
          />
          <ToolsInputText1
            type="text"
            title="شماره همراه"
            value={phone}
            onChange={(e) => setPhone(e)}
          />
        </ToolsRowExpand>
      </div>

      <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm space-y-3">
        <h4 className="text-lg font-IRANYekanX-Bold text-right ">
          شماره فروشندگان
        </h4>
        {allSeller.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {allSeller.map((seller, index) => (
              <div
                key={index}
                className=" flex items-center justify-around bg-white p-2.5 rounded-xl shadow font-IRANYekanX-medium"
              >
                <span>
                  <span>نام : </span>
                  <span> {seller?.name} </span>
                </span>
                <span>
                  <span>مبایل : </span>
                  <span> {seller?.phone} </span>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-center font-IRANYekanX-medium ">
              هنوز شحصی اضافه نشده
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddSellerNumber;
