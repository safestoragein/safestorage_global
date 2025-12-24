import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Building, Package, TrendingUp, Shield, Users, Clock,
  CheckCircle, ArrowRight, Star, Award, Phone, Mail,
  BarChart, Database, Truck, FileText, Settings, Zap
} from 'lucide-react';
import '../components/uae/UAEBusinessStoragePage.css';
import UAE4steps from '../components/uae/UAE4steps';

const UAEBusinessStoragePage = () => {
  const [selectedSize, setSelectedSize] = useState('medium');

  const businessSolutions = [
    {
      title: 'Startup Storage',
      description: 'Perfect for growing startups',
      features: ['Pick & pack', 'Flexible terms', 'Scalable space'],
      icon: <TrendingUp />,
      price: 'Contact for pricing'
    },
    {
      title: 'SME Solutions',
      description: 'Ideal for small to medium businesses',
      features: ['Pick & pack', 'Office integration', '24/7 access'],
      icon: <Building />,
      price: 'Contact for pricing'
    },
    {
      title: 'Enterprise Storage',
      description: 'Large-scale business storage',
      features: ['Pick & pack', 'Dedicated manager', 'Custom solutions'],
      icon: <Database />,
      price: 'Custom pricing'
    },
    {
      title: 'E-commerce Hub',
      description: 'Complete fulfillment center',
      features: ['Pick & pack', 'Inventory management', 'Shipping integration'],
      icon: <Package />,
      price: 'Contact for pricing'
    }
  ];

  const industries = [
    'Retail & E-commerce',
    'Healthcare & Pharma',
    'Construction & Engineering',
    'Legal & Professional Services',
    'Import/Export',
    'IT & Technology'
  ];

  const features = [
    {
      icon: <Shield />,
      title: 'Enterprise Security',
      description: 'SIRA certified, 24/7 surveillance, biometric access'
    },
    {
      icon: <Clock />,
      title: '24/7 Access',
      description: 'Round-the-clock access for your team'
    },
    {
      icon: <Truck />,
      title: 'Loading Bay',
      description: 'Easy loading/unloading with dock access'
    },
    {
      icon: <FileText />,
      title: 'Inventory System',
      description: 'Digital tracking and management'
    },
   
  ];

  const sizeOptions = [
    { id: 'small', label: 'Small Business', size: '10-50 m²', units: '5-10 pallets' },
    { id: 'medium', label: 'Medium Business', size: '50-200 m²', units: '10-50 pallets' },
    { id: 'large', label: 'Large Business', size: '200-500 m²', units: '50-100 pallets' },
    { id: 'enterprise', label: 'Enterprise', size: '500+ m²', units: '100+ pallets' }
  ];

  return (
    <div className="uae-business-storage-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="business-storage-hero">
        <div className="business-storage-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Building size={16} />
              <span>Business Storage Solutions</span>
            </div>
            <h1>Business Storage <span className="highlight">Dubai</span></h1>
            <p style = {{ color:"white" }} >
              Secure warehouse space for Dubai businesses. From 10m² to 1000m² with flexible terms.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">2000+</span>
                <span className="stat-label">Business Clients</span>
              </div>
             
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Access Available</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href='tel:+97150577338'>
              <button className="btn-primary-hero">
                <Phone size={18} />
                Talk to Business Expert
              </button></a>
<a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
              <button className="btn-secondary-hero">
                Get A Free Quote
                <ArrowRight size={18} />
              </button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Grid */}
      <section className="solutions-section">
        <div className="business-storage-container">
          <div className="section-header">
            <h2>Business Storage Solutions</h2>
            <p>Choose the perfect storage solution for your business needs</p>
          </div>

          <div className="solutions-grid">
            {businessSolutions.map((solution, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p className="solution-desc">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="solution-footer">
                  {/*<span className="solution-price">{solution.price}</span>*/}
                  <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
                  <button className="solution-btn">Get A Free Quote →</button>
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Calculator */}
      <section className="calculator-section">
        <div className="business-storage-container">
          <div className="calculator-card">
            <h2>Calculate Your Storage Needs</h2>
            <p>Find the right storage size for your business</p>
            
            <div className="size-selector">
              {sizeOptions.map(option => (
                <button
                  key={option.id}
                  className={`size-option ${selectedSize === option.id ? 'active' : ''}`}
                  onClick={() => setSelectedSize(option.id)}
                >
                  <span className="option-label">{option.label}</span>
                  <span className="option-units">{option.units}</span>
                </button>
              ))}
            </div>

            <div className="calculator-result">
              <div className="result-info">
                <h3>Recommended for you:</h3>
                <p>Based on your selection, we recommend our {sizeOptions.find(s => s.id === selectedSize)?.label} package</p>
              </div>
              <a href="/uae/get-quote" className="get-quote-btn">
                Get a Free Quote
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="business-storage-container">
          <div className="section-header">
            <h2>Why Choose SafeStorage for Business?</h2>
            <p>Complete storage solutions with enterprise-grade features</p>
          </div>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
     {/* <section className="industries-section">
        <div className="business-storage-container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Trusted by businesses across all sectors in Dubai</p>
          </div>

          <div className="industries-list">
            {industries.map((industry, idx) => (
              <div key={idx} className="industry-item">
                <Award size={20} />
                <span>{industry}</span>
              </div>
            ))}
          </div>

          <div className="industries-cta">
            <p>Don't see your industry? We provide custom solutions for all business types.</p>
            <button className="contact-btn">
              Contact Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>*/}

      {/* Success Stories */}
      <section className="success-section">
        <div className="business-storage-container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>How Dubai businesses grow with SafeStorage</p>
          </div>

          <div className="success-cards">
            <div className="success-card">
              <div className="success-header">
                <BarChart size={24} />
                <h3>E-commerce Startup</h3>
              </div>
              <p>"SafeStorage helped us scale from 10 to 500 orders per day without investing in expensive warehouse space."</p>
              <div className="success-stats">
                <div className="stat-item">
                  <span className="stat-number">70%</span>
                  <span className="stat-text">Cost Savings</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5x</span>
                  <span className="stat-text">Business Growth</span>
                </div>
              </div>
            </div>

            <div className="success-card">
              <div className="success-header">
                <Building size={24} />
                <h3>Construction Company</h3>
              </div>
              <p>"Flexible storage for our equipment and materials across multiple project sites in Dubai."</p>
              <div className="success-stats">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-text">Access</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-text">Locations</span>
                </div>
              </div>
            </div>

            <div className="success-card">
              <div className="success-header">
                <FileText size={24} />
                <h3>Legal Firm</h3>
              </div>
              <p>"Secure document archiving with easy retrieval system. Perfect for compliance requirements."</p>
              <div className="success-stats">
                <div className="stat-item">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-text">Documents</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-text">Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <UAE4steps />
     {/* <section className="process-section">
        <div className="business-storage-container">
          <div className="section-header">
            <h2>Get Started in 3 Steps</h2>
            <p>Quick and easy setup for your business</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <Phone size={30} />
              <h3>Consultation</h3>
              <p>Discuss your requirements with our business experts</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">2</div>
              <Settings size={30} />
              <h3>Customization</h3>
              <p>We design a solution tailored to your needs</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">3</div>
              <Zap size={30} />
              <h3>Move In</h3>
              <p>Start using your storage immediately</p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="business-cta-section">
        <div className="business-storage-container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Business Storage?</h2>
            <p style= {{ color:'white' }}>Join 2000+ Dubai businesses already benefiting from our solutions</p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>No setup fees</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Flexible contracts</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Immediate availability</span>
              </div>
            </div>

            <div className="cta-actions">
              <a href='tel:+97150577338'>
              <button className="cta-btn-primary">
                <Phone size={18} />
                Call Business Team
              </button></a>

              
            </div>

           
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEBusinessStoragePage;