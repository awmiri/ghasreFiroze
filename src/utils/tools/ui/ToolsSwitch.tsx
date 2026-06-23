import React, {ReactNode} from 'react';
import {MailIcon} from "lucide-react";

// نوع‌های مختلف برای سایز سوییچ
type SwitchSize = 'sm' | 'md' | 'lg';

// نوع ظاهر (iOS یا Android)
type SwitchVariant = 'ios' | 'android';

interface ToolsSwitchProps {
    // ویژگی‌های اصلی
    value: boolean;
    onChange: (value: boolean) => void;

    // ویژگی‌های ظاهری
    disabled?: boolean;

    // رنگ‌ها
    activeColor?: string;
    inactiveColor?: string;
    thumbColor?: string;


    // کلاس‌های سفارشی
    containerClassName?: string;
    switchClassName?: string;
    title?: string;
    iconColor?: string;

    icon?: ReactNode;
    hasBoarder?: boolean;
}

const ToolsSwitch: React.FC<ToolsSwitchProps> = (
    {
        value,
        onChange,
        disabled = false,
        activeColor = '#34C759',
        inactiveColor = '#E5E5EA',
        thumbColor = '#FFFFFF',
        containerClassName = '',
        switchClassName = '',
        title,
        icon,
        iconColor,
        hasBoarder = true
    }) => {
    // استایل‌های مختلف برای iOS و Android
    const getSwitchStyle = () => {
        return {
            background: value ? activeColor : inactiveColor,
            boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        };
    };

    const currentSize = {
        switch: 'w-11 h-6',
        thumb: 'w-5 h-5',
        translate: 'translate-x-5',
    };

    const handleClick = () => {
        if (!disabled) {
            onChange(!value);
        }
    };

    const switchElement = (
        <button
            type="button"

            disabled={disabled}
            className={`
                relative inline-flex
                rounded-full
                transition-all duration-200
                ${currentSize.switch}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${switchClassName}
            `}
            style={getSwitchStyle()}
            role="switch"
            aria-checked={value}
            aria-disabled={disabled}
        >
            <span
                className={`
                    absolute top-0.5 
                    rounded-full
                    bg-white
                    transition-transform duration-200
                    ${currentSize.thumb}
                    ${value ? currentSize.translate : 'translate-x-0.5'}
                `}
                style={{
                    backgroundColor: thumbColor,
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
                    left: 0,
                    right: 'auto'
                }}
            />
        </button>
    );

    //
    return <div onClick={handleClick} className={`cursor-pointer flex items-center justify-between p-4 bg-white 
            ${hasBoarder?'rounded-lg shadow hover:shadow-md':''}`}>
        <div className="flex flex-row items-center gap-2">
            {!!icon && <div className={`
                ${!!iconColor ? `bg-${iconColor}/10` : ''}
                p-2 rounded`}>
                {icon}
            </div>}
            {!!title && <span>{title}</span>}
        </div>
        <div className={`inline-flex items-center gap-2 ${containerClassName}`}>
            {switchElement}
        </div>
    </div>
};

export default ToolsSwitch;