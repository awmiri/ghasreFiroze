import React, {ReactNode, useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';
import ToolsListTile from './ToolsListTile';

// نوع‌های مختلف برای density (تراکم)
type ExpansionTileDensity = 'comfortable' | 'compact' | 'spacious';

interface ToolsExpansionTileProps {
    // بخش‌های اصلی
    title?: ReactNode;
    subtitle?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
    children?: ReactNode;

    // کنترل باز و بسته شدن
    expanded?: boolean;
    onExpandedChanged?: (expanded: boolean) => void;
    initiallyExpanded?: boolean;

    // ویژگی‌های تعاملی
    onTap?: () => void;
    onLongPress?: () => void;
    disabled?: boolean;
    selected?: boolean;

    // ظاهر
    density?: ExpansionTileDensity;
    textPosition?: 'top' | 'center' | 'bottom';
    textColor?: string;
    subtitleColor?: string;
    backgroundColor?: string;
    expandedBackgroundColor?: string;
    selectedBackgroundColor?: string;
    hoverColor?: string;

    // استایل‌ها
    divider?: boolean;
    dividerColor?: string;
    contentPadding?: string;
    shape?: string;
    shadow?: boolean;
    shadowSize?: 'sm' | 'md' | 'lg';

    // کلاس‌های سفارشی
    containerClassName?: string;
    headerClassName?: string;
    childrenClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    leadingClassName?: string;
    trailingClassName?: string;

    // انیمیشن
    animationDuration?: number;

    textAlign?: 'left' | 'center' | 'right';
}

const ToolsExpansionTile: React.FC<ToolsExpansionTileProps> = (
    {
        title,
        subtitle,
        leading,
        trailing,
        children,
        expanded: controlledExpanded,
        onExpandedChanged,
        initiallyExpanded = false,
        onTap,
        onLongPress,
        disabled = false,
        selected = false,
        density = 'comfortable',
        textPosition = 'center',
        textColor,
        subtitleColor,
        backgroundColor = 'bg-white',
        expandedBackgroundColor = 'bg-gray-50',
        selectedBackgroundColor = 'bg-primary-50',
        hoverColor = 'hover:bg-gray-50',
        divider = true,
        dividerColor = 'border-gray-200',
        contentPadding = 'px-4 py-2',
        shape = 'rounded-lg',
        shadow = true,
        shadowSize = 'sm',
        containerClassName = '',
        headerClassName = '',
        childrenClassName = '',
        titleClassName = '',
        subtitleClassName = '',
        leadingClassName = '',
        trailingClassName = '',
        animationDuration = 200,
        textAlign = 'right',
    }) => {

    // مدیریت state داخلی اگر uncontrolled باشد
    const [internalExpanded, setInternalExpanded] = useState(initiallyExpanded);

    // تعیین اینکه آیا کامپوننت controlled است یا uncontrolled
    const isControlled = controlledExpanded !== undefined;
    const isExpanded = isControlled ? controlledExpanded : internalExpanded;

    const handleToggle = () => {
        if (disabled) return;

        const newExpanded = !isExpanded;
        if (!isControlled) {
            setInternalExpanded(newExpanded);
        }
        onExpandedChanged?.(newExpanded);
    };

    // کلاس‌های سایه
    const shadowClasses = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
    };

    // تنظیمات density برای children
    const densityClasses = {
        comfortable: 'py-3',
        compact: 'py-1',
        spacious: 'py-4',
    };

    // آیکون پیش‌فرض برای trailing
    const defaultTrailing = (
        <div className="transition-transform duration-200" style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
            <ChevronDown className="w-4 h-4 text-gray-400"/>
        </div>
    );

    // ترکیب trailing نهایی
    const finalTrailing = trailing || defaultTrailing;

    // استایل پس‌زمینه برای حالت expanded
    const headerBgColor = isExpanded && !selected
        ? expandedBackgroundColor
        : selected
            ? selectedBackgroundColor
            : backgroundColor;

    return (
        <div
            className={`
                w-full 
                ${shadow ? shadowClasses[shadowSize] : ''}
                ${shape}
                overflow-hidden
                ${containerClassName}
            `}
        >
            {/* Header - با استفاده از ToolsListTile */}
            <div className={`${headerClassName} ${divider && !isExpanded ? `border-b ${dividerColor}` : ''}`}>
                <ToolsListTile
                    title={title}
                    subtitle={subtitle}
                    leading={leading}
                    trailing={finalTrailing}
                    onTap={() => {
                        handleToggle();
                        onTap?.();
                    }}
                    onLongPress={onLongPress}
                    disabled={disabled}
                    selected={selected}
                    density={density}
                    textPosition={textPosition}
                    textColor={textColor}
                    subtitleColor={subtitleColor}
                    backgroundColor={headerBgColor}
                    selectedBackgroundColor={selectedBackgroundColor}
                    hoverColor={hoverColor}
                    divider={false}
                    contentPadding={contentPadding}
                    shape={`${shape} ${isExpanded ? `rounded-b-none` : ''}`}
                    containerClassName="w-full"
                    titleClassName={titleClassName}
                    subtitleClassName={subtitleClassName}
                    leadingClassName={leadingClassName}
                    trailingClassName={trailingClassName}
                    textAlign={textAlign}
                />
            </div>

            {/* Children - با انیمیشن و دیوایدر */}
            <div
                className={`
                    overflow-hidden transition-all duration-${animationDuration}
                    ${childrenClassName}
                    ${divider && isExpanded ? `border-t ${dividerColor}` : ''}
                `}
                style={{
                    maxHeight: isExpanded ? 'var(--max-height, 1000px)' : '0',
                    opacity: isExpanded ? 1 : 0,
                }}
            >
                <div
                    className={`${densityClasses[density]} ${contentPadding} pr-8 bg-${expandedBackgroundColor.split('-')[1] || 'gray-50'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ToolsExpansionTile;