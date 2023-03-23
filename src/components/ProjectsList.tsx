import React from 'react'
import ProjectCard, { ProjectCardProps } from './ProjectCard'
import SectionTitle from './SectionTitle'

const projects: ProjectCardProps[] = [
  {
    projectName: 'Tile Installation Calculator',
    techs: ['typescript', 'reactjs', 'tailwindcss'],
    borderColor: 'border-neutral-100',
    description:
      "An app built for a local business that estimates the cost their tile installation service given the customer's area and tile of choice.",
    sourceLink: '',
    liveLink: 'https://master--effortless-fenglisu-62b59d.netlify.app/',
    projectImageSrc: '/images/tile-calculator.jpg',
  },
  {
    projectName: 'This Website',
    techs: ['typescript', 'reactjs', 'astrojs'],
    borderColor: 'border-neutral-100',
    description: 'My personal portfolio website and blog.',
    sourceLink: 'https://github.com/andremralves/new_website',
    liveLink: '',
    projectImageSrc: '/images/website-project.jpg',
  },
  {
    projectName: 'Django CRM',
    techs: ['python', 'django', 'html', 'css', 'bootstrap'],
    borderColor: 'border-orange-300',
    description: 'A CRM system to manage patients and appointments.',
    sourceLink: 'https://github.com/andremralves/django-CRM',
    liveLink: '',
    projectImageSrc: '/images/django-project.jpg',
  },
  {
    projectName: 'Todo List',
    techs: ['typescript', 'reactjs', 'tailwindcss'],
    borderColor: 'border-blue-300',
    description:
      'A Todo List app built with Typescript, TailwindCss, React and using Local Storage to store your tasks.',
    sourceLink: 'https://github.com/andremralves/react-tailwind-todolist',
    liveLink: 'https://serene-salmiakki-a825e6.netlify.app/',
    projectImageSrc: '/images/todolist-project.jpg',
  },
]

type ProjectListProps = {
  path?: string
  limit?: number
}

const ProjectsList = (props: ProjectListProps) => {
  const list = projects.slice(0, props.limit)
  return (
    <section className="mt-10">
      <SectionTitle title="Projects" />
      {list.map((project) => (
        <ProjectCard
          key={project.projectName}
          projectName={project.projectName}
          techs={project.techs}
          description={project.description}
          borderColor={project.borderColor}
          sourceLink={project.sourceLink}
          liveLink={project.liveLink}
          projectImageSrc={project.projectImageSrc}
        />
      ))}
      {props.path !== '/projects/' && (
        <a href="/projects/">
          <button className="mt-8 w-full bg-indigo-700 hover:bg-indigo-600 rounded py-2">
            See more projects
          </button>
        </a>
      )}
    </section>
  )
}

export default ProjectsList
