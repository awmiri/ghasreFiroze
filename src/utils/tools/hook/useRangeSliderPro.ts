import { useState, useCallback } from 'react';

interface UseRangeSliderReturn {
    min: number;
    max: number;
    startValue: number;
    endValue: number;
    setStartValue: (value: number) => void;
    setEndValue: (value: number) => void;
    onChange: (start: number, end: number) => void;
    reset: () => void;
    setRange: (start: number, end: number) => void;
    isValid: boolean;
    startPercent: number;
    endPercent: number;
}

function useRangeSlider(
    min: number = 0,
    max: number = 100,
    initialStart?: number,
    initialEnd?: number
): UseRangeSliderReturn {
    const [startValue, setStartValue] = useState(initialStart !== undefined ? initialStart : min);
    const [endValue, setEndValue] = useState(initialEnd !== undefined ? initialEnd : max);

    const onChange = useCallback((start: number, end: number) => {
        setStartValue(start);
        setEndValue(end);
    }, []);

    const setRange = useCallback((start: number, end: number) => {
        const clampedStart = Math.min(Math.max(start, min), max);
        const clampedEnd = Math.min(Math.max(end, min), max);
        const finalStart = Math.min(clampedStart, clampedEnd);
        const finalEnd = Math.max(clampedStart, clampedEnd);
        setStartValue(finalStart);
        setEndValue(finalEnd);
    }, [min, max]);

    const reset = useCallback(() => {
        setStartValue(min);
        setEndValue(max);
    }, [min, max]);

    const isValid = startValue < endValue;

    const startPercent = ((startValue - min) / (max - min)) * 100;
    const endPercent = ((endValue - min) / (max - min)) * 100;

    return {
        min,
        max,
        startValue,
        endValue,
        setStartValue,
        setEndValue,
        onChange,
        reset,
        setRange,
        isValid,
        startPercent,
        endPercent,
    };
}

export default useRangeSlider;