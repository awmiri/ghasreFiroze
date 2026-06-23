import { useState, useCallback } from "react";

// نوع داده برای گزینه‌ها
type Options<T> = Record<string, T>;

// خروجی هوک
export interface UseMultiSelectDropDownReturn<T> {
  value: T[];
  onChange: (value: T[]) => void;
  options: { label: string; value: T }[];
  // selectedLabels: string[];
  // addValue: (item: T) => void;
  // removeValue: (item: T) => void;
  // toggleValue: (item: T) => void;
  // clearAll: () => void;
  // isSelected: (item: T) => boolean;
  // reset: () => void;
}

function useMultiSelectDropDown<T>(
  initialValue: T[],
  options: Options<T>,
): UseMultiSelectDropDownReturn<T> {
  const [value, onChange] = useState<T[]>(initialValue);

  // تبدیل object به آرایه برای استفاده در dropdown
  const optionsArray = Object.entries(options).map(([label, val]) => ({
    label,
    value: val,
  }));

  // پیدا کردن labelهای مقدارهای انتخاب شده
  const selectedLabels = optionsArray
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label);

  // اضافه کردن مقدار
  const addValue = useCallback((item: T) => {
    onChange((prev) => [...prev, item]);
  }, []);

  // حذف مقدار
  const removeValue = useCallback((item: T) => {
    onChange((prev) => prev.filter((v) => v !== item));
  }, []);

  // تغییر وضعیت (اگر هست حذف کن، اگر نیست اضافه کن)
  const toggleValue = useCallback((item: T) => {
    onChange((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item],
    );
  }, []);

  // پاک کردن همه
  const clearAll = useCallback(() => {
    onChange([]);
  }, []);

  // بررسی اینکه آیا مقدار انتخاب شده است یا نه
  const isSelected = useCallback(
    (item: T) => {
      return value.includes(item);
    },
    [value],
  );

  // ریست به مقدار اولیه
  const reset = useCallback(() => {
    onChange(initialValue);
  }, [initialValue]);

  return {
    value,
    onChange,
    options: optionsArray,
    // selectedLabels,
    // addValue,
    // removeValue,
    // toggleValue,
    // clearAll,
    // isSelected,
    // reset,
  };
}

export default useMultiSelectDropDown;
