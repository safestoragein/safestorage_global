import React from 'react';
import { Shield, Clock, Thermometer, Lock, Award, Users, CreditCard, Truck } from 'lucide-react';
import './UAEWhyChooseUs.css';

const UAEWhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Dubai Police Approved",
      description: "Fully licensed and approved by Dubai authorities for secure storage"
    },
    {
      icon: <Clock size={40} />,
      title: "24/7 Access",
      description: "Round-the-clock access to your belongings with biometric security"
    },
    {
      icon: <Thermometer size={40} />,
      title: "Climate Controlled",
      description: "Temperature & humidity controlled units perfect for Dubai's climate"
    },
    {
      icon: <Lock size={40} />,
      title: "Maximum Security",
      description: "CCTV surveillance, security guards, and individual unit alarms"
    },
    {
      icon: <Award size={40} />,
      title: "10+ Years Excellence",
      description: "Trusted by over 1 lakh customers across Dubai since 2014"
    },
    {
      icon: <Users size={40} />,
      title: "Professional Team",
      description: "Expert staff fluent in English, Arabic, Hindi & Malayalam"
    },
    {
      icon: <CreditCard size={40} />,
      title: "Flexible Terms",
      description: "Month-to-month rentals with no long-term commitments"
    },
    {
      icon: <Truck size={40} />,
      title: "Free Moving Service",
      description: "Complimentary pickup for units above 100 sq ft"
    }
  ];

  return (
    <section className="uae-why-choose-us">
      <div className="dubai-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Why SafeStorage</span>
          <h2 className="section-title">
            Dubai's Most Trusted
            <span className="highlight"> Storage Solution</span>
          </h2>
          <p className="section-subtitle">
            Experience premium storage services with unmatched security and convenience in the heart of Dubai
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="trust-banner">
          <div className="trust-content">
            <div className="trust-stat">
              <strong>1 Lakh+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="trust-stat">
              <strong>10+</strong>
              <span>Years in Dubai</span>
            </div>
            <div className="trust-stat">
              <strong>5</strong>
              <span>Prime Locations</span>
            </div>
            <div className="trust-stat">
              <strong>24/7</strong>
              <span>Access Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEWhyChooseUs;