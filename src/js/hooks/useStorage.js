import { useState } from 'react';

const useStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') return initialValue;

        try {
            const valueFromStorage = localStorage.getItem(key);

            return valueFromStorage
                ? JSON.parse(valueFromStorage)
                : initialValue;
        } catch (error) {
            console.log(`ERROR GETTING VALUE FROM LOCAL STORAGE: ${error}`);

            return initialValue;
        }
    });

    const setValue = (value) => {
        console.log(value);
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if (typeof window !== 'undefined')
                localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(`ERROR SETTING VALUE FROM LOCAL STORAGE: ${error}`);
        }
    };

    return [storedValue, setValue];
};

export default useStorage;
