import React from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEHero from '../components/uae/UAEHero';
import UAEFooter from '../components/uae/UAEFooter';

const UAEPage = () => {
  return (
    <div className="uae-page">
      <UAEHeader />
      <UAEHero />
      <UAEFooter />
    </div>
  );
};

export default UAEPage;