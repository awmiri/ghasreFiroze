import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import { Clock, Timer, User2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
function page() {
  return (
    <div
      className="flex flex-col gap-3 w-full pt-30 pb-20 px-4 lg:px-8 xl:px-15 bg-[#3c4142] min-h-screen"
      dir="rtl"
    >
      <BreadCrumb
        crumb={[
          { id: 1, crumbTitle: "خانه", href: "/", last: false },
          { id: 2, crumbTitle: "همه مقالات", href: "/blogspage", last: false },
          { id: 3, crumbTitle: "کاربا دریل", href: "", last: true },
        ]}
      />
      <div className="flex max-lg:flex-col gap-8 w-full mt-4">
        {/* محتوای اصلی */}
        <div className="bg-[#474f50] border border-[#D4CFC8]/[0.07] shadow-2xl p-4 sm:p-6 lg:p-8 w-full lg:w-200 xl:w-full rounded-2xl">
          <div className="border-b border-[#D4CFC8]/[0.07] mb-4 pb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#40E0D0] inline-block" />
              <span className="text-[11px] tracking-[3px] text-[#40E0D0] font-IRANYekanX-Bold">
                مقاله آموزشی
              </span>
            </div>
            <h1 className="font-IRANYekanX-Bold text-xl sm:text-2xl lg:text-3xl text-[#D4CFC8] leading-[1.5]">
              Ajax چیست؟ مفهوم، کاربردها و نمونه کد
            </h1>
          </div>

          <div className="py-2 pb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-1.5 font-IRANYekanX-medium text-sm text-[#8a8880]">
                <User2 size={18} className="text-[#40E0D0]" />
                <span>نویسنده :</span>
                <span className="text-[#D4CFC8] text-[12px]">شهرام خندقی</span>
              </div>
              <div className="flex items-center gap-1.5 font-IRANYekanX-medium text-sm text-[#8a8880]">
                <Clock size={18} className="text-[#40E0D0]" />
                <span className="text-[#D4CFC8] text-[12px]">10 بهمن 1405</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-IRANYekanX-medium text-sm text-[#8a8880]">
              <Timer size={18} className="text-[#40E0D0]" />
              <span>9 دقیقه مطالعه</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={"/routePageAlbum/69b1235cc39f2.webp"}
              width={1000}
              height={500}
              className="w-full h-56 sm:h-72 lg:h-90 object-cover rounded-xl"
              alt="عکس بلاگ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3c4142]/40 to-transparent" />
          </div>

          <p className="text-sm sm:text-[15px] font-IRANYekanX-medium mt-8 text-justify leading-7.5 lg:leading-8.5 text-[#D4CFC8]/85">
            Ajax (ایجکس) برگرفته از عبارت "Asynchronous JavaScript and XML" و به
            معنای جاوا اسکریپت و XML ناهمگام است و به‌عنوان روشی برای برقرارکردن
            ارتباط میان سرور و کلاینت شناخته می‌شود. با استفاده از Ajax
            می‌توانید بخش‌های مختلف یک وب‌سایت را بدون نیاز به بارگذاری دوباره
            کل صفحه، به‌روزرسانی کنید و تجربه کاربری بهتر خلق نمایید. این تکنیک،
            یکی از ابزارهایی است که به وب‌سایت‌ها امکان پویایی بیشتر می‌دهد. در
            این مطلب از مجله سبزلرن قصد داریم بررسی کنیم Ajax چیست، چه نقشی در
            وب ایفا می‌کند و مسیر درست یادگیری آن چگونه است. Ajax چیست و چرا مهم
            است؟ Ajax روشی است که امکان ساخت صفحات وب سریع و پویا را فراهم
            می‌کند و به توسعه‌دهندگان اجازه می‌دهد تنها با تبادل حجم محدودی از
            داده با سرور، بخش‌هایی از صفحه را به‌صورت غیرهمزمان به‌روزرسانی
            کنند، بدون آن‌که کل صفحه دوباره بارگذاری شود. در پاسخ به این سوال هم
            که Ajax چیست هم باید بگوییم به مجموعه‌ای از تکنیک‌ها در توسعه وب که
            ارتباط غیر همزمان بین مرورگر و سرور را ممکن می‌سازد در اصطلاح ایجکس
            می‌گویند. پیش از Ajax، حتی برای دریافت اطلاعات ساده، کاربر مجبور به
            Refresh کامل صفحه بود، اما با این فناوری تجربه کاربری بسیار روان‌تر
            و سریع‌تر شده است. نمونه‌هایی مانند جست‌وجوی زنده، لایک کردن یا
            پیام‌رسانی بدون رفرش صفحه. یکی از مثال‌های شناخته‌شده استفاده از
            Ajax، قابلیت Google Suggest است که هنگام تایپ در نوار جستجوی گوگل،
            پیشنهادها را فورا از سرور دریافت و نمایش می‌دهد، و به همین دلیل
            وب‌سایت‌های بزرگی مانند Gmail، YouTube و Facebook به‌طور گسترده از
            Ajax استفاده می‌کنند. آشنایی با مفهوم asynchronous بودن قبل از شروع
            یادگیری Ajax، لازم است با مفهوم درخواست‌های "Asynchronous" آشنا
            شوید. درخواست‌ها به دو دسته "Synchronous" و "Asynchronous" تقسیم
            می‌شوند. در درخواست‌های "Synchronous"، عملیات‌ها به‌صورت متوالی اجرا
            می‌شوند و تا زمانی که یک درخواست به‌طور کامل پردازش نشود، درخواست
            بعدی آغاز نمی‌شود. این نوع درخواست‌ها باعث مسدود شدن Thread اصلی
            مرورگر می‌شوند و تا پایان درخواست، اجرای سایر کدها و تعامل کاربر
            متوقف می‌گردد که در نتیجه تجربه کاربری به‌شدت کاهش می‌یابد. در
            مقابل، درخواست‌های "Asynchronous" بدون مسدود کردن Thread اصلی اجرا
            می‌شوند و به مرورگر اجازه می‌دهند هم‌زمان به سایر وظایف و تعاملات
            کاربر پاسخ دهد، که این موضوع منجر به عملکرد روان‌تر و تجربه کاربری
            بهتر می‌شود.
          </p>
        </div>

        {/* سایدبار */}
        <div className="flex flex-col gap-6 w-full lg:w-72 shrink-0">
          {/* جدیدترین نوشته‌ها */}
          <div className="px-4 h-fit bg-[#474f50] border border-[#D4CFC8]/[0.07] shadow-2xl rounded-2xl flex flex-col py-5">
            <div className="flex items-center gap-1.5 mb-4">
              <h3 className="text-sm font-IRANYekanX-Bold text-[#D4CFC8]">
                جدیدترین نوشته‌ها
              </h3>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="font-IRANYekanX-medium text-sm text-[#D4CFC8] bg-[#3c4142] hover:bg-[#40E0D0] hover:text-[#3c4142] transition-all cursor-pointer p-3 w-full rounded-xl">
                آشنایی با مصالح
              </span>
              <span className="font-IRANYekanX-medium text-sm text-[#D4CFC8] bg-[#3c4142] hover:bg-[#40E0D0] hover:text-[#3c4142] transition-all cursor-pointer p-3 w-full rounded-xl">
                آشنایی با ساختمان
              </span>
            </div>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="px-4 h-fit bg-[#474f50] border border-[#D4CFC8]/[0.07] shadow-2xl rounded-2xl flex flex-col py-5">
            <div className="flex items-center gap-1.5 mb-4">
              <CiShare2 size={20} className="text-[#40E0D0]" />
              <span className="text-[12px] sm:text-xs font-IRANYekanX-medium text-[#D4CFC8] leading-[1.7]">
                برای دیدن بیشتر آموزش‌ها مارو در شبکه‌های اجتماعی دنبال کنید
              </span>
            </div>
            <ul className="flex justify-center gap-3 flex-wrap">
              {[
                {
                  path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                },
                {
                  path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                },
                {
                  path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                },
                {
                  path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                  evenodd: true,
                },
                {
                  path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                  evenodd: true,
                },
              ].map((icon, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3c4142] text-[#8a8880] hover:bg-[#40E0D0] hover:text-[#3c4142] transition-all"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        clipRule={icon.evenodd ? "evenodd" : undefined}
                        fillRule={icon.evenodd ? "evenodd" : undefined}
                        d={icon.path}
                      ></path>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* تماس با ما (سکشن اضافه شده) */}
          <div className="px-4 h-fit bg-[#40E0D0] shadow-2xl rounded-2xl flex flex-col py-6 text-center">
            <h3 className="text-[15px] font-IRANYekanX-Bold text-[#3c4142] mb-2">
              نیاز به مشاوره دارید؟
            </h3>
            <p className="text-[12px] font-IRANYekanX-medium text-[#3c4142]/70 mb-4 leading-[1.7]">
              تیم ما آماده پاسخگویی به سوالات شماست.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center gap-2 bg-[#3c4142] text-[#D4CFC8] text-[12px] font-IRANYekanX-Bold tracking-[2px] px-6 py-3 rounded-xl hover:bg-[#2f3334] transition-all"
            >
              ارتباط با ما
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
