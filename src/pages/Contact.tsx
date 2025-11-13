import React from 'react';
import { Header } from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import VendorRegistration from '@/components/VendorRegistration';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <Header />
      
      <main className="w-full max-w-[1440px] relative mx-auto my-0 p-[34px] max-md:p-5 max-sm:p-[15px]">
        <ContactSection />
        <VendorRegistration />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
