import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Character } from '../../../shared/types/character';
import { fetchByName } from '@/shared/api/fetch-by-name';
import { useDebounce } from '@/shared/lib/use-debounce';
import { MAX_TIME_DEBOUNCE } from '@/shared/constants';

export function useCharacters() {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [items, setItems] = useState<Character[]>([]);
	const [error, setError] = useState<string | null>(null);
	const debouncedQuery = useDebounce(query, MAX_TIME_DEBOUNCE);

	const getNames = useCallback(async (name: string) => {
		try {
			setLoading(true);
			setError(null);
			setItems(await fetchByName(name));
		} catch (e: unknown) {
			if (e instanceof Error) {
				setError(e?.message ?? 'Network error');
				setItems([]);
			}
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getNames(debouncedQuery);
	}, [debouncedQuery, getNames]);

	return useMemo(
		() => ({
			query,
			setQuery,
			loading,
			items,
			error,
			searchNow: () => getNames(query)
		}),
		[query, setQuery, loading, items, error, getNames]
	);
}
