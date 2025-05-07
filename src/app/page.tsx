import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import References from '../components/References';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
