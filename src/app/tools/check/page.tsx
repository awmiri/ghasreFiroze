'use client';
import { useState } from 'react';
import { Mail, Bell, User, Settings, Star, Heart, Home } from 'lucide-react';
import {ToolsCheckbox, ToolsRadio} from "@/components/tools/ui";

export default function CheckboxRadioExample() {
    // حالت‌های چکباکس
    const [notifications, setNotifications] = useState(false);
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);


    const [selectedColor, setSelectedColor] = useState<string>('green');
    const [selectedSize, setSelectedSize] = useState<string>('md');

    // استفاده از هوک رادیو
    // const { value: selectedColor, onChange: setSelectedColor } = useRadioGroup<string>('green');
    // const { value: selectedSize, onChange: setSelectedSize } = useRadioGroup<string>('md');

    return (
        <div className="max-w-lg mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold mb-4">Checkbox & Radio</h1>

            {/* ===== Checkbox Examples ===== */}
            <div className="space-y-2">
                <h2 className="text-lg font-semibold mt-4">چکباکس‌ها</h2>

                {/* چکباکس ساده */}
                <ToolsCheckbox
                    value={notifications}
                    onChange={setNotifications}
                    title="فعال کردن نوتیفیکیشن"
                />

                {/* چکباکس با آیکون */}
                <ToolsCheckbox
                    value={emailAlerts}
                    onChange={setEmailAlerts}
                    title="دریافت ایمیل"
                    icon={<Mail className="w-5 h-5 text-blue-500" />}
                    iconColor="blue"
                />

                {/* چکباکس غیرفعال */}
                <ToolsCheckbox
                    value={false}
                    onChange={() => {}}
                    title="غیرفعال"
                    disabled
                />

                {/* چکباکس با سایز کوچک */}
                <ToolsCheckbox
                    value={smsAlerts}
                    onChange={setSmsAlerts}
                    title="پیامک"
                    size="sm"
                    hasBorder={false}
                />

                {/* چکباکس با رنگ سفارشی */}
                <ToolsCheckbox
                    value={true}
                    onChange={() => {}}
                    title="رنگ سفارشی"
                    activeColor="#FF3B30"
                    icon={<Heart className="w-5 h-5 text-red-500" />}
                    iconColor="red"
                />
            </div>

            {/* ===== Radio Examples ===== */}
            <div className="space-y-2 mt-8">
                <h2 className="text-lg font-semibold">رادیو باتن‌ها</h2>

                {/* گروه رادیو - رنگ */}
                <div className="bg-white rounded-lg shadow p-2 space-y-2">
                    <div className="p-2 text-sm font-medium text-gray-700">انتخاب رنگ:</div>
                    <ToolsRadio
                        value="green"
                        groupValue={selectedColor}
                        onChange={setSelectedColor}
                        title="سبز"
                        icon={<Star className="w-5 h-5 text-green-500" />}
                        iconColor="green"
                    />
                    <ToolsRadio
                        value="blue"
                        groupValue={selectedColor}
                        onChange={setSelectedColor}
                        title="آبی"
                        icon={<Star className="w-5 h-5 text-blue-500" />}
                        iconColor="blue"
                    />
                    <ToolsRadio
                        activeColor={"purple"}
                        value="red"
                        groupValue={selectedColor}
                        onChange={setSelectedColor}
                        title="قرمز"
                        icon={<Star className="w-5 h-5 text-red-500" />}
                        iconColor="red"
                    />
                </div>

                {/* گروه رادیو - سایز */}
                <div className="bg-white rounded-lg shadow p-2 mt-4 space-y-2">
                    <div className="p-2 text-sm font-medium text-gray-700">انتخاب سایز:</div>
                    <ToolsRadio
                        value="sm"
                        groupValue={selectedSize}
                        onChange={setSelectedSize}
                        title="کوچک"
                        size="sm"

                    />
                    <ToolsRadio
                        value="md"
                        groupValue={selectedSize}
                        onChange={setSelectedSize}
                        title="متوسط"
                        size="md"
                    />
                    <ToolsRadio
                        value="lg"
                        groupValue={selectedSize}
                        onChange={setSelectedSize}
                        title="بزرگ"
                        size="lg"
                    />
                </div>

                {/* رادیو غیرفعال */}
                <ToolsRadio
                    value="disabled"
                    groupValue={null}
                    onChange={() => {}}
                    title="غیرفعال"
                    disabled
                />
            </div>

            {/* نمایش مقادیر انتخاب شده */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">مقادیر انتخاب شده:</h3>
                <p>نوتیفیکیشن: {notifications ? 'فعال' : 'غیرفعال'}</p>
                <p>ایمیل: {emailAlerts ? 'فعال' : 'غیرفعال'}</p>
                <p>رنگ انتخاب شده: {selectedColor || 'هیچ'}</p>
                <p>سایز انتخاب شده: {selectedSize || 'هیچ'}</p>
            </div>
        </div>
    );
}