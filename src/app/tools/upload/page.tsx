'use client';
import { useState } from 'react';
import ToolsFileInput from "@/components/tools/ui/ToolsFileInput";
import ToolsImageUploader, {ImageFile} from "@/components/tools/ui/ToolsImageUploader";

export default function UploadExample() {
    const [files, setFiles] = useState<File[]>([]);
    const [images, setImages] = useState<ImageFile[]>([]);

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-8">
            <h1 className="text-2xl font-bold">آپلود فایل</h1>

            {/* File Input */}
            <ToolsFileInput
                value={files}
                onChange={setFiles}
                label="آپلود فایل"
                hint="می‌توانید چندین فایل انتخاب کنید"
                maxFiles={5}
                maxSize={20}
                accept=".pdf,.doc,.docx"
                multiple
            />

            {/* Image Uploader */}
            <ToolsImageUploader
                value={images}
                onChange={setImages}
                label="گالری تصاویر"
                hint="حداکثر ۱۰ تصویر، هر تصویر حداکثر ۵ مگابایت"
                maxImages={10}
                maxSize={1}
                aspectRatio={1}
            />
        </div>
    );
}
/*

خب یک سری تغییرات لازم داره
مورد فایل اکیه
مورد عکس خیلی مشکل داره
چند تا مشکل داره ولی میخوام خیلی شیک زده بشه بزار برات توضیح بدم و توصیف کنم
باکسی که برای اپلود گذاشتی الکی ارتفاع داره بشه دقیقا مثل فایل ولی فقط انواع عکس هارو بگیره
بعدش میخوام پایین باکس ورود فایل
یک  wrap توی فلاتر بزاری که از راست به چپ باکس های عکس بزاره که حالا کامل اونو توضیح میدم
ولی wrap باشه که وقتی به اخر فضاش رسید بره خط بعد
یک باکسی یا توضیحی هم باشه که نوشته باشه مثلا ۲ تا از ۸ تا فایل اپلود کردی
حالا خود هر باکس چجوری باشه
وقتی عکس ارسال میشه باکس هایی با سایز مثلا
 */