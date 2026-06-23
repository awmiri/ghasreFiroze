import { useState, useCallback } from 'react';

interface UseSliderReturn {
    min: number;
    max: number;
    value: number;
    setValue: (value: number) => void;
    onChange: (value: number) => void;
    reset: () => void;
    percentage: number;
}

function useSlider(initialMin: number = 0, initialMax: number = 100, initialValue?: number): UseSliderReturn {
    const [min] = useState(initialMin);
    const [max] = useState(initialMax);
    const [value, setValue] = useState(initialValue !== undefined ? initialValue : initialMin);

    const onChange = useCallback((newValue: number) => {
        const clampedValue = Math.min(Math.max(newValue, min), max);
        setValue(clampedValue);
    }, [min, max]);

    const reset = useCallback(() => {
        setValue(min);
    }, [min]);

    const percentage = ((value - min) / (max - min)) * 100;

    return {
        min,
        max,
        value,
        setValue,
        onChange,
        reset,
        percentage,
    };
}

export default useSlider;