import React from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Truck, Package, Home, Building, Users, Shield,
  CheckCircle, ArrowRight, Phone, Clock, Globe, Award
} from 'lucide-react';
import '../components/uae/UAEMovingServicesPage.css';

const UAEMovingServicesPage = () => {
  const services = [
    {
      icon: <Home />,
      title: 'Residential Moving',
      description: 'Complete home moving services within Dubai and UAE',
      features: ['Packing & unpacking', 'Furniture dismantling', 'Safe transportation', 'Storage options']
    },
    {
      icon: <Building />,
      title: 'Office Relocation',
      description: 'Professional office moving with minimal downtime',
      features: ['IT equipment handling', 'Weekend moves', 'Furniture installation', 'Document handling']
    },
    {
      icon: <Globe />,
      title: 'International Moving',
      description: 'Global relocation services with customs clearance',
      features: ['Door-to-door service', 'Customs documentation', 'Air & sea freight', 'Insurance coverage']
    },
    {
      icon: <Package />,
      title: 'Packing Services',
      description: 'Professional packing with quality materials',
      features: ['Fragile item care', 'Custom crating', 'Labeling system', 'Unpacking service']
    }
  ];

  const process = [
    { icon: <Phone />, title: 'Free Survey', desc: 'On-site assessment and quote' },
    { icon: <Package />, title: 'Packing', desc: 'Professional packing service' },
    { icon: <Truck />, title: 'Moving', desc: 'Safe transportation' },
    { icon: <Home />, title: 'Delivery', desc: 'Unpacking and setup' }
  ];

  return (
    <div className="uae-moving-services-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="moving-hero-section">
        <div className="moving-container">
          <div className="moving-hero-content">
            <div className="hero-badge">
              <Truck size={16} />
              <span>Professional Moving Services</span>
            </div>
            <h1>Moving & Relocation in <span className="highlight">Dubai</span></h1>
            <p>Complete moving solutions for homes and offices across UAE</p>
            
            <div className="hero-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Professional Team</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Same Day Service</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">
                <Phone size={18} />
                Call +971 50 577 3388
              </button>
              <a href="/uae/get-quote" className="btn-secondary">
                Get a Free Quote
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="trust-stats">
              <div className="stat">
                <span className="number">10,000+</span>
                <span className="label">Moves Completed</span>
              </div>
              <div className="stat">
                <span className="number">99%</span>
                <span className="label">Customer Satisfaction</span>
              </div>
              <div className="stat">
                <span className="number">50+</span>
                <span className="label">Professional Movers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="moving-container">
          <div className="section-header">
            <h2>Our Moving Services</h2>
            <p>Complete solutions for all your moving needs</p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="service-btn">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="moving-container">
          <div className="why-content">
            <div className="why-info">
              <h2>Why Choose SafeStorage Moving?</h2>
              <p>Dubai's trusted moving partner since 2014</p>
              
              <div className="why-features">
                <div className="why-feature">
                  <Users size={24} />
                  <div>
                    <h4>Professional Team</h4>
                    <p>Trained and experienced moving professionals</p>
                  </div>
                </div>
                <div className="why-feature">
                  <Shield size={24} />
                  <div>
                    <h4>Fully Insured</h4>
                    <p>Complete insurance coverage for your belongings</p>
                  </div>
                </div>
                <div className="why-feature">
                  <Clock size={24} />
                  <div>
                    <h4>On-Time Delivery</h4>
                    <p>Punctual service with guaranteed timelines</p>
                  </div>
                </div>
                <div className="why-feature">
                  <Award size={24} />
                  <div>
                    <h4>Quality Service</h4>
                    <p>Award-winning service with attention to detail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-stats">
              <div className="stats-card">
                <h3>Our Track Record</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">10+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">24/7</span>
                    <span className="stat-label">Customer Support</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Licensed & Insured</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">4.9★</span>
                    <span className="stat-label">Google Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="moving-container">
          <div className="section-header">
            <h2>Our Moving Process</h2>
            <p>Simple and stress-free moving experience</p>
          </div>

          <div className="process-steps">
            {process.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="step-number">{idx + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="moving-container">
          <div className="pricing-content">
            <h2>Transparent Pricing</h2>
            <p>No hidden charges - Get your free quote today</p>
            
            <div className="pricing-features">
              <div className="pricing-feature">
                <CheckCircle size={20} />
                <span>Free on-site survey</span>
              </div>
              <div className="pricing-feature">
                <CheckCircle size={20} />
                <span>Detailed quotation</span>
              </div>
              <div className="pricing-feature">
                <CheckCircle size={20} />
                <span>No hidden charges</span>
              </div>
              <div className="pricing-feature">
                <CheckCircle size={20} />
                <span>Competitive rates</span>
              </div>
            </div>

            <div className="pricing-cta">
              <a href="/uae/get-quote" className="quote-btn">
                Get Your Free Quote
                <ArrowRight size={18} />
              </a>
              <p className="pricing-note">Usually responds within 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="moving-cta-section">
        <div className="moving-container">
          <div className="cta-content">
            <h2>Ready to Move?</h2>
            <p>Let us handle your move while you focus on what matters</p>
            <div className="cta-buttons">
              <button className="cta-btn-primary">
                <Phone size={18} />
                Call Now
              </button>
              <button className="cta-btn-secondary">
                Schedule Survey
              </button>
            </div>
            <div className="cta-contact">
              <span><Phone size={16} /> +971 50 577 3388</span>
              <span>Available 24/7 for emergencies</span>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEMovingServicesPage;