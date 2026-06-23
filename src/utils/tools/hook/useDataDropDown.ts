import { useState, useCallback } from 'react';

// نوع داده برای گزینه‌ها
type Options<T> = Record<string, T>;

// خروجی هوک
export interface UseDataDropDownReturn<T> {
    value: T | null;
    setValue: (value: T | null) => void;
    options: { label: string; value: T }[];
    // selectedLabel: string;
    // reset: () => void;
}

function useDataDropDown<T>(
    initialValue: T | null,
    options: Options<T>
): UseDataDropDownReturn<T> {
    const [value, setValue] = useState<T | null>(initialValue);

    // تبدیل object به آرایه برای استفاده در dropdown
    const optionsArray = Object.entries(options).map(([label, val]) => ({
        label,
        value: val,
    }));

    // پیدا کردن label مقدار فعلی
    // const selectedLabel = optionsArray.find(opt => opt.value === value)?.label || '';

    // تابع ریست
    // const reset = useCallback(() => {
    //     setValue(initialValue);
    // }, [initialValue]);

    return {
        value,
        setValue,
        options: optionsArray,
        // selectedLabel,
        // reset,
    };
}

export default useDataDropDown;