import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'

interface NavbarProps {}

const s = stylex.create({
  header: {
    background: 'linear-gradient(45deg, #ff7300, #e900ff)',
    padding: '10px',
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    color: {
      default: '#fff',
      ':hover': '#fff',
      ':active': '#fff',
    },
  },
  refLink: {
    display: 'block',
    textAlign: 'center',
    padding: '14px 16px',
    color: 'white',
    textDecoration: 'none',
    fontSize: {
      ':hover': 'larger',
    },
  },
})

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header {...stylex.props(s.header)}>
      <Link {...stylex.props(s.refLink)} href="/">
        Home
      </Link>
      <Link
        {...stylex.props(s.refLink)}
        href="https://github.com/stylexjs"
        target="_blank"
      >
        Repo
      </Link>
      <Link
        {...stylex.props(s.refLink)}
        href="https://www.github.com/maheshhbalwan"
        target="_blank"
      >
        Dev
      </Link>
    </header>
  )
}

export default Navbar
