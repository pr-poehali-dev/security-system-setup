import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-security-light">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}