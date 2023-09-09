import React from 'react';
import SectionTitle from './SectionTitle';
import Skill from './Skill';
import Tag from './Tag';

type Props = {};

const Skills = (props: Props) => {
	return (
		<section className="mt-10">
			<SectionTitle title="Skills" />
			<ul className="mt-8 flex max-h-40 w-fit flex-col flex-wrap gap-5 pl-4 md:max-h-36">
				<Skill name="Typescript" />
				<Skill name="Java" />
				<Skill name="ReactJs" />
				<Skill name="NodeJs" />
				<Skill name="C/C++" />
				<Skill name="Mysql" />
				<Skill name="PostgreSql" />
				<Skill name="Git" />
				<Skill name="Linux" />
			</ul>
		</section>
	);
};

export default Skills;
