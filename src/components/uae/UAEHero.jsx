import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Shield, Award, Users, ChevronRight, Star, Clock, Key, Thermometer, Ban, Eye } from 'lucide-react';
import palletImage from '../../assets/pallet.png';
import './UAEHero.css';

const UAEHero = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      rating: 4.9,
      text: "Exceptional service! The facility is spotlessly clean and secure.",
      author: "Ahmed K.",
      location: "Business Bay"
    },
    {
      rating: 5.0,
      text: "24/7 access and great customer support. Highly recommend!",
      author: "Sarah M.",
      location: "Dubai Marina"
    },
    {
      rating: 4.8,
      text: "Best storage solution in Dubai. Professional and reliable.",
      author: "Mohammed R.",
      location: "JLT"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="uae-hero">
      <div className="hero-bg-pattern"></div>
      
      <div className="uae-container">
        <div className="hero-content-grid">
          {/* Left Content */}
          <div className="hero-left">
            <div className="trust-badge">
              <Shield size={16} />
              <span>Dubai's Most Trusted Storage Since 2010</span>
            </div>

            <h1 className="hero-title">
              Smart Self Storage
              <span className="highlight"> for Your Needs</span>
            </h1>

            <p className="hero-description">
              Premium storage facilities across <strong>Dubai</strong> with <strong>24/7 access</strong>, 
              <strong>climate control</strong>, and <strong>unmatched security</strong>. From personal items 
              to business inventory - we've got you covered.
            </p>

            <div className="hero-cta-section">
              <div className="cta-buttons-row">
                <a href="tel:+971545621101" className="primary-cta-btn">
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <a href="https://wa.me/971545621101" className="whatsapp-cta-btn">
                  <MessageCircle size={16} />
                  <span>WhatsApp Us</span>
                </a>
                <button className="quote-cta-btn">
                  Get Free Quote
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>


            {/* Trust Badges Row */}
            <div className="trust-badges-row">
              <div className="badge-card">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div>
                  <strong>4.9★</strong>
                  <span>Google</span>
                </div>
              </div>
              
              <div className="badge-card">
                <svg viewBox="0 0 30 30" width="24" height="24">
                  <rect width="30" height="30" fill="#00B67A"/>
                  <path d="M15 2l3.5 7.5H22l-5.5 4 2 7.5L15 17.5 11.5 21l2-7.5-5.5-4h3.5z" fill="white"/>
                </svg>
                <div>
                  <strong>Excellent</strong>
                  <span>TrustPilot</span>
                </div>
              </div>
              
              <div className="badge-card">
                <Shield size={24} color="#2563eb" />
                <div>
                  <strong>ISO 9001</strong>
                  <span>Certified</span>
                </div>
              </div>
              
              <div className="badge-card">
                <Award size={24} color="#ff6b35" />
                <div>
                  <strong>SIRA</strong>
                  <span>Approved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="hero-right">
            <div className="hero-visual">
              <div className="main-image-container">
                <img 
                  src={palletImage}
                  alt="Storage Pallet Services in Dubai" 
                  className="hero-main-image"
                />

                <div className="floating-card feature-card">
                  <Clock size={24} color="#ff6b35" />
                  <div>
                    <strong>24/7 Access</strong>
                    <p>Access your unit anytime</p>
                  </div>
                </div>

                <div className="floating-card security-card">
                  <Key size={24} color="#2563eb" />
                  <div>
                    <strong>Secure Storage</strong>
                    <p>CCTV & Biometric Access</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scrolling Features Banner */}
      <div className="scrolling-features-banner">
        <div className="scrolling-track">
          <div className="scrolling-content">
            <div className="feature-item">
              <Clock size={18} />
              <span>24 HR Customer Support & Surveillance</span>
            </div>
            <div className="feature-item">
              <Thermometer size={18} />
              <span>Climate Control</span>
            </div>
            <div className="feature-item">
              <Ban size={18} />
              <span>No Deposit</span>
            </div>
            <div className="feature-item">
              <Shield size={18} />
              <span>Free Insurance</span>
            </div>
            <div className="feature-item">
              <Eye size={18} />
              <span>No Hidden Fees</span>
            </div>
            {/* Duplicate for continuous scroll */}
            <div className="feature-item">
              <Clock size={18} />
              <span>24 HR Customer Support & Surveillance</span>
            </div>
            <div className="feature-item">
              <Thermometer size={18} />
              <span>Climate Control</span>
            </div>
            <div className="feature-item">
              <Ban size={18} />
              <span>No Deposit</span>
            </div>
            <div className="feature-item">
              <Shield size={18} />
              <span>Free Insurance</span>
            </div>
            <div className="feature-item">
              <Eye size={18} />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add these missing imports at the top
import { MessageCircle, Calculator } from 'lucide-react';

export default UAEHero;