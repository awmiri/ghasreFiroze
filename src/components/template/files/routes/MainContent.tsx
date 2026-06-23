import React from "react";
import BeardCrumb from "./BeardCrumb";
import ImageAlbum from "./ImageAlbum";

function MainContent() {
  return (
    <div className="p-4 bg-white rounded-xl">
      <div className="bg-slate-50 shadow-sm border border-slate-300/70 p-2.5 rounded-lg text-center font-IRANYekanX-Bold">
        فروش اپارتمان 200 متری در خیابان رضا
      </div>
      <BeardCrumb category={"مسکونی"} subCategory={"اپارتمان"} />
      <ImageAlbum />
      <div className="text-right mt-3 flex">
        <div className="w-full">
          <h4 className="font-IRANYekanX-Bold mb-1 text-lg"> توضیحات :</h4>
          <p className="text-sm text-justify font-IRANYekanX-medium text-black/70 leading-6">
            قیمت کم تکرار منطقه الهیه با سند اداری این واحد اداری در یک ساختمان
            لوکس و مرتب با موقعیت صد در صد اداری در یکی از بهترین نقاط منطقه
            الهیه واقع شده است. دسترسی ساختمان به اتوبان عالی است. سند اداری و
            میزبان تمامی مشاغل حرفه‌ای است. واحد دارای چهار اتاق (اتاق و سالن
            پارتیشن بندی شده) می‌باشد. پارکینگ، لابی تمام وقع میزبان ارباب رجوع
            شماست و امنیت واحد شما را تضمین می‌کند. چنانچه تمایل دارید بیزینس
            خود را در این واحد دنج اداری شروع یا ادامه دهید با من در تماس باشید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
