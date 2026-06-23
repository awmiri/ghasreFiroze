'use client';
import {useState} from 'react';
import ToolsSwitch from "@/components/tools/ui/ToolsSwitch";
import {EyeIcon, EyeOffIcon, MailIcon, SearchIcon} from "lucide-react";

export default function SwitchExample() {
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="max-w-md mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">تنظیمات</h1>
            <ToolsSwitch
                value={notifications}
                onChange={setNotifications}
                title="فعال کردن نوتیفیکیشن"
                // icon={<MailIcon className="w-5 h-5 text-red-600" />}
                // iconColor="red-600"
            />

        </div>
    );
}