import React from 'react'

type NavItemProps = {
  title: string
  link: string
}

const NavItem = (props: NavItemProps) => {
  return (
    <li className="px-2 py-1 hover:bg-neutral-800 hover:rounded">
      <a href={props.link}>{props.title}</a>
    </li>
  )
}

export default NavItem
