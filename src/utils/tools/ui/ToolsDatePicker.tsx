import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronRight, ChevronLeft, X } from 'lucide-react';

type CalendarType = 'jalali' | 'gregorian';

interface ToolsDatePickerProps {
    value: Date | null;
    onChange: (date: Date | null) => void;
    calendarType?: CalendarType;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    clearable?: boolean;
    className?: string;
}

const ToolsDatePicker: React.FC<ToolsDatePickerProps> = ({
                                                             value,
                                                             onChange,
                                                             calendarType = 'gregorian',
                                                             label,
                                                             placeholder = 'انتخاب تاریخ...',
                                                             disabled = false,
                                                             error,
                                                             clearable = true,
                                                             className = '',
                                                         }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(value || new Date());
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

    // نام ماه‌ها
    const monthNames = calendarType === 'gregorian'
        ? ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر']
        : ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    const weekDays = calendarType === 'gregorian'
        ? ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
        : ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const formatDate = (date: Date | null) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    };

    const handleDateSelect = (day: number) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        onChange(newDate);
        setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(null);
    };

    const changeMonth = (delta: number) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1));
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-10" />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = value && value.getDate() === day &&
                value.getMonth() === currentMonth.getMonth() &&
                value.getFullYear() === currentMonth.getFullYear();

            days.push(
                <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className={`
                        h-10 rounded-lg transition-all duration-150
                        ${isSelected ? 'bg-sky-500 text-white' : 'hover:bg-gray-100'}
                    `}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

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
                        {value ? formatDate(value) : placeholder}
                    </span>
                    <div className="flex items-center gap-2">
                        {clearable && value && !disabled && (
                            <X
                                className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer"
                                onClick={handleClear}
                            />
                        )}
                        <Calendar className="w-4 h-4 text-gray-500" />
                    </div>
                </button>

                {isOpen && !disabled && (
                    <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={() => changeMonth(-1)}
                                className="p-1 hover:bg-gray-100 rounded-lg"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <span className="font-medium">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </span>
                            <button
                                onClick={() => changeMonth(1)}
                                className="p-1 hover:bg-gray-100 rounded-lg"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {weekDays.map((day, i) => (
                                <div key={i} className="h-10 flex items-center justify-center text-xs font-medium text-gray-500">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                            {renderCalendar()}
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

export default ToolsDatePicker;