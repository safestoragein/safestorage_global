import React from 'react';
import '../components/uae/UAEGlobal.css';
import '../components/uae/UAEMobileOptimize.css';
import UAEHeader from '../components/uae/UAEHeader';
import UAEHero from '../components/uae/UAEHero';
import UAEWhyChooseUs from '../components/uae/UAEWhyChooseUs';
import UAEStorageSolutions from '../components/uae/UAEStorageSolutions';
import UAEHowItWorks from '../components/uae/UAEHowItWorks';
import UAETestimonials from '../components/uae/UAETestimonials';
import UAELocations from '../components/uae/UAELocations';
import UAEFAQ from '../components/uae/UAEFAQ';
import UAEFooter from '../components/uae/UAEFooter';

const UAEPage = () => {
  return (
    <div className="uae-page">
      <UAEHeader />
      <UAEHero />
      <UAEWhyChooseUs />
      <UAEStorageSolutions />
      <UAEHowItWorks />
      <UAETestimonials />
      <UAELocations />
      <UAEFAQ />
      <UAEFooter />
    </div>
  );
};

export default UAEPage;