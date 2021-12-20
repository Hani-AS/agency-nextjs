import { GetStaticProps } from 'next';
import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { data, Product } from '../data';

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Agency</title>
        <meta name='description' content='Agency website' />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
