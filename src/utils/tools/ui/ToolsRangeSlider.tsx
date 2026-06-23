import React, {useState, useRef, useEffect, useCallback} from 'react';

interface ToolsRangeSliderProps {
    min: number;
    max: number;
    startValue: number;
    endValue: number;
    onChange: (start: number, end: number) => void;
    step?: number;
    showTooltip?: boolean;
    disabled?: boolean;
    label?: string;
    showValues?: boolean;
    valuePrefix?: string;
    valueSuffix?: string;
    className?: string;
    trackColor?: string;
    filledColor?: string;
    thumbColor?: string;
}

const ToolsRangeSlider: React.FC<ToolsRangeSliderProps> = (
    {
        min,
        max,
        startValue,
        endValue,
        onChange,
        step = 1,
        showTooltip = true,
        disabled = false,
        label,
        showValues = true,
        valuePrefix = '',
        valueSuffix = '',
        className = '',
        trackColor = '#E5E5EA',
        filledColor = '#34C759',
        thumbColor = '#FFFFFF',
    }) => {

    const [localStart, setLocalStart] = useState(startValue);
    const [localEnd, setLocalEnd] = useState(endValue);
    const [activeThumb, setActiveThumb] = useState<'start' | 'end' | null>(null);
    const [showStartTooltip, setShowStartTooltip] = useState(false);
    const [showEndTooltip, setShowEndTooltip] = useState(false);

    const sliderRef = useRef<HTMLDivElement>(null);

    // همگام‌سازی با props
    useEffect(() => {
        setLocalStart(startValue);
        setLocalEnd(endValue);
    }, [startValue, endValue]);

    // محاسبه درصدها (با در نظر گرفتن RTL)
    const getPercentage = useCallback((value: number) => {
        return ((value - min) / (max - min)) * 100;
    }, [min, max]);

    const startPercent = getPercentage(localStart);
    const endPercent = getPercentage(localEnd);

    // تبدیل موقعیت موس به مقدار
    const getValueFromPosition = useCallback((clientX: number) => {
        if (!sliderRef.current) return min;
        const rect = sliderRef.current.getBoundingClientRect();
        let x = clientX - rect.left;
        // برای RTL، موقعیت را برعکس می‌کنیم
        x = Math.min(Math.max(x, 0), rect.width);
        const percent = x / rect.width;
        let value = min + percent * (max - min);
        // اعمال step
        value = Math.round(value / step) * step;
        return Math.min(Math.max(value, min), max);
    }, [min, max, step]);

    // شروع درگ
    const handleMouseDown = (thumb: 'start' | 'end') => (e: React.MouseEvent) => {
        if (disabled) return;
        e.preventDefault();
        setActiveThumb(thumb);
        if (thumb === 'start') setShowStartTooltip(true);
        else setShowEndTooltip(true);
    };

    // حرکت موس
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!activeThumb || !sliderRef.current) return;

            const newValue = getValueFromPosition(e.clientX);

            if (activeThumb === 'start') {
                const newStart = Math.min(newValue, localEnd - step);
                if (newStart >= min && newStart <= localEnd - step) {
                    setLocalStart(newStart);
                    onChange(newStart, localEnd);
                }
            } else if (activeThumb === 'end') {
                const newEnd = Math.max(newValue, localStart + step);
                if (newEnd <= max && newEnd >= localStart + step) {
                    setLocalEnd(newEnd);
                    onChange(localStart, newEnd);
                }
            }
        };

        const handleMouseUp = () => {
            setActiveThumb(null);
            setShowStartTooltip(false);
            setShowEndTooltip(false);
        };

        if (activeThumb) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [activeThumb, localStart, localEnd, min, max, step, onChange, getValueFromPosition]);

    // پشتیبانی از کیبورد
    const handleKeyDown = (thumb: 'start' | 'end') => (e: React.KeyboardEvent) => {
        if (disabled) return;

        let newStart = localStart;
        let newEnd = localEnd;

        if (thumb === 'start') {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                newStart = Math.min(localStart + step, localEnd - step);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                newStart = Math.max(localStart - step, min);
            } else if (e.key === 'Home') {
                newStart = min;
            } else if (e.key === 'End') {
                newStart = localEnd - step;
            }
            if (newStart !== localStart) {
                setLocalStart(newStart);
                onChange(newStart, localEnd);
            }
        } else {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                newEnd = Math.min(localEnd + step, max);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                newEnd = Math.max(localEnd - step, localStart + step);
            } else if (e.key === 'Home') {
                newEnd = localStart + step;
            } else if (e.key === 'End') {
                newEnd = max;
            }
            if (newEnd !== localEnd) {
                setLocalEnd(newEnd);
                onChange(localStart, newEnd);
            }
        }
    };

    return (
        <div className={`w-full ${className}`}>
            {/* لیبل و مقادیر */}
            {(label || showValues) && (
                <div className="flex justify-between items-center mb-3">
                    {label && (
                        <label className="text-sm font-medium text-gray-700">{label}</label>
                    )}
                    {showValues && (
                        <div style={{direction:"ltr"}} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="bg-gray-100 px-2 py-0.5 rounded">
                                {valuePrefix}{localStart}{valueSuffix}
                            </span>
                            <span>تا</span>
                            <span className="bg-gray-100 px-2 py-0.5 rounded">
                                {valuePrefix}{localEnd}{valueSuffix}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* اسلایدر */}
            <div
                ref={sliderRef}
                className={`relative w-full h-2 rounded-full ${disabled ? 'opacity-50' : ''}`}
                style={{backgroundColor: trackColor}}
            >
                {/* محدوده پر شده */}
                <div
                    className="absolute h-full rounded-full"
                    style={{
                        left: `${startPercent}%`,
                        right: `${100 - endPercent}%`,
                        backgroundColor: filledColor,
                    }}
                />

                {/* Thumb شروع */}
                <div
                    className={`absolute w-5 h-5 rounded-full shadow-md -translate-x-1/2 top-1/2 -translate-y-1/2
                        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110 active:scale-95'}
                        transition-transform duration-150
                    `}
                    style={{
                        left: `${startPercent}%`,
                        backgroundColor: thumbColor,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                        zIndex: activeThumb === 'start' ? 20 : 10,
                    }}
                    onMouseDown={handleMouseDown('start')}
                    onKeyDown={handleKeyDown('start')}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    aria-label="حداقل مقدار"
                    aria-valuemin={min}
                    aria-valuemax={localEnd}
                    aria-valuenow={localStart}
                >
                    {showTooltip && showStartTooltip && !disabled && (
                        <div
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-30">
                            {valuePrefix}{localStart}{valueSuffix}
                        </div>
                    )}
                </div>

                {/* Thumb پایان */}
                <div
                    className={`absolute w-5 h-5 rounded-full shadow-md -translate-x-1/2 top-1/2 -translate-y-1/2
                        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110 active:scale-95'}
                        transition-transform duration-150
                    `}
                    style={{
                        left: `${endPercent}%`,
                        backgroundColor: thumbColor,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                        zIndex: activeThumb === 'end' ? 20 : 10,
                    }}
                    onMouseDown={handleMouseDown('end')}
                    onKeyDown={handleKeyDown('end')}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    aria-label="حداکثر مقدار"
                    aria-valuemin={localStart}
                    aria-valuemax={max}
                    aria-valuenow={localEnd}
                >
                    {showTooltip && showEndTooltip && !disabled && (
                        <div
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-30">
                            {valuePrefix}{localEnd}{valueSuffix}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToolsRangeSlider;