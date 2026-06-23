import React, { useState } from 'react';

interface ToolsRatingProps {
    value: number;
    onChange: (value: number) => void;
    count?: number;
    size?: 'sm' | 'md' | 'lg';
    activeColor?: string;
    inactiveColor?: string;
    activeIcon?: React.ReactNode;
    inactiveIcon?: React.ReactNode;
    readonly?: boolean;
    disabled?: boolean;
    showValue?: boolean;
    label?: string;
    className?: string;
}

const ToolsRating: React.FC<ToolsRatingProps> = ({
    value,
    onChange,
    count = 5,
    size = 'md',
    activeColor = '#FBBF24',
    inactiveColor = '#E5E7EB',
    activeIcon,
    inactiveIcon,
    readonly = false,
    disabled = false,
    showValue = false,
    label,
    className = '',
}) => {

    const [hoverValue, setHoverValue] = useState(0);

    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
    };

    const iconSize = sizeClasses[size];

    // آیکون پیش‌فرض ستاره
    const defaultActiveIcon = (
        <svg className={`${iconSize} text-yellow-400`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    const defaultInactiveIcon = (
        <svg className={`${iconSize} text-gray-300`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    const handleClick = (index: number) => {
        if (!readonly && !disabled) {
            onChange(index);
        }
    };

    const handleMouseEnter = (index: number) => {
        if (!readonly && !disabled) {
            setHoverValue(index);
        }
    };

    const handleMouseLeave = () => {
        if (!readonly && !disabled) {
            setHoverValue(0);
        }
    };

    const displayValue = hoverValue || value;

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <div className="flex items-center gap-1">
                {Array.from({ length: count }).map((_, index) => {
                    const ratingValue = index + 1;
                    const isActive = ratingValue <= displayValue;

                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleClick(ratingValue)}
                            onMouseEnter={() => handleMouseEnter(ratingValue)}
                            onMouseLeave={handleMouseLeave}
                            disabled={disabled || readonly}
                            className={`
                                focus:outline-none transition-transform duration-150
                                ${!disabled && !readonly ? 'hover:scale-110 cursor-pointer' : 'cursor-default'}
                                ${disabled ? 'opacity-50' : ''}
                            `}
                        >
                            {isActive
                                ? (activeIcon || defaultActiveIcon)
                                : (inactiveIcon || defaultInactiveIcon)
                            }
                        </button>
                    );
                })}
                {showValue && (
                    <span className="mr-2 text-sm text-gray-500">
                        ({value}/{count})
                    </span>
                )}
            </div>
        </div>
    );
};

export default ToolsRating;