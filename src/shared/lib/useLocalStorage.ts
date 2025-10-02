import { useEffect, useState } from 'react';
import { LS_KEY } from '../constants';

export default useLocalStorage  = <T, P>(key: T, initialValue: P) => {
	const loadStorage = () => {
		try {
			const raw = localStorage.getItem(LS_KEY);
			return raw ? JSON.parse(raw) : initialValue;
		} catch (e) {
			console.error('Failed to load favorites', e);

			return initialValue;
		}
	};

	const [storedValue, setStoredValue] = useState(loadStorage());

	const setValue = (value: unknown) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			localStorage.setItem(LS_KEY, JSON.stringify(valueToStore));
		} catch (error) {
			console.error('Failed to save favorites', error);
		}
	};

	useEffect(() => {
		setStoredValue(loadStorage());
	}, []);

	return [storedValue, setValue];
};
