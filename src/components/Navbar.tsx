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
          <NavItem title={navItems[0].title} link={navItems[0].link} />
          <NavItem title={navItems[1].title} link={navItems[1].link} />
          <div className="border-b w-full md:border-none md:w-40">
            <a href={resume.link1}>
              <li
                className={`px-2 py-1 hover:bg-neutral-800 hover:rounded border rounded `}
              >
                <div className="flex items-end gap-3 justify-center">
                  <span>{resume.title}: </span>
                  <a href={resume.link1} className="hover:text-xl">
                    🇺🇸
                  </a>{' '}
                  <a href={resume.link2} className="hover:text-xl">
                    🇧🇷
                  </a>
                </div>
              </li>
            </a>
          </div>
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars size={30} />
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col gap-3 items-center text-lg md:hidden">
          <NavItem title={navItems[0].title} link={navItems[0].link} />
          <NavItem title={navItems[1].title} link={navItems[1].link} />
          <div className="border-b w-full md:border-none md:w-fit align-middle">
            <a href={resume.link1}>
              <li className={`px-2 py-1 hover:bg-neutral-800 hover:rounded `}>
                <div className="flex items-center gap-3">
                  <span className="">{resume.title}: </span>
                  <a href={resume.link1} className="text-2xl">
                    🇺🇸
                  </a>{' '}
                  <a href={resume.link2} className="text-2xl">
                    🇧🇷
                  </a>
                </div>
              </li>
            </a>
          </div>
        </ul>
      )}
    </header>
  )
}

export default Navbar
