import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { data } from '../../data';
import styles from '../../styles/Product.module.scss';

const product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              alt=''
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button>
          <Link href='/contact'>CONTACT</Link>
        </button>
      </div>
    </div>
  );
};

export default product;

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: {
        name: item.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { name } = context.params;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};
