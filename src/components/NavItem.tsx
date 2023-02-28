import React from 'react'

type NavItemProps = {
  title: string
  link: string
  className?: string
}

const NavItem = (props: NavItemProps) => {
  return (
    <div className="border-b w-full md:border-none md:w-fit">
      <a href={props.link}>
        <li
          className={`px-2 py-1 hover:bg-neutral-800 hover:rounded ${props.className}`}
        >
          {props.title}
        </li>
      </a>
    </div>
  )
}

export default NavItem
