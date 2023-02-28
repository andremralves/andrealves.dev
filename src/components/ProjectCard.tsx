import React from 'react'
import Tag from './Tag'
import SimpleDashedButton from './SimpleDashedButton'

type ProjectCardProps = {
  projectName: string
  borderColor?: string
  techs: string[]
  description: string
  sourceLink?: string
  liveLink?: string
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className={`bg-neutral-900 ${props.borderColor} rounded p-2 mt-8 border-l-2 drop-shadow-md`}
    >
      <div className="ml-2">
        <h2 className="text-2xl">{props.projectName}</h2>
        <h3 className="mt-3">Tech</h3>
        <div className="flex mt-1 gap-2">
          {props.techs.map((tech) => (
            <Tag key={tech} name={tech} />
          ))}
        </div>
        <h3 className="mt-3">Description</h3>
        <p className="mt-3 text-neutral-400">{props.description}</p>
        <div className="flex gap-5 mt-3">
          {props.sourceLink && (
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={props.sourceLink}
            >
              <SimpleDashedButton text="Source Code" />
            </a>
          )}
          {props.liveLink && (
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={props.liveLink}
            >
              <SimpleDashedButton text="Live project" color="text-orange-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
