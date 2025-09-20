export const Input = ({
	className,
	type,
    slot,
	...props
}: React.ComponentProps<'input'>) => (
	<input type={type} data-slot={slot} className={className} {...props} />
);
