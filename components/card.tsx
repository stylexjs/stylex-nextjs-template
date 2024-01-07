import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  link: string
}

const DARK_MODE = '@media (prefers-color-scheme: dark)'

const s = stylex.create({
  card: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#ccc',
    padding: '16px',
    margin: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px #ff7300, 0 2px 4px #e900ff',
    transition: 'transform 0.3s ease-in-out',
    transform: {
      default: 'none',
      ':hover': 'scale(1.05)',
    },
  },
  cardTitle: {
    marginBottom: '10px',
  },
  cardText: {
    marginBottom: '10px',
  },
  cardLink: {
    marginBottom: '10px',
    color: {
      default: '#171717',
      [DARK_MODE]: 'white',
    },
  },
})

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div {...stylex.props(s.card)}>
      <h2 {...stylex.props(s.cardTitle)}>{title}</h2>
      <p {...stylex.props(s.cardText)}>{description}</p>
      <Link
        {...stylex.props(s.cardLink)}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </Link>
    </div>
  )
}

export default Card
