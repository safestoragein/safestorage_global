import React from 'react';
import '../components/uae/UAEGlobal.css';
import '../components/uae/UAEMobileOptimize.css';
import UAEHeader from '../components/uae/UAEHeader';
import SEOHead from '../components/SEOHead';
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
      <SEOHead 
        title="SafeStorage UAE - Premium Storage Solutions in Dubai"
        description="Secure document storage, business storage, and personal storage solutions in Dubai, UAE. Starting from AED 99. Professional storage services across UAE."
        canonical="/uae"
        keywords="storage Dubai, document storage UAE, business storage, secure storage, warehouse Dubai, self storage"
      />
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