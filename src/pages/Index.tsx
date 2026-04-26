import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { scrollToSection } from '@/lib/section-navigation';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(location.search).get('section');

    if (section) {
      window.requestAnimationFrame(() => {
        scrollToSection(section);
      });
    }
  }, [location.search]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
