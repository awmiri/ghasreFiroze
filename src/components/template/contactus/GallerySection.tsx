"use client";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Globe,
  Maximize2,
  Play,
  Video,
  X,
} from "lucide-react";
import React, { useState } from "react";

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("gallery");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      title: "نمای ورودی فروشگاه",
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
      title: "فضای داخلی فروشگاه",
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      title: "بخش مشاوره",
    },
    {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      title: "نمای دیگر فروشگاه",
    },
    {
      url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      title: "دفتر مدیریت",
    },
    {
      url: "https://images.unsplash.com/photo-1560185008-5a5f2d9daa6f?w=800&h=600&fit=crop",
      title: "لابی فروشگاه",
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <>
      <section className="pb-8 bg-[#3c4142]">
        <div className="text-center mb-12">
          <p className="text-[0.7rem] tracking-[0.22em] text-[#40E0D0] mb-4 inline-flex items-center gap-3 before:content-[''] before:w-7 before:h-px before:bg-[#40E0D0] after:content-[''] after:w-7 after:h-px after:bg-[#40E0D0] font-IRANYekanX-Bold">
            گالری رسانه
          </p>
          <h2 className="text-3xl md:text-4xl font-IRANYekanX-Bold text-[#D4CFC8] mb-4">
            فضای <em className="italic text-[#40E0D0]">فروشگاه ما</em> را ببینید
          </h2>
          <p className="text-[#8a8880] max-w-2xl mx-auto font-IRANYekanX-Regular">
            با گالری تصاویر، تور مجازی و ویدیوهای ما از نزدیک با فضای فروشگاه
            آشنا شوید
          </p>
        </div>

        {/* تب‌ها */}
        <div className="flex justify-center gap-4 mb-10 border-b border-[#D4CFC8]/[0.07] pb-4">
          {[
            {
              id: "gallery",
              icon: <Camera size={18} />,
              label: "گالری تصاویر",
            },
            {
              id: "virtualtour",
              icon: <Globe size={18} />,
              label: "تور مجازی",
            },
            { id: "video", icon: <Video size={18} />, label: "ویدیوی فروشگاه" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 font-IRANYekanX-Regular
                ${
                  activeTab === tab.id
                    ? "bg-[#40E0D0] text-[#3c4142]"
                    : "border border-[#D4CFC8]/25 text-[#D4CFC8] hover:bg-[#40E0D0] hover:text-[#3c4142] hover:border-[#40E0D0]"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* گالری تصاویر */}
        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#474f50] border border-[#D4CFC8]/[0.07] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#40E0D0]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#40E0D0]/90 rounded-full p-3">
                    <Maximize2 className="text-[#3c4142]" size={24} />
                  </div>
                </div>
                <div className="p-4 bg-[#474f50]">
                  <p className="text-[#D4CFC8] font-IRANYekanX-medium">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* تور مجازی */}
        {activeTab === "virtualtour" && (
          <div className="bg-[#474f50] rounded-2xl overflow-hidden border border-[#D4CFC8]/[0.07] shadow-lg">
            <div className="relative aspect-[16/9] bg-[#3c4142]">
              <iframe
                src="https://www.360cities.net/embed/paris-eiffel-tower-sunset-sunset-view?k=0.5&r=10"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="Virtual Tour"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#3c4142]/80 text-[#D4CFC8] px-4 py-2 rounded-lg text-sm text-center">
                <span className="inline-flex items-center gap-2 font-IRANYekanX-Bold">
                  <Globe size={16} />
                  برای حرکت در فضای فروشگاه، ماوس را بکشید یا از انگشت خود
                  استفاده کنید
                </span>
              </div>
            </div>
            <div className="p-6 text-center bg-[#474f50]">
              <h3 className="text-xl font-IRANYekanX-Bold text-[#D4CFC8] mb-2">
                تور ۳۶۰ درجه فروشگاه
              </h3>
              <p className="text-[#8a8880] font-IRANYekanX-Regular">
                با کلیک و کشیدن ماوس، می‌توانید به صورت ۳۶۰ درجه در فضای فروشگاه
                حرکت کنید و از نزدیک با امکانات ما آشنا شوید.
              </p>
            </div>
          </div>
        )}

        {/* ویدیو */}
        {activeTab === "video" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#474f50] rounded-2xl overflow-hidden border border-[#D4CFC8]/[0.07] shadow-lg">
              <div className="relative aspect-video bg-[#3c4142]">
                {!isVideoPlaying ? (
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=450&fit=crop"
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="bg-[#40E0D0] hover:bg-[#2ecfc0] transition-colors duration-300 rounded-full p-5 shadow-xl hover:scale-110"
                      >
                        <Play
                          size={40}
                          className="text-[#3c4142] fill-[#3c4142]"
                        />
                      </button>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Store Video"
                  />
                )}
              </div>
              <div className="p-6 bg-[#474f50]">
                <h3 className="font-IRANYekanX-Bold text-xl text-[#D4CFC8] mb-2">
                  معرفی کامل فروشگاه مریدیان
                </h3>
                <p className="text-[#8a8880] mb-4 font-IRANYekanX-Regular">
                  در این ویدیو با فضای فروشگاه، بخش‌های مختلف و خدمات ما آشنا
                  می‌شوید.
                </p>
                <div className="flex gap-3 text-sm text-[#40E0D0]">
                  <span className="flex items-center gap-1 font-IRANYekanX-medium">
                    <Video size={14} /> ۳ دقیقه
                  </span>
                  <span className="flex items-center gap-1 font-IRANYekanX-medium">
                    <Camera size={14} /> 4K
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-IRANYekanX-Bold text-[#D4CFC8] mb-4">
                ویدیوهای بیشتر
              </h3>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[#474f50] rounded-xl border border-[#D4CFC8]/[0.07] p-4 flex gap-4 cursor-pointer hover:border-[#40E0D0] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#3c4142]">
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=150&h=100&fit=crop"
                      alt={`Video ${item}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play size={20} className="text-[#40E0D0]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#D4CFC8] mb-1 font-IRANYekanX-medium">
                      {item === 1 && "تور تصویری بخش مشاوره"}
                      {item === 2 && "معرفی تیم حرفه‌ای مریدیان"}
                      {item === 3 && "نظرات مشتریان درباره خدمات ما"}
                    </h4>
                    <p className="text-[#8a8880] text-sm font-IRANYekanX-Regular">
                      {item === 1 && "آشنایی با فضای مشاوره و همکاری"}
                      {item === 2 && "با تیم متخصص و مجرب ما آشنا شوید"}
                      {item === 3 && "تجربه مشتریان از همکاری با مریدیان"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* لایت‌باکس */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-[#D4CFC8] hover:text-[#40E0D0] transition-colors"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-[#D4CFC8] hover:text-[#40E0D0] transition-colors bg-[#3c4142]/70 rounded-full p-2"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-[#D4CFC8] hover:text-[#40E0D0] transition-colors bg-[#3c4142]/70 rounded-full p-2"
          >
            <ChevronRight size={32} />
          </button>
          <div
            className="max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-[#D4CFC8] text-center mt-4">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default GallerySection;
