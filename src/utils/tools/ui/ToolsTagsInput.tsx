import React, { useState, useRef, KeyboardEvent, useEffect } from 'react';
import { X, Plus } from 'lucide-react';

interface ToolsTagsInputProps {
    value: string[];
    onChange: (tags: string[]) => void;
    label?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    maxTags?: number;
    maxLength?: number;
    allowDuplicates?: boolean;
    className?: string;
    tagClassName?: string;
    inputClassName?: string;
    variant?: 'outline' | 'filled' | 'flushed';
    size?: 'sm' | 'md' | 'lg';
}

const ToolsTagsInput: React.FC<ToolsTagsInputProps> = ({
                                                           value,
                                                           onChange,
                                                           label,
                                                           placeholder = 'تگ جدید را وارد کنید...',
                                                           hint,
                                                           error,
                                                           required = false,
                                                           disabled = false,
                                                           maxTags = 50,
                                                           maxLength = 30,
                                                           allowDuplicates = false,
                                                           className = '',
                                                           tagClassName = '',
                                                           inputClassName = '',
                                                           variant = 'outline',
                                                           size = 'md',
                                                       }) => {

    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const sizeClasses = {
        sm: 'h-8 text-xs px-3',
        md: 'h-10 text-sm px-4',
        lg: 'h-12 text-base px-5',
    };

    const variantClasses = {
        outline: 'border border-gray-300 bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500',
        filled: 'bg-gray-100 border border-transparent focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500',
        flushed: 'border-b border-gray-300 bg-transparent rounded-none px-0 focus:border-sky-500 focus:ring-0',
    };

    const addTag = (tag: string) => {
        const trimmedTag = tag.trim();
        if (!trimmedTag) return;
        if (trimmedTag.length > maxLength) return;
        if (value.length >= maxTags) return;
        if (!allowDuplicates && value.includes(trimmedTag)) return;

        onChange([...value, trimmedTag]);
        setInputValue('');
    };

    const removeTag = (index: number) => {
        const newTags = [...value];
        newTags.splice(index, 1);
        onChange(newTags);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
            e.preventDefault();
            if (inputValue) {
                addTag(inputValue);
            }
        } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
            removeTag(value.length - 1);
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        const items = pastedText.split(/[،,;؛\n\t]+/).filter(item => item.trim());
        const newTags = [...value];
        for (const item of items) {
            const trimmed = item.trim();
            if (trimmed && !newTags.includes(trimmed) && newTags.length < maxTags && trimmed.length <= maxLength) {
                newTags.push(trimmed);
            }
        }
        onChange(newTags);
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                    {required && <span className="text-red-500 mr-1">*</span>}
                </label>
            )}

            <div
                className={`
                    w-full rounded-lg transition-all duration-200
                    ${variantClasses[variant]}
                    ${error ? 'border-red-500 focus-within:border-red-500' : ''}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
            >
                {/* Tags container */}
                <div className="flex flex-wrap items-center gap-2 p-2">
                    {value.map((tag, index) => (
                        <span
                            key={index}
                            className={`
                                inline-flex items-center gap-1
                                px-2.5 py-1 text-sm
                                bg-sky-100 text-sky-700
                                rounded-full
                                transition-all duration-150
                                hover:bg-sky-200
                                ${tagClassName}
                            `}
                        >
                            <span className="max-w-[150px] truncate">{tag}</span>
                            {!disabled && (
                                <button
                                    type="button"
                                    onClick={() => removeTag(index)}
                                    className="hover:text-sky-900 transition-colors"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </span>
                    ))}

                    {/* Input */}
                    {!disabled && value.length < maxTags && (
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onPaste={handlePaste}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                                setIsFocused(false);
                                if (inputValue) addTag(inputValue);
                            }}
                            placeholder={value.length === 0 ? placeholder : ''}
                            disabled={disabled}
                            maxLength={maxLength}
                            className={`
                                flex-1 min-w-[120px]
                                bg-transparent
                                focus:outline-none
                                ${sizeClasses[size]}
                                ${inputClassName}
                            `}
                        />
                    )}
                </div>
            </div>

            {/* Hint & Error */}
            {!error && hint && (
                <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
            )}
            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}

            {/* Counter */}
            {maxTags && (
                <div className={`text-xs text-gray-400 mt-1 ${value.length >= maxTags ? 'text-red-500' : ''}`}>
                    {value.length}/{maxTags} تگ
                </div>
            )}
        </div>
    );
};

export default ToolsTagsInput;