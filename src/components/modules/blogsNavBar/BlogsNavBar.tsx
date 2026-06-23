"use client";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";

interface Category {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

const categories: Category[] = [
  { id: "1", name: "برنامه نویسی", slug: "programming", count: 12 },
  { id: "2", name: "طراحی وب", slug: "web-design", count: 8 },
  { id: "3", name: "هوش مصنوعی", slug: "ai", count: 5 },
  { id: "4", name: "بازاریابی دیجیتال", slug: "marketing", count: 7 },
  { id: "5", name: "تجربه کاربری", slug: "ux", count: 4 },
];

function BlogsNavBar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const pathname = usePathname();
  const isBlogPage = pathname?.includes("/blogspage/blog") || false;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${isBlogPage ? "hidden" : "flex"} ${scrolled ? "pt-17" : ""} transition-all flex-col w-full 600px:w-45 800px:w-47 lg:w-fit xl:w-70 space-y-3 600px:sticky top-0 shrink-0`}
    >
      <div className="bg-[#474f50] border border-[#D4CFC8]/[0.07] flex items-center p-1.5 rounded-lg focus-within:border-[#40E0D0] transition-colors">
        <input
          type="text"
          className="border-0 outline-0 bg-transparent p-1 text-xs font-kalame-Medium lg:text-base w-full text-[#D4CFC8] placeholder:text-[#8a8880] placeholder:text-[10px] 800px:placeholder:text-[11px] lg:placeholder:text-xs placeholder:font-IRANYekanX-medium"
          placeholder="جستجو در بین اخبارها"
        />
        <Search className="left-0 top-2 text-[#40E0D0] size-4 800px:size-5" />
      </div>
      <div className="bg-[#474f50] border border-[#D4CFC8]/[0.07] shadow-xl p-2 rounded-lg">
        <div className="border-b border-[#D4CFC8]/[0.07] lg:text-[17px] text-[#D4CFC8] font-IRANYekanX-medium flex items-center gap-1.5 py-2.5 px-2">
          <BiCategory size={22} className="text-[#40E0D0]" />
          <span>دسته بندی</span>
          {selectedCategories.length > 0 && (
            <button
              onClick={() => setSelectedCategories([])}
              className="mr-auto text-xs text-[#40E0D0] hover:text-[#2ecfc0] transition-colors"
            >
              حذف همه
            </button>
          )}
        </div>

        <div className="p-2 space-y-1 800px:space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center justify-between cursor-pointer hover:bg-[#3c4142] p-2 rounded-md transition-colors"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-3 800px:w-4 h-3 800px:h-4 accent-[#40E0D0] rounded cursor-pointer"
                />
                <span className="text-[10px] 800px:text-xs lg:text-sm text-[#D4CFC8] font-IRANYekanX-medium">
                  {category.name}
                </span>
              </div>
              {category.count && (
                <span className="text-[11px] 800px:text-xs text-[#8a8880]">
                  ({category.count})
                </span>
              )}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsNavBar;
