import React, { useState } from 'react';
import { Home, Building, ArrowRight, CheckCircle, Package } from 'lucide-react';
import './UAEStorageSolutions.css';

const UAEStorageSolutions = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const storageOptions = [
    {
      id: 'personal-small',
      size: 'Small',
      area: '25-50 sq ft',
      price: 'Contact for pricing',
      period: '/month',
      ideal: 'Personal items, boxes',
      features: ['Climate controlled', '24/7 access', 'CCTV security'],
      popular: false
    },
    {
      id: 'personal-medium',
      size: 'Medium',
      area: '75-100 sq ft',
      price: 'Contact for pricing',
      period: '/month',
      ideal: 'Studio apartment items',
      features: ['Climate controlled', '24/7 access', 'CCTV security', 'Moving assistance'],
      popular: true
    },
    {
      id: 'personal-large',
      size: 'Large',
      area: '150-200 sq ft',
      price: 'Contact for pricing',
      period: '/month',
      ideal: '1-2 bedroom contents',
      features: ['Climate controlled', '24/7 access', 'CCTV security', 'Moving assistance', 'Priority support'],
      popular: false
    },
    {
      id: 'personal-xlarge',
      size: 'Extra Large',
      area: '250+ sq ft',
      price: 'Contact for pricing',
      period: '/month',
      ideal: '3+ bedroom house',
      features: ['Climate controlled', '24/7 access', 'CCTV security', 'Moving assistance', 'Priority support', 'Dedicated manager'],
      popular: false
    }
  ];

  const businessOptions = [
    {
      id: 'business-startup',
      size: 'Startup',
      area: '50-100 sq ft',
      price: 'Contact for pricing',
      period: '/month',
      ideal: 'Small inventory, documents',
      features: ['Loading dock access', 'Inventory tracking', 'Flexible terms'],
      popular: false
    },
    {
      id: 'business-sme',
      size: 'SME',
      area: '200-300 sq ft',
      price: 'Contact for pricing',
      period: '/month',
      ideal: 'Retail stock, equipment',
      features: ['Loading dock access', 'Inventory tracking', 'Account manager', 'Bulk discounts'],
      popular: true
    },
    {
      id: 'business-enterprise',
      size: 'Enterprise',
      area: '500+ sq ft',
      price: 'Custom',
      period: 'quote',
      ideal: 'Warehouse operations',
      features: ['Dedicated warehouse', 'Custom solutions', 'Enterprise support', 'Advanced security'],
      popular: false
    }
  ];

  const getCurrentOptions = () => {
    return activeTab === 'personal' ? storageOptions : businessOptions;
  };

  return (
    <section className="modern-storage-section">
      <div className="dubai-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Find Your Perfect <span className="text-highlight">Storage Solution</span>
          </h2>
          <p className="section-description">
            Professional storage units with premium security and climate control
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`nav-tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <Home size={18} />
            Personal Storage
          </button>
          <button
            className={`nav-tab ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            <Building size={18} />
            Business Storage
          </button>
        </div>

        {/* Storage Options Grid */}
        <div className="storage-options-grid">
          {getCurrentOptions().map((option, index) => (
            <div key={option.id} className={`storage-option-card ${option.popular ? 'featured' : ''}`}>
              {option.popular && (
                <div className="popular-badge">
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="option-header">
                <div className="size-icon">
                  <Package size={24} />
                </div>
                <h3 className="size-title">{option.size}</h3>
                <p className="size-area">{option.area}</p>
              </div>

              <div className="ideal-section">
                <p className="ideal-for">Ideal for: {option.ideal}</p>
              </div>

              <div className="features-list">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle size={14} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a href="/uae/get-quote" className="cta-button">
                Get Quote
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div className="cta-content">
            <h3>Need help choosing the right size?</h3>
            <p>Our storage experts are here to help you find the perfect solution</p>
          </div>
          <div className="cta-actions">
            <a href="tel:8088848484" className="cta-call">Call 8088848484</a>
            <a href="/uae/get-quote" className="cta-quote">Get Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEStorageSolutions;