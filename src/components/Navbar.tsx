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
  return (
    <header className="text-lg">
      <div className="py-4 ma flex justify-between items-center">
        <a className="text-xl hover:text-green-300" href="/">
          <span className="text-blue-500">[ </span>
          <span className="">andre</span>
          <span className="text-red-600">@</span>
          <span className="">alves</span>
          <span className="text-blue-500"> ]</span>
        </a>
        <ul className="flex">
          {navItems.map((item) => (
            <NavItem key={item.title} title={item.title} link={item.link} />
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
