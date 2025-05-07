'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import References from '../components/References';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Hide loading spinner after initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show loading spinner on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <main>
      {isLoading && <LoadingSpinner />}
      <Navbar />
      <Hero />
      <About />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
