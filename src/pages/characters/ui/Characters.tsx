import { useCharacters } from '@/pages/characters/model/use-characters';
import { useFavorites } from '@/hooks/useFavorites';
import { SearchBar } from '@/widgets/SearchBar/SearchBar';
import { CharacterList } from '@/widgets/CharacterList/CharacterList';

export function Characters() {
	const { query, setQuery, loading, items, error } = useCharacters();
	const { isFavorite, toggleFavorite } = useFavorites();

	return (
		<div className="p-4">
			<div className="mb-4">
				<SearchBar value={query} onChange={setQuery} loading={loading} />
			</div>

			{error && <div className="text-red-600">Error: {error}</div>}

			<CharacterList
				items={items}
				isFavorite={isFavorite}
				onToggleFavorite={toggleFavorite}
			/>
		</div>
	);
}
