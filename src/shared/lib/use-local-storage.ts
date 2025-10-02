import { useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const raw = localStorage.getItem(key);
			return raw ? JSON.parse(raw) : initialValue;
		} catch (e) {
			console.error('Failed to load from localStorage', e);
			return initialValue;
		}
	});

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error('Failed to save to localStorage', error);
		}
	};

	return [storedValue, setValue] as const;
};
