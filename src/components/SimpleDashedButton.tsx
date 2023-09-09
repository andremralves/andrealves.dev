import React from 'react';

type SimpleDashedButtonProps = {
	text: string;
	color?: string;
	darkColor?: string;
};

const SimpleDashedButton = (props: SimpleDashedButtonProps) => {
	const textColor = props.color ? props.color : 'text-zinc-800';
	const darkTextColor = props.darkColor ? props.darkColor : 'dark:text-zinc-100';
	return (
		<button className={`${darkTextColor} ${textColor} border-b hover:opacity-80`}>
			{props.text}
		</button>
	);
};

export default SimpleDashedButton;
