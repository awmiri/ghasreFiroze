import React from "react";
import { FaXmark } from "react-icons/fa6";

function MetrajModal({
  open,
  onMeterSelect,
  onclose,
}: {
  open: boolean;
  onMeterSelect: (metre: string) => void;
  onclose: () => void;
}) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-56 bg-[#474f50] border border-[#D4CFC8]/[0.07] overflow-hidden rounded-lg shadow-2xl max-h-60 ${open ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity z-1001`}
    >
      <span className="bg-white/30 p-2 flex items-center justify-between">
        <h3 className="font-IRANYekanX-Bold text-sm">متراژ ها</h3>
        <FaXmark
          className="hover:text-red-400"
          onMouseDown={(e) => {
            e.stopPropagation();
            onclose();
          }}
        />
      </span>
      <div className=" flex flex-col">
        {[
          { id: 1, name: "کمتر از 100", range: { max: 100 } },
          { id: 2, name: "بین 100 تا 150", range: { min: 100, max: 150 } },
          { id: 3, name: "بین 150 تا 200", range: { min: 150, max: 200 } },
          { id: 4, name: "بیشتر از 200", range: { min: 200 } },
        ].map((item) => (
          <div
            key={item.id}
            onClick={() => {
              onMeterSelect(item.name);
            }}
            className="flex items-center gap-2 px-3 py-2 hover:bg-[#D4CFC8]/[0.07] cursor-pointer"
          >
            <span className="text-sm text-[#D4CFC8] font-IRANYekanX-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetrajModal;
