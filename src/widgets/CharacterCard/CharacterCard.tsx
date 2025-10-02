import type { Character } from '@/shared/types/character';
import { cn } from '@/shared/lib/utils';
import { Star } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

interface Props {
	character: Character;
	favorite: boolean;
	onToggleFavorite: (c: Character) => void;
}

export const CharacterCard = ({
	character,
	favorite,
	onToggleFavorite
}: Props) => {
	return (
		<Card
			className={cn(
				'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
				'overflow-hidden relative rounded-2xl shadow-md transition hover:shadow-lg p-0'
			)}
			slot="card"
		>
			<div className="relative w-full h-48">
				<img
					src={character.image}
					alt={character.name}
					loading="lazy"
					className={cn('w-full h-full object-cover')}
				/>

				<Button
					variant="secondary"
					size="icon"
					className={cn(
						'absolute top-2 right-2 rounded-full shadow bg-white/80 hover:bg-white'
					)}
					onClick={() => onToggleFavorite(character)}
					title={favorite ? 'Remove from favorites' : 'Add to favorites'}
				>
					<Star
						className={cn('h-5 w-5', favorite && 'fill-red-500 text-red-500')}
					/>
				</Button>
			</div>

			<Card className={cn('px-6', 'p-4')} slot="card-content">
				<Card
					className={cn('leading-none font-semibold', 'mb-1 text-lg')}
					slot="card-title"
				>
					{character.name}
				</Card>
				<div className={cn('text-sm text-muted-foreground')}>
					{character.species} • {character.status}
				</div>
			</Card>
		</Card>
	);
};
