import React from 'react'

type SectionTitleProps = {
  title: string
}

const SectionTitle = (props: SectionTitleProps) => {
  return <h1 className="text-3xl">{props.title}</h1>
}

export default SectionTitle
