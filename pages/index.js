import Head from 'next/head';
import Intro from '../components/Intro';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agency</title>
        <meta name='description' content='Agency website' />
      </Head>
      <Intro />
    </div>
  );
}
