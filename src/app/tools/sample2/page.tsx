'use client';
import { useState } from 'react';
import ToolsTagsInput from "@/components/tools/ui/ToolsTagsInput";
import ToolsPhoneInput from "@/components/tools/ui/ToolsPhoneInput";

export default function FormExample() {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Tailwind']);
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+98');

    return (
        <div className="max-w-md mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">ورودی‌های پیشرفته</h1>

            {/* Tags Input */}
            <ToolsTagsInput
                value={tags}
                onChange={setTags}
                label="تگ‌ها"
                placeholder="تگ جدید..."
                hint="Enter یا Tab برای اضافه کردن"
                maxTags={10}
                maxLength={20}
            />

            {/* Phone Input */}
            <ToolsPhoneInput
                value={phone}
                onChange={setPhone}
                countryCode={countryCode}
                onCountryCodeChange={setCountryCode}
                label="شماره تلفن"
                placeholder="912 123 4567"
                hint="شماره را بدون صفر وارد کنید"
            />

            {/* نمایش مقادیر */}
            <div className="p-4 bg-gray-50 rounded-lg">
                <p>تگ‌ها: {tags.join(', ')}</p>
                <p>شماره کامل: {countryCode}{phone}</p>
            </div>
        </div>
    );
}