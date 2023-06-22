import { useState, useEffect } from "react"

export function useLocalStorage(itemName, initialValue) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        if (window === 'undefined') return;
        
        let storage = localStorage.getItem(itemName);
        if (storage) setValue(JSON.parse(storage))
    }, []);

    const updateLocalStorage = (newValue) => {
        setValue(newValue);
        localStorage.setItem(itemName, JSON.stringify(newValue));
    }

    return { value, updateLocalStorage };
}