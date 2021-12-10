import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Services.module.scss';

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1>What We Can Do?</h1>
      <h2>Services we can help you with</h2>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video src={`/img/${service.video}`} autoPlay loop muted />
                ) : (
                  <Image
                    src={`/img/${service.photo}`}
                    alt={service.title}
                    width='100%'
                    height='100%'
                    layout='responsive'
                    sizes='50vw'
                    objectFit='cover'
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNsrQcAAY8BBhuFt1sAAAAASUVORK5CYII='
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
