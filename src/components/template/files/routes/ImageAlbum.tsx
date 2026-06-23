"use client";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function ImageAlbum() {
  const images: string[] = [
    "/routePageAlbum/69b1235cef0d2.webp",
    "/routePageAlbum/69b1235cc39f2.webp",
    "/routePageAlbum/69b1235d468f8.webp",
    "/routePageAlbum/69b1235df2338.webp",
    "/routePageAlbum/69b1235e79e23.webp",
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const [selectedImg, setSelectedImg] = useState(images[currentImg]);

  const nextImage = () => {
    if (currentImg === 4) {
      setCurrentImg(0);
      setSelectedImg(images[0]);
    } else {
      setCurrentImg((prev) => prev + 1);
      setSelectedImg(images[currentImg + 1]);
    }
  };

  const prevImage = () => {
    if (currentImg === 0) {
      setCurrentImg(4);
      setSelectedImg(images[4]);
    } else {
      setCurrentImg((prev) => prev - 1);
      setSelectedImg(images[currentImg - 1]);
    }
  };

  return (
    <div className="mt-4">
      <div className="relative w-full h-100 bg-gray-100 rounded-xl overflow-hidden group">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/50 hover:bg-white/70 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
          onClick={prevImage}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/50 hover:bg-white/70 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
          onClick={nextImage}
        >
          <ChevronRight size={20} />
        </button>

        <div className="relative w-full h-full transition-opacity duration-300 ease-in-out">
          <Image
            key={selectedImg}
            src={selectedImg}
            alt="img"
            fill={true}
            className="object-cover transition-all duration-300"
          />
        </div>
        <div className="absolute font-kalame-Medium z-40 bg-black/50 text-white bottom-4 left-0 right-0 mx-auto w-12 h-7 rounded-xl flex items-center justify-center">{`${(currentImg + 1).toLocaleString("fa-IR")} / ${images.length.toLocaleString("fa-IR")}`}</div>
      </div>

      <div className="flex items-center justify-center flex-row-reverse mt-3 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
              index === currentImg
                ? "ring-2 ring-blue-500 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => {
              setSelectedImg(image);
              setCurrentImg(index);
            }}
          >
            <Image
              src={image}
              width={100}
              height={40}
              alt="home img"
              className="h-22"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageAlbum;
