import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/">Home</Link>
      <Link href="https://github.com/stylexjs" target="_blank">
        Repo
      </Link>
      <Link href="https://www.github.com/maheshhbalwan" target="_blank">
        Dev
      </Link>
    </header>
  )
}

export default Navbar
