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
    <li
      className={`hover:bg-neutral-800 hover:rounded w-full md:w-fit ${
        props.className
      }} ${isActive ? 'bg-neutral-800 rounded' : ''}`}
    >
      <a href={props.link}>
        <div className="px-2 py-1 border-b md:border-none">{props.title}</div>
      </a>
    </li>
  )
}

export default NavItem
