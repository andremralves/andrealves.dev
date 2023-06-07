import React from 'react'

type SectionTitleProps = {
  title: string
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <h1 className="dark:text-zinc-100 text-zinc-700 text-2xl md:text-3xl">
      {props.title}
    </h1>
  )
}

export default SectionTitle
