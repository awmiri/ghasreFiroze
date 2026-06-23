import React from "react";
import ProjectImageGallery from "./ProjectImageGallery";

interface ShowProjectModalProps {
  project: {
    name: string;
    loc: string;
    sqm: string;
    room: string;
    price: string;
    images: string[];
    status: string;
    label: string;
    desc: string;
    units: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

function ShowProjectModal({ project, isOpen, onClose }: ShowProjectModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 z-200 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#474f50] border border-[#D4CFC8]/[0.07] rounded-2xl max-w-137.5 w-full p-7 relative max-h-[85vh] overflow-y-auto z-150">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 bg-[#3c4142] border-0 rounded-full w-8 h-8 cursor-pointer text-[#D4CFC8] text-base flex items-center justify-center hover:bg-[#2f3334] transition-colors z-10"
        >
          ✕
        </button>

        <ProjectImageGallery
          images={project.images}
          projectName={project.name}
          statusLabel={project.label}
        />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium my-3"></div>

        <h3 className="text-[22px] font-IRANYekanX-Bold mb-1.5 text-[#D4CFC8]">
          {project.name}
        </h3>
        <p className="text-sm text-[#8a8880] font-IRANYekanX-Regular mb-3.5">
          📍 {project.loc}
        </p>
        <p className="text-sm leading-relaxed text-[#D4CFC8]/75 font-IRANYekanX-medium mb-5">
          {project.desc}
        </p>

        <div className="border-t border-[#D4CFC8]/[0.07] pt-4 grid grid-cols-2 gap-3 mb-5">
          <div>
            <p className="text-[11px] text-[#8a8880] mb-1 font-IRANYekanX-medium">
              قیمت پایه
            </p>
            <p className="text-base font-semibold text-[#D4CFC8] font-IRANYekanX-Regular">
              {project.price}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#8a8880] mb-1 font-IRANYekanX-medium">
              نوع واحد
            </p>
            <p className="text-base font-semibold text-[#D4CFC8] font-IRANYekanX-Regular">
              {project.units}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#8a8880] mb-1 font-IRANYekanX-medium">
              مساحت
            </p>
            <p className="text-base font-semibold text-[#D4CFC8] font-IRANYekanX-Regular">
              {project.sqm}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#8a8880] mb-1 font-IRANYekanX-medium">
              موقعیت
            </p>
            <p className="text-base font-semibold text-[#D4CFC8] font-IRANYekanX-Regular">
              {project.loc}
            </p>
          </div>
        </div>

        <button className="w-full py-3 bg-[#40E0D0] border-0 rounded-xl text-white text-sm font-IRANYekanX-Bold cursor-pointer font-sora hover:bg-[#2ecfc0] transition-colors">
          درخواست اطلاعات بیشتر ←
        </button>
      </div>
    </div>
  );
}

export default ShowProjectModal;
