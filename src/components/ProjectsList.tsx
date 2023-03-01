import React from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

const projects = [
  {
    name: 'This Website',
    techs: ['typescript', 'reactjs', 'astrojs'],
    borderColor: 'border-neutral-100',
    description: 'My personal portfolio website and blog.',
    sourceLink: 'https://github.com/andremralves/new_website',
    liveLink: '',
  },
]

type ProjectListProps = {}

const ProjectsList = (props: ProjectListProps) => {
  return (
    <>
      <SectionTitle title="Projects" />
      {projects.map((project) => (
        <ProjectCard
          projectName={project.name}
          techs={project.techs}
          description={project.description}
          borderColor={project.borderColor}
          sourceLink={project.sourceLink}
          liveLink={project.liveLink}
        />
      ))}
    </>
  )
}

export default ProjectsList
