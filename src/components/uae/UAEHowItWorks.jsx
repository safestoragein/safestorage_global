import React from 'react';
import { Phone, Package, Key, CheckCircle } from 'lucide-react';
import './UAEHowItWorksSection.css';

const UAEHowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone size={40} />,
      title: "Contact Us",
      description: "Call or WhatsApp us to discuss your storage needs. Get instant quote.",
      action: "Call +971 50 577 3388",
      value: "tel:+971505773388"
    },
    {
      number: "02",
      icon: <Package size={40} />,
      title: "Doorstep Pickup",
      description: "We pack your items and pickup from your Doorstep",
      action: "Get A Free Quote",
      value: "https://safestorageglobal.com/uae/get-quote"
    },
    {
      number: "03", 
      icon: <Key size={40} />,
      title: "Store In Warehouse",
      description: "We store your items securely in our warehouses",
      action: "Get A Free Quote",
      value: "https://safestorageglobal.com/uae/get-quote"

    },
    {
      number: "04",
      icon: <CheckCircle size={40} />,
      title: "Doorstep Delivery",
      description: "We deliver back your items, Whenever you need",
      action: "Get A Free Quote",
      value: "https://safestorageglobal.com/uae/get-quote"

    }
  ];

  return (
    <section className="uae-how-it-works">
      <div className="dubai-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Simple Process</span>
          <h2 className="section-title">
            How It
            <span className="highlight"> Works</span>
          </h2>
          <p className="section-subtitle">
            Getting started with SafeStorage is quick and easy - just 4 simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <a href={step.value}>
              <button className="step-action">{step.action}</button></a>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <path
                      d="M10 20 L30 20"
                      stroke="#ff6b35"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                    />
                    <path
                      d="M25 15 L30 20 L25 25"
                      stroke="#ff6b35"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Facility Images Section */}
        <div className="facility-section">
          <div className="facility-content">
            <div className="facility-text">
              <h3>See Our Facilities</h3>
              <p>Take a look at our state-of-the-art storage facilities in Dubai</p>
              <ul className="facility-features">
                <li>Climate controlled environment</li>
                <li>24/7 CCTV surveillance</li>
                <li>Biometric access control</li>
                <li>Professional moving assistance</li>
              </ul>
             <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'> <button className="tour-button">Get A Free Quote</button></a>
            </div>
            <div className="facility-images">
              <div className="image-grid">
                <div className="facility-image">
                  <img src="https://t3.ftcdn.net/jpg/08/80/21/76/360_F_880217681_rFT1TQrfOaiZpknJY00SVccrFKyTdKEk.jpg" alt="Modern storage units" />
                  <div className="image-overlay">
                    <span>Modern Storage Units</span>
                  </div>
                </div>
                <div className="facility-image">
                  <img src="https://www.store-insure.co.uk/Portals/0/blog/storychief-generated-2025-08-04-11-00-28_0176399d5bc14f3735f59d6a2b8d6839.jpeg?ver=2025-08-04-130637-090" alt="Security systems" />
                  <div className="image-overlay">
                    <span>Advanced Security</span>
                  </div>
                </div>
                <div className="facility-image">
                  <img src="https://www.shutterstock.com/image-photo/video-surveillance-warehouse-cctv-camera-600nw-2415205769.jpg" alt="Climate control" />
                  <div className="image-overlay">
                    <span>Climate Controlled</span>
                  </div>
                </div>
                <div className="facility-image">
                  <img src="https://sastoragesolutions.com.au/wp-content/uploads/9a6mrkq4xam1336x630.jpg" alt="24/7 access" />
                  <div className="image-overlay">
                    <span>24/7 Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEHowItWorks;