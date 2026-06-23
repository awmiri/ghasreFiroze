import React, { ReactNode } from 'react';
import { Check } from 'lucide-react';

// نوع‌های مختلف برای سایز چکباکس
type CheckboxSize = 'sm' | 'md' | 'lg';

interface ToolsCheckboxProps {
    // ویژگی‌های اصلی
    value: boolean;
    onChange: (value: boolean) => void;

    // ویژگی‌های ظاهری
    disabled?: boolean;

    // رنگ‌ها
    activeColor?: string;
    inactiveColor?: string;
    checkColor?: string;

    // کلاس‌های سفارشی
    containerClassName?: string;
    checkboxClassName?: string;
    title?: string;
    iconColor?: string;
    icon?: ReactNode;
    hasBorder?: boolean;

    // اندازه
    size?: CheckboxSize;
}

const ToolsCheckbox: React.FC<ToolsCheckboxProps> = ({
                                                         value,
                                                         onChange,
                                                         disabled = false,
                                                         activeColor = '#34C759',
                                                         inactiveColor = '#E5E5EA',
                                                         checkColor = '#FFFFFF',
                                                         containerClassName = '',
                                                         checkboxClassName = '',
                                                         title,
                                                         icon,
                                                         iconColor,
                                                         hasBorder = true,
                                                         size = 'md',
                                                     }) => {

    // سایزهای مختلف
    const sizeClasses = {
        sm: {
            checkbox: 'w-4 h-4',
            inner: 'w-3 h-3',
            icon: 'w-3 h-3',
            padding: 'p-1',
        },
        md: {
            checkbox: 'w-5 h-5',
            inner: 'w-4 h-4',
            icon: 'w-4 h-4',
            padding: 'p-1.5',
        },
        lg: {
            checkbox: 'w-6 h-6',
            inner: 'w-5 h-5',
            icon: 'w-5 h-5',
            padding: 'p-2',
        },
    };

    const currentSize = sizeClasses[size];

    const handleClick = () => {
        if (!disabled) {
            onChange(!value);
        }
    };

    const checkboxElement = (
        <button
            type="button"
            disabled={disabled}
            onClick={handleClick}
            className={`
                relative inline-flex
                items-center justify-center
                rounded-lg
                transition-all duration-200
                ${currentSize.checkbox}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${checkboxClassName}
            `}
            style={{
                backgroundColor: value ? activeColor : inactiveColor,
                boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
            role="checkbox"
            aria-checked={value}
            aria-disabled={disabled}
        >
            {value && (
                <Check
                    className={`${currentSize.icon}`}
                    style={{ color: checkColor }}
                    strokeWidth={3}
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
            `}
        >
            <div className="flex flex-row items-center gap-3">
                {!!icon && (
                    <div className={`
                        ${!!iconColor ? `bg-${iconColor}/10` : 'bg-gray-100'}
                        p-2 rounded-lg
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
                {checkboxElement}
            </div>
        </div>
    );
};

export default ToolsCheckbox;