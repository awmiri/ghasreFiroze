import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

// لیست کدهای کشورها
const countryCodes = [
    { code: '+98', country: 'ایران', flag: '🇮🇷', pattern: /^[0-9]{10}$/ },
    { code: '+1', country: 'آمریکا/کانادا', flag: '🇺🇸', pattern: /^[0-9]{10}$/ },
    { code: '+44', country: 'انگلستان', flag: '🇬🇧', pattern: /^[0-9]{10}$/ },
    { code: '+49', country: 'آلمان', flag: '🇩🇪', pattern: /^[0-9]{10}$/ },
    { code: '+33', country: 'فرانسه', flag: '🇫🇷', pattern: /^[0-9]{9}$/ },
    { code: '+39', country: 'ایتالیا', flag: '🇮🇹', pattern: /^[0-9]{10}$/ },
    { code: '+34', country: 'اسپانیا', flag: '🇪🇸', pattern: /^[0-9]{9}$/ },
    { code: '+46', country: 'سوئد', flag: '🇸🇪', pattern: /^[0-9]{9}$/ },
    { code: '+47', country: 'نروژ', flag: '🇳🇴', pattern: /^[0-9]{8}$/ },
    { code: '+45', country: 'دانمارک', flag: '🇩🇰', pattern: /^[0-9]{8}$/ },
    { code: '+358', country: 'فنلاند', flag: '🇫🇮', pattern: /^[0-9]{9}$/ },
    { code: '+31', country: 'هلند', flag: '🇳🇱', pattern: /^[0-9]{9}$/ },
    { code: '+32', country: 'بلژیک', flag: '🇧🇪', pattern: /^[0-9]{9}$/ },
    { code: '+41', country: 'سوئیس', flag: '🇨🇭', pattern: /^[0-9]{9}$/ },
    { code: '+43', country: 'اتریش', flag: '🇦🇹', pattern: /^[0-9]{10}$/ },
    { code: '+61', country: 'استرالیا', flag: '🇦🇺', pattern: /^[0-9]{9}$/ },
    { code: '+64', country: 'نیوزیلند', flag: '🇳🇿', pattern: /^[0-9]{9}$/ },
    { code: '+81', country: 'ژاپن', flag: '🇯🇵', pattern: /^[0-9]{10}$/ },
    { code: '+82', country: 'کره جنوبی', flag: '🇰🇷', pattern: /^[0-9]{10}$/ },
    { code: '+86', country: 'چین', flag: '🇨🇳', pattern: /^[0-9]{11}$/ },
    { code: '+91', country: 'هند', flag: '🇮🇳', pattern: /^[0-9]{10}$/ },
    { code: '+55', country: 'برزیل', flag: '🇧🇷', pattern: /^[0-9]{11}$/ },
    { code: '+54', country: 'آرژانتین', flag: '🇦🇷', pattern: /^[0-9]{10}$/ },
    { code: '+52', country: 'مکزیک', flag: '🇲🇽', pattern: /^[0-9]{10}$/ },
    { code: '+27', country: 'آفریقای جنوبی', flag: '🇿🇦', pattern: /^[0-9]{9}$/ },
];

interface ToolsPhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    countryCode?: string;
    onCountryCodeChange?: (code: string) => void;
    label?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    variant?: 'outline' | 'filled' | 'flushed';
    size?: 'sm' | 'md' | 'lg';
}

const ToolsPhoneInput: React.FC<ToolsPhoneInputProps> = ({
                                                             value,
                                                             onChange,
                                                             countryCode = '+98',
                                                             onCountryCodeChange,
                                                             label,
                                                             placeholder = '912 123 4567',
                                                             hint,
                                                             error,
                                                             required = false,
                                                             disabled = false,
                                                             className = '',
                                                             variant = 'outline',
                                                             size = 'md',
                                                         }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

    const sizeClasses = {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
    };

    const variantClasses = {
        outline: 'border border-gray-300 bg-white focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500',
        filled: 'bg-gray-100 border border-transparent focus-within:bg-white focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500',
        flushed: 'border-b border-gray-300 bg-transparent rounded-none px-0 focus-within:border-sky-500',
    };

    const filteredCountries = countryCodes.filter(c =>
        c.country.includes(searchTerm) || c.code.includes(searchTerm)
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCountrySelect = (code: string) => {
        onCountryCodeChange?.(code);
        setIsOpen(false);
        setSearchTerm('');
    };

    // حذف کاراکترهای غیرعددی از شماره
    const handlePhoneChange = (phone: string) => {
        const cleaned = phone.replace(/[^0-9]/g, '');
        onChange(cleaned);
    };

    // فرمت نمایش شماره تلفن ایرانی
    const formatDisplayPhone = (phone: string) => {
        if (countryCode === '+98' && phone.length === 10) {
            return `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;
        }
        return phone;
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                    {required && <span className="text-red-500 mr-1">*</span>}
                </label>
            )}

            <div className="flex gap-2">
                {/* Country Code Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => !disabled && setIsOpen(!isOpen)}
                        className={`
                            flex items-center gap-1 px-3
                            rounded-lg border
                            transition-all duration-200
                            ${sizeClasses[size]}
                            ${variantClasses[variant].split(' ')[0]}
                            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        `}
                        disabled={disabled}
                    >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="font-medium">{selectedCountry.code}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && !disabled && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <div className="p-2 border-b border-gray-100">
                                <input
                                    type="text"
                                    placeholder="جستجو..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                            <div className="max-h-60 overflow-y-auto">
                                {filteredCountries.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country.code)}
                                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">{country.flag}</span>
                                            <span>{country.country}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-gray-500">{country.code}</span>
                                            {selectedCountry.code === country.code && (
                                                <Check className="w-4 h-4 text-sky-500" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Phone Number Input */}
                <div className="flex-1">
                    <input
                        type="tel"
                        value={value}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder={placeholder}
                        disabled={disabled}
                        dir="ltr"
                        className={`
                            w-full rounded-lg
                            transition-all duration-200
                            placeholder:text-gray-400
                            disabled:bg-gray-50 disabled:cursor-not-allowed
                            focus:outline-none
                            ${sizeClasses[size]}
                            ${variantClasses[variant]}
                            ${error ? 'border-red-500 focus-within:border-red-500' : ''}
                        `}
                    />
                </div>
            </div>

            {/* Hint & Error */}
            {!error && hint && (
                <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
            )}
            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}

            {/* نمایش شماره فرمت شده */}
            {value && countryCode === '+98' && value.length === 10 && (
                <p className="mt-1 text-xs text-green-600">
                    شماره وارد شده: {formatDisplayPhone(value)}
                </p>
            )}
        </div>
    );
};

export default ToolsPhoneInput;