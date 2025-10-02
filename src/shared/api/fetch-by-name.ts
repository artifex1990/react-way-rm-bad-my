import type { CharacterAPIResponse } from '@/shared/types/character';
import { ENDPOINT } from '../constants';

export const fetchByName = async (name: string) => {
	const res = await fetch(`${ENDPOINT}/?name=${encodeURIComponent(name)}`);
	const data = (await res.json()) as CharacterAPIResponse;

	return data.results ?? [];
};
