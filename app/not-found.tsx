import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'

interface NotFoundProps {}

const s = stylex.create({
  main: {
    width: '100%',
    paddingTop: '50px',
    textAlign: 'center',
    marginTop: '50px',
  },
  link: {
    color: '#555',
  },
  title: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '16px',
    color: '#171717',
  },
  gradientText: {
    background: 'linear-gradient(45deg, #ff7300, #e900ff)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
})

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <main {...stylex.props(s.main)}>
      <h1 {...stylex.props(s.title)}>
        Oops! The page you&apos;re looking for is{' '}
        <span {...stylex.props(s.gradientText)}> Not Found</span>!
      </h1>
      Let&apos;s get you back{' '}
      <Link href="/" passHref {...stylex.props(s.link)}>
        Home
      </Link>
      .
    </main>
  )
}

export default NotFound
