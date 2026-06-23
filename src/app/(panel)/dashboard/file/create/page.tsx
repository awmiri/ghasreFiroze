import Navbar from "@/components/modules/navbar/Navbar";
import MainContent from "@/components/template/dashboard/index/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-200 w-full h-160 rounded-tr-2xl p-4 ">
      <MainContent />
    </div>
  );
}
