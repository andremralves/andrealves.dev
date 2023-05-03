import { useState } from 'react'
import { FaBars } from 'react-icons/fa/index'
import NavItem from './NavItem'

type NavbarProps = {}

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Projects',
    link: '/projects/',
  },
  {
    title: 'Blog',
    link: '/blog/',
  },
]

const resume = {
  title: 'Resume',
  link1: '/AndreAlves.pdf',
  link2: '/AndreAlves_pt-br.pdf',
}

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="text-lg border-b border-neutral-500">
      <div className="pt-3 pb-6 flex justify-between items-center">
        <a className="text-2xl font-semibold hover:text-blue-200" href="/">
          andrealves.dev
        </a>
        <ul className="hidden md:flex md:gap-2">
          {navItems.map((item) => (
            <NavItem key={item.title} title={item.title} link={item.link} />
          ))}
          {/* <li className={`px-2 py-1 hover:bg-neutral-800 hover:rounded `}>
            <div className="w-full ">
              <div className="flex items-end gap-3 justify-center">
                <a href={resume.link1}>
                  {resume.title}: <span className="hover:text-xl">🇺🇸</span>
                </a>{' '}
                <a href={resume.link2} className="hover:text-xl">
                  🇧🇷
                </a>
              </div>
            </div>
          </li> */}
        </ul>
        <button
          className="md:hidden"
          aria-label="menu-icon"
          onClick={toggleMenu}
        >
          <FaBars size={30} />
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-3 items-center text-lg md:hidden">
          {navItems.map((item) => (
            <NavItem key={item.title} title={item.title} link={item.link} />
          ))}
          <div className="border-b w-full md:border-none md:w-fit align-middle">
            {/* <li className={`px-2 py-1 hover:bg-neutral-800 hover:rounded `}>
              <div className="flex items-center gap-3">
                <a href={resume.link1}>
                  {resume.title}: <span className="text-xl">🇺🇸</span>
                </a>{' '}
                <a href={resume.link2} className="text-xl">
                  🇧🇷
                </a>
              </div>
            </li> */}
          </div>
        </ul>
      )}
    </header>
  )
}

export default Navbar
