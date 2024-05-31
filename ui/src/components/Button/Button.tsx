import React, { useEffect, useState } from 'react';
import classes from './Button.module.css';

interface P extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	icon?: React.ReactNode;
	title: string;
	disabled?: boolean;
}

const Button: React.FC<P> = ({ icon, className, title, ...rest }) => {
	const [styling, setStyling] = useState([classes.button]);

	useEffect(() => {
		if (className) {
			setStyling([...styling, ...className.split(' ')]);
		}
	}, []);

	return (
		<button aria-label={title} className={styling.join(' ')} {...rest}>
			{icon && icon}
			<p>{title}</p>
		</button>
	);
};

export default Button;
