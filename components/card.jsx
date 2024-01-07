import Link from 'next/link'

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Read more
      </Link>
    </div>
  );
};

export default Card;
