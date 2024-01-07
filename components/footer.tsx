import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'
import { Github, Instagram } from 'lucide-react'

interface FooterProps {}

const s = stylex.create({
  footer: {
    position: 'fixed',
    color: 'white',
    bottom: '0',
    width: '100%',
    background: 'linear-gradient(45deg, #ff7300, #e900ff)',
    padding: '10px',
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    display: 'flex',
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

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer {...stylex.props(s.footer)}>
      <Link
        {...stylex.props(s.refLink)}
        target="_blank"
        href="https://github.com/stylexjs"
      >
        <Github />
      </Link>
      <Link
        {...stylex.props(s.refLink)}
        target="_blank"
        href="https://www.stylexjs.in"
      >
        www.stylexjs.in
      </Link>
      <Link
        {...stylex.props(s.refLink)}
        target="_blank"
        href="https://www.instagram.com/stylexjs.in/"
      >
        <Instagram />
      </Link>
    </footer>
  )
}

export default Footer
