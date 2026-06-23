'use client';
import { useState } from 'react';
import {ToolsPasswordStrength, ToolsRating, ToolsSlider} from "@/components/tools/ui";
import useSlider from "@/components/tools/hook/useSlider";

export default function Examples() {
    const slider = useSlider(0, 100, 50);
    const [rating, setRating] = useState(3);
    const [password, setPassword] = useState('');

    return (
        <div className="max-w-md mx-auto p-4 space-y-8">
            <h1 className="text-2xl font-bold">کامپوننت‌های جدید</h1>

            {/* Slider */}
            <ToolsSlider
                min={slider.min}
                max={slider.max}
                value={slider.value}
                onChange={slider.onChange}
                step={5}
                label="مقدار"
                showTooltip
                valueSuffix="%"
            />

            {/* Rating */}
            <ToolsRating
                value={rating}
                onChange={setRating}
                count={5}
                size="lg"
                showValue
                label="امتیاز شما"
            />

            {/* Password Strength */}
            <ToolsPasswordStrength
                value={password}
                onChange={setPassword}
                label="رمز عبور"
                required
            />
        </div>
    );
}