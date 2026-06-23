import {
  buildingArea,
  buildingFacades,
  buildingGallery,
  floorMatterial,
  gallerySituationItems,
  HVAC,
  kitchen,
  MakeMap,
  moreFeature,
  nowSituation,
  parking,
  propertyDirections,
  propertyDirectionsGallery,
  propertyGalleryLocation,
  sharedAreasStatus,
  situation,
  wc,
} from "@/config/data";
import useDataDropDown from "@/utils/tools/hook/useDataDropDown";
import useMultiSelectDropDown from "@/utils/tools/hook/useDataDropDownMulti";
import { ToolsDropDown, ToolsDropDownMulti } from "@/utils/tools/ui";
import { ToolsRowExpand } from "@/utils/tools/ui/row_expand";
import ToolsInputText1 from "@/utils/tools/ui/ToolsInputText";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

interface EnterTheMoreInformationProp {
  nextItem: () => void;
}

function EnterTheMoreInformation({ nextItem }: EnterTheMoreInformationProp) {
  const moamele = useMultiSelectDropDown<string>([], MakeMap(buildingFacades));
  const areaType = useMultiSelectDropDown<string>([], MakeMap(buildingArea));
  const galleryType = useMultiSelectDropDown<string>(
    [],
    MakeMap(buildingGallery),
  );
  const feature = useMultiSelectDropDown<string>(
    [],
    MakeMap(sharedAreasStatus),
  );
  const nowSituations = useMultiSelectDropDown<string>(
    [],
    MakeMap(nowSituation),
  );
  const moreFeatureOfHouse = useMultiSelectDropDown<string>(
    [],
    MakeMap(moreFeature),
  );
  const situationOfHouse = useMultiSelectDropDown<string>(
    [],
    MakeMap(situation),
  );
  const situationOfWc = useMultiSelectDropDown<string>([], MakeMap(wc));
  const situationOfKitchen = useMultiSelectDropDown<string>(
    [],
    MakeMap(kitchen),
  );
  const situationOfHVAC = useMultiSelectDropDown<string>([], MakeMap(HVAC));
  const situationOfParking = useMultiSelectDropDown<string>(
    [],
    MakeMap(parking),
  );

  const situationOfFloor = useMultiSelectDropDown<string>(
    [],
    MakeMap(floorMatterial),
  );
  const gallerySituation = useMultiSelectDropDown<string>(
    [],
    MakeMap(gallerySituationItems),
  );

  const houseDirection = useDataDropDown<string>(
    null,
    MakeMap(propertyDirections),
  );

  const galleryDirection = useDataDropDown<string>(
    null,
    MakeMap(propertyDirectionsGallery),
  );

  const galleryLocation = useDataDropDown<string>(
    null,
    MakeMap(propertyGalleryLocation),
  );

  const apartmentDirection = useDataDropDown<string>(
    null,
    MakeMap(propertyDirections),
  );

  const [baseHomeMeter, setBaseHomeMeter] = useState("");
  const [homeMeter, setHomeMeter] = useState("");
  const [width, setWidth] = useState("");
  const [homeWidth, setHomeWidth] = useState("");
  const [floor, setFloor] = useState("");
  const [whichFloor, setWhichFloor] = useState("");
  const [room, setRoom] = useState("");
  const [allFlat, setAllFlat] = useState("");
  const [floorFlat, setFloorFlat] = useState("");
  const [changeableForApartment, setChangeableForApartment] = useState({
    isDoblex: false,
    isPentHouse: false,
    isLuxury: false,
    isFullFuture: false,
    isBorjBagh: false,
    isChenged: false,
    isDarbast: false,
    isBorjbagh: false,
    isKham: false,
  });

  const handleToggle = (key) => {
    setChangeableForApartment((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const itemsLabel = {
    isDoblex: "دوبلکس",
    isPentHouse: "پنت هاوس",
    isLuxury: "لاکچری",
    isFullFuture: "فول فیوچر",
    isBorjBagh: "برج باغ",
    isChenged: "چنج شده",
    isDarbast: "دربست",
    isBorjbagh: "برج باغ",
    isKham: "خام",
  };

  const [changeableForVilla, setChangeableForVilla] = useState({
    isDoblex: false,
    isTriplex: false,
    isLuxury: false,
    isFullFuture: false,
    isJungle: false,
    isBeach: false,
  });

  const handleToggleVilla = (key) => {
    setChangeableForVilla((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const itemsLabelVilla = {
    isDoblex: "دوبلکس",
    isTriplex: "تریبلکس",
    isLuxury: "لاکچری",
    isFullFuture: "فول فیوچر",
    isJungle: "جنگلی",
    isBeach: "ساحلی",
  };

  const [changeableForMoshaat, setChangeableForMoshaat] = useState({
    isElevator: false,
    isLobby: false,
    isRofGarden: false,
    isCarWash: false,
    isGym: false,
    isAssemblyHall: false,
  });

  const handleToggleMoshaat = (key) => {
    setChangeableForMoshaat((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const itemsLabelMoshaat = {
    isElevator: "اسانسوز",
    isLobby: "لابی",
    isRofGarden: "زوف گاردن",
    isCarWash: "کارواش",
    isGym: "باشگاه",
    isAssemblyHall: "سالن تجمعات",
  };

  // اضافه کن به stateهای قبلی
  const [otherFacilities, setOtherFacilities] = useState({
    isTerraceMasterBedroom: false,
    isPatio: false,
    isBalcony: false,
    isAntiTheftDoor: false,
    isEmergencyElectricity: false,
    isFireplace: false,
    isVideoIntercom: false,
    isStorage: false,
    isCentralInternet: false,
    isCentralSatellite: false,
    isGarbageChute: false,
    isCentralVacuum: false,
    isBarbecue: false,
    isCCTV: false,
    isFireExtinguishing: false,
    isFireAlarm: false,
  });

  // تابع handleToggle برای این بخش
  const handleOtherFacilitiesToggle = (key: keyof typeof otherFacilities) => {
    setOtherFacilities((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  // آبجکت لیبل‌های فارسی
  const otherFacilitiesLabel = {
    isTerraceMasterBedroom: "تراس مستر",
    isPatio: "پاسیو",
    isBalcony: "بالکن",
    isAntiTheftDoor: "درب ضد سرقت",
    isEmergencyElectricity: "برق اضطراری",
    isFireplace: "شومینه",
    isVideoIntercom: "آیفون تصویری",
    isStorage: "انباری",
    isCentralInternet: "اینترنت مرکزی",
    isCentralSatellite: "ماهواره مرکزی",
    isGarbageChute: "شوتینگ زباله",
    isCentralVacuum: "جاروبرقی مرکزی",
    isBarbecue: "باربیکیو",
    isCCTV: "دوربین مداربسته",
    isFireExtinguishing: "اطفاع حریق",
    isFireAlarm: "اعلام حریق",
  };

  const [countParking, setCountParking] = useState(0);

  let melk = "اپارتمان";
  return (
    <div className="w-full space-y-3">
      {["اپارتمان", "ویلا", "دفترکار", "مغازه", "زمین"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          {melk === "مغازه" ? (
            <>
              <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
                موقعیت مغازه
              </h4>

              <ToolsRowExpand>
                <ToolsDropDown
                  label="موقعیت ملک"
                  data={galleryDirection}
                  searchable
                  clearable
                />
                <ToolsDropDown
                  label="مشخصه ملک"
                  data={galleryLocation}
                  searchable
                  clearable
                />
              </ToolsRowExpand>
            </>
          ) : melk === "اپارتمان" ? (
            <>
              <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
                موقعیت ملک
              </h4>

              <ToolsRowExpand>
                <ToolsDropDown
                  label="موقعیت ملک"
                  data={houseDirection}
                  searchable
                  clearable
                />
                <ToolsDropDown
                  label="موقعیت واحد"
                  data={apartmentDirection}
                  searchable
                  clearable
                />
              </ToolsRowExpand>
            </>
          ) : (
            <ToolsDropDown
              label="موقعیت ملک"
              data={houseDirection}
              searchable
              clearable
            />
          )}
        </div>
      )}

      <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
        <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">متراژ</h4>

        <ToolsRowExpand>
          {["اپارتمان", "دفتر کار", "ویلا"].includes(melk) ? (
            <ToolsRowExpand>
              <ToolsInputText1
                type="text"
                title="متراژ بنا"
                direction="ltr"
                value={homeMeter}
                onChange={(e) => setHomeMeter(e)}
              />
              <ToolsInputText1
                type="text"
                title="متراژ زمین"
                direction="ltr"
                value={baseHomeMeter}
                onChange={(e) => setBaseHomeMeter(e)}
              />
            </ToolsRowExpand>
          ) : melk === "مغازه" ? (
            <ToolsInputText1
              type="text"
              title="متراژ کف"
              direction="ltr"
              value={baseHomeMeter}
              onChange={(e) => setBaseHomeMeter(e)}
            />
          ) : (
            <ToolsRowExpand>
              <ToolsInputText1
                type="text"
                title="متراژ زمین"
                direction="ltr"
                value={baseHomeMeter}
                onChange={(e) => setBaseHomeMeter(e)}
              />
              <ToolsInputText1
                type="text"
                title="عرض گذر"
                direction="ltr"
                value={width}
                onChange={(e) => setWidth(e)}
              />
              <ToolsInputText1
                type="text"
                title="عرض ملک"
                direction="ltr"
                value={homeWidth}
                onChange={(e) => setHomeWidth(e)}
              />
            </ToolsRowExpand>
          )}
        </ToolsRowExpand>
      </div>

      {["ویلا", "اپارتمان", "دفتر کار", "مغازه"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            تعداد اتاق و طبقه
          </h4>

          <ToolsRowExpand>
            {["اپارتمان", "دفترکار"].includes(melk) ? (
              <ToolsRowExpand>
                <ToolsInputText1
                  type="text"
                  title="تعداد طبقه"
                  value={floor}
                  onChange={(e) => setFloor(e)}
                />
                <ToolsInputText1
                  type="text"
                  title="طبقه چندم"
                  value={whichFloor}
                  onChange={(e) => setWhichFloor(e)}
                />
                <ToolsInputText1
                  type="text"
                  title="تعداد اتاق"
                  value={room}
                  onChange={(e) => setRoom(e)}
                />
                <ToolsInputText1
                  type="text"
                  title="تعداد کل واحد ها"
                  value={allFlat}
                  onChange={(e) => setAllFlat(e)}
                />
                <ToolsInputText1
                  type="text"
                  title="تعداد واحد در طبقه"
                  value={floorFlat}
                  onChange={(e) => setFloorFlat(e)}
                />
              </ToolsRowExpand>
            ) : melk === "ویلا" ? (
              <ToolsRowExpand>
                <ToolsInputText1
                  type="text"
                  title="تعداد طبقه"
                  value={floor}
                  onChange={(e) => setFloor(e)}
                />

                <ToolsInputText1
                  type="text"
                  title="تعداد اتاق"
                  value={room}
                  onChange={(e) => setRoom(e)}
                />
              </ToolsRowExpand>
            ) : (
              <ToolsInputText1
                type="text"
                title="طبقه چندم"
                value={whichFloor}
                onChange={(e) => setWhichFloor(e)}
              />
            )}
          </ToolsRowExpand>
        </div>
      )}

      {["ویلا", "اپارتمان", "دفترکار"].includes(melk) ? (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            نمای ساختمان
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="انتخاب نماهای ساختمان"
              data={moamele}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      ) : melk === "زمین" ? (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            نوع زمین
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="نوع زمین"
              data={areaType}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      ) : null}

      {["ویلا", "اپارتمان"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            مشخصه ملک
          </h4>
          {melk === "اپارتمان" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.keys(changeableForApartment).map((key) => (
                <label
                  key={key}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition-all duration-200 border border-gray-100 shadow-sm min-h-[52px]" // ارتفاع ثابت
                >
                  <span className="text-sm font-IRANYekanX-medium text-black/70">
                    {itemsLabel[key] || key.replace("is", "")}
                  </span>
                  <div className="relative flex-shrink-0">
                    {" "}
                    {/* جلوگیری از کوچک شدن */}
                    <input
                      type="checkbox"
                      checked={changeableForApartment[key]}
                      onChange={() => handleToggle(key)}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors duration-200 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                  </div>
                </label>
              ))}
            </div>
          ) : melk === "ویلا" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.keys(changeableForVilla).map((key) => (
                <label
                  key={key}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition-all duration-200 border border-gray-100 shadow-sm min-h-[52px]"
                >
                  <span className="text-sm font-IRANYekanX-medium text-black/70">
                    {itemsLabelVilla[key] || key.replace("is", "")}
                  </span>
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={changeableForVilla[key]}
                      onChange={() => handleToggleVilla(key)}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors duration-200 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                  </div>
                </label>
              ))}
            </div>
          ) : null}
        </div>
      )}

      {["ویلا", "اپارتمان"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            مشاعات
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.keys(changeableForMoshaat).map((key) => (
              <label
                key={key}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition-all duration-200 border border-gray-100 shadow-sm min-h-[52px]" // ارتفاع ثابت
              >
                <span className="text-sm font-IRANYekanX-medium text-black/70">
                  {itemsLabelMoshaat[key] || key.replace("is", "")}
                </span>
                <div className="relative flex-shrink-0">
                  {" "}
                  {/* جلوگیری از کوچک شدن */}
                  <input
                    type="checkbox"
                    checked={changeableForMoshaat[key]}
                    onChange={() => handleToggleMoshaat(key)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors duration-200 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {["ویلا", "اپارتمان"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            سایر امکانات
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.keys(otherFacilities).map((key) => (
              <label
                key={key}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition-all duration-200 border border-gray-100 shadow-sm min-h-[52px]"
              >
                <span className="text-sm font-IRANYekanX-medium text-black/70">
                  {otherFacilitiesLabel[
                    key as keyof typeof otherFacilitiesLabel
                  ] || key.replace("is", "")}
                </span>
                <div className="relative flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={
                      otherFacilities[key as keyof typeof otherFacilities]
                    }
                    onChange={() =>
                      handleOtherFacilitiesToggle(
                        key as keyof typeof otherFacilities,
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 transition-colors duration-200 peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {["زمین"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            وضعیت ملک
          </h4>
          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="وضعیت ملک"
              data={situationOfHouse}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      )}

      {["مغازه", "اپارتمان", "ویلا", "ذفترکار"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            نمای سقف و دیوار
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="سقف و دیوار"
              data={galleryType}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      )}

      {["اپارتمان", "ویلا", "ذفترکار"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            تاسیسات سرمایشی گرمایشی
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="سرمایشی گرمایشی"
              data={situationOfHVAC}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      )}

      {["اپارتمان", "ویلا", "ذفترکار"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            پوشش کف
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="پوشش کف"
              data={situationOfFloor}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      )}

      {["اپارتمان", "ویلا", "ذفترکار"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            سرویس بهداشتی و حمام
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="حموم دستشویی"
              data={situationOfWc}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      )}

      {["اپارتمان", "ویلا", "ذفترکار", "مغازه"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            نوع و تعداد پارکینگ
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="پارکینگ"
              data={situationOfParking}
              searchable
              clearable
            />
          </ToolsRowExpand>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-IRANYekanX-Bold text-xl">تعداد پارکینگ</p>
            <div className="bg-blue-200 p-2 flex items-center justify-end rounded-2xl gap-3 w-40">
              <span>
                <Plus onClick={() => setCountParking((prev) => prev + 1)} />
              </span>
              <span className="bg-white p-2 px-7 rounded-lg font-IRANYekanX-medium text-lg w-20 text-center">
                {countParking.toLocaleString("fa-IR")}
              </span>
              <span>
                <Minus onClick={() => setCountParking((prev) => prev - 1)} />
              </span>
            </div>
          </div>
        </div>
      )}

      {["اپارتمان", "ویلا", "ذفترکار"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            وضعیت اشپزحانه
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label="اشپزخانه"
              data={situationOfKitchen}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      )}

      {["اپارتمان", "ویلا", "ذفترکار", "مغازه"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            وضعیت ملک
          </h4>

          {melk === "مغازه" ? (
            <ToolsRowExpand>
              <ToolsDropDownMulti
                label=" وضعیت ملک"
                data={gallerySituation}
                searchable
                clearable
              />
            </ToolsRowExpand>
          ) : (
            <ToolsRowExpand>
              <ToolsDropDownMulti
                label="وضعیت ملک"
                data={situationOfHouse}
                searchable
                clearable
              />
            </ToolsRowExpand>
          )}
        </div>
      )}

      {["اپارتمان", "ویلا", "ذفترکار", "مغازه"].includes(melk) && (
        <div className="bg-slate-100 p-4 rounded-lg font-IRANYekanX-medium text-sm">
          <h4 className="text-lg font-IRANYekanX-Bold mb-3 text-right">
            وضعیت سکونت
          </h4>

          <ToolsRowExpand>
            <ToolsDropDownMulti
              label=" وضعیت سکونت"
              data={nowSituations}
              searchable
              clearable
            />
          </ToolsRowExpand>
        </div>
      )}

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

export default EnterTheMoreInformation;
