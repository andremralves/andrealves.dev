import React from 'react'

type TagProps = {
  name: string
}

type MapType = {
  [id: string]: string
}
const tagColor: MapType = {
  nextjs: 'border-blue-300',
  astrojs: 'border-orange-600',
  nodejs: 'border-green-300',
  javascript: 'border-yellow-300',
  java: 'border-amber-800',
  angular: 'border-red-600',
  typescript: 'border-blue-500',
  python: 'border-orange-500',
  django: 'border-green-600',
  reactjs: 'border-sky-400',
  html: 'border-yellow-200',
  css: 'border-purple-200',
  bootstrap: 'border-red-300',
  tailwindcss: 'border-green-300',
  sfml: 'border-amber-500',
  'c++': 'border-red-500',
  'data-structures': 'border-orange-300',
}

const Tag = (props: TagProps) => {
  return (
    <span
      className={`px-2 border ${
        tagColor[props.name]
      } rounded dark:text-zinc-100 text-zinc-800`}
    >
      {props.name}
    </span>
  )
}

export default Tag
