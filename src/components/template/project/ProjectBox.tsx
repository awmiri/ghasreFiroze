import React from "react";
import ProjectImageGallery from "./ProjectImageGallery";
import ShowProjectModal from "./ShowProjectModal";

interface ProjectBoxProps {
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
}
function ProjectBox({
  name,
  loc,
  sqm,
  room,
  price,
  images,
  status,
  label,
  desc,
  units,
}: ProjectBoxProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="project-card flex flex-col gap-3 py-3 px-3 border border-[#D4CFC8]/[0.07] cursor-pointer hover:bg-[#474f50] transition-colors rounded-lg"
      >
        <ProjectImageGallery
          images={images}
          projectName={name}
          statusLabel={label}
        />
        <div className="flex-1 min-w-0">
          <h2 className="text-md font-IRANYekanX-Bold m-0 mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-[#D4CFC8]">
            {name}
          </h2>
          <p className="text-xs font-IRANYekanX-Regular text-[#8a8880] m-0 mb-2 mt-1">
            {loc} · {sqm} . {room}
          </p>
          <p className="text-sm font-semibold m-0 font-IRANYekanX-medium text-[#D4CFC8]">
            {price}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <ShowProjectModal
          project={{
            name,
            loc,
            sqm,
            room,
            price,
            images,
            status,
            label,
            desc,
            units,
          }}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default ProjectBox;
