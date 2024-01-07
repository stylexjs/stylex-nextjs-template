import * as stylex from '@stylexjs/stylex'
import Header from '../components/nav'
import Footer from '../components/footer'
import Card from '../components/card'

interface HomeProps {}

const DARK_MODE = '@media (prefers-color-scheme: dark)'

const s = stylex.create({
  main: {
    width: '100%',
    paddingTop: '50px',
    textAlign: 'center',
    marginTop: '50px',
  },
  h1: {
    color: '#333',
  },
  h2: {
    marginBottom: '8px',
  },
  p: {
    color: {
      default: '#555555',
      [DARK_MODE]: 'white',
    },
  },
  title: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '16px',
    color: {
      default: '#171717',
      [DARK_MODE]: 'white',
    },
  },
  gradientText: {
    background: 'linear-gradient(45deg, #ff7300, #e900ff)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '50px',
  },
})

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <main {...stylex.props(s.main)}>
        <h1 {...stylex.props(s.title)}>
          Hello, <span {...stylex.props(s.gradientText)}> StyleX </span>!
        </h1>
        <p {...stylex.props(s.p)}>
          This is a template repository for Next.js 14 with StyleX, the styling
          system that powers Instagram.com, Facebook.com, and WhatsApp.com.
        </p>
      </main>
      <div {...stylex.props(s.cardContainer)}>
        <Card
          title="Card 1"
          description="This is the description for Card 1."
          link="/"
        />
        <Card
          title="Card 2"
          description="This is the description for Card 2."
          link="/"
        />
        <Card
          title="Card 3"
          description="This is the description for Card 3."
          link="/"
        />
      </div>
      <Footer />
    </>
  )
}

export default Home
