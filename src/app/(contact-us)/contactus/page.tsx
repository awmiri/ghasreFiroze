import GallerySection from "@/components/template/contactus/GallerySection";
import HeroSection from "@/components/template/contactus/HeroSection";
import InfoAddresBox from "@/components/template/contactus/InfoAddresBox";
import MapSection from "@/components/template/contactus/MapSection";

import React from "react";

const ContactPage = () => {
  return (
    <div className="antialiased ">
      <div className="max-w-275 mx-auto px-8">
        {/* Hero Section */}
        <HeroSection />
        {/* Map Section */}
        <MapSection />
        {/* Info Cards Grid */}
        <InfoAddresBox />

        <GallerySection />
      </div>
    </div>
  );
};

export default ContactPage;
