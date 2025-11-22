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
      action: "Call +971 50 577 3388"
    },
    {
      number: "02",
      icon: <Package size={40} />,
      title: "Choose Your Unit",
      description: "Select the perfect size unit. We offer free pickup for units above 100 sq ft.",
      action: "View Sizes"
    },
    {
      number: "03", 
      icon: <Key size={40} />,
      title: "Move In",
      description: "Sign agreement online, get your access code, and start storing immediately.",
      action: "Book Now"
    },
    {
      number: "04",
      icon: <CheckCircle size={40} />,
      title: "Access Anytime",
      description: "Enjoy 24/7 access to your belongings with complete security and peace of mind.",
      action: "Get Started"
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
              <button className="step-action">{step.action}</button>
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

        {/* Video Section */}
        <div className="video-section">
          <div className="video-content">
            <div className="video-text">
              <h3>See Our Facilities</h3>
              <p>Take a virtual tour of our state-of-the-art storage facilities in Dubai</p>
              <ul className="facility-features">
                <li>Climate controlled environment</li>
                <li>24/7 CCTV surveillance</li>
                <li>Biometric access control</li>
                <li>Professional moving assistance</li>
              </ul>
              <button className="tour-button">Take Virtual Tour</button>
            </div>
            <div className="video-placeholder">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="SafeStorage Dubai Facility Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEHowItWorks;