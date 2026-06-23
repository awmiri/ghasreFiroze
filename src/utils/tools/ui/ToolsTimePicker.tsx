import React, { useState, useRef, useEffect } from 'react';
import { Clock, X, ChevronUp, ChevronDown } from 'lucide-react';

interface ToolsTimePickerProps {
    value: string | null; // فرمت "HH:MM"
    onChange: (time: string | null) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    clearable?: boolean;
    use24Hour?: boolean;
    minuteStep?: number;
    className?: string;
}

const ToolsTimePicker: React.FC<ToolsTimePickerProps> = ({
                                                             value,
                                                             onChange,
                                                             label,
                                                             placeholder = 'انتخاب زمان...',
                                                             disabled = false,
                                                             error,
                                                             clearable = true,
                                                             use24Hour = true,
                                                             minuteStep = 1,
                                                             className = '',
                                                         }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedHour, setSelectedHour] = useState<number>(() => {
        if (value) return parseInt(value.split(':')[0]);
        return 12;
    });
    const [selectedMinute, setSelectedMinute] = useState<number>(() => {
        if (value) return parseInt(value.split(':')[1]);
        return 0;
    });
    const [period, setPeriod] = useState<'AM' | 'PM'>(() => {
        if (value) {
            const hour = parseInt(value.split(':')[0]);
            return hour >= 12 ? 'PM' : 'AM';
        }
        return 'AM';
    });

    const pickerRef = useRef<HTMLDivElement>(null);

    // بستن با کلیک بیرون
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formatTime = (hour: number, minute: number): string => {
        let displayHour = hour;
        if (!use24Hour) {
            displayHour = hour % 12 || 12;
        }
        return `${displayHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };

    const getDisplayValue = (): string => {
        if (!value) return placeholder;
        if (!use24Hour) {
            const [hour, minute] = value.split(':');
            const hourNum = parseInt(hour);
            const periodVal = hourNum >= 12 ? 'PM' : 'AM';
            const displayHour = hourNum % 12 || 12;
            return `${displayHour.toString().padStart(2, '0')}:${minute} ${periodVal}`;
        }
        return value;
    };

    const handleTimeSelect = () => {
        let finalHour = selectedHour;
        if (!use24Hour && period === 'PM' && selectedHour !== 12) {
            finalHour = selectedHour + 12;
        } else if (!use24Hour && period === 'AM' && selectedHour === 12) {
            finalHour = 0;
        }
        const timeStr = `${finalHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`;
        onChange(timeStr);
        setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(null);
    };

    const incrementHour = () => {
        let newHour = selectedHour + 1;
        if (use24Hour) {
            if (newHour > 23) newHour = 0;
        } else {
            if (newHour > 12) newHour = 1;
        }
        setSelectedHour(newHour);
    };

    const decrementHour = () => {
        let newHour = selectedHour - 1;
        if (use24Hour) {
            if (newHour < 0) newHour = 23;
        } else {
            if (newHour < 1) newHour = 12;
        }
        setSelectedHour(newHour);
    };

    const incrementMinute = () => {
        let newMinute = selectedMinute + minuteStep;
        if (newMinute >= 60) newMinute = 0;
        setSelectedMinute(newMinute);
    };

    const decrementMinute = () => {
        let newMinute = selectedMinute - minuteStep;
        if (newMinute < 0) newMinute = 60 - minuteStep;
        setSelectedMinute(newMinute);
    };

    const hours = use24Hour
        ? Array.from({ length: 24 }, (_, i) => i)
        : Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className={`w-full ${className}`} ref={pickerRef}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                </label>
            )}

            <div className="relative">
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    className={`
                        w-full h-12 px-4 flex items-center justify-between
                        rounded-lg border transition-all duration-200
                        ${error ? 'border-red-500' : 'border-gray-300'}
                        ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white cursor-pointer hover:border-sky-400'}
                    `}
                >
                    <span className={value ? 'text-gray-900' : 'text-gray-400'}>
                        {getDisplayValue()}
                    </span>
                    <div className="flex items-center gap-2">
                        {clearable && value && !disabled && (
                            <X
                                className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer"
                                onClick={handleClear}
                            />
                        )}
                        <Clock className="w-4 h-4 text-gray-500" />
                    </div>
                </button>

                {isOpen && !disabled && (
                    <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-72">
                        <div className="flex gap-4 justify-center">
                            {/* ساعت */}
                            <div className="text-center">
                                <div className="text-xs text-gray-500 mb-1">ساعت</div>
                                <div className="flex flex-col items-center gap-1">
                                    <button
                                        onClick={incrementHour}
                                        className="p-1 hover:bg-gray-100 rounded-lg"
                                    >
                                        <ChevronUp className="w-5 h-5" />
                                    </button>
                                    <span className="text-2xl font-bold w-16 text-center py-2">
                                        {use24Hour
                                            ? selectedHour.toString().padStart(2, '0')
                                            : (selectedHour % 12 || 12).toString().padStart(2, '0')
                                        }
                                    </span>
                                    <button
                                        onClick={decrementHour}
                                        className="p-1 hover:bg-gray-100 rounded-lg"
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="text-2xl font-bold text-gray-400 self-center">:</div>

                            {/* دقیقه */}
                            <div className="text-center">
                                <div className="text-xs text-gray-500 mb-1">دقیقه</div>
                                <div className="flex flex-col items-center gap-1">
                                    <button
                                        onClick={incrementMinute}
                                        className="p-1 hover:bg-gray-100 rounded-lg"
                                    >
                                        <ChevronUp className="w-5 h-5" />
                                    </button>
                                    <span className="text-2xl font-bold w-16 text-center py-2">
                                        {selectedMinute.toString().padStart(2, '0')}
                                    </span>
                                    <button
                                        onClick={decrementMinute}
                                        className="p-1 hover:bg-gray-100 rounded-lg"
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* AM/PM برای حالت 12 ساعته */}
                            {!use24Hour && (
                                <div className="text-center">
                                    <div className="text-xs text-gray-500 mb-1">قبل/بعد</div>
                                    <div className="flex flex-col gap-1">
                                        <button
                                            onClick={() => setPeriod('AM')}
                                            className={`px-3 py-1 rounded-lg transition-all ${
                                                period === 'AM'
                                                    ? 'bg-sky-500 text-white'
                                                    : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                        >
                                            قبل
                                        </button>
                                        <button
                                            onClick={() => setPeriod('PM')}
                                            className={`px-3 py-1 rounded-lg transition-all ${
                                                period === 'PM'
                                                    ? 'bg-sky-500 text-white'
                                                    : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                        >
                                            بعد
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handleTimeSelect}
                            className="w-full mt-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                        >
                            تایید
                        </button>
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

export default ToolsTimePicker;