import React from 'react'

type TagProps = {
  name: string
}

type MapType = {
  [id: string]: string
}
const tagColor: MapType = {
  NextJs: 'border-blue-300',
  Java: 'border-amber-800',
  Angular: 'border-red-600',
  Typescript: 'border-blue-500',
  Python: 'border-orange-500',
  Django: 'border-green-600',
  React: 'border-sky-400',
  Html: 'border-yellow-200',
  Css: 'border-purple-200',
  Bootstrap: 'border-red-300',
  Tailwindcss: 'border-green-300',
  SFML: 'border-amber-500',
  'C++': 'border-red-500',
  'Data Structures': 'border-orange-300',
}

const Tag = (props: TagProps) => {
  return (
    <span
      className={`px-2 border ${tagColor[props.name]} rounded text-neutral-300`}
    >
      {props.name}
    </span>
  )
}

export default Tag
