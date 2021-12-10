import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <a href='/contact' passHref>
            <span>WORK WITH US</span>
            <Image src='/img/link.png' alt='' width={40} height={40} />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Koeweide 138 <br /> Arnhem
        </div>
        <div className={styles.cardItem}>
          CONTACT@HANI.COM <br /> 0654567054
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2021 HANI, <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
