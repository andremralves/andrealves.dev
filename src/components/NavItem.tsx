import React from 'react'

type NavItemProps = {
  title: string
  link: string
}

const NavItem = (props: NavItemProps) => {
  return (
    <li className="p-2 hover:bg-slate-600 hover:rounded">
      <a href={props.link}>{props.title}</a>
    </li>
  )
}

export default NavItem
