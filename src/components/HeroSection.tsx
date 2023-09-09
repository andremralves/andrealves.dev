import React from 'react';
import Social from './Social';
import TextGradient from './TextGradient';

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<section className="mt-10">
			<div className="flex flex-col">
				<div className="mb-5 max-w-fit text-3xl">
					<span className="text-zinc-800 dark:text-zinc-100">Hi there 👋, I'm</span>
					<h1 className="pt-2 text-5xl font-semibold md:text-7xl">
						<TextGradient text="André Alves" />
					</h1>
				</div>
				<p>
					A software engineering student and full stack web developer that likes to contribute to
					open source projects.
				</p>
			</div>
			<Social />
		</section>
	);
};

export default HeroSection;
