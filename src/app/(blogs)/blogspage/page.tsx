// app/blogspage/page.tsx
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogsNavBar from "@/components/modules/blogsNavBar/BlogsNavBar";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";

function Page() {
  const blogs = ["", "", "", "", "", ""];

  return (
    <div className="mx-auto pt-24 px-15 max-lg:px-7.5 pb-16 h-full relative bg-[#3c4142] min-h-screen">
      <BreadCrumb
        crumb={[
          { id: 1, crumbTitle: "خانه", href: "/", last: false },
          { id: 2, crumbTitle: "همه مقالات", href: "/blogspage", last: true },
        ]}
      />
      <div className="flex max-600px:flex-col items-start justify-center gap-4 lg:gap-6 xl:gap-10 h-full mt-6">
        <BlogsNavBar />
        <main className="min-w-0 h-full w-full">
          <div className="grid 800px:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">
            {blogs.map((item, index) => (
              <div
                key={index}
                className="group p-3 bg-[#474f50] border border-[#D4CFC8]/[0.07] rounded-2xl overflow-hidden hover:border-[#40E0D0] hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(64,224,208,0.25)]"
              >
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={"/routePageAlbum/69b1235cc39f2.webp"}
                    width={400}
                    height={260}
                    className="w-full aspect-16/10 object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="image"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#3c4142]/60 to-transparent" />
                </div>

                <div className="flex items-center justify-between mt-4 pb-3.5 border-b border-[#D4CFC8]/[0.07]">
                  <div className="text-[10px] lg:text-[11px] font-IRANYekanX-medium flex items-center gap-1.5 text-[#D4CFC8]">
                    <Calendar className="size-3 lg:size-4 text-[#40E0D0]" />
                    <span className="text-[#8a8880] text-nowrap">
                      تاریخ انتشار :
                    </span>
                    <span className="text-nowrap">۱۳۸۲/۰۲/۱۰</span>
                  </div>
                  <div className="text-[10px] lg:text-[11px] font-IRANYekanX-medium flex items-center gap-1.5 text-[#D4CFC8]">
                    <Clock className="size-3 lg:size-4 text-[#40E0D0]" />
                    <span className="text-[#8a8880] text-nowrap">
                      زمان مطالعه :
                    </span>
                    <span className="text-nowrap">۱ دقیقه</span>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-IRANYekanX-Bold text-[14px] lg:text-[16px] text-[#D4CFC8] border-r-3 border-[#40E0D0] pr-2 leading-[1.6]">
                    طریقه کار با دریل ؟
                  </h3>
                  <p className="text-[12px] lg:text-[13px] font-IRANYekanX-medium text-[#8a8880] mt-2 leading-[1.7] line-clamp-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است
                  </p>
                  <Link
                    href={"/blogspage/1"}
                    className="relative text-[12px] lg:text-[14px] group/btn w-full flex items-center overflow-hidden justify-center gap-2 mt-4 p-2.5 bg-[#3c4142] border border-[#D4CFC8]/[0.07] rounded-lg font-IRANYekanX-Bold transition-all duration-300"
                  >
                    <span className="bg-[#40E0D0] w-full h-full absolute inset-0 z-10 translate-x-full group-hover/btn:translate-x-0 transition-all duration-300 ease-out" />
                    <span className="z-20 text-[#D4CFC8] group-hover/btn:text-[#3c4142] transition-all duration-300">
                      مطالعه کنید
                    </span>
                    <span className="z-20 text-[#D4CFC8] group-hover/btn:text-[#3c4142] transition-all duration-300">
                      <ArrowLeft className="size-3.5 lg:size-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
