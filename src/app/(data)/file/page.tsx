// app/page.tsx
import Image from "next/image";

const specifications = [
  { label: "مساحت", value: "۴۸۰ متر مربع" },
  { label: "سال ساخت", value: "۱۴۰۲" },
  { label: "تعداد طبقات", value: "۴۵" },
  { label: "انباری", value: "دارد (۲۴ متر مربع)" },
  { label: "طبقه", value: "پنت‌هاوس (۴۵ام)" },
  { label: "خط تلفن", value: "فیبر نوری" },
  { label: "جهت‌گیری", value: "شمال شرقی" },
  { label: "اتاق خواب", value: "۴ عدد (همگی سرویس اختصاصی)" },
  { label: "پارکینگ", value: "۳ جای رزرو" },
  { label: "سرویس بهداشتی", value: "۵/۵ عدد" },
  { label: "آسانسور", value: "خصوصی و فوق‌سریع" },
  { label: "نوع سند", value: "مالکیت آزاد" },
];

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#3c4142", color: "#d4cfc8" }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 pt-25">
        {/* دو ستونه اصلی */}
        <div className="flex gap-5 items-start flex-row-reverse">
          {/* ستون چپ (محتوای اصلی) */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* ۱. عکس اصلی */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "310px" }}
            >
              <Image
                src="/routePageAlbum/69b1235cc39f2.webp"
                alt="تصویر اصلی ملک"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/55 text-white text-xs px-3 py-1.5 rounded-full">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path d="M3 9h18M9 21V9" strokeWidth="2" />
                </svg>
                ۱ / ۱۲ عکس
              </div>
            </div>

            {/* ۲. بند انگشتی‌ها */}
            <div className="flex gap-2">
              {[
                "/routePageAlbum/69b1235cc39f2.webp",
                "/routePageAlbum/69b1235cef0d2.webp",
                "/routePageAlbum/69b1235df2338.webp",
                "/routePageAlbum/69b1235df2338.webp",
              ].map((src, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-xl overflow-hidden h-[78px] relative"
                >
                  <Image
                    src={src}
                    alt={`بند انگشتی ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="flex-1 rounded-xl h-[78px] relative overflow-hidden cursor-pointer bg-black/55">
                <Image
                  src="/routePageAlbum/69b1235df2338.webp"
                  alt="عکس‌های بیشتر"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center">
                  <span className="text-white font-semibold text-sm">+۷</span>
                  <span className="text-white text-xs opacity-80">بیشتر</span>
                </div>
              </div>
            </div>

            {/* ۳. گالری ویدیو */}
            <div>
              <h2
                className="text-[15px] font-bold flex items-center gap-2 mb-3"
                style={{ color: "#40e0d0" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#40e0d0" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                گالری ویدیو
              </h2>
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "auto auto",
                }}
              >
                {/* ویدیوی بزرگ */}
                <div className="relative rounded-2xl h-full overflow-hidden row-span-2 flex items-center justify-center">
                  <Image
                    src="/routePageAlbum/69b1235cc39f2.webp"
                    alt="ویدیوی شاخص"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer z-10">
                    <svg
                      className="w-5 h-5 text-gray-800 mr-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div
                    className="absolute bottom-3 right-3 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md"
                    style={{ backgroundColor: "#40e0d0" }}
                  >
                    تور شاخص
                  </div>
                </div>
                {/* ویدیوی کوچک ۱ */}
                <div
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ height: "115px" }}
                >
                  <Image
                    src="/routePageAlbum/69b1235cc39f2.webp"
                    alt="بند انگشتی ویدیو"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer z-10">
                    <svg
                      className="w-4 h-4 text-gray-800 mr-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                    ۰۲:۴۵
                  </div>
                </div>
                {/* ویدیوی کوچک ۲ */}
                <div
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ height: "115px" }}
                >
                  <Image
                    src="/routePageAlbum/69b1235cc39f2.webp"
                    alt="بند انگشتی ویدیو"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer z-10">
                    <svg
                      className="w-4 h-4 text-gray-800 mr-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                    ۰۰:۱۵
                  </div>
                </div>
              </div>
              {/* ویدیوی کوچک ۳ */}
              <div
                className="grid gap-2 mt-2"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <div />
                <div
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ height: "90px" }}
                >
                  <Image
                    src="/routePageAlbum/69b1235cc39f2.webp"
                    alt="بند انگشتی ویدیو"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer z-10">
                    <svg
                      className="w-4 h-4 text-gray-800 mr-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                    ۰۰:۵۰
                  </div>
                </div>
              </div>
            </div>

            {/* ۴. مشخصات فنی */}
            <div>
              <h2
                className="text-[15px] font-bold mb-4"
                style={{ color: "#40e0d0" }}
              >
                مشخصات فنی
              </h2>
              <div
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: "#474f50", backgroundColor: "#474f50" }}
              >
                {specifications.map((item, index) => (
                  <div
                    key={index}
                    className={`spec-row grid grid-cols-2 px-5 py-3 ${
                      index < specifications.length - 1 ? "border-b" : ""
                    }`}
                    style={{ borderColor: "#3c4142" }}
                  >
                    <div className="flex justify-between pr-6">
                      <span className="text-sm" style={{ color: "#8a8880" }}>
                        {item.label}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#d4cfc8" }}
                      >
                        {item.value}
                      </span>
                    </div>
                    {index % 2 === 0 && index + 1 < specifications.length && (
                      <div
                        className="flex justify-between pr-6 border-r"
                        style={{ borderColor: "#3c4142" }}
                      >
                        <span className="text-sm" style={{ color: "#8a8880" }}>
                          {specifications[index + 1].label}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#d4cfc8" }}
                        >
                          {specifications[index + 1].value}
                        </span>
                      </div>
                    )}
                    {index % 2 !== 0 && index + 1 < specifications.length && (
                      <div
                        className="pr-6 border-r"
                        style={{ borderColor: "#3c4142" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ۵. نمای کلی ملک */}
            <div>
              <h2
                className="text-[15px] font-bold mb-2"
                style={{ color: "#40e0d0" }}
              >
                نمای کلی ملک
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#d4cfc8" }}
              >
                در این پنت‌هاوس بی‌نظیر که در قلب منطقه اسکای هاربر بی واقع شده،
                تجربه‌ای از لوکس‌ترین سبک زندگی را خواهید داشت. با تراس‌های
                فراگیر و متریال‌های خاص، این ملک زندگی ساحلی را با چشم‌اندازهایی
                از خط آسمان شهر تا افق دریای نیلگون بازتعریف می‌کند. فضای داخلی
                شامل مجموعه‌ای از سنگ مرمر کمیاب ایتالیایی، کف‌پوش‌های بلوط
                فرانسوی و...
              </p>
              <button
                className="mt-2 flex items-center gap-1 text-sm font-medium"
                style={{ color: "#40e0d0" }}
              >
                نمایش بیشتر
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#40e0d0" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* ۶. امکانات ویژه */}
            <div>
              <h2
                className="text-[15px] font-bold mb-4"
                style={{ color: "#40e0d0" }}
              >
                امکانات ویژه
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[
                  { name: "خانه هوشمند" },
                  { name: "شارژر برق" },
                  { name: "باشگاه" },
                  { name: "استودیو یوگا" },
                  { name: "کانسیرژ ۲۴/۷" },
                  { name: "بار پشت بام" },
                ].map((amenity, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border"
                    style={{
                      borderColor: "#474f50",
                      backgroundColor: "#474f50",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#3c4142" }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#40e0d0" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <span
                      className="text-[11px] font-medium text-center leading-tight"
                      style={{ color: "#d4cfc8" }}
                    >
                      {amenity.name}
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: "#40e0d0" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* ۷. جزئیات موقعیت */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2
                  className="text-[15px] font-bold"
                  style={{ color: "#40e0d0" }}
                >
                  جزئیات موقعیت
                </h2>
                <span className="text-xs" style={{ color: "#8a8880" }}>
                  تاریخ ثبت: ۲ آبان ۱۴۰۲
                </span>
              </div>
              <div
                className="rounded-2xl overflow-hidden border grid grid-cols-[200px_1fr]"
                style={{ borderColor: "#474f50", backgroundColor: "#474f50" }}
              >
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <p
                      className="text-[9px] uppercase tracking-widest font-semibold mb-0.5"
                      style={{ color: "#8a8880" }}
                    >
                      شهر و منطقه
                    </p>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "#d4cfc8" }}
                    >
                      اسکای هاربر، منطقه نخبگان
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[9px] uppercase tracking-widest font-semibold mb-0.5"
                      style={{ color: "#8a8880" }}
                    >
                      آدرس کامل
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#d4cfc8" }}
                    >
                      سوئیت ۴۵۰۱، برج‌های شبه‌جزیره آبی، بلوار اوشنیک، SH 90210
                    </p>
                  </div>
                  <button
                    className="mt-1 flex items-center gap-1.5 text-sm border rounded-xl px-3 py-2 transition w-fit"
                    style={{ color: "#40e0d0", borderColor: "#40e0d0" }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#40e0d0" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    نمایش روی نقشه
                  </button>
                </div>
                <div
                  className="relative overflow-hidden"
                  style={{
                    minHeight: "220px",
                    background: "linear-gradient(135deg,#3c4142,#474f50)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div
                        className="absolute rounded-full animate-ping w-20 h-20"
                        style={{ backgroundColor: "#40e0d040" }}
                      />
                      <div
                        className="relative z-10 rounded-full px-4 py-2 shadow-xl flex items-center gap-2"
                        style={{ backgroundColor: "#474f50" }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          style={{ color: "#40e0d0" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#d4cfc8" }}
                        >
                          خانه جدید شما
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ستون راست (چسبان) */}
          <div className="w-[240px] flex-shrink-0 flex flex-col gap-4 sticky top-6 self-start">
            {/* کارت قیمت */}
            <div
              className="rounded-2xl p-5 border"
              style={{ borderColor: "#474f50", backgroundColor: "#474f50" }}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-[11px] uppercase tracking-widest font-semibold"
                  style={{ color: "#8a8880" }}
                >
                  برای فروش
                </span>
                <span
                  className="text-xs font-semibold cursor-pointer"
                  style={{ color: "#40e0d0" }}
                >
                  قابل مذاکره
                </span>
              </div>
              <div
                className="text-[28px] font-extrabold leading-tight mb-1"
                style={{ color: "#d4cfc8" }}
              >
                $۱۲,۴۵۰,۰۰۰
              </div>
              <div
                className="flex items-center gap-1 text-[12px]"
                style={{ color: "#8a8880" }}
              >
                $۲۵,۹۳۷ برای هر متر مربع
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#8a8880" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* کارت تور مجازی */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "128px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80"
                alt="تور مجازی"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(60,65,66,0.8), rgba(60,65,66,0.2))",
                }}
              />
              <div
                className="absolute top-2.5 left-2.5 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                style={{ backgroundColor: "#40e0d0" }}
              >
                آماده برای واقعیت مجازی
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div
                  className="font-bold text-[15px] leading-tight mb-0.5"
                  style={{ color: "#d4cfc8" }}
                >
                  تور مجازی ۳۶۰°
                </div>
                <div
                  className="text-[11px] opacity-70"
                  style={{ color: "#d4cfc8" }}
                >
                  در هر اتاق با کیفیت بالا قدم بزنید.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-1 -mt-1">
              <span className="text-sm" style={{ color: "#8a8880" }}>
                قدم بزنید
              </span>
              <span
                className="text-sm font-medium flex items-center gap-1 cursor-pointer"
                style={{ color: "#40e0d0" }}
              >
                شروع
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#40e0d0" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </div>

            {/* خط جداکننده */}
            <div className="border-t" style={{ borderColor: "#474f50" }} />

            {/* مشاور املاک */}
            <div>
              <p
                className="text-[10px] uppercase tracking-widest font-semibold mb-3"
                style={{ color: "#8a8880" }}
              >
                مشاور املاک
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 border-2 shadow-md overflow-hidden relative"
                  style={{ borderColor: "#40e0d0", backgroundColor: "#3c4142" }}
                >
                  <Image
                    src="https://i.pravatar.cc/80?img=12"
                    alt="مشاور"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: "#d4cfc8" }}
                  >
                    جولیان وین
                  </div>
                  <div className="text-xs mb-1" style={{ color: "#8a8880" }}>
                    مشاور ارشد لوکس
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#40e0d040", color: "#40e0d0" }}
                  >
                    ۱۲ سال سابقه
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="flex-1 border rounded-xl py-2.5 flex items-center justify-center transition"
                  style={{ borderColor: "#474f50", color: "#8a8880" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <button
                  className="flex-1 border rounded-xl py-2.5 flex items-center justify-center transition"
                  style={{ borderColor: "#474f50", color: "#8a8880" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* پروژه‌های مرتبط */}
      <div
        className="border-t mt-10 py-10"
        style={{ borderColor: "#474f50", backgroundColor: "#3c4142" }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[15px] font-bold" style={{ color: "#40e0d0" }}>
              پروژه‌های مرتبط
            </h2>
            <div className="flex gap-2">
              <button
                className="w-8 h-8 rounded-full border flex items-center justify-center transition"
                style={{
                  borderColor: "#474f50",
                  backgroundColor: "#474f50",
                  color: "#8a8880",
                }}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="w-8 h-8 rounded-full border flex items-center justify-center transition"
                style={{
                  borderColor: "#474f50",
                  backgroundColor: "#474f50",
                  color: "#8a8880",
                }}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {[
              {
                title: "ویلای خلیج یاقوت",
                price: "$۸.۲M",
                size: "۳۲۰ متر مربع",
                img: "/routePageAlbum/69b1235cc39f2.webp",
              },
              {
                title: "آپارتمان‌های زنیت",
                price: "$۴.۵M",
                size: "۲۱۰ متر مربع",
                img: "/routePageAlbum/69b1235cef0d2.webp",
              },
              {
                title: "عمارت آتریوم",
                price: "$۱۵.۰M",
                size: "۶۵۰ متر مربع",
                img: "/routePageAlbum/69b1235df2338.webp",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-shadow hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "#474f50" }}
              >
                <div className="h-40 relative">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute top-3 right-3 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "#40e0d0" }}
                  >
                    {project.price}
                  </div>
                </div>
                <div className="p-4">
                  <div
                    className="font-bold text-sm mb-2"
                    style={{ color: "#d4cfc8" }}
                  >
                    {project.title}
                  </div>
                  <div
                    className="flex items-center justify-between text-[11px]"
                    style={{ color: "#8a8880" }}
                  >
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#8a8880" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      {project.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#8a8880" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      منطقه نخبگان
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
