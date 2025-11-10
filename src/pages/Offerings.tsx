import React from 'react';
import ProductsSection2 from '@/components/ProductsSection2';
import ServicesSection2 from '@/components/ServicesSection2';
import { Header } from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { Footer } from '@/components/Footer';

const Offerings: React.FC = () => {
  return (
    <div className="box-border w-full min-h-screen m-0 p-0">
         <Header />
         <HeroSection />
      <ProductsSection2 />
      <ServicesSection2 />
      <Footer />
    </div>
  );
};

export default Offerings;
