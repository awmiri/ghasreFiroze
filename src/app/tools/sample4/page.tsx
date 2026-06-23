'use client';
import { useState } from 'react';
import ToolsTimePicker from "@/components/tools/ui/ToolsTimePicker";
import ToolsSearchInput from "@/components/tools/ui/ToolsSearchInput";

export default function Examples() {
    const [time, setTime] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [recentSearches, setRecentSearches] = useState<string[]>([]);

    const handleSearch = (query: string) => {
        setSearchResult(`نتیجه جستجو برای "${query}"`);
        // ذخیره در جستجوهای اخیر
        if (!recentSearches.includes(query)) {
            setRecentSearches(prev => [query, ...prev].slice(0, 5));
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 space-y-8">
            <h1 className="text-2xl font-bold">کامپوننت‌های جدید</h1>

            {/* Time Picker - 24 ساعته */}
            <ToolsTimePicker
                value={time}
                onChange={setTime}
                label="زمان (۲۴ ساعته)"
                placeholder="ساعت را انتخاب کنید"
                use24Hour
                clearable
            />

            {/* Time Picker - 12 ساعته */}
            <ToolsTimePicker
                value={time}
                onChange={setTime}
                label="زمان (۱۲ ساعته)"
                placeholder="ساعت را انتخاب کنید"
                use24Hour={false}
                minuteStep={5}
                clearable
            />

            {/* Search Input */}
            <ToolsSearchInput
                value={searchValue}
                onChange={setSearchValue}
                onSearch={handleSearch}
                label="جستجو"
                placeholder="عبارت مورد نظر را جستجو کنید..."
                hint="حداقل ۳ کاراکتر وارد کنید"
                showRecentSearches
                recentSearches={recentSearches}
                onRecentSearchClick={(term) => console.log('کلیک روی:', term)}
                debounceMs={300}
            />

            {/* نمایش نتیجه */}
            {searchResult && (
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">{searchResult}</p>
                </div>
            )}

            {/* نمایش اطلاعات */}
            <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                <h3 className="font-bold">مقادیر:</h3>
                <p>زمان انتخاب شده: {time || '—'}</p>
                <p>مقدار جستجو: {searchValue || '—'}</p>
            </div>
        </div>
    );
}