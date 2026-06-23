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

    const reset = useCallback(() => {
        setStartValue(min);
        setEndValue(max);
    }, [min, max]);

    return {
        min,
        max,
        startValue,
        endValue,
        setStartValue,
        setEndValue,
        onChange,
        reset,
    };
}

export default useRangeSlider;