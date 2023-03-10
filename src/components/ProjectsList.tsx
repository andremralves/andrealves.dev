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
  {
    name: 'Django CRM',
    techs: ['python', 'django', 'html', 'css', 'bootstrap'],
    borderColor: 'border-orange-300',
    description: 'A CRM system to manage patients and appointments.',
    sourceLink: 'https://github.com/andremralves/django-CRM',
    liveLink: '',
  },
  {
    name: 'Todo List',
    techs: ['typescript', 'reactjs', 'tailwindcss'],
    borderColor: 'border-blue-300',
    description:
      'A Todo List app built with Typescript, TailwindCss, React and using Local Storage to store your tasks.',
    sourceLink: 'https://github.com/andremralves/react-tailwind-todolist',
    liveLink: 'https://serene-salmiakki-a825e6.netlify.app/',
  },
]

type ProjectListProps = {}

const ProjectsList = (props: ProjectListProps) => {
  return (
    <>
      <SectionTitle title="Projects" />
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
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
