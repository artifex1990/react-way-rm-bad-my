import type { CharacterAPIResponse } from '@/shared/types/character';
import { ENDPOINT } from '../../pages/characters/constants';

export const fetchByName = async (name: string) => {
	const res = await fetch(`${ENDPOINT}/?name=${encodeURIComponent(name)}`);
	if (!res.ok) {
		if (res.status === 404) {
			return [];
		}
	}

	const data = (await res.json()) as CharacterAPIResponse;

	return data.results ?? [];
};
