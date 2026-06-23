import React, {ReactNode, useState, useRef, useEffect} from 'react';
import {ChevronDown, Check, X} from 'lucide-react';
import {UseDataDropDownReturn} from "@/utils/tools/hook/useDataDropDown";

// نوع‌های مختلف برای اندازه و استایل
type DropdownSize = 'sm' | 'md' | 'lg';
type DropdownVariant = 'outline' | 'filled' | 'flushed';

interface ToolsDropDownProps<T> {
    // سه ورودی اصلی از هوک
    // value: T | null;
    // onChange: (value: T | null) => void;
    // options: { label: string; value: T }[];
    data: UseDataDropDownReturn<T>
    // ویژگی‌های ظاهری
    label?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    size?: DropdownSize;
    variant?: DropdownVariant;
    icon?: ReactNode;
    clearable?: boolean;
    searchable?: boolean;

    // کلاس‌های سفارشی
    containerClassName?: string;
    labelClassName?: string;
    dropdownClassName?: string;
    optionClassName?: string;

    // کالبک‌ها
    onSearch?: (searchTerm: string) => void;
    onOpen?: () => void;
    onClose?: () => void;
    showValue?: any
}

function ToolsDropDown<T>(
    {

        data,
        label,
        placeholder = 'انتخاب کنید',
        hint,
        error,
        required = false,
        disabled = false,
        size = 'md',
        variant = 'outline',
        icon,
        clearable = true,
        searchable = false,
        containerClassName = '',
        labelClassName = '',
        dropdownClassName = '',
        optionClassName = '',
        onSearch,
        onOpen,
        onClose,
        showValue
    }: ToolsDropDownProps<T>) {
    const {value,setValue,options} = data

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // پیدا کردن label مقدار انتخاب شده
    const selectedOption = options.find(opt => opt.value === value);
    let selectedLabel = selectedOption?.label || '';
    if (!!value && !!showValue){
        selectedLabel = showValue.toString()
    }
    // فیلتر کردن گزینه‌ها بر اساس جستجو
    const filteredOptions = searchable && searchTerm
        ? options.filter(opt =>
            opt.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : options;

    // بستن dropdown با کلیک بیرون
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm('');
                onClose?.();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // فوکوس روی جستجو هنگام باز شدن
    useEffect(() => {
        if (isOpen && searchable && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen, searchable]);

    // اندازه‌ها
    const sizeClasses = {
        sm: 'h-8 text-xs px-3',
        md: 'h-12 text-sm px-4',
        lg: 'h-14 text-base px-5',
    };

    // نوع ظاهر
    const variantClasses = {
        outline: 'border border-gray-300 bg-white focus:ring-2 focus:ring-sky-500',
        filled: 'bg-gray-100 border border-transparent focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500',
        flushed: 'border-b border-gray-300 bg-transparent rounded-none px-0 focus:border-sky-500 focus:ring-0',
    };

    const handleSelect = (selectedValue: T) => {
        setValue(selectedValue);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        setValue(null);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen) {
                onOpen?.();
            } else {
                onClose?.();
            }
        }
    };

    return (
        <div className={`w-full ${containerClassName}`} ref={dropdownRef}>
            {/* لیبل */}
            {label && (
                <label className={`block text-sm font-medium text-gray-700 mb-1.5 ${labelClassName}`}>
                    {label}
                    {required && <span className="text-red-500 mr-1">*</span>}
                </label>
            )}

            {/* دراپ‌داون اصلی */}
            <div className="relative">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    disabled={disabled}
                    className={`
            w-full
            flex items-center justify-between
            rounded-lg
            transition-all duration-200
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
            ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : 'cursor-pointer'}
            ${isOpen ? 'ring-2 ring-sky-500' : ''}
          `}
                >
                    <div className="flex items-center gap-2 flex-1 text-right">
                        {icon && <span className="text-gray-400">{icon}</span>}
                        <span className={`${!selectedLabel ? 'text-gray-400' : 'text-gray-900'}`}>
              {selectedLabel || placeholder}
            </span>
                    </div>

                    <div className="flex items-center gap-1">
                        {clearable && value && !disabled && (
                            <div
                                onClick={handleClear}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleClear(e as unknown as React.MouseEvent);
                                    }
                                }}
                            >
                                <X className="w-4 h-4 text-gray-400"/>
                            </div>
                        )}
                        <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 
                ${isOpen ? 'rotate-180' : ''}`}
                        />
                    </div>
                </button>

                {/* منوی بازشونده */}
                {isOpen && !disabled && (
                    <div className={`
            absolute z-50 w-full mt-2 
            bg-white border border-gray-200 
            rounded-lg shadow-lg 
            overflow-hidden
            ${dropdownClassName}
          `}>
                        {/* جستجو */}
                        {searchable && (
                            <div className="p-2 border-b border-gray-100">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="جستجو..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        onSearch?.(e.target.value);
                                    }}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md
                    focus:outline-none focus:ring-1 focus:ring-sky-500"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        )}

                        {/* لیست گزینه‌ها */}
                        <div className="max-h-60 overflow-y-auto">
                            {filteredOptions.length === 0 ? (
                                <div className="px-4 py-2 text-sm text-gray-500 text-center">
                                    گزینه‌ای یافت نشد
                                </div>
                            ) : (
                                filteredOptions.map((option, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => handleSelect(option.value)}
                                        className={`
                                              w-full px-4 py-2 text-right text-sm
                                              flex items-center justify-between
                                              hover:bg-gray-50 transition-colors
                                              ${value === option.value ? 'bg-sky-50 text-sky-700' : 'text-gray-700'}
                                              ${optionClassName}
                                            `}
                                        >
                                        <span>{option.label}</span>
                                        {value === option.value && (
                                            <Check className="w-4 h-4 text-sky-500"/>
                                        )}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* خطا و راهنما */}
            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}
            {hint && !error && (
                <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
            )}
        </div>
    );
}

export default ToolsDropDown;