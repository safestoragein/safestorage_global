import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, Shield, Award, CheckCircle, Star, MapPin, Zap } from 'lucide-react';
import uaeHeroImage from '../../assets/uae-hero.jpeg';
import './UAEHero.css';

const UAEHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Dubai's Premium",
      highlight: "Self Storage",
      subtitle: "Solutions",
      description: "Secure, Climate-Controlled Storage Units Starting from AED 99/month"
    },
    {
      title: "Business",
      highlight: "Storage Hub",
      subtitle: "in Dubai",
      description: "Flexible Warehouse Solutions for Growing Businesses"
    },
    {
      title: "Your Trusted",
      highlight: "Storage Partner",
      subtitle: "Since 2014",
      description: "10+ Years of Excellence in Storage Services"
    }
  ];

  const features = [
    "24/7 Access",
    "Climate Controlled",
    "CCTV Surveillance", 
    "No Hidden Fees",
    "Free Insurance"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dubai-hero">
      {/* Hero Background with Overlay */}
      <div className="hero-background">
        <img src={uaeHeroImage} alt="SafeStorage Dubai" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content">
        <div className="dubai-container">
          {/* Hero Text Content */}
          <div className="hero-main-content">
            <div className="hero-text-section">
              {/* Trust Indicators */}
              <div className="hero-trust-bar">
                <div className="trust-item">
                  <Shield size={18} />
                  <span>SIRA Approved</span>
                </div>
                <div className="trust-item">
                  <Award size={18} />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="trust-item">
                  <Star size={18} />
                  <span>4.9★ Google Rating</span>
                </div>
              </div>

              {/* Dynamic Headlines */}
              <div className="headline-wrapper">
                <h1 className="hero-headline">
                  {heroSlides[currentSlide].title}
                  <span className="text-gold"> {heroSlides[currentSlide].highlight}</span>
                  <br />
                  {heroSlides[currentSlide].subtitle}
                </h1>
                <p className="hero-subtitle">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta-group">
                <a href="tel:+971505773388" className="cta-primary">
                  <Phone size={20} />
                  <span>Call +971 50 577 3388</span>
                </a>
                <a href="https://wa.me/971505773388" className="cta-whatsapp">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <Link to="/uae/get-quote" className="cta-secondary">
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Quick Features */}
              <div className="hero-features">
                {features.map((feature, index) => (
                  <div key={index} className="feature-tag">
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Form */}
            <div className="hero-form-section">
              <div className="quick-form-card">
                <div className="form-header">
                  <h3>Get Started Today</h3>
                  <p>Find your perfect storage unit</p>
                </div>
                
                <form className="hero-quick-form">
                  <div className="form-group">
                    <select className="form-select">
                      <option>Select Unit Size</option>
                      <option>Small (10-25 sq ft)</option>
                      <option>Medium (50-75 sq ft)</option>
                      <option>Large (100-150 sq ft)</option>
                      <option>Extra Large (200+ sq ft)</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <select className="form-select">
                      <option>Select Location</option>
                      <option>Business Bay</option>
                      <option>Dubai Marina</option>
                      <option>JLT</option>
                      <option>Al Quoz</option>
                      <option>DIFC</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <input 
                      type="tel" 
                      placeholder="Your Phone Number" 
                      className="form-input"
                    />
                  </div>

                  <Link to="/uae/get-quote" className="form-submit">
                    <Zap size={18} />
                    Get a Free Quote
                  </Link>
                </form>

                <div className="form-footer">
                  <p className="form-note">
                    <CheckCircle size={14} />
                    Free consultation • No commitment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators - Removed for cleaner look */}
        </div>
      </div>
    </section>
  );
};

export default UAEHero;