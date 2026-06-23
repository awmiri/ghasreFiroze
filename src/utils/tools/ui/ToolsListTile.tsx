import React, {ReactNode, useRef} from 'react';

// نوع‌های مختلف برای density (تراکم)
type ListTileDensity = 'comfortable' | 'compact' | 'spacious';

// نوع برای موقعیت متن
type TextPosition = 'top' | 'center' | 'bottom';

interface ToolsListTileProps {
    // بخش‌های اصلی
    title?: ReactNode;
    subtitle?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;

    // ویژگی‌های تعاملی
    onTap?: () => void;
    onLongPress?: () => void;
    disabled?: boolean;
    selected?: boolean;

    // ظاهر
    density?: ListTileDensity;
    textPosition?: TextPosition;
    textColor?: string;
    subtitleColor?: string;
    backgroundColor?: string;
    selectedBackgroundColor?: string;
    hoverColor?: string;
    rippleColor?: string;

    // استایل‌ها
    divider?: boolean;
    contentPadding?: string;
    shape?: string;

    // کلاس‌های سفارشی
    containerClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    leadingClassName?: string;
    trailingClassName?: string;

    // سایر
    isThreeLine?: boolean;
    dense?: boolean;

    textAlign?: 'left' | 'center' | 'right';
}

const ToolsListTile: React.FC<ToolsListTileProps> = (
    {
        title,
        subtitle,
        leading,
        trailing,
        onTap,
        onLongPress,
        disabled = false,
        selected = false,
        density = 'comfortable',
        textPosition = 'center',
        textColor,
        subtitleColor,
        backgroundColor = 'bg-white',
        selectedBackgroundColor = 'bg-primary-50',
        hoverColor = 'hover:bg-gray-50',
        rippleColor = 'active:bg-gray-100',
        divider = false,
        contentPadding = 'px-4 py-2',
        shape = 'rounded-none',
        containerClassName = '',
        titleClassName = '',
        subtitleClassName = '',
        leadingClassName = '',
        trailingClassName = '',
        isThreeLine = false,
        dense = false,
        textAlign = 'right',
    }) => {

    const longPressTimer = useRef<NodeJS.Timeout | null>(null);
    const isLongPressTriggered = useRef(false);

    // تنظیم padding بر اساس density
    const densityClasses = {
        comfortable: 'py-3',
        compact: 'py-2',
        spacious: 'py-4',
    };

    // تنظیم اندازه متن بر اساس dense
    const titleSize = dense ? 'text-sm' : 'text-base';
    const subtitleSize = dense ? 'text-xs' : 'text-sm';

    // موقعیت متن
    const textPositionClasses = {
        top: 'justify-start',
        center: 'justify-center',
        bottom: 'justify-end',
    };

    // رنگ پس‌زمینه بر اساس selected
    const bgColor = selected ? selectedBackgroundColor : backgroundColor;

    // ترکیب کلاس‌ها - اضافه کردن text-left برای reset کردن text-align button
    const combinedClasses = `
        flex
        w-full
        items-center
        text-${textAlign}
        ${densityClasses[density]}
        ${contentPadding}
        ${shape}
        ${bgColor}
        ${disabled ? 'opacity-50 cursor-not-allowed' : onTap || onLongPress ? `cursor-pointer ${hoverColor} ${rippleColor}` : ''}
        transition-colors duration-150
        ${divider ? 'border-b border-gray-100' : ''}
        ${containerClassName}
    `;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!disabled && onTap && !isLongPressTriggered.current) {
            onTap();
        }
        isLongPressTriggered.current = false;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (onLongPress && !disabled) {
            isLongPressTriggered.current = false;
            longPressTimer.current = setTimeout(() => {
                isLongPressTriggered.current = true;
                handleLongPress();
            }, 500);
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }
    };

    const handleLongPress = () => {
        if (!disabled && onLongPress) {
            onLongPress();
        }
    };

    const handleLeadingClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleMouseUp(e);
    };

    const handleTrailingClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleMouseUp(e);
    };

    const Wrapper = (onTap || onLongPress) ? 'button' : 'div';

    // اگر Wrapper button هست، additional props
    const buttonProps = (onTap || onLongPress) ? {
        type: 'button' as const,
    } : {};

    return (
        <Wrapper
            {...buttonProps}
            className={combinedClasses}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            disabled={disabled}
            role={onTap ? 'button' : undefined}
            tabIndex={onTap ? 0 : undefined}
        >
            {/* Leading - کلیک مستقل */}
            {leading && (
                <div
                    className={`flex-shrink-0 ml-3 ${leadingClassName}`}
                    onClick={handleLeadingClick}
                    onMouseDown={handleLeadingClick}
                >
                    {leading}
                </div>
            )}

            {/* بخش اصلی (title و subtitle) */}
            <div className={`flex-1 flex flex-col ${textPositionClasses[textPosition]} min-w-0`}>
                {title && (
                    <div className={`
                        ${titleSize}
                        font-medium
                        ${textColor ? `text-${textColor}` : 'text-gray-900'}
                        ${titleClassName}
                        ${disabled ? 'text-gray-400' : ''}
                        truncate
                    `}>
                        {title}
                    </div>
                )}
                {subtitle && (
                    <div className={`
                        ${subtitleSize}
                        ${subtitleColor ? `text-${subtitleColor}` : 'text-gray-500'}
                        ${subtitleClassName}
                        ${disabled ? 'text-gray-400' : ''}
                        ${isThreeLine ? '' : 'truncate'}
                        ${title ? 'mt-0.5' : ''}
                    `}>
                        {subtitle}
                    </div>
                )}
            </div>

            {/* Trailing - کلیک مستقل */}
            {trailing && (
                <div
                    className={`flex-shrink-0 mr-3 ${trailingClassName}`}
                    onClick={handleTrailingClick}
                    onMouseDown={handleTrailingClick}
                >
                    {trailing}
                </div>
            )}
        </Wrapper>
    );
};

export default ToolsListTile;