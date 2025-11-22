import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Calculator, Package, MapPin, Calendar, Clock, 
  DollarSign, CheckCircle, Star, ArrowRight, Phone,
  Mail, MessageCircle, Shield, Award, Zap, Users,
  Building, Home, FileText, Car, Truck
} from 'lucide-react';
import '../components/uae/UAEGetQuotePage.css';

const UAEGetQuotePage = () => {
  const [formData, setFormData] = useState({
    storageType: '',
    unitSize: '',
    duration: '1',
    location: '',
    accessFrequency: '',
    moveInDate: '',
    fullName: '',
    email: '',
    phone: '',
    additionalServices: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const storageTypes = [
    { id: 'personal', name: 'Personal Storage', icon: <Home />, desc: 'Household items, furniture, personal belongings' },
    { id: 'business', name: 'Business Storage', icon: <Building />, desc: 'Inventory, documents, office equipment' },
    { id: 'vehicle', name: 'Vehicle Storage', icon: <Car />, desc: 'Cars, motorcycles, boats' },
    { id: 'document', name: 'Document Storage', icon: <FileText />, desc: 'Important documents and files' }
  ];

  const unitSizes = [
    { id: 'small', name: 'Small (10-25 sq ft)', price: 99, desc: 'Perfect for boxes, small furniture' },
    { id: 'medium', name: 'Medium (50-75 sq ft)', price: 199, desc: '1-bedroom apartment contents' },
    { id: 'large', name: 'Large (100-150 sq ft)', price: 349, desc: '2-bedroom apartment contents' },
    { id: 'xlarge', name: 'Extra Large (200+ sq ft)', price: 599, desc: '3+ bedroom house contents' }
  ];

  const locations = [
    'Business Bay', 'Dubai Marina', 'JLT', 'Al Quoz', 'DIFC', 'Downtown Dubai'
  ];

  const additionalServices = [
    { id: 'packing', name: 'Packing Service', price: 150 },
    { id: 'moving', name: 'Moving Service', price: 300 },
    { id: 'insurance', name: 'Premium Insurance', price: 50 },
    { id: 'climate', name: 'Climate Control', price: 100 }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        additionalServices: checked 
          ? [...prev.additionalServices, value]
          : prev.additionalServices.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const calculatePrice = () => {
    const basePrice = unitSizes.find(size => size.id === formData.unitSize)?.price || 0;
    const duration = parseInt(formData.duration);
    const durationDiscount = duration >= 12 ? 0.2 : duration >= 6 ? 0.1 : 0;
    
    const servicesPrice = formData.additionalServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    const monthlyPrice = basePrice + servicesPrice;
    const discountedPrice = monthlyPrice * (1 - durationDiscount);
    const totalPrice = discountedPrice * duration;

    setCalculatedPrice({
      monthly: discountedPrice,
      total: totalPrice,
      savings: (monthlyPrice - discountedPrice) * duration,
      duration
    });
  };

  const nextStep = () => {
    if (currentStep === 2) {
      calculatePrice();
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const benefits = [
    { icon: <Shield />, title: 'Secure Storage', desc: 'CCTV & alarm systems' },
    { icon: <Clock />, title: '24/7 Access', desc: 'Access anytime you need' },
    { icon: <Award />, title: 'SIRA Certified', desc: 'Officially approved facilities' },
    { icon: <Users />, title: 'Expert Support', desc: 'Dedicated customer service' }
  ];

  return (
    <div className="uae-get-quote-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="quote-hero-section">
        <div className="quote-container">
          <div className="quote-hero-content">
            <div className="hero-badge">
              <Calculator size={16} />
              <span>Instant Quote Calculator</span>
            </div>
            <h1>Get Your <span className="text-highlight">Instant Quote</span></h1>
            <p>Calculate your storage costs in 3 simple steps and get started today</p>
            
            <div className="hero-features">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Instant Pricing</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>No Hidden Fees</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Best Price Guarantee</span>
              </div>
            </div>

            <div className="trust-indicators">
              <div className="trust-item">
                <Star size={18} fill="#ff6b35" color="#ff6b35" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="trust-item">
                <Users size={18} />
                <span>10,000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="quote-form-section">
        <div className="quote-container">
          <div className="form-wrapper">
            {/* Progress Indicator */}
            <div className="progress-indicator">
              <div className="progress-steps">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''}`}>
                    <div className="step-number">{step}</div>
                    <div className="step-label">
                      {step === 1 && 'Storage Type'}
                      {step === 2 && 'Preferences'}
                      {step === 3 && 'Quote Result'}
                      {step === 4 && 'Contact Info'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentStep - 1) * 33.33}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Storage Type */}
            {currentStep === 1 && (
              <div className="form-step active">
                <div className="step-header">
                  <h2>What do you need to store?</h2>
                  <p>Select the type of storage that best fits your needs</p>
                </div>
                
                <div className="storage-types-grid">
                  {storageTypes.map((type) => (
                    <div 
                      key={type.id}
                      className={`storage-type-card ${formData.storageType === type.id ? 'selected' : ''}`}
                      onClick={() => setFormData({...formData, storageType: type.id})}
                    >
                      <div className="type-icon">{type.icon}</div>
                      <h3>{type.name}</h3>
                      <p>{type.desc}</p>
                      <div className="selection-indicator">
                        <CheckCircle size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Preferences */}
            {currentStep === 2 && (
              <div className="form-step active">
                <div className="step-header">
                  <h2>Tell us about your storage needs</h2>
                  <p>Help us calculate the perfect storage solution for you</p>
                </div>
                
                <div className="preferences-form">
                  <div className="form-group">
                    <label>Unit Size</label>
                    <div className="unit-sizes-grid">
                      {unitSizes.map((size) => (
                        <div 
                          key={size.id}
                          className={`unit-size-card ${formData.unitSize === size.id ? 'selected' : ''}`}
                          onClick={() => setFormData({...formData, unitSize: size.id})}
                        >
                          <div className="size-info">
                            <h4>{size.name}</h4>
                            <p>{size.desc}</p>
                          </div>
                          <div className="size-price">AED {size.price}/mo</div>
                          <div className="selection-indicator">
                            <CheckCircle size={16} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Storage Duration</label>
                      <select 
                        name="duration" 
                        value={formData.duration}
                        onChange={handleInputChange}
                      >
                        <option value="1">1 Month</option>
                        <option value="3">3 Months (5% off)</option>
                        <option value="6">6 Months (10% off)</option>
                        <option value="12">12 Months (20% off)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Preferred Location</label>
                      <select 
                        name="location" 
                        value={formData.location}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Location</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Additional Services</label>
                    <div className="services-grid">
                      {additionalServices.map((service) => (
                        <label key={service.id} className="service-checkbox">
                          <input 
                            type="checkbox" 
                            value={service.id}
                            checked={formData.additionalServices.includes(service.id)}
                            onChange={handleInputChange}
                          />
                          <div className="checkbox-content">
                            <span className="service-name">{service.name}</span>
                            <span className="service-price">+AED {service.price}</span>
                          </div>
                          <CheckCircle size={18} className="check-icon" />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Quote Result */}
            {currentStep === 3 && calculatedPrice && (
              <div className="form-step active">
                <div className="quote-result">
                  <div className="result-header">
                    <div className="success-icon">
                      <CheckCircle size={60} />
                    </div>
                    <h2>Your Instant Quote is Ready!</h2>
                    <p>Here's your personalized storage solution</p>
                  </div>

                  <div className="price-breakdown">
                    <div className="price-card main-price">
                      <h3>Monthly Cost</h3>
                      <div className="price-amount">
                        <span className="currency">AED</span>
                        <span className="amount">{calculatedPrice.monthly.toFixed(0)}</span>
                        <span className="period">/month</span>
                      </div>
                    </div>

                    <div className="price-details">
                      <div className="detail-item">
                        <span>Duration:</span>
                        <span>{calculatedPrice.duration} months</span>
                      </div>
                      <div className="detail-item">
                        <span>Total Cost:</span>
                        <span>AED {calculatedPrice.total.toFixed(0)}</span>
                      </div>
                      {calculatedPrice.savings > 0 && (
                        <div className="detail-item savings">
                          <span>You Save:</span>
                          <span>AED {calculatedPrice.savings.toFixed(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="quote-includes">
                    <h4>Your quote includes:</h4>
                    <div className="includes-grid">
                      <div className="include-item">
                        <CheckCircle size={16} />
                        <span>24/7 Access</span>
                      </div>
                      <div className="include-item">
                        <CheckCircle size={16} />
                        <span>Free Insurance (up to AED 10,000)</span>
                      </div>
                      <div className="include-item">
                        <CheckCircle size={16} />
                        <span>Security Monitoring</span>
                      </div>
                      <div className="include-item">
                        <CheckCircle size={16} />
                        <span>Free Trolley & Moving Equipment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 4 && (
              <div className="form-step active">
                <div className="step-header">
                  <h2>Almost Done! Let's Connect</h2>
                  <p>Get your official quote and book your storage unit</p>
                </div>
                
                <div className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 XX XXX XXXX"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Preferred Move-in Date</label>
                      <input 
                        type="date" 
                        name="moveInDate"
                        value={formData.moveInDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="contact-options">
                    <h4>How would you like us to contact you?</h4>
                    <div className="contact-methods">
                      <button className="contact-method-btn">
                        <Phone size={20} />
                        <span>Call Me</span>
                      </button>
                      <button className="contact-method-btn">
                        <Mail size={20} />
                        <span>Email Me</span>
                      </button>
                      <button className="contact-method-btn whatsapp">
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button className="btn-secondary" onClick={prevStep}>
                  Previous Step
                </button>
              )}
              
              <div className="nav-spacer"></div>
              
              {currentStep < 4 ? (
                <button 
                  className="btn-primary"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData.storageType) ||
                    (currentStep === 2 && (!formData.unitSize || !formData.location))
                  }
                >
                  {currentStep === 2 ? 'Calculate Quote' : 'Continue'}
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button className="btn-primary submit-btn">
                  <Zap size={18} />
                  Get My Official Quote
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="quote-benefits-section">
        <div className="quote-container">
          <div className="section-header">
            <h2>Why Choose SafeStorage Dubai?</h2>
            <p>Join thousands of satisfied customers</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="quote-cta-section">
        <div className="quote-container">
          <div className="cta-content">
            <h2>Need Help? We're Here for You!</h2>
            <p>Our storage experts are available 24/7 to assist you</p>
            <div className="cta-buttons">
              <a href="tel:+971505773388" className="cta-btn primary">
                <Phone size={18} />
                Call +971 50 577 3388
              </a>
              <a href="https://wa.me/971505773388" className="cta-btn whatsapp">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEGetQuotePage;