import Link from 'next/link';
import { Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <Link target='_blank' href="https://github.com/stylexjs"> <Github /></Link>
      <Link target='_blank' href="https://www.stylexjs.in">www.stylexjs.in</Link>
      <Link target='_blank' href="https://www.stylexjs.in"><Instagram /></Link>
    </footer >
  );
};

export default Footer;