import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Methodology } from '@/components/Methodology';
import { About } from '@/components/About';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Methodology />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
