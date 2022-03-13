import styles from './Footer.module.css';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">Home</Link>
    </footer>
  );
};

export default Footer;
