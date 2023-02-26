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
]

type OpenSourceListProps = {}

const OpenSourceList = (props: OpenSourceListProps) => {
  return (
    <section>
      <SectionTitle title="Open Source" />
      {openSourceProjects.map((project) => (
        <OpenSourceListItem
          projectName={project.projectName}
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
