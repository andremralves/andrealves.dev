import React from 'react'
import Tag from './Tag'
import SimpleDashedButton from './SimpleDashedButton'

export type ProjectCardProps = {
  projectName: string
  borderColor?: string
  techs: string[]
  description: string
  sourceLink?: string
  liveLink?: string
  projectImageSrc?: string
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className={`dark:bg-zinc-800 bg-zinc-200 border border-zinc-200 rounded-2xl p-4 mt-8`}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-3/5 md:pr-4">
          <h2 className="dark:text-zinc-100 text-zinc-700 text-2xl">
            {props.projectName}
          </h2>
          <div className="md:hidden block mt-3">
            <img
              className="rounded-2xl border border-zinc-500"
              src={props.projectImageSrc}
              alt=""
            />
          </div>
          <h3 className="mt-3 dark:text-zinc-100 text-zinc-700">Tech</h3>
          <div className="flex mt-1 gap-2">
            {props.techs.map((tech) => (
              <Tag key={tech} name={tech} />
            ))}
          </div>
          <h3 className="dark:text-zinc-100 text-zinc-700 mt-3">Description</h3>
          <p className="mt-3">{props.description}</p>
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
                <SimpleDashedButton
                  text="Live project"
                  color="text-orange-500"
                  darkColor="dark:text-orange-300"
                />
              </a>
            )}
          </div>
        </div>
        <div className="hidden md:block md:w-2/5">
          <img
            className="rounded-2xl border border-zinc-500"
            src={props.projectImageSrc}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
