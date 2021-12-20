import React from 'react';
import Circle from '../components/Circle';
import styles from '../styles/Contact.module.scss';

type Input = {
  type: React.HTMLInputTypeAttribute | HTMLTextAreaElement;
};

const contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor='green' left='-40vh' top='-20vh' />
      <Circle backgroundColor='yellow' right='-30vh' bottom='-60vh' />
      <h1>GET IN TOUCH</h1>
      <form className={styles.form}>
        <input
          type='text'
          required
          className={styles.inputS}
          placeholder='Username'
        />
        <input
          type='number'
          required
          className={styles.inputS}
          placeholder='Phone Number'
        />
        <input
          type='email'
          required
          className={styles.inputL}
          placeholder='Email'
        />
        <input
          type='text'
          required
          className={styles.inputL}
          placeholder='Subject'
        />
        <textarea
          // type='text'
          required
          className={styles.textarea}
          placeholder='Message'
          rows={6}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default contact;
