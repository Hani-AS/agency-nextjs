import Image from 'next/image';
import React from 'react';
import styles from '../styles/Intro.module.scss';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor='#b0ff49' top='-50vh' left='-50vh' />
      <Circle backgroundColor='#01c686' right='-40vh' />
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
          objectFit='cover'
          layout='fill'
          priority
        />
      </div>
    </div>
  );
};

export default Intro;
