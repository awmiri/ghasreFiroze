'use client';
import { useState } from 'react';
import ToolsRangeSliderPro from "@/components/tools/ui/ToolsRangeSliderPro";
import useRangeSliderPro from "@/components/tools/hook/useRangeSliderPro";

export default function RangeSliderProExample() {
    const [priceStart, setPriceStart] = useState(500000);
    const [priceEnd, setPriceEnd] = useState(2000000);
    const [ageStart, setAgeStart] = useState(20);
    const [ageEnd, setAgeEnd] = useState(40);

    const priceRange = useRangeSliderPro(0, 10000000, 1000000, 5000000);
    const ageRange = useRangeSliderPro(18, 80, 25, 45);
    const percentRange = useRangeSliderPro(0, 100, 20, 80);

    return (
        <div className="max-w-md mx-auto p-6 space-y-8">
            <h1 className="text-2xl font-bold">Range Slider Pro</h1>

            {/* مثال ۱: قیمت با قابلیت ادیت */}
            <ToolsRangeSliderPro
                min={0}
                max={5000000}
                startValue={priceStart}
                endValue={priceEnd}
                onChange={(start, end) => {
                    setPriceStart(start);
                    setPriceEnd(end);
                }}
                step={100000}
                valuePrefix=""
                valueSuffix=" تومان"
                label="بازه قیمت"
                filledColor="#3B82F6"
                editable={true}
            />

            {/* مثال ۲: سن */}
            <ToolsRangeSliderPro
                min={ageRange.min}
                max={ageRange.max}
                startValue={ageRange.startValue}
                endValue={ageRange.endValue}
                onChange={(start, end) => {
                    ageRange.setStartValue(start);
                    ageRange.setEndValue(end);
                }}
                step={1}
                valueSuffix=" سال"
                label="بازه سنی"
                filledColor="#10B981"
                editable={true}
                inputWidth="w-16"
            />

            {/* مثال ۳: بدون قابلیت ادیت */}
            <ToolsRangeSliderPro
                min={0}
                max={100}
                startValue={30}
                endValue={70}
                onChange={() => {}}
                label="فقط نمایش (غیرقابل ادیت)"
                editable={false}
            />

            {/* نمایش مقدار انتخاب شده */}
            <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">مقادیر انتخاب شده:</h3>
                <p>قیمت: {priceStart.toLocaleString()} تا {priceEnd.toLocaleString()} تومان</p>
                <p>سن: {ageStart} تا {ageEnd} سال</p>
            </div>
        </div>
    );
}