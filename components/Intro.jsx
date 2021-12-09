import Image from 'next/image';
import React from 'react';
import styles from '../styles/Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>
          DIGITAL PRODUCT<span className={styles.brand}> AGENCY</span>
        </h1>
        <p>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src='/img/Avocado.png'
          alt='Avocado'
          width='100%'
          height='100%'
          objectFit='cover'
          layout='fill'
        />
      </div>
    </div>
  );
};

export default Intro;
