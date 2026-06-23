import { MapPin } from "lucide-react";
import React from "react";
import Map from "../../files/leftContent/Map";

function LocationTab() {
  return (
    <div className="bg-mainBgColor/50 relative z-10 rounded-2xl overflow-hidden h-80 flex items-center justify-center text-[#8a8880]">
      <Map />
    </div>
  );
}

export default LocationTab;
