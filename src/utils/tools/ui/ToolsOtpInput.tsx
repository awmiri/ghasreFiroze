import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface ToolsOtpInputProps {
    length?: number;
    value: string;
    onChange: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    error?: string;
    label?: string;
    autoFocus?: boolean;
    className?: string;
}

const ToolsOtpInput: React.FC<ToolsOtpInputProps> = ({
                                                         length = 6,
                                                         value,
                                                         onChange,
                                                         onComplete,
                                                         disabled = false,
                                                         error,
                                                         label,
                                                         autoFocus = false,
                                                         className = '',
                                                     }) => {

    const [otp, setOtp] = useState<string[]>(value.split('').slice(0, length));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const newOtp = value.split('').slice(0, length);
        while (newOtp.length < length) newOtp.push('');
        setOtp(newOtp);
    }, [value, length]);

    useEffect(() => {
        if (autoFocus && inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [autoFocus]);

    const handleChange = (index: number, val: string) => {
        if (disabled) return;

        const newOtp = [...otp];
        newOtp[index] = val.slice(-1);
        setOtp(newOtp);

        const fullValue = newOtp.join('');
        onChange(fullValue);

        if (fullValue.length === length && onComplete) {
            onComplete(fullValue);
        }

        if (val && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, length);
        const newOtp = [...otp];
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);
        onChange(newOtp.join(''));
        if (newOtp.join('').length === length && onComplete) {
            onComplete(newOtp.join(''));
        }
        inputRefs.current[Math.min(pastedData.length, length - 1)]?.focus();
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                </label>
            )}

            <div className="flex gap-2 justify-center" onPaste={handlePaste}>
                {Array.from({ length }).map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el; }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={otp[index] || ''}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        disabled={disabled}
                        className={`
                            w-12 h-12 text-center text-lg font-semibold
                            border-2 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500
                            transition-all duration-200
                            ${error ? 'border-red-500' : 'border-gray-300'}
                            ${disabled ? 'bg-gray-100 text-gray-400' : 'bg-white'}
                        `}
                    />
                ))}
            </div>

            {error && (
                <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
            )}
        </div>
    );
};

export default ToolsOtpInput;