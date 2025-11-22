import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Building, Package, Archive, Truck, Shield, Clock,
  TrendingUp, Users, FileText, DollarSign, Key, Camera,
  Phone, Mail, MessageCircle, ChevronRight, Check, Star,
  Award, Zap, Globe, BarChart, Database, Settings
} from 'lucide-react';
import '../components/uae/UAEBusinessPage.css';

const UAEBusinessPage = () => {
  const [selectedService, setSelectedService] = useState('inventory');

  const businessServices = [
    {
      id: 'inventory',
      icon: <Package size={40} />,
      title: 'Inventory Storage',
      description: 'Secure storage for your business stock and supplies',
      features: [
        'Flexible space from 10-500 m²',
        'Inventory management system',
        'Delivery acceptance service',
        '24/7 access for authorized staff'
      ]
    },
    {
      id: 'documents',
      icon: <FileText size={40} />,
      title: 'Document Archiving',
      description: 'Climate-controlled storage for business records',
      features: [
        'Organized filing systems',
        'Digital cataloging available',
        'Retrieval services',
        'Compliance with UAE regulations'
      ]
    },
    {
      id: 'ecommerce',
      icon: <Globe size={40} />,
      title: 'E-commerce Fulfillment',
      description: 'Complete storage and logistics for online businesses',
      features: [
        'Pick and pack services',
        'Same-day dispatch',
        'Returns processing',
        'Integration with platforms'
      ]
    },
    {
      id: 'office',
      icon: <Building size={40} />,
      title: 'Office Storage',
      description: 'Extra space for office furniture and equipment',
      features: [
        'Furniture storage during moves',
        'IT equipment security',
        'Seasonal decoration storage',
        'Office supplies bulk storage'
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign />,
      title: 'Cost Effective',
      description: 'Save up to 70% compared to commercial rent'
    },
    {
      icon: <Shield />,
      title: 'Maximum Security',
      description: '24/7 CCTV, biometric access, individual alarms'
    },
    {
      icon: <Clock />,
      title: 'Flexible Terms',
      description: 'Month-to-month contracts, no long commitments'
    },
    {
      icon: <TrendingUp />,
      title: 'Scalable Space',
      description: 'Easily upgrade or downsize as needed'
    },
    {
      icon: <Users />,
      title: 'Multi-User Access',
      description: 'Authorize multiple staff members'
    },
    {
      icon: <Zap />,
      title: 'Quick Setup',
      description: 'Move in same day, instant activation'
    }
  ];

  const industries = [
    { name: 'Retail & E-commerce', icon: '🛍️', companies: '500+' },
    { name: 'Healthcare & Pharma', icon: '⚕️', companies: '200+' },
    { name: 'Construction', icon: '🏗️', companies: '300+' },
    { name: 'Legal & Finance', icon: '⚖️', companies: '150+' },
    { name: 'Import/Export', icon: '📦', companies: '400+' },
    { name: 'IT & Technology', icon: '💻', companies: '250+' }
  ];

  const testimonials = [
    {
      company: 'TechStart Dubai',
      person: 'Ahmed Hassan, CEO',
      text: 'SafeStorage has been instrumental in our growth. We started with a small unit and scaled up seamlessly as our inventory grew.',
      rating: 5,
      industry: 'E-commerce'
    },
    {
      company: 'Legal Partners LLC',
      person: 'Sarah Mitchell, Operations Manager',
      text: 'Perfect solution for our document archiving needs. The retrieval service saves us hours of work.',
      rating: 5,
      industry: 'Legal Services'
    },
    {
      company: 'Dubai Interiors',
      person: 'Raj Patel, Owner',
      text: 'We store client furniture between projects. The flexibility and security are unmatched.',
      rating: 5,
      industry: 'Interior Design'
    }
  ];

  return (
    <div className="uae-business-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="business-hero-section">
        <div className="business-container">
          <div className="business-hero-grid">
            <div className="business-hero-content">
              <div className="hero-badge-business">
                <Building size={16} />
                <span>Business Solutions</span>
              </div>
              <h1>Smart Storage Solutions for <span className="text-highlight">Dubai Businesses</span></h1>
              <p>From startups to enterprises, we provide flexible, secure, and cost-effective storage solutions that grow with your business.</p>
              
              <div className="hero-stats-business">
                <div className="stat-item-business">
                  <span className="stat-number">2,000+</span>
                  <span className="stat-label">Business Clients</span>
                </div>
                <div className="stat-item-business">
                  <span className="stat-number">50,000 m²</span>
                  <span className="stat-label">Storage Space</span>
                </div>
                <div className="stat-item-business">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>

              <div className="hero-cta-business">
                <button className="btn-primary-business">
                  <Phone size={18} />
                  Talk to Business Expert
                </button>
                <button className="btn-secondary-business">
                  <FileText size={18} />
                  Download Brochure
                </button>
              </div>

              <div className="trust-logos">
                <span>Trusted by:</span>
                <div className="logos-row">
                  <Award size={24} />
                  <span>SIRA Certified</span>
                  <span>•</span>
                  <span>ISO 9001</span>
                  <span>•</span>
                  <span>DED Licensed</span>
                </div>
              </div>
            </div>

            <div className="business-hero-visual">
              <div className="visual-stats-card">
                <div className="stats-header">
                  <BarChart size={24} />
                  <span>Business Growth</span>
                </div>
                <div className="growth-chart">
                  <div className="chart-bar" style={{height: '40%'}}></div>
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '100%'}}></div>
                </div>
                <p>Average 40% cost savings</p>
              </div>
              
              <div className="floating-benefits">
                <div className="benefit-card-float">
                  <Check size={16} />
                  <span>No Setup Fees</span>
                </div>
                <div className="benefit-card-float">
                  <Check size={16} />
                  <span>Flexible Contracts</span>
                </div>
                <div className="benefit-card-float">
                  <Check size={16} />
                  <span>24/7 Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="business-services-section">
        <div className="business-container">
          <div className="section-header-business">
            <h2>Storage Solutions for Every Business Need</h2>
            <p>Choose from our specialized business storage services</p>
          </div>

          <div className="services-tabs">
            {businessServices.map(service => (
              <button
                key={service.id}
                className={`service-tab ${selectedService === service.id ? 'active' : ''}`}
                onClick={() => setSelectedService(service.id)}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          <div className="services-content">
            {businessServices.map(service => (
              <div
                key={service.id}
                className={`service-detail ${selectedService === service.id ? 'active' : ''}`}
              >
                <div className="service-detail-grid">
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <Check size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="btn-learn-more">
                      Learn More
                      <ChevronRight size={18} />
                    </button>
                  </div>
                  <div className="service-visual">
                    <div className="visual-icon">
                      {service.icon}
                    </div>
                    <div className="service-stats">
                      <div className="stat">
                        <span className="stat-value">500+</span>
                        <span className="stat-desc">Businesses using this service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="business-benefits-section">
        <div className="business-container">
          <div className="section-header-business">
            <h2>Why Dubai Businesses Choose SafeStorage</h2>
            <p>Comprehensive benefits that help your business grow</p>
          </div>

          <div className="benefits-grid-business">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card-business">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="business-container">
          <div className="section-header-business">
            <h2>Industries We Serve</h2>
            <p>Specialized storage solutions for every sector</p>
          </div>

          <div className="industries-grid">
            {industries.map((industry, idx) => (
              <div key={idx} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <div className="industry-stats">
                  <span className="companies-count">{industry.companies}</span>
                  <span className="companies-label">Active Clients</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="business-process-section">
        <div className="business-container">
          <div className="section-header-business">
            <h2>Get Started in 3 Simple Steps</h2>
            <p>Quick and easy setup for your business storage</p>
          </div>

          <div className="process-steps-business">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon">
                <Phone size={30} />
              </div>
              <h3>Consultation</h3>
              <p>Discuss your requirements with our business storage experts</p>
            </div>

            <div className="process-connector">
              <ChevronRight size={24} />
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon">
                <Settings size={30} />
              </div>
              <h3>Customization</h3>
              <p>We tailor a solution specific to your business needs</p>
            </div>

            <div className="process-connector">
              <ChevronRight size={24} />
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon">
                <Key size={30} />
              </div>
              <h3>Move In</h3>
              <p>Get access codes and start using your storage immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="business-testimonials-section">
        <div className="business-container">
          <div className="section-header-business">
            <h2>What Our Business Clients Say</h2>
            <p>Success stories from Dubai businesses</p>
          </div>

          <div className="testimonials-grid-business">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card-business">
                <div className="testimonial-header">
                  <div className="rating-business">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#ff6b35" color="#ff6b35" />
                    ))}
                  </div>
                  <span className="industry-tag">{testimonial.industry}</span>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <div>
                    <strong>{testimonial.person}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="business-pricing-section">
        <div className="business-container">
          <div className="pricing-card-business">
            <div className="pricing-content">
              <h2>Transparent Business Pricing</h2>
              <p>No hidden fees, no surprises</p>
              
              <div className="pricing-features">
                <div className="pricing-feature">
                  <Check size={20} />
                  <span>Volume discounts available</span>
                </div>
                <div className="pricing-feature">
                  <Check size={20} />
                  <span>Custom payment terms</span>
                </div>
                <div className="pricing-feature">
                  <Check size={20} />
                  <span>Tax invoice provided</span>
                </div>
                <div className="pricing-feature">
                  <Check size={20} />
                  <span>Corporate rates</span>
                </div>
              </div>

              <div className="pricing-cta">
                <a href="/uae/get-quote" className="btn-get-quote">
                  Get a Free Quote
                  <ChevronRight size={18} />
                </a>
                <span className="pricing-note">Response within 2 hours</span>
              </div>
            </div>

            <div className="pricing-visual">
              <div className="price-card">
                <span className="price-label">Starting from</span>
                <span className="price-amount">AED 299</span>
                <span className="price-period">per month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="business-cta-section">
        <div className="business-container">
          <div className="cta-content-business">
            <h2>Ready to Optimize Your Business Storage?</h2>
            <p>Join 2,000+ Dubai businesses already saving with SafeStorage</p>
            
            <div className="cta-buttons-business">
              <button className="btn-primary-cta">
                <Phone size={18} />
                Call Business Team
              </button>
              <button className="btn-secondary-cta">
                <MessageCircle size={18} />
                WhatsApp Us
              </button>
              <button className="btn-tertiary-cta">
                <Mail size={18} />
                Email Inquiry
              </button>
            </div>

            <div className="contact-info-business">
              <span><Phone size={16} /> +971 50 577 3388</span>
              <span><Mail size={16} /> business@safestorage.ae</span>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEBusinessPage;