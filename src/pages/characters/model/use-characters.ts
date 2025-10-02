import { useCallback, useEffect, useMemo, useState } from 'react';
import type {
	Character,
	CharacterAPIResponse
} from '../../../shared/types/character';

export function useCharacters() {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [items, setItems] = useState<Character[]>([]);
	const [error, setError] = useState<string | null>(null);

	const fetchByName = useCallback(() => {
		try {
			fetchByName
		}
	}, []);

	useEffect(() => {
		const t = setTimeout(() => {
			fetchByName(query);
		}, 300);
		return () => clearTimeout(t);
	}, [query]);

	return useMemo(
		() => ({
			query,
			setQuery,
			loading,
			items,
			error,
			searchNow: () => fetchByName(query)
		}),
		[query, setQuery, loading, items, error, fetchByName]
	);
}
