'use client';

import ToolsAlert from "@/components/tools/ui/ToolsAlert";
import ToolsDivider from "@/components/tools/ui/ToolsDivider";
import ToolsCard from "@/components/tools/ui/ToolsCard";
import ToolsNotice from "@/components/tools/ui/ToolsNotice";

export default function DisplayComponentsExample() {
    return (
        <div className="max-w-md mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">کامپوننت‌های نمایشی</h1>

            {/* Alert - هشدارها */}
            <ToolsAlert
                variant="error"
                title="خطا!"
                message="این بخش باید حتما پر شود"
            />

            <ToolsAlert
                variant="warning"
                message="کاربر گرامی، از آپلود تصاویر خلاف قوانین کشور خودداری نمایید"
                closable
            />

            <ToolsAlert
                variant="success"
                message="فایل با موفقیت آپلود شد"
            />

            {/* Divider - خط جداکننده */}
            <ToolsDivider />
            <ToolsDivider style="dashed" color="#CBD5E1" thickness={2} margin={8} />
            <ToolsDivider style="dotted" color="#94A3B8" thickness={1} />
            <ToolsDivider>جداساز با متن</ToolsDivider>
            <ToolsDivider orientation="left">سمت چپ</ToolsDivider>
            <ToolsDivider orientation="right">سمت راست</ToolsDivider>

            {/* Card - باکس‌ها */}
            <ToolsCard variant="elevated" hoverable>
                <p>این یک کارت با سایه و افکت hover است</p>
            </ToolsCard>

            <ToolsCard variant="outlined" padding="sm">
                <p className="text-sm">کارت با حاشیه و padding کم</p>
            </ToolsCard>

            {/* Notice - اطلاع‌رسانی ساده */}
            <ToolsNotice variant="info">
                آپلود ویدیو - فرمت‌های مجاز: MP4, MOV, AVI, WebM (حداکثر حجم: 10MB)
            </ToolsNotice>

            <ToolsNotice variant="warning">
                کاربر گرامی، از آپلود تصاویر خلاف قوانین کشور خودداری نمایید
            </ToolsNotice>
        </div>
    );
}