import React from 'react'

type NavItemProps = {
  title: string
  link: string
  className?: string
  path: string
}

const NavItem = (props: NavItemProps) => {
  let isActive = props.path === props.link

  return (
    <div
      className={`dark:hover:bg-zinc-800 hover:bg-zinc-200 hover:rounded w-full md:w-fit ${
        props.className
      }} ${isActive ? 'dark:bg-zinc-800 bg-zinc-200 rounded' : ''}`}
    >
      <a href={props.link}>
        <div className="dark:text-zinc-100 text-zinc-800 px-2 py-1 border-b md:border-none">
          {props.title}
        </div>
      </a>
    </div>
  )
}

export default NavItem
