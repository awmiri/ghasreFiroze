import { Bath, Bed, LayoutGrid, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ListingData {
  name: string;
  location: string;
  img: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
}

interface RelatedCardProps {
  listing: ListingData;
}

function RelatedCard({ listing }: RelatedCardProps) {
  return (
    <div
      key={listing.name}
      className="border border-[#D4CFC8]/[0.07] rounded-2xl overflow-hidden bg-mainBgColor hover:border-[#40E0D0] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_-10px_#40E0D0]/20"
    >
      <div className="relative h-42.5">
        <Image
          src={listing.img}
          alt={listing.name}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 right-3 bg-[#40E0D0] text-mainBgColor text-[11.5px] font-IRANYekanX-Bold px-3 py-1.5 rounded-full">
          ویژه
        </span>
      </div>
      <div className="p-3.5 sm:p-4">
        <h3 className="font-IRANYekanX-Bold text-[16px] text-[#D4CFC8] mb-1.5">
          {listing.name}
        </h3>
        <p className="flex items-center gap-1.5 text-whiteTextColorPrime text-[13px] font-IRANYekanX-Regular mb-3">
          <MapPin className="size-3.5 text-[#40E0D0] shrink-0" />
          {listing.location}
        </p>
        <hr className="border-0 border-t border-[#D4CFC8]/[0.07] mb-3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#D4CFC8] text-[12.5px] font-IRANYekanX-Bold">
            <span className="flex items-center gap-1">
              <Bed className="size-3.5 text-[#40E0D0]" /> {listing.beds}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="size-3.5 text-[#40E0D0]" /> {listing.baths}
            </span>
            <span className="flex items-center gap-1">
              <LayoutGrid className="size-3.5 text-[#40E0D0]" /> {listing.area}
            </span>
          </div>
          <div className="text-[#40E0D0] font-IRANYekanX-Bold text-[15px] whitespace-nowrap">
            {listing.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedCard;
