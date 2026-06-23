import React, {ReactNode, useRef, useState} from 'react';

// نوع‌های مختلف برای دکمه
type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'ghost' | 'outline';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonShape = 'rounded' | 'pill' | 'square' | 'circle';

interface ToolsButtonProps {
    // ویژگی‌های اصلی
    children?: ReactNode;
    onClick?: () => void;
    onLongPress?: () => void;
    type?: 'button' | 'submit' | 'reset';

    // ویژگی‌های ظاهری
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;

    // آیکون
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    iconOnly?: boolean;

    // رنگ و استایل سفارشی
    customColor?: string;
    customBgColor?: string;
    customHoverColor?: string;

    // کلاس‌های سفارشی
    className?: string;

    // ریزبین
    ripple?: boolean;
}

const ToolsButton: React.FC<ToolsButtonProps> = (
    {
        children,
        onClick,
        onLongPress,
        type = 'button',
        variant = 'primary',
        size = 'md',
        shape = 'rounded',
        disabled = false,
        loading = false,
        fullWidth = false,
        icon,
        iconPosition = 'left',
        iconOnly = false,
        customColor,
        customBgColor,
        customHoverColor,
        className = '',
        ripple = true,
    }) => {

    const longPressTimer = useRef<NodeJS.Timeout | null>(null);
    const [rippleEffect, setRippleEffect] = useState<{ x: number; y: number; show: boolean }>({
        x: 0,
        y: 0,
        show: false
    });
    const buttonRef = useRef<HTMLButtonElement>(null);

    // رنگ‌های پیش‌فرض برای هر variant
    const variantClasses = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-sm',
        success: 'bg-green-600 hover:bg-green-700 text-white shadow-sm',
        danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm',
        warning: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-sm',
        info: 'bg-sky-500 hover:bg-sky-600 text-white shadow-sm',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
        outline: 'border-2 border-blue-600 hover:bg-blue-50 text-blue-600',
    };

    // اندازه‌ها
    const sizeClasses = {
        xs: 'px-2.5 py-1.5 text-xs',
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-5 py-3 text-base',
        xl: 'px-6 py-3.5 text-base',
    };

    // شکل دکمه
    const shapeClasses = {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        square: 'rounded-none',
        circle: 'rounded-full aspect-square p-0',
    };

    // سایز آیکون
    const iconSizes = {
        xs: 'w-3.5 h-3.5',
        sm: 'w-4 h-4',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
        xl: 'w-5 h-5',
    };

    // ترکیب کلاس‌ها
    const getButtonClasses = () => {
        let baseClasses = `
            inline-flex items-center justify-center
            font-medium
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            active:scale-95
        `;

        // عرض کامل
        if (fullWidth) {
            baseClasses += ' w-full';
        }

        // استایل دایره‌ای برای iconOnly
        if (iconOnly) {
            baseClasses += ` p-0 ${shape === 'circle' ? 'w-10 h-10' : ''}`;
        }

        // اضافه کردن کلاس‌های variant (اگر رنگ سفارشی نباشد)
        if (!customBgColor && !customColor) {
            baseClasses += ` ${variantClasses[variant]}`;
        }

        return baseClasses;
    };

    // تنظیم استایل سفارشی
    const customStyle = () => {
        const style: React.CSSProperties = {};
        if (customBgColor) style.backgroundColor = customBgColor;
        if (customColor) style.color = customColor;
        return style;
    };

    // رویداد کلیک طولانی
    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onLongPress && !disabled && !loading) {
            longPressTimer.current = setTimeout(() => {
                onLongPress();
            }, 500);
        }

        // ripple effect
        if (ripple && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setRippleEffect({x, y, show: true});
            setTimeout(() => setRippleEffect(prev => ({...prev, show: false})), 500);
        }
    };

    const handleMouseUp = () => {
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }
    };

    const handleClick = () => {
        if (!disabled && !loading && onClick) {
            onClick();
        }
    };

    return (
        <button
            ref={buttonRef}
            type={type}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            disabled={disabled || loading}
            className={`
                ${getButtonClasses()}
                ${sizeClasses[size]}
                ${shapeClasses[shape]}
                ${iconOnly ? 'aspect-square p-0' : ''}
                relative overflow-hidden
                ${className}
            `}
            style={customStyle()}
        >
            {/* ripple effect */}
            {ripple && rippleEffect.show && (
                <span
                    className="absolute rounded-full bg-white/30 animate-ping"
                    style={{
                        left: rippleEffect.x - 20,
                        top: rippleEffect.y - 20,
                        width: '40px',
                        height: '40px',
                        pointerEvents: 'none',
                    }}
                />
            )}

            {/* loading spinner */}
            {loading && (
                <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"
                            fill="none"/>
                    <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
            )}

            {/* آیکون سمت چپ */}
            {!iconOnly && icon && iconPosition === 'left' && !loading && (
                <span className={`${!iconOnly && children ? 'ml-2' : ''} ${iconSizes[size]}`}>
                    {icon}
                </span>
            )}

            {/* متن یا فقط آیکون */}
            {!iconOnly ? children : null}
            {iconOnly && icon && (
                <span className={iconSizes[size]}>
                    {icon}
                </span>
            )}

            {/* آیکون سمت راست */}
            {icon && iconPosition === 'right' && !loading && children && (
                <span className={`mr-2 ${iconSizes[size]}`}>
                    {icon}
                </span>
            )}
        </button>
    );
};

export default ToolsButton;