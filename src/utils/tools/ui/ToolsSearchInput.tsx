import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Search, X, Loader2 } from 'lucide-react';

interface ToolsSearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: (value: string) => void;
    onClear?: () => void;
    label?: string;
    placeholder?: string;
    loading?: boolean;
    disabled?: boolean;
    error?: string;
    hint?: string;
    debounceMs?: number;
    showRecentSearches?: boolean;
    recentSearches?: string[];
    onRecentSearchClick?: (term: string) => void;
    className?: string;
    autoFocus?: boolean;
}

const ToolsSearchInput: React.FC<ToolsSearchInputProps> = ({
                                                               value,
                                                               onChange,
                                                               onSearch,
                                                               onClear,
                                                               label,
                                                               placeholder = 'جستجو...',
                                                               loading = false,
                                                               disabled = false,
                                                               error,
                                                               hint,
                                                               debounceMs = 500,
                                                               showRecentSearches = false,
                                                               recentSearches = [],
                                                               onRecentSearchClick,
                                                               className = '',
                                                               autoFocus = false,
                                                           }) => {

    const [localValue, setLocalValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const [showRecent, setShowRecent] = useState(false);
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // همگام‌سازی با value خارجی
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    // بستن منوی جستجوهای اخیر با کلیک بیرون
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowRecent(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // فوکوس خودکار
    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setLocalValue(newValue);
        onChange(newValue);

        // debounce برای جستجوی خودکار
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        debounceTimer.current = setTimeout(() => {
            if (newValue.trim()) {
                onSearch(newValue);
            }
        }, debounceMs);
    };

    const handleSearch = () => {
        if (localValue.trim() && !disabled && !loading) {
            onSearch(localValue);
            setShowRecent(false);
        }
    };

    const handleClear = () => {
        setLocalValue('');
        onChange('');
        onClear?.();
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
        if (e.key === 'Escape') {
            handleClear();
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (showRecentSearches && recentSearches.length > 0) {
            setShowRecent(true);
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
        // تاخیر برای اینکه منو قبل از کلیک بسته نشه
        setTimeout(() => setShowRecent(false), 200);
    };

    const handleRecentClick = (term: string) => {
        setLocalValue(term);
        onChange(term);
        onRecentSearchClick?.(term);
        onSearch(term);
        setShowRecent(false);
    };

    return (
        <div className={`w-full ${className}`} ref={containerRef}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                </label>
            )}

            <div className="relative">
                {/* فیلد جستجو */}
                <div className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={localValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={`
                            w-full h-12 px-4 pl-24
                            rounded-lg border
                            transition-all duration-200
                            focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                            ${error ? 'border-red-500' : 'border-gray-300'}
                            ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
                        `}
                    />

                    {/* دکمه جستجو */}
                    <button
                        type="button"
                        onClick={handleSearch}
                        disabled={disabled || loading || !localValue.trim()}
                        className={`
                            absolute left-1 top-1/2 -translate-y-1/2
                            px-3 py-1.5 rounded-md
                            flex items-center gap-1
                            transition-all duration-200
                            ${!disabled && localValue.trim()
                            ? 'bg-sky-500 text-white hover:bg-sky-600'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }
                        `}
                    >
                        {loading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Search className="w-4 h-4" />
                        )}
                        <span className="text-sm">جستجو</span>
                    </button>

                    {/* دکمه پاک کردن */}
                    {localValue && !disabled && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* منوی جستجوهای اخیر */}
                {showRecent && showRecentSearches && recentSearches.length > 0 && (
                    <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                        <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
                            جستجوهای اخیر
                        </div>
                        {recentSearches.map((term, index) => (
                            <button
                                key={index}
                                onClick={() => handleRecentClick(term)}
                                className="w-full px-3 py-2 text-right text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                            >
                                <Search className="w-3 h-3 text-gray-400" />
                                <span>{term}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}

            {hint && !error && (
                <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
            )}
        </div>
    );
};

export default ToolsSearchInput;