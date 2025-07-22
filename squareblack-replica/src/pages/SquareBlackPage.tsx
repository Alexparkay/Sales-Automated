import React from 'react';
import HeroSection from '../components/HeroSection';
import ClientLogos from '../components/ClientLogos';
import CaseStudies from '../components/CaseStudies';
import WhyWeDifferent from '../components/WhyWeDifferent';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import TeamSection from '../components/TeamSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const SquareBlackPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ClientLogos />
      <CaseStudies />
      <WhyWeDifferent />
      <Testimonials />
      <Services />
      <TeamSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default SquareBlackPage;