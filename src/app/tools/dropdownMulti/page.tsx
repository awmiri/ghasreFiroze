'use client';

import useMultiSelectDropDown from "@/components/tools/hook/useDataDropDownMulti";
import ToolsMultiSelectDropDown from "@/components/tools/ui/ToolsDropDownMulti";

export default function MultiSelectPage() {
    // مثال با string
    const {
        value: cities,
        setValue: setCities,
        options: cityOptions,
        selectedLabels: selectedCities,
        clearAll: clearCities,
        isSelected: isCitySelected
    } = useMultiSelectDropDown<string>(['tehran', 'isfahan'], {
        'تهران': 'tehran',
        'مشهد': 'mashhad',
        'اصفهان': 'isfahan',
        'شیراز': 'shiraz',
        'تبریز': 'tabriz',
        'کرج': 'karaj',
        'قم': 'qom'
    });

    // مثال با number
    const {
        value: scores,
        setValue: setScores,
        options: scoreOptions
    } = useMultiSelectDropDown<number>([2, 4], {
        'ضعیف': 1,
        'متوسط': 2,
        'خوب': 3,
        'عالی': 4,
        'بی‌نظیر': 5
    });

    return (
        <div className="max-w-md mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">فرم با مولتی سلکت</h1>

            {/* مولتی سلکت ساده */}
            <ToolsMultiSelectDropDown
                value={cities}
                onChange={(val) => setCities(val)}
                options={cityOptions}
                label="شهرهای منتخب"
                placeholder="شهرها را انتخاب کنید"
                required
                clearable
                searchable
            />

            {/* با قابلیت جستجو */}
            <ToolsMultiSelectDropDown
                value={scores}
                onChange={(val) => setScores(val)}
                options={scoreOptions}
                label="امتیازها"
                placeholder="امتیازها را انتخاب کنید"
                clearable
                maxTagsDisplay={3}
                hint="می‌توانید چندین امتیاز انتخاب کنید"
            />

            {/* نمایش مقادیر انتخاب شده */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-bold mb-2">شهرهای انتخاب شده:</p>
                <div className="flex flex-wrap gap-1">
                    {selectedCities.map((city, idx) => (
                        <span key={idx} className="px-2 py-1 bg-sky-100 text-sky-700 rounded-md text-sm">
                            {city}
                        </span>
                    ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                    مقادیر خام: {cities.join(', ')}
                </p>
            </div>
        </div>
    );
}