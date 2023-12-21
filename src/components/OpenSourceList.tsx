import React from 'react';
import OpenSourceCard from './OpenSourceCard';
import SectionTitle from './SectionTitle';
import Tag from './Tag';

const openSourceProjects = [
	{
		name: 'NodeJs',
		borderColor: 'border-green-800',
		techs: ['c++', 'javascript'],
		stars: '100k',
		description: `"Node.js is an open-source, cross-platform JavaScript runtime environment."`,
		contributionLink: 'https://github.com/nodejs/node/pulls?q=is%3Apr+author%3Aandremralves+is%3Aclosed',
		owner: 'nodejs',
		repo: 'node',
	},
	{
		name: 'AstroJs',
		borderColor: 'border-red-600',
		techs: ['typescript', 'javascript'],
		stars: '28.8k',
		description: `"Astro is the all-in-one web framework designed for speed. 
      Pull your content from anywhere and deploy everywhere, 
      all powered by your favorite UI components and libraries." 
    `,
		contributionLink: 'https://github.com/withastro/astro/pulls?q=is%3Apr+author%3Aandremralves+',
		owner: 'withastro',
		repo: 'astro',
	},
	{
		name: 'Teammates',
		techs: ['java', 'angular', 'typescript'],
		stars: '1.4k',
		description: `"TEAMMATES is a free online tool for managing peer evaluations and 
    other feedback paths of your students. It is provided as a
    cloud-based service for educators/students and is currently used by
    hundreds of universities across the world."`,
		contributionLink: 'https://github.com/TEAMMATES/teammates/issues?q=author%3Aandremralves',
		owner: 'TEAMMATES',
		repo: 'teammates',
	},
	{
		name: 'Actual Budget',
		borderColor: 'border-green-600',
		techs: ['javascript', 'reactjs', 'nodejs'],
		stars: '6k',
		description: `"Actual is a local-first personal finance tool. 
    It is 100% free and open-source, written in NodeJS, it has a synchronization element 
    so that all your changes can move between devices without any heavy lifting."`,
		contributionLink: 'https://github.com/actualbudget/actual/pull/124',
		owner: 'actualbudget',
		repo: 'actual',
	},
];

type OpenSourceListProps = {};

const OpenSourceList = (props: OpenSourceListProps) => {
	return (
		<section className="mt-10">
			<SectionTitle title="Open Source Contributions" />
			{openSourceProjects.map((project) => (
				<OpenSourceCard
					key={project.name}
					projectName={project.name}
					borderColor={project.borderColor}
					stars={project.stars}
					techs={project.techs}
					description={project.description}
					contributionLink={project.contributionLink}
					owner={project.owner}
					repo={project.repo}
				/>
			))}
		</section>
	);
};

export default OpenSourceList;
