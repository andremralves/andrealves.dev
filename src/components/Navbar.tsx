import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import NavItem from './NavItem'

type NavbarProps = {}

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Resume',
    link: '/#',
  },
]

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <header className="text-lg">
      <div className="py-4 flex justify-between items-center">
        <a className="text-2xl hover:text-green-100" href="/">
          <span className="text-blue-500">[ </span>
          <span className="">andre</span>
          <span className="text-red-600">@</span>
          <span className="">alves</span>
          <span className="text-blue-500"> ]</span>
        </a>
        <ul className="hidden md:flex md:gap-2">
          {navItems.map((item) => (
            <NavItem key={item.title} title={item.title} link={item.link} />
          ))}
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars size={30} />
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-3 items-center text-lg md:hidden">
          {navItems.map((item) => (
            <NavItem key={item.title} title={item.title} link={item.link} />
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
