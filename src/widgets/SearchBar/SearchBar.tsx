import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

interface Props {
	value: string;
	onChange: (v: string) => void;
	onSearch?: () => void;
	loading?: boolean;
}

export const SearchBar = ({ value, onChange, onSearch, loading }: Props) => {
	return (
		<div className="flex gap-2">
			<Input
				className={cn(
					'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input',
					'flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none',
					'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
					'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
					'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
				)}
				placeholder="Find character by name..."
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' && onSearch) onSearch();
				}}
			/>
			{onSearch && (
				<Button onClick={onSearch} disabled={loading}>
					{loading ? 'Searching...' : 'Search'}
				</Button>
			)}
		</div>
	);
};
