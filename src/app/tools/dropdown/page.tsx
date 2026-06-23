'use client';

import useDataDropDown from "@/components/tools/hook/useDataDropDown";
import ToolsDropDown from "@/components/tools/ui/ToolsDropDown";

export default function Page() {
    // مثال با string
    const {
        value: kind,
        setValue: setKind,
        options: kindOptions,
        selectedLabel: kindLabel,
        reset: resetKind
    } = useDataDropDown<string>('val1', {
        'نوع اول': 'val1',
        'نوع دوم': 'val2',
        'نوع سوم': 'val3'
    });

    // مثال با number
    const {
        value: score,
        setValue: setScore,
        options: scoreOptions
    } = useDataDropDown<number>(1, {
        'ضعیف': 1,
        'متوسط': 2,
        'خوب': 3,
        'عالی': 4
    });

    // مثال با object
    const {
        value: user,
        setValue: setUser,
        options: userOptions
    } = useDataDropDown<{ id: number; name: string }>(null, {
        'علی محمدی': { id: 1, name: 'علی' },
        'رضا کریمی': { id: 2, name: 'رضا' },
        'سارا حسینی': { id: 3, name: 'سارا' }
    });

    return (
        <div className="max-w-md mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">فرم با دراپ‌داون</h1>

            {/* Dropdown ساده */}
            <ToolsDropDown
                value={kind}
                onChange={setKind}
                options={kindOptions}
                label="نوع"
                placeholder="نوع را انتخاب کنید"
                required
            />

            {/* Dropdown با جستجو و clear */}
            <ToolsDropDown
                value={score}
                onChange={setScore}
                options={scoreOptions}
                label="امتیاز"
                placeholder="امتیاز را انتخاب کنید"
                searchable
                clearable
                hint="از ۱ تا ۴"
            />

            {/* Dropdown با خطا */}
            <ToolsDropDown
                showValue={user?.name}
                value={user}
                onChange={setUser}
                options={userOptions}
                label="کاربر"
                placeholder="کاربر را انتخاب کنید"
                error={!user ? 'لطفاً یک کاربر انتخاب کنید' : ''}
                // error={!user ? 'لطفاً یک کاربر انتخاب کنید' : ''}
                required
                clearable
            />

            {/* نمایش مقادیر انتخاب شده */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>نوع انتخاب شده: {kindLabel}</p>
                <p>مقدار نوع: {kind}</p>
                <p>امتیاز: {score}</p>
                <p>کاربر: {user?.name}</p>
            </div>
        </div>
    );
}