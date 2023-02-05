type Props = {}

const Navbar = (props: Props) => {
  return (
    <section>
      <div className="py-4 flex justify-between items-center">
        <a href="/">
          <div>Logo</div>
        </a>
        <ul className="flex">
          <li className="p-2">
            <a href="/">Home</a>
          </li>
          <li className="p-2">
            <a href="/blog">Blog</a>
          </li>
          <li className="p-2">Resume</li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
