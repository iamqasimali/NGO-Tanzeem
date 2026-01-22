import Hero from '../components/home/Hero';
import Impact from '../components/home/Impact';
import About from '../components/home/About';
import Programs from '../components/home/Programs';
import Stats from '../components/home/Stats';
// import WhatsAppFloat from '../components/common/WhatsAppFloat';

const Home = () => {
  return (
    <div>
      <Hero />
      <Impact />
      <About />
      <Programs />
      <Stats />
       {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default Home;
