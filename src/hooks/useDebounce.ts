import { useEffect, useState } from 'react';

import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppStateType} from "../store/store";

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const startValueTime = 500;
        const timer = setTimeout(() => setDebouncedValue(value), delay || startValueTime);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;

// useSelector hook
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
