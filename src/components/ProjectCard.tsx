import React from 'react';
import Tag from './Tag';
import SimpleDashedButton from './SimpleDashedButton';

export type ProjectCardProps = {
	projectName: string;
	borderColor?: string;
	techs: string[];
	description: string;
	sourceLink?: string;
	liveLink?: string;
	projectImageSrc?: string;
};

const ProjectCard = (props: ProjectCardProps) => {
	return (
		<div
			className={`mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 drop-shadow-xl dark:border-zinc-700 dark:bg-zinc-800`}
		>
			<div className="flex flex-col md:flex-row md:items-center">
				<div className="md:w-3/5 md:pr-4">
					<h2 className="text-2xl text-zinc-800 dark:text-zinc-100">{props.projectName}</h2>
					<div className="mt-3 block md:hidden">
						<img
							className="rounded-2xl border border-zinc-500"
							src={props.projectImageSrc}
							alt=""
						/>
					</div>
					<h3 className="mt-3 text-zinc-800 dark:text-zinc-100">Tech</h3>
					<div className="mt-1 flex gap-2">
						{props.techs.map((tech) => (
							<Tag key={tech} name={tech} />
						))}
					</div>
					<h3 className="mt-3 text-zinc-800 dark:text-zinc-100">Description</h3>
					<p className="mt-3">{props.description}</p>
					<div className="mt-3 flex gap-5">
						{props.sourceLink && (
							<a target="_blank" rel="nofollow noopener noreferrer" href={props.sourceLink}>
								<SimpleDashedButton text="Source Code" />
							</a>
						)}
						{props.liveLink && (
							<a target="_blank" rel="nofollow noopener noreferrer" href={props.liveLink}>
								<SimpleDashedButton
									text="Live project"
									color="text-blue-700"
									darkColor="dark:text-orange-300"
								/>
							</a>
						)}
					</div>
				</div>
				<div className="hidden md:block md:w-2/5">
					<img className="rounded-2xl border border-zinc-500" src={props.projectImageSrc} alt="" />
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
