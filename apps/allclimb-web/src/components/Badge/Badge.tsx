import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
}

const Badge = ({ children, className, ...rest }: Props) => {
	return (
		<button type="button" className={className} {...rest}>
			{children}
		</button>
	);
};

export default Badge;
