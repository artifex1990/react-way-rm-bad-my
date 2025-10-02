import type { Character } from '@/shared/types/character';
import { useCallback } from 'react';
import { LS_KEY } from '../../../shared/constants';
import { useLocalStorage } from '@/shared/lib/use-local-storage';

type Favorites = Record<number, Character>;

export function useFavorites() {
	const [favorites, setFavorites] = useLocalStorage<Favorites>(LS_KEY, {});

	const isFavorite = useCallback(
		(id: number) => Boolean(favorites[id]),
		[favorites]
	);

	const toggleFavorite = useCallback(
		(char: Character) => {
			setFavorites((prev: typeof favorites) => {
				const next = { ...prev };
				if (next[char.id]) delete next[char.id];
				else next[char.id] = char;

				return next;
			});
		},
		[setFavorites]
	);

	const clearFavorites = useCallback(() => setFavorites({}), [setFavorites]);

	const list = Object.values(favorites);

	return { favorites, list, isFavorite, toggleFavorite, clearFavorites };
}
