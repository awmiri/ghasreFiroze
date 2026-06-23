'use client';
import { useState } from 'react';
import { Settings, Bell, User, Shield, Info } from 'lucide-react';
import ToolsExpansionTile from "@/components/tools/ui/ToolsExpansionTile";
import ToolsListTile from "@/components/tools/ui/ToolsListTile";
import ToolsSwitch from "@/components/tools/ui/ToolsSwitch";

export default function ExpansionTileExample() {
    const [notifications, setNotifications] = useState(false);
    const [expandedSection, setExpandedSection] = useState<string | null>('settings');

    return (
        <div className="max-w-lg mx-auto p-4 space-y-2">
            <h1 className="text-2xl font-bold mb-4">مثال‌های ExpansionTile</h1>

            {/* 1. ExpansionTile ساده */}
            <ToolsExpansionTile
                title="تنظیمات عمومی"
                subtitle="مدیریت تنظیمات اصلی برنامه"
                leading={<Settings className="w-5 h-5 text-gray-500" />}
            >
                <div className="space-y-2">
                    <ToolsListTile
                        title="تنظیمات صفحه اصلی"
                        subtitle="مدیریت ویجت‌های صفحه اصلی"
                        onTap={() => console.log('تنظیمات صفحه اصلی')}
                    />
                    <ToolsListTile
                        title="تنظیمات منو"
                        subtitle="مدیریت آیتم‌های منو"
                        onTap={() => console.log('تنظیمات منو')}
                    />
                </div>
            </ToolsExpansionTile>

            {/* 2. با کنترل خارجی (controlled) */}
            <ToolsExpansionTile
                title="نوتیفیکیشن‌ها"
                subtitle="مدیریت اعلان‌ها"
                leading={<Bell className="w-5 h-5 text-gray-500" />}
                expanded={expandedSection === 'notifications'}
                onExpandedChanged={(expanded) => {
                    setExpandedSection(expanded ? 'notifications' : null);
                }}
            >
                <div className="space-y-2">
                    <ToolsListTile
                        title="نوتیفیکیشن ایمیلی"
                        trailing={
                            <ToolsSwitch
                                value={notifications}
                                onChange={setNotifications}
                            />
                        }
                    />
                    <ToolsListTile
                        title="نوتیفیکیشن پیامکی"
                        trailing={<ToolsSwitch value={false} onChange={() => {}}  />}
                    />
                </div>
            </ToolsExpansionTile>

            {/* 3. با زیرمجموعه تو در تو */}
            <ToolsExpansionTile
                title="حساب کاربری"
                subtitle="مدیریت اطلاعات حساب"
                leading={<User className="w-5 h-5 text-gray-500" />}
            >
                <ToolsExpansionTile
                    title="اطلاعات شخصی"
                    subtitle="نام، ایمیل، شماره تماس"
                    leading={<Info className="w-4 h-4 text-gray-400" />}
                >
                    <div className="space-y-1 pr-4">
                        <div className="text-sm p-2">نام: علی محمدی</div>
                        <div className="text-sm p-2">ایمیل: ali@example.com</div>
                        <div className="text-sm p-2">تلفن: 0912 123 4567</div>
                    </div>
                </ToolsExpansionTile>

                <ToolsExpansionTile
                    title="امنیت"
                    subtitle="تغییر رمز عبور، تایید دو مرحله‌ای"
                    leading={<Shield className="w-4 h-4 text-gray-400" />}
                >
                    <div className="space-y-1 pr-4">
                        <ToolsListTile
                            title="تغییر رمز عبور"
                            onTap={() => console.log('تغییر رمز')}
                        />
                        <ToolsListTile
                            title="تایید دو مرحله‌ای"
                            trailing={<ToolsSwitch value={false} onChange={() => {}}  />}
                        />
                    </div>
                </ToolsExpansionTile>
            </ToolsExpansionTile>

            {/* 4. با استایل سفارشی */}
            <ToolsExpansionTile
                title="تنظیمات پیشرفته"
                subtitle="تنظیمات ویژه برای توسعه‌دهندگان"
                leading={<Settings className="w-5 h-5 text-purple-500" />}
                backgroundColor="bg-purple-50"
                expandedBackgroundColor="bg-purple-100"
                contentPadding="px-6 py-3"
                shape="rounded-lg"
            >
                <div className="space-y-2">
                    <div className="text-sm text-gray-600 p-2">
                        گزینه‌های پیشرفته برای توسعه‌دهندگان
                    </div>
                    <ToolsListTile
                        title="حالت اشکال‌زدایی"
                        trailing={<ToolsSwitch value={false} onChange={() => {}}  />}
                    />
                </div>
            </ToolsExpansionTile>

            {/* 5. غیرفعال */}
            <ToolsExpansionTile
                title="غیرفعال"
                subtitle="این گزینه قابل باز شدن نیست"
                leading={<Settings className="w-5 h-5 text-gray-400" />}
                disabled
            >
                <div>این محتوا هرگز نمایش داده نمی‌شود</div>
            </ToolsExpansionTile>
        </div>
    );
}