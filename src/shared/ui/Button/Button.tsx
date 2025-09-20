import { BUTTON_VARIANTS } from '@/shared/constants/button-variants';
import { cn } from '@/shared/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';

export const Button = ({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof BUTTON_VARIANTS> & {
		asChild?: boolean;
	}) => {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(BUTTON_VARIANTS({ variant, size, className }))}
			{...props}
		/>
	);
};
