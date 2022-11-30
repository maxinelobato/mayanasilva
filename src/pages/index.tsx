import type { NextPage } from 'next';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Description } from '../components/Description';
import { Header } from '../components/Header';
import { Specialty } from '../components/Specialty';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Description />
      <Specialty />
      <About />
      <Contact />
    </>
  );
};

export default Home;
