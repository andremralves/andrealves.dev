import React from 'react';

type NavItemProps = {
	title: string;
	link: string;
	className?: string;
	path: string;
};

const NavItem = (props: NavItemProps) => {
	let isActive = props.path === props.link;

	return (
		<div
			className={`w-full hover:rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 md:w-fit ${
				props.className
			}} ${isActive ? 'rounded bg-zinc-200 dark:bg-zinc-800' : ''}`}
		>
			<a href={props.link}>
				<div className="border-b px-2 py-1 text-zinc-800 dark:text-zinc-100 md:border-none">
					{props.title}
				</div>
			</a>
		</div>
	);
};

export default NavItem;
