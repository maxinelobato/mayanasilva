import type { NextPage } from 'next';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Description } from '../components/Description';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Description />
      <About />
      <Contact />
    </>
  );
};

export default Home;
