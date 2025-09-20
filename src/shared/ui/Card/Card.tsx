export const Card = ({
	className,
	children,
	slot,
	...props
}: React.ComponentProps<'div'>) => {
	return (
		<div data-slot={slot} className={className} {...props}>
			{children}
		</div>
	);
};
