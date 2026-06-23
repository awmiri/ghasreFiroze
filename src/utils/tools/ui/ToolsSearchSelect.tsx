import React, { useState } from 'react';
import { Search, Trash2, X } from 'lucide-react';

interface ToolsSearchSelectProps<T> {
    value: T | null;
    onChange: (value: T | null) => void;
    onSearch: () => void;
    renderDisplay: (value: T | null) => React.ReactNode;
    label?: string;
    placeholder?: string;
    searchButtonText?: string;
    disabled?: boolean;
    error?: string;
    hint?: string;
    clearable?: boolean;
    className?: string;
}

function ToolsSearchSelect<T>({
                                  value,
                                  onChange,
                                  onSearch,
                                  renderDisplay,
                                  label,
                                  placeholder = 'هیچ موردی انتخاب نشده',
                                  searchButtonText = 'جستجو',
                                  disabled = false,
                                  error,
                                  hint,
                                  clearable = true,
                                  className = '',
                              }: ToolsSearchSelectProps<T>) {

    const handleClear = () => {
        onChange(null);
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                </label>
            )}

            <div className="space-y-3">
                {/* دکمه جستجو */}
                <button
                    type="button"
                    onClick={onSearch}
                    disabled={disabled}
                    className={`
                        w-full h-12 flex items-center justify-center gap-2
                        rounded-lg transition-all duration-200
                        ${disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-sky-500 text-white hover:bg-sky-600'}
                    `}
                >
                    <Search className="w-4 h-4" />
                    <span>{searchButtonText}</span>
                </button>

                {/* نمایش مقدار انتخاب شده */}
                <div
                    className={`
                        min-h-12 p-3 rounded-lg border
                        transition-all duration-200
                        ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}
                        ${value ? '' : 'text-gray-400'}
                    `}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            {value ? renderDisplay(value) : placeholder}
                        </div>
                        {clearable && value && !disabled && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="p-1 hover:bg-gray-200 rounded-md transition-colors"
                            >
                                <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                        )}
                    </div>
                </div>

                {hint && !error && (
                    <p className="text-xs text-gray-500">{hint}</p>
                )}

                {error && (
                    <p className="text-sm text-red-600">{error}</p>
                )}
            </div>
        </div>
    );
}

export default ToolsSearchSelect;