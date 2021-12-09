import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>AGENCY</Link>
      <ul>
        <li>
          <Link href='/products/design'>DESIGN</Link>
        </li>
        <li>
          <Link href='/products/development'>DEVELOPMENT</Link>
        </li>
        <li>
          <Link href='/products/production'>PRODUCTION</Link>
        </li>
        <li>
          <Link href='/products/photography'>PHOTOGRAPHY</Link>
        </li>
        <li>
          <Link href='/products/contact'>CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
