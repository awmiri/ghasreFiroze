import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Check, X } from 'lucide-react';

interface ToolsPasswordStrengthProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    showStrengthMeter?: boolean;
    showRequirements?: boolean;
}

type StrengthLevel = {
    score: number;
    label: string;
    color: string;
};

const ToolsPasswordStrength: React.FC<ToolsPasswordStrengthProps> = ({
                                                                         value,
                                                                         onChange,
                                                                         label = 'رمز عبور',
                                                                         placeholder = 'رمز عبور خود را وارد کنید...',
                                                                         required = false,
                                                                         disabled = false,
                                                                         className = '',
                                                                         showStrengthMeter = true,
                                                                         showRequirements = true,
                                                                     }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState<StrengthLevel>({ score: 0, label: 'ضعیف', color: '#EF4444' });

    // معیارهای رمز قوی
    const hasMinLength = value.length >= 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const getStrength = (): StrengthLevel => {
        let score = 0;
        if (hasMinLength) score++;
        if (hasUpperCase) score++;
        if (hasLowerCase) score++;
        if (hasNumber) score++;
        if (hasSpecialChar) score++;

        if (score <= 2) return { score, label: 'ضعیف', color: '#EF4444' };
        if (score === 3) return { score, label: 'متوسط', color: '#F59E0B' };
        if (score === 4) return { score, label: 'قوی', color: '#10B981' };
        return { score, label: 'بسیار قوی', color: '#059669' };
    };

    useEffect(() => {
        setStrength(getStrength());
    }, [value]);

    const strengthPercentage = (strength.score / 5) * 100;

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                    {required && <span className="text-red-500 mr-1">*</span>}
                </label>
            )}

            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    className="
                        w-full h-12 px-4 pr-12
                        rounded-lg border border-gray-300
                        bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        transition-all duration-200
                        disabled:bg-gray-50 disabled:cursor-not-allowed
                    "
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            </div>

            {/* قدرت رمز */}
            {showStrengthMeter && value.length > 0 && (
                <div className="mt-2 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                        <span style={{ color: strength.color }} className="font-medium">
                            قدرت رمز: {strength.label}
                        </span>
                        <span className="text-gray-500">{strength.score}/5</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full transition-all duration-300 rounded-full"
                            style={{ width: `${strengthPercentage}%`, backgroundColor: strength.color }}
                        />
                    </div>
                </div>
            )}

            {/* معیارهای رمز */}
            {showRequirements && value.length > 0 && (
                <div className="mt-3 space-y-1.5 text-xs">
                    <RequirementItem met={hasMinLength} text="حداقل ۸ کاراکتر" />
                    <RequirementItem met={hasUpperCase} text="حداقل یک حرف بزرگ (A-Z)" />
                    <RequirementItem met={hasLowerCase} text="حداقل یک حرف کوچک (a-z)" />
                    <RequirementItem met={hasNumber} text="حداقل یک عدد (0-9)" />
                    <RequirementItem met={hasSpecialChar} text="حداقل یک کاراکتر خاص (!@#$%^&*)" />
                </div>
            )}
        </div>
    );
};

// کامپوننت کمکی برای نمایش معیارها
const RequirementItem: React.FC<{ met: boolean; text: string }> = ({ met, text }) => {
    return (
        <div className={`flex items-center gap-2 ${met ? 'text-green-600' : 'text-gray-400'}`}>
            {met ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>{text}</span>
        </div>
    );
};

export default ToolsPasswordStrength;