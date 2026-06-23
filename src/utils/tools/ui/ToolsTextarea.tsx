import { forwardRef, ReactNode, useState, useRef, useEffect } from 'react';
import { Trash2, ChevronDown } from 'lucide-react';

// تعریف تایپ‌های کامل
type TextareaSize = 'sm' | 'md' | 'lg';
type TextareaVariant = 'outline' | 'filled' | 'flushed';

interface MenuItem {
    label: string;
    value: string;
}

interface ToolsTextareaProps {
    // ویژگی‌های اصلی
    id?: string;
    value: string;
    onChange: (value: string) => void;
    title?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    minRows?: number;
    maxRows?: number;

    // ویژگی‌های اضافی
    error?: string;
    hint?: string;
    icon?: ReactNode;
    onClickIcon?: () => void;
    iconPosition?: 'left' | 'right';
    size?: TextareaSize;
    variant?: TextareaVariant;
    containerClassName?: string;
    labelClassName?: string;
    textareaClassName?: string;
    errorClassName?: string;
    hintClassName?: string;
    disabled?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    autoResize?: boolean;

    // قابلیت‌های جدید
    clearable?: boolean;
    onClear?: () => void;

    // منو (Popup Menu)
    menuItems?: MenuItem[];
    menuIcon?: ReactNode;
    onMenuSelect?: (value: string) => void;
    menuTitle?: string;
    menuPosition?: 'top' | 'bottom';
}

const ToolsTextarea = forwardRef<HTMLTextAreaElement, ToolsTextareaProps>(({
                                                                               id,
                                                                               value,
                                                                               onChange,
                                                                               title,
                                                                               label,
                                                                               placeholder = '',
                                                                               required = false,
                                                                               rows = 4,
                                                                               minRows = 4,
                                                                               maxRows = 8,

                                                                               // ویژگی‌های اضافی
                                                                               error,
                                                                               hint,
                                                                               icon,
                                                                               onClickIcon,
                                                                               iconPosition = 'right',
                                                                               size = 'md',
                                                                               variant = 'filled',
                                                                               containerClassName = '',
                                                                               labelClassName = '',
                                                                               textareaClassName = '',
                                                                               errorClassName = '',
                                                                               hintClassName = '',
                                                                               disabled = false,
                                                                               readOnly = false,
                                                                               maxLength,
                                                                               autoResize = false,

                                                                               // قابلیت‌های جدید
                                                                               clearable = false,
                                                                               onClear,

                                                                               // منو
                                                                               menuItems = [],
                                                                               menuIcon,
                                                                               onMenuSelect,
                                                                               menuTitle,
                                                                               menuPosition = 'bottom',
                                                                           }, ref) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // تعیین اندازه
    const sizeClasses = {
        sm: 'text-xs px-3 py-2',
        md: 'text-sm px-4 py-2.5',
        lg: 'text-base px-5 py-3',
    };

    // تعیین نوع ظاهر (variant)
    const variantClasses = {
        outline: 'border border-gray-300 bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500',
        filled: 'bg-gray-100 border border-transparent focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500',
        flushed: 'border-b border-gray-300 bg-transparent rounded-none px-0 focus:border-sky-500 focus:ring-0',
    };

    // استایل پایه
    const baseTextareaClasses = `
        w-full 
        rounded-lg 
        transition-all 
        duration-200 
        placeholder:text-gray-400 
        placeholder:text-sm
        disabled:bg-gray-50 
        disabled:text-gray-400 
        disabled:cursor-not-allowed
        read-only:bg-gray-50 
        read-only:cursor-default
        focus:outline-none
        resize-y
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        ${textareaClassName}
    `;

    // استایل برچسب
    const baseLabelClasses = `
        block 
        text-sm 
        font-medium 
        text-gray-700 
        mb-1.5
        ${required ? 'after:content-["*"] after:text-red-500 after:mr-1' : ''}
        ${labelClassName}
    `;

    const finalTitle = label || title;

    // بستن منو با کلیک بیرون
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // auto-resize
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);

        if (autoResize && textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            const newHeight = Math.min(
                Math.max(textareaRef.current.scrollHeight, minRows * 24),
                maxRows * 24
            );
            textareaRef.current.style.height = `${newHeight}px`;
        }
    };

    // clear textarea
    const handleClear = () => {
        onChange('');
        onClear?.();
    };

    // انتخاب آیتم از منو
    const handleMenuSelect = (itemValue: string) => {
        onChange(itemValue);
        onMenuSelect?.(itemValue);
        setIsMenuOpen(false);
        setSearchTerm('');
    };

    // فیلتر کردن آیتم‌های منو
    const filteredMenuItems = menuItems.filter(item =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // تعیین موقعیت منو
    const getMenuPosition = () => {
        if (menuPosition === 'top') {
            return 'bottom-full mb-2';
        }
        return 'top-full mt-2';
    };

    // چیدمان دکمه‌های سمت چپ
    const hasLeftActions = icon && iconPosition === 'left';
    const hasRightActions = icon && iconPosition === 'right';

    return (
        <div className={`w-full mb-4 ${containerClassName}`}>
            {finalTitle && (
                <label className={baseLabelClasses}>
                    {finalTitle}
                </label>
            )}

            <div className="relative">
                {/* دکمه‌های سمت چپ */}
                <div className="absolute left-2 top-2 flex items-center gap-1">
                    {/* دکمه Clear (سطل آشغال قرمز) */}
                    {clearable && value && !disabled && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="p-1.5 hover:bg-red-50 rounded-md transition-colors group"
                            title="پاک کردن"
                        >
                            <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                        </button>
                    )}

                    {/* دکمه منو */}
                    {menuItems.length > 0 && (
                        <div className="relative" ref={menuRef}>
                            <button
                                ref={menuButtonRef}
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                                title={menuTitle || "متن‌های آماده"}
                            >
                                {menuIcon || <ChevronDown className="w-4 h-4 text-gray-500" />}
                            </button>

                            {/* منوی بازشونده - با موقعیت پایین و اسکرول */}
                            {isMenuOpen && (
                                <div
                                    className={`
                                        absolute ${getMenuPosition()} left-0
                                        w-96 max-w-[90vw]
                                        bg-white rounded-lg shadow-xl border border-gray-200 
                                        z-50
                                        flex flex-col
                                        max-h-[400px]
                                    `}
                                    style={{
                                        maxHeight: 'min(400px, 50vh)'
                                    }}
                                >
                                    {/* جستجو در منو - sticky */}
                                    <div className="sticky top-0 bg-white p-3 border-b border-gray-100 rounded-t-lg z-10">
                                        <input
                                            type="text"
                                            placeholder="جستجو در متن‌ها..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                                            onClick={(e) => e.stopPropagation()}
                                            autoFocus
                                        />
                                    </div>

                                    {/* لیست آیتم‌ها - اسکرول‌دار */}
                                    <div className="overflow-y-auto flex-1">
                                        {filteredMenuItems.length === 0 ? (
                                            <div className="px-4 py-8 text-sm text-gray-500 text-center">
                                                موردی یافت نشد
                                            </div>
                                        ) : (
                                            filteredMenuItems.map((item, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => handleMenuSelect(item.value)}
                                                    className="w-full text-right px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 text-left"
                                                >
                                                    <div className="whitespace-pre-wrap break-words">
                                                        {item.label}
                                                    </div>
                                                </button>
                                            ))
                                        )}
                                    </div>

                                    {/* راهنما - sticky پایین */}
                                    <div className="sticky bottom-0 bg-gray-50 px-3 py-2 text-xs text-gray-500 border-t border-gray-100 rounded-b-lg">
                                        {filteredMenuItems.length} مورد • برای انتخاب کلیک کنید
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Textarea */}
                <textarea
                    ref={(node) => {
                        textareaRef.current = node;
                        if (typeof ref === 'function') ref(node);
                        else if (ref) ref.current = node;
                    }}
                    id={id}
                    value={value}
                    onChange={handleInput}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    readOnly={readOnly}
                    rows={rows}
                    maxLength={maxLength}
                    className={`
                        ${baseTextareaClasses}
                        ${hasLeftActions ? 'pl-20' : ''}
                        ${hasRightActions ? 'pr-10' : ''}
                    `}
                    style={{
                        paddingLeft: (clearable || menuItems.length > 0) ? '80px' : undefined
                    }}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
                />

                {/* آیکون سمت راست */}
                {icon && iconPosition === 'right' && (
                    <div
                        onClick={onClickIcon}
                        className={`absolute right-3 top-3 text-gray-400 ${onClickIcon ? 'cursor-pointer' : ''}`}
                    >
                        {icon}
                    </div>
                )}
            </div>

            {/* پیام خطا */}
            {error && (
                <p className={`mt-1.5 text-sm text-red-600 ${errorClassName}`}>
                    {error}
                </p>
            )}

            {/* راهنما */}
            {hint && !error && (
                <p className={`mt-1.5 text-xs text-gray-500 ${hintClassName}`}>
                    {hint}
                </p>
            )}
        </div>
    );
});

ToolsTextarea.displayName = 'ToolsTextarea';

export default ToolsTextarea;