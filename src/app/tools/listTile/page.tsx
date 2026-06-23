'use client';
import { useState } from 'react';
import { Settings, Bell, User, ChevronLeft, Star, Mail, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import ToolsSwitch from "@/components/tools/ui/ToolsSwitch";
import ToolsListTile from "@/components/tools/ui/ToolsListTile";

export default function ListTileExample() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [notifications, setNotifications] = useState(true);
    const [sound, setSound] = useState(true);

    return (
        <div className="max-w-lg mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold mb-4">مثال‌های ListTile</h1>

            {/* 1. ListTile ساده */}
            <div className="bg-white rounded-lg shadow">
                <ToolsListTile
                    title="تنظیمات"
                    subtitle="مدیریت تنظیمات برنامه"
                    leading={<Settings className="w-5 h-5 text-gray-500" />}
                    trailing={<ChevronLeft className="w-4 h-4 text-gray-400" />}
                    onTap={() => console.log('تنظیمات کلیک شد')}
                />
            </div>

            {/* 2. با استایل انتخاب شده */}
            <div className="bg-white rounded-lg shadow">
                <ToolsListTile
                    title="پروفایل کاربری"
                    subtitle="اطلاعات شخصی خود را مدیریت کنید"
                    leading={<User className="w-5 h-5 text-gray-500" />}
                    onTap={() => setSelectedIndex(0)}
                />
                <ToolsListTile
                    title="نوتیفیکیشن‌ها"
                    subtitle="تنظیمات اعلان‌ها"
                    leading={<Bell className="w-5 h-5 text-gray-500" />}
                    selected={selectedIndex === 1}
                    onTap={() => setSelectedIndex(1)}
                />
            </div>

            {/* 3. با سوییچ */}
            <div className="bg-white rounded-lg shadow">
                <ToolsListTile
                    title="نوتیفیکیشن"
                    subtitle="دریافت اعلان‌های جدید"
                    leading={<Bell className="w-5 h-5 text-gray-500" />}
                    trailing={
                        <ToolsSwitch
                            hasBoarder={false}
                            value={notifications}
                            onChange={setNotifications}
                        />
                    }
                />
                <ToolsListTile
                    title="پروفایل کاربری"
                    subtitle="اطلاعات شخصی خود را مدیریت کنید"
                    leading={<Bell className="w-5 h-5 text-gray-500" />}

                />
                <ToolsListTile
                    title="صدا"
                    subtitle="پخش صدا هنگام دریافت نوتیفیکیشن"
                    leading={sound ? <Volume2 className="w-5 h-5 text-gray-500" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
                    trailing={
                        <ToolsSwitch
                            hasBoarder={false}
                            value={sound}
                            onChange={setSound}
                        />
                    }
                />
            </div>

            {/* 4. با آیکون‌های رنگی */}
            <div className="bg-white rounded-lg shadow">
                <ToolsListTile title="ایمیل" subtitle="your@email.com" leading={<Mail className="w-5 h-5 text-blue-500" />} trailing={<Star className="w-4 h-4 text-yellow-500" />} onTap={() => console.log('ایمیل کلیک شد')}/>
            </div>

            {/* 5. انواع مختلف density */}
            <div className="space-y-2">
                <h2 className="font-bold mt-4">انواع تراکم:</h2>

                <ToolsListTile
                    title="تراکم راحت (comfortable)"
                    subtitle="با فضای بیشتر"
                    density="comfortable"
                />

                <ToolsListTile
                    title="تراکم جمع‌وجور (compact)"
                    subtitle="با فضای کمتر"
                    density="compact"
                />

                <ToolsListTile
                    title="تراکم زیاد (spacious)"
                    subtitle="با فضای خیلی زیاد"
                    density="spacious"
                />
            </div>

            {/* 6. حالت سه خطی */}
            <div className="bg-white rounded-lg shadow">
                <ToolsListTile
                    title="پیام طولانی"
                    subtitle="این یک زیرنویس نسبتاً طولانی است که می‌تواند چندین خط را اشغال کند و نشان‌دهنده حالت سه خطی در کامپوننت است"
                    isThreeLine
                    leading={<User className="w-10 h-10 rounded-full bg-gray-200 p-2" />}
                />
            </div>

            {/* 7. با لانگ پرس */}
            <div className="bg-white rounded-lg shadow">
                <ToolsListTile
                    title="کلیک طولانی"
                    subtitle="روی این آیتم کلیک طولانی کنید"
                    leading={<Star className="w-5 h-5 text-yellow-500" onClick={() => console.log('صصصصصصص')}/>}
                    onTap={() => console.log('شششش')}
                    onLongPress={() => console.log('ذذذذذذ')}
                />
            </div>

            {/* 8. دیزایبل شده */}
            <div className="bg-white rounded-lg shadow">
                <ToolsListTile
                    title="آیتم غیرفعال"
                    subtitle="این آیتم قابل کلیک نیست"
                    disabled
                    leading={<Settings className="w-5 h-5 text-gray-400" />}
                />
            </div>
        </div>
    );
}

/*
ExpansionTile(
        title: ,
        subtitle: ,
        leading: ,
        trailing: ,
        children: [],
      );
 */