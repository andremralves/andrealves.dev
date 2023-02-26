import React from 'react'
import Tag from './Tag'

type Props = {
  projectName: string
  stars: string
  techs: string[]
  description: string
  contributionLink: string
}

const OpenSourceListItem = (props: Props) => {
  return (
    <div className="bg-neutral-900 rounded p-2 mt-8 border-orange-300 border-l-2">
      <div className="ml-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">{props.projectName}</h2>
          <span className="h-fit ml-2 px-2 bg-neutral-600 rounded">
            ⭐ {props.stars} stars
          </span>
        </div>
        <h3 className="mt-3">Tech</h3>
        <div className="flex mt-1 gap-2">
          {props.techs.map((techName) => (
            <Tag name={techName} />
          ))}
        </div>
        <h3 className="mt-3">Description</h3>
        <p className="mt-3 text-neutral-400">{props.description}</p>
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={props.contributionLink}
        >
          <button className="mt-3 border-b hover:border-neutral-300 hover:border-b hover:text-neutral-300">
            My contribution
          </button>
        </a>
      </div>
    </div>
  )
}

export default OpenSourceListItem
