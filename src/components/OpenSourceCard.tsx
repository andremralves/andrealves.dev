import React, { useEffect } from 'react'
import Tag from './Tag'
import { formatNumberWithUnits, getGithubStars } from '../utils'

type OpenSourceCardProps = {
  projectName: string
  borderColor?: string
  stars: string
  techs: string[]
  description: string
  contributionLink: string
  owner: string
  repo: string
}

const OpenSourceCard = (props: OpenSourceCardProps) => {
  const [stars, setStars] = React.useState(0)
  const borderColor = props.borderColor || 'border-orange-300'

  useEffect(() => {
    getGithubStars(props.owner, props.repo).then((s) => {
      console.log(s)
      setStars(s)
    })
  })

  return (
    <div className={`bg-zinc-800 rounded p-4 mt-8 ${borderColor} border-l-2 `}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">{props.projectName}</h2>
        <span className="h-fit ml-2 px-2 bg-zinc-600 rounded">
          ⭐ {formatNumberWithUnits(stars)} stars
        </span>
      </div>
      <h3 className="mt-3">Tech</h3>
      <div className="flex mt-1 gap-2">
        {props.techs.map((tech) => (
          <Tag key={tech} name={tech} />
        ))}
      </div>
      <h3 className="mt-3">Description</h3>
      <p className="mt-3">{props.description}</p>
      <a
        target="_blank"
        rel="nofollow noopener noreferrer"
        href={props.contributionLink}
      >
        <button className="mt-3 border-b hover:border-zinc-300 hover:border-b hover:text-zinc-300">
          My contributions
        </button>
      </a>
    </div>
  )
}

export default OpenSourceCard
