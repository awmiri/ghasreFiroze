'use client';
import { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import ToolsOtpInput from "@/components/tools/ui/ToolsOtpInput";
import ToolsDatePicker from "@/components/tools/ui/ToolsDatePicker";
import ToolsSearchSelect from "@/components/tools/ui/ToolsSearchSelect";
import {ToolsListTile} from "@/components/tools/ui";

export default function Examples() {
    const [otp, setOtp] = useState('');
    const [date, setDate] = useState<Date | null>(null);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);

    // دیتای فرضی کاربران
    const users = [
        { id: 1, name: 'علی محمدی', email: 'ali@example.com', phone: '09121234567' },
        { id: 2, name: 'سارا حسینی', email: 'sara@example.com', phone: '09129876543' },
        { id: 3, name: 'رضا کریمی', email: 'reza@example.com', phone: '09123456789' },
    ];

    const handleSearchUser = () => {
        // باز کردن مودال انتخاب کاربر
        setShowModal(true);
    };

    const handleSelectUser = (user: any) => {
        setSelectedUser(user);
        setShowModal(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 space-y-8">
            <h1 className="text-2xl font-bold">کامپوننت‌های جدید</h1>

            {/* OTP Input */}
            <ToolsOtpInput
                length={6}
                value={otp}
                onChange={setOtp}
                onComplete={(val) => console.log('کد کامل:', val)}
                label="کد تایید"
                autoFocus
            />

            {/* Date Picker */}
            <ToolsDatePicker
                value={date}
                onChange={setDate}
                label="تاریخ"
                calendarType="jalali"
                clearable
            />

            {/* Search Select */}
            <ToolsSearchSelect
                value={selectedUser}
                onChange={setSelectedUser}
                onSearch={handleSearchUser}
                renderDisplay={(user) => (
                    <ToolsListTile
                        title={user.name}
                        subtitle={user.email}
                        leading={<User className="w-5 h-5 text-gray-500" />}
                        trailing={<Phone className="w-4 h-4 text-gray-400" />}
                    />
                )}
                label="انتخاب کاربر"
                placeholder="هنوز هیچ کاربری انتخاب نشده"
                searchButtonText="جستجوی کاربر"
            />

            {/* مودال ساده برای انتخاب کاربر */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl w-96 max-h-96 overflow-y-auto p-4">
                        <h3 className="font-bold mb-4">انتخاب کاربر</h3>
                        {users.map(user => (
                            <div key={user.id} onClick={() => handleSelectUser(user)}>
                                <ToolsListTile
                                    title={user.name}
                                    subtitle={user.email}
                                    leading={<User className="w-5 h-5 text-gray-500" />}
                                />
                            </div>
                        ))}
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 w-full py-2 bg-gray-100 rounded-lg"
                        >
                            بستن
                        </button>
                    </div>
                </div>
            )}

            {/* نمایش اطلاعات */}
            <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                <h3 className="font-bold">مقادیر:</h3>
                <p>کد OTP: {otp || '—'}</p>
                <p>تاریخ: {date ? date.toLocaleDateString('fa-IR') : '—'}</p>
                <p>کاربر: {selectedUser?.name || '—'}</p>
            </div>
        </div>
    );
}