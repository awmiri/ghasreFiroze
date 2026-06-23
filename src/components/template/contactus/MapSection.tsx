import { MapPin } from "lucide-react";
import React from "react";

function MapSection() {
  return (
    <section className="pb-10">
      <div className="rounded-[18px] overflow-hidden h-80 relative border border-[#c8c8be] transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3216.8202761874345!2d59.59853080224838!3d36.268142042557415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDE2JzA1LjEiTiA1OcKwMzUnNTguMCJF!5e0!3m2!1sen!2s!4v1782034889884!5m2!1sen!2s"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-5 left-5 bg-white border border-[#c8c8be] rounded-[10px] py-2 px-4 flex items-center gap-2 text-[0.78rem] font-IRANYekanX-medium pointer-events-none">
          <MapPin className="text-base" />
          دفتر مرکزی قصرفیروزه — مشهد، منطقه ۷
        </div>
      </div>
    </section>
  );
}

export default MapSection;
