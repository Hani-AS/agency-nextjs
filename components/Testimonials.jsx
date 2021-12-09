import Image from 'next/image';
import React from 'react';
import { users } from '../data';
import styles from '../styles/Testimonials.module.scss';
import Circle from './Circle';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor='darkblue' top='-70vh' left='0' right='0' />
      <h1>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div className={styles.card} key={user.id}>
            <Image
              src={`/img/${user.logo}`}
              alt={user.name}
              height='30'
              width='30'
              objectFit='cover'
            />
            <p>{user.comment}</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={`/img/${user.avatar}`}
                alt={user.avatar}
                width='45'
                height='45'
                objectFit='cover'
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
