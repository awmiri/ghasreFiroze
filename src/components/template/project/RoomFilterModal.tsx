import React from "react";
import { FaXmark } from "react-icons/fa6";

function RoomFilterModal({
  open,
  onRoomSelect,
  onclose,
}: {
  open: boolean;
  onRoomSelect: (room: number) => void;
  onclose: () => void;
}) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-56 bg-[#474f50] border border-[#D4CFC8]/[0.07] overflow-hidden rounded-lg shadow-2xl max-h-60 ${open ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity z-1001`}
    >
      <span className="bg-white/30 p-2 flex items-center justify-between">
        <h3 className="font-IRANYekanX-Bold text-sm">تعداد اتاق‌ها</h3>
        <FaXmark
          className="hover:text-red-400"
          onMouseDown={(e) => {
            e.stopPropagation();
            onclose();
          }}
        />
      </span>
      <div>
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            onClick={() => {
              onRoomSelect(num);
            }}
            className="flex items-center gap-2 px-3 py-2 hover:bg-[#D4CFC8]/[0.07] cursor-pointer"
          >
            <span className="text-sm text-[#D4CFC8] font-IRANYekanX-medium">
              {num} خوابه
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomFilterModal;
