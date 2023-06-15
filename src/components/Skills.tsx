import React from 'react'
import SectionTitle from './SectionTitle'
import Skill from './Skill'
import Tag from './Tag'

type Props = {}

const Skills = (props: Props) => {
  return (
    <section className="mt-10">
      <SectionTitle title="Skills" />
      <ul className="pl-4 mt-8 flex flex-col gap-5 w-fit max-h-40 md:max-h-36 flex-wrap">
        <Skill name="Typescript" />
        <Skill name="Java" />
        <Skill name="ReactJs" />
        <Skill name="NodeJs" />
        <Skill name="C/C++" />
        <Skill name="Mysql" />
        <Skill name="PostgreSql" />
        <Skill name="Git" />
        <Skill name="Linux" />
      </ul>
    </section>
  )
}

export default Skills
