import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Mission } from '@/components/Mission';
import { FocusAreas } from '@/components/FocusAreas';
import { Principles } from '@/components/Principles';
import { Team } from '@/components/Team';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch ">
      <div className="bg-white flex w-full flex-col overflow-hidden items-stretch max-md:max-w-full">
        <div className="bg-white flex w-full flex-col items-stretch max-md:max-w-full">
          <Header />
          
          <main className="px-[34px] max-md:px-5">
            <Hero />
          </main>
        </div>
        
        <AboutUs />
        <Mission />
        <FocusAreas />
        <Principles />
        <Team />
        <Footer />
      </div>
      
     
    </div>
  );
};

export default Index;
