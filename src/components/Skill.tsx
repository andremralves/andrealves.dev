import React from 'react'

type SkillProps = {
  name: string
}

const Skill = (props: SkillProps) => {
  return <li className="border-l pl-2 pr-8">{props.name}</li>
}

export default Skill
