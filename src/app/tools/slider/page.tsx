'use client';
import { useState } from 'react';
import ToolsRangeSlider from "@/components/tools/ui/ToolsRangeSlider";
import useRangeSlider from "@/components/tools/hook/useRangeSlider";

export default function RangeSliderExample() {
    // استفاده با هوک
    const range = useRangeSlider(0, 100, 25, 75);

    // یا استفاده مستقیم
    const [priceStart, setPriceStart] = useState(500000);
    const [priceEnd, setPriceEnd] = useState(2000000);

    return (
        <div className="max-w-md mx-auto p-6 space-y-8">
            <h1 className="text-2xl font-bold">Range Slider</h1>

            {/* مثال ۱: انتخاب بازه قیمت */}
            <div className="space-y-4">
                <h3 className="font-medium">بازه قیمت (تومان)</h3>
                <ToolsRangeSlider
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
                    label="قیمت"
                    filledColor="#3B82F6"
                />
            </div>

            {/* مثال ۲: با هوک سفارشی */}
            <div className="space-y-4">
                <h3 className="font-medium">درصد پیشرفت</h3>
                <ToolsRangeSlider
                    min={range.min}
                    max={range.max}
                    startValue={range.startValue}
                    endValue={range.endValue}
                    onChange={range.onChange}
                    step={5}
                    valueSuffix="%"
                    label="بازه انتخاب شده"
                    filledColor="#10B981"
                />
                <div className="text-sm text-gray-500 text-center">
                    انتخاب شده: {range.startValue}% تا {range.endValue}%
                </div>
            </div>

            {/* مثال ۳: سن */}
            <div className="space-y-4">
                <h3 className="font-medium">بازه سنی</h3>
                <ToolsRangeSlider
                    min={18}
                    max={80}
                    startValue={25}
                    endValue={45}
                    onChange={(start, end) => console.log(`سن: ${start} تا ${end}`)}
                    step={1}
                    valueSuffix=" سال"
                    label="سن"
                    filledColor="#F59E0B"
                    trackColor="#FEF3C7"
                />
            </div>

            {/* مثال ۴: غیرفعال */}
            <ToolsRangeSlider
                min={0}
                max={100}
                startValue={30}
                endValue={70}
                onChange={() => {}}
                disabled
                label="غیرفعال"
            />
        </div>
    );
}