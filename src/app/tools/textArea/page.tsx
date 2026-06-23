'use client';
import { useState } from 'react';
import { FileText, MessagesSquare } from 'lucide-react';
import {ToolsTextarea} from "@/components/tools/ui";

// تعریف آیتم‌های منو
const menuItems = [
    { label: 'اطلاعات آگهی دریافت شد', value: 'اطلاعات آگهی دریافت شد' },
    { label: 'اطلاعات آگهی بروز شد', value: 'اطلاعات آگهی بروز شد' },
    { label: 'اطلاعات آگهی تکمیل شد', value: 'اطلاعات آگهی تکمیل شد' },
    { label: 'تور مجازی انجام شد', value: 'تور مجازی انجام شد' },
    { label: '🔍📁اطلاعات آگهی از منابع تحت رصد استخراج و در روزنامه ثبت شد\n(دیوار - فضای مجازی - دیگر منابع)\n\n⚠️ انتشار این آگهی صرفا جهت نمایش به کاربران بوده\nو به هیچ یک از کارشناسان سامانه پرستو جهت بررسی، کسب اطلاعات بیشتر و احراز هویت آگهی دهنده ارجاع داده نمی شود',
        value: '🔍📁اطلاعات آگهی از منابع تحت رصد استخراج و در روزنامه ثبت شد\n(دیوار - فضای مجازی - دیگر منابع)\n\n⚠️ انتشار این آگهی صرفا جهت نمایش به کاربران بوده\nو به هیچ یک از کارشناسان سامانه پرستو جهت بررسی، کسب اطلاعات بیشتر و احراز هویت آگهی دهنده ارجاع داده نمی شود' },
    { label: '⬅️📞 با پیگیری کارشناس از آگهی دهنده\n✅ فایل آگهی شده همچنان موجود و اطلاعات آن بروزرسانی/تکمیل شد',
        value: '⬅️📞 با پیگیری کارشناس از آگهی دهنده\n✅ فایل آگهی شده همچنان موجود و اطلاعات آن بروزرسانی/تکمیل شد' },
    { label: '❌📞 طی پیگیری و تماس تلفنی کارشناس\nآگهی دهنده پاسخگوی تلفن نبود\n\n⛔️ از نظر کارشناس این آگهی می تواند غیر واقعی و نامعتبر باشد',
        value: '❌📞 طی پیگیری و تماس تلفنی کارشناس\nآگهی دهنده پاسخگوی تلفن نبود\n\n⛔️ از نظر کارشناس این آگهی می تواند غیر واقعی و نامعتبر باشد' },
    { label: '🗄 فایل آگهی از سازنده/نماینده سازنده محترم دریافت شد\n\n🔖 اطلاعات اولیه آگهی جهت چاپ چابک در روزنامه منتشر شد\n\n📤 همچین آگهی برای پیگیری و ارتباط مجددا از سازنده\nجهت بروزرسانی و تکمیل اطلاعات فروش و قیمت به کارشناس مربوطه ارجاع داده شد\n\n🔁 در صورت هر گونه تکمیل یا تغییر اطلاعات، آگهی بروزرسانی خواهد شد',
        value: '🗄 فایل آگهی از سازنده/نماینده سازنده محترم دریافت شد\n\n🔖 اطلاعات اولیه آگهی جهت چاپ چابک در روزنامه منتشر شد\n\n📤 همچین آگهی برای پیگیری و ارتباط مجددا از سازنده\nجهت بروزرسانی و تکمیل اطلاعات فروش و قیمت به کارشناس مربوطه ارجاع داده شد\n\n🔁 در صورت هر گونه تکمیل یا تغییر اطلاعات، آگهی بروزرسانی خواهد شد' },
];

export default function TextareaWithMenuExample() {
    const [report, setReport] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold">Textarea با منو و دکمه Clear</h1>

            {/* نمونه با منو و clear */}


            {/* نمونه بدون منو */}
            <ToolsTextarea
                value={description}
                onChange={setDescription}
                label="توضیحات"
                placeholder="توضیحات خود را بنویسید..."
                rows={3}
                variant="filled"
            />
            <ToolsTextarea
                value={report}
                onChange={setReport}
                label="متن گزاره در دید"
                placeholder="متن خود را وارد کنید یا از منوی آماده انتخاب کنید..."
                rows={4}
                minRows={4}
                maxRows={8}
                autoResize
                menuItems={menuItems}
                menuIcon={<MessagesSquare className="w-4 h-4" />}
                menuTitle="متن‌های آماده"
                variant="outline"
                hint="می‌توانید از متن‌های آماده استفاده کنید یا خودتان بنویسید"
            />
            <ToolsTextarea
                value={report}
                onChange={setReport}
                label="متن گزاره در دید"
                placeholder="متن خود را وارد کنید یا از منوی آماده انتخاب کنید..."
                rows={4}
                autoResize
                clearable  // دکمه حذف با سطل آشغال قرمز
                menuItems={menuItems}  // منوی آماده
                menuPosition="bottom"  // منو به پایین باز میشه
                variant="outline"
            />

            {/* نمایش مقدار فعلی */}
            <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">مقدار فعلی:</h3>
                <p className="text-sm whitespace-pre-wrap">{report || 'هیچ متنی وارد نشده است'}</p>
            </div>
        </div>
    );
}