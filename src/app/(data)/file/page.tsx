// app/page.tsx
import LocationContent from "@/components/template/files/leftContent/LocationContent";
import MoreInformation from "@/components/template/files/leftContent/MoreInformation";
import SpatialFuture from "@/components/template/files/leftContent/SpatialFuture";
import TechnicalSpecifications from "@/components/template/files/leftContent/TechnicalSpecifications";
import VideoAndImageGallery from "@/components/template/files/leftContent/VideoAndImageGallery";
import ConsultantsBox from "@/components/template/files/rightContent/ConsultantsBox";
import PriceBox from "@/components/template/files/rightContent/PriceBox";
import VirtualTore from "@/components/template/files/rightContent/VirtualTore";
import MoreProductContent from "@/components/template/files/showMoreProduct/MoreProductContent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      <div className="mx-auto px-7.5 lg:px-14 py-8 pt-25">
        {/* main two column layout */}

        <div className="flex flex-col  gap-8 lg:gap-10 items-start lg:flex-row-reverse">
          {/* left content(main)*/}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* video and gallery */}
            <VideoAndImageGallery />

            {/* Technical Specifications */}
            <TechnicalSpecifications />

            {/* More Information */}
            <MoreInformation />

            {/* spatial future */}
            <SpatialFuture />

            {/* location content */}
            <LocationContent />
          </div>

          {/* right content of file*/}
          <div className="w-full lg:w-75 shrink-0 flex flex-col gap-4 lg:sticky lg:top-6 self-start">
            <PriceBox />

            <VirtualTore />

            <div className="border-t" style={{ borderColor: "#474f50" }} />

            <ConsultantsBox />
          </div>
        </div>
      </div>

      {/* related projects */}
      <div
        className="border-t mt-10 py-10"
        style={{ borderColor: "#474f50", backgroundColor: "#3c4142" }}
      >
        <div className="mx-auto px-4">
          <MoreProductContent />
        </div>
      </div>
    </div>
  );
}
