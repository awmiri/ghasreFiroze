import { Camera } from "lucide-react";
import Image from "next/image";

function VirtualTore() {
  return (
    <div>
      <div className="relative bg-mainBgColor/50 rounded-2xl h-70 overflow-hidden group cursor-pointer">
        <Image
          src="/routePageAlbum/69b1235d468f8.webp"
          alt="تور مجازی ۳۶۰ درجه"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Camera className="size-12 mx-auto mb-3 text-[#40E0D0] drop-shadow-lg" />
            <p className="font-IRANYekanX-Bold text-lg drop-shadow-lg">
              تور مجازی ۳۶۰ درجه
            </p>
            <p className="text-sm mt-1 opacity-80 drop-shadow-lg">
              برای مشاهده کلیک کنید
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualTore;
