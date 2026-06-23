import React, { useState, useRef, useEffect } from 'react';

interface ToolsSliderProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    step?: number;
    showTooltip?: boolean;
    disabled?: boolean;
    label?: string;
    showValue?: boolean;
    valuePrefix?: string;
    valueSuffix?: string;
    className?: string;
    trackColor?: string;
    filledColor?: string;
    thumbColor?: string;
}

const ToolsSlider: React.FC<ToolsSliderProps> = ({
                                                     min,
                                                     max,
                                                     value,
                                                     onChange,
                                                     step = 1,
                                                     showTooltip = true,
                                                     disabled = false,
                                                     label,
                                                     showValue = true,
                                                     valuePrefix = '',
                                                     valueSuffix = '',
                                                     className = '',
                                                     trackColor = '#E5E5EA',
                                                     filledColor = '#34C759',
                                                     thumbColor = '#FFFFFF',
                                                 }) => {

    const [showTooltipFlag, setShowTooltipFlag] = useState(false);
    const [tooltipValue, setTooltipValue] = useState(value);
    const sliderRef = useRef<HTMLDivElement>(null);

    const percentage = ((value - min) / (max - min)) * 100;

    const handleChange = (newValue: number) => {
        const steppedValue = Math.round(newValue / step) * step;
        const clampedValue = Math.min(Math.max(steppedValue, min), max);
        onChange(clampedValue);
        setTooltipValue(clampedValue);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (disabled) return;
        setShowTooltipFlag(true);
        updateValueFromEvent(e);

        const handleMouseMove = (moveEvent: MouseEvent) => {
            updateValueFromEvent(moveEvent);
        };

        const handleMouseUp = () => {
            setShowTooltipFlag(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const updateValueFromEvent = (e: MouseEvent | React.MouseEvent) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
            const newValue = min + (x / rect.width) * (max - min);
            handleChange(newValue);
        }
    };

    // پشتیبانی از کیبورد
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;
        let newValue = value;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            newValue = Math.min(value + step, max);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            newValue = Math.max(value - step, min);
        } else if (e.key === 'Home') {
            newValue = min;
        } else if (e.key === 'End') {
            newValue = max;
        }
        if (newValue !== value) {
            onChange(newValue);
        }
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">{label}</label>
                    {showValue && (
                        <span className="text-sm text-gray-500">
                            {valuePrefix}{value}{valueSuffix}
                        </span>
                    )}
                </div>
            )}

            <div
                ref={sliderRef}
                className={`relative w-full h-2 rounded-full cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ backgroundColor: trackColor }}
                onMouseDown={handleMouseDown}
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                aria-disabled={disabled}
            >
                {/* پر شده */}
                <div
                    className="absolute h-full rounded-full transition-all duration-100"
                    style={{ width: `${percentage}%`, backgroundColor: filledColor }}
                />

                {/* توپک (thumb) */}
                <div
                    className="absolute w-5 h-5 rounded-full shadow-md -translate-y-1/2 top-1/2 transition-all duration-100"
                    style={{
                        left: `${percentage}%`,
                        backgroundColor: thumbColor,
                        transform: `translateX(-50%) translateY(-50%)`,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }}
                >
                    {/* Tooltip */}
                    {showTooltip && showTooltipFlag && !disabled && (
                        <div
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap"
                            style={{ transform: 'translateX(-50%)' }}
                        >
                            {valuePrefix}{tooltipValue}{valueSuffix}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToolsSlider;