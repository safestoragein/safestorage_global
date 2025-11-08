import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import TrustBadges from '../components/TrustBadges';

const UKPage = () => {
  return (
    <div className="uk-page">
      <Hero />
      <TrustBadges />
      <Services />
      <Stats />
      <Features />
      <Partners />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default UKPage;