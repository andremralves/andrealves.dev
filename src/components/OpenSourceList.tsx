import React from 'react'
import OpenSourceListItem from './OpenSourceListItem'
import SectionTitle from './SectionTitle'
import Tag from './Tag'

const openSourceProjects = [
  {
    projectName: 'Teammates',
    techs: ['Java', 'Angular', 'Typescript'],
    stars: '1.4k',
    description: `"TEAMMATES is a free online tool for managing peer evaluations and 
    other feedback paths of your students. It is provided as a
    cloud-based service for educators/students and is currently used by
    hundreds of universities across the world."`,
    contributionLink:
      'https://github.com/TEAMMATES/teammates/issues?q=author%3Aandremralves',
  },
  {
    projectName: 'Actual Budget',
    borderColor: 'border-green-600',
    techs: ['Javascript', 'React', 'NodeJs'],
    stars: '6k',
    description: `"Actual is a local-first personal finance tool. 
    It is 100% free and open-source, written in NodeJS, it has a synchronization element 
    so that all your changes can move between devices without any heavy lifting."`,
    contributionLink: 'https://github.com/actualbudget/actual/pull/124',
  },
]

type OpenSourceListProps = {}

const OpenSourceList = (props: OpenSourceListProps) => {
  return (
    <section>
      <SectionTitle title="Open Source Contributions" />
      {openSourceProjects.map((project) => (
        <OpenSourceListItem
          projectName={project.projectName}
          borderColor={project.borderColor}
          stars={project.stars}
          techs={project.techs}
          description={project.description}
          contributionLink={project.contributionLink}
        />
      ))}
    </section>
  )
}

export default OpenSourceList