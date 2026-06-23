import React, {ReactNode} from 'react';

// نوع‌های مختلف برای سایز رادیو
type RadioSize = 'sm' | 'md' | 'lg';

interface ToolsRadioProps<T> {
    // ویژگی‌های اصلی
    value: T;
    groupValue: T | null;
    onChange: (value: T) => void;

    // ویژگی‌های ظاهری
    disabled?: boolean;

    // رنگ‌ها
    activeColor?: string;
    inactiveColor?: string;
    radioColor?: string;

    // کلاس‌های سفارشی
    containerClassName?: string;
    radioClassName?: string;
    title?: string;
    iconColor?: string;
    icon?: ReactNode;
    hasBorder?: boolean;

    // اندازه
    size?: RadioSize;
}

function ToolsRadio<T>(
    {
        value,
        groupValue,
        onChange,
        disabled = false,
        activeColor = '#34C759',
        inactiveColor = '#E5E5EA',
        radioColor = '#FFFFFF',
        containerClassName = '',
        radioClassName = '',
        title,
        icon,
        iconColor,
        hasBorder = true,
        size = 'md',
    }: ToolsRadioProps<T>) {

    const isSelected = groupValue === value;

    // سایزهای مختلف
    const sizeClasses = {
        sm: {
            radio: 'w-4 h-4',
            inner: 'w-2 h-2',
            padding: 'p-1',
        },
        md: {
            radio: 'w-5 h-5',
            inner: 'w-2.5 h-2.5',
            padding: 'p-1.5',
        },
        lg: {
            radio: 'w-6 h-6',
            inner: 'w-3 h-3',
            padding: 'p-2',
        },
    };

    const currentSize = sizeClasses[size];

    const handleClick = () => {
        if (!disabled && !isSelected) {
            onChange(value);
        }
    };

    const radioElement = (
        <button
            type="button"
            disabled={disabled}
            onClick={handleClick}
            className={`
                relative inline-flex
                items-center justify-center
                rounded-full
                transition-all duration-200
                ${currentSize.radio}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${radioClassName}
            `}
            style={{
                backgroundColor: isSelected ? activeColor : inactiveColor,
                boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
            role="radio"
            aria-checked={isSelected}
            aria-disabled={disabled}
        >
            {isSelected && (
                <span
                    className={`
                        absolute rounded-full
                        bg-white
                        transition-all duration-200
                        ${currentSize.inner}
                    `}
                    style={{backgroundColor: radioColor}}
                />
            )}
        </button>
    );

    return (
        <div
            onClick={handleClick}
            className={`
                cursor-pointer 
                flex items-center justify-between 
                p-4 bg-white 
                ${hasBorder ? 'rounded-lg shadow hover:shadow-md' : ''}
                transition-all duration-200
                ${disabled ? 'opacity-50' : ''}
                ${isSelected ? 'ring-1 ring-green-500' : ''}
            `}
        >
            <div className="flex flex-row items-center gap-3">
                {!!icon && (
                    <div className={`
                        ${!!iconColor ? `bg-${iconColor}/10` : 'bg-gray-100'}
                        p-2 rounded-lg
                        ${isSelected ? `text-${iconColor || 'green-500'}` : ''}
                    `}>
                        {icon}
                    </div>
                )}
                {!!title && (
                    <span className={`text-gray-700 ${disabled ? 'text-gray-400' : ''}`}>
                        {title}
                    </span>
                )}
            </div>
            <div className={`inline-flex items-center gap-2 ${containerClassName}`}>
                {radioElement}
            </div>
        </div>
    );
}

export default ToolsRadio;