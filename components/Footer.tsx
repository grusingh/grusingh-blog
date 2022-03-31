import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      css={{
        margin: '1rem -1rem 0 -1rem',
        padding: '1rem 1rem 2rem 1rem',
        backgroundColor: 'rgb(245, 245, 245)',
        justifySelf: 'flex-end',
      }}
    >
      <Link href="/">
        <a>home</a>
      </Link>
    </footer>
  );
};

export default Footer;
