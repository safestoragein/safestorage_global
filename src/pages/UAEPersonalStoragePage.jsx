import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Home, Box, Shield, Clock, Package, Sofa,
  CheckCircle, ArrowRight, Star, Users, Award,
  Bike, Baby, Music, Camera, Briefcase, Phone
} from 'lucide-react';
import '../components/uae/UAEPersonalStoragePage.css';

const UAEPersonalStoragePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('household');

  const storageCategories = [
    {
      id: 'household',
      icon: <Home size={24} />,
      title: 'Household Items',
      items: ['Furniture', 'Appliances', 'Decorations', 'Seasonal items']
    },
    {
      id: 'sports',
      icon: <Bike size={24} />,
      title: 'Sports & Hobbies',
      items: ['Bicycles', 'Golf clubs', 'Camping gear', 'Water sports']
    },
    {
      id: 'baby',
      icon: <Baby size={24} />,
      title: 'Baby & Kids',
      items: ['Cribs', 'Strollers', 'Toys', 'Baby furniture']
    },
    {
      id: 'collections',
      icon: <Music size={24} />,
      title: 'Collections',
      items: ['Vinyl records', 'Books', 'Artwork', 'Memorabilia']
    }
  ];

  const unitSizes = [
    {
      size: '10 sq ft',
      name: 'Locker',
      ideal: 'Few boxes, seasonal items',
      price: 'Contact for pricing',
      popular: false
    },
    {
      size: '25 sq ft',
      name: 'Small',
      ideal: 'Studio apartment contents',
      price: 'Contact for pricing',
      popular: false
    },
    {
      size: '50 sq ft',
      name: 'Medium',
      ideal: '1-bedroom apartment',
      price: 'Contact for pricing',
      popular: true
    },
    {
      size: '100 sq ft',
      name: 'Large',
      ideal: '2-bedroom apartment',
      price: 'Contact for pricing',
      popular: false
    },
    {
      size: '200 sq ft',
      name: 'Extra Large',
      ideal: '3+ bedroom villa',
      price: 'Contact for pricing',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield />,
      title: '24/7 Security',
      description: 'CCTV monitoring, individual alarms, secure access'
    },
    {
      icon: <Clock />,
      title: 'Flexible Access',
      description: 'Access your unit anytime with personal access code'
    },
    {
      icon: <Package />,
      title: 'Free Moving Help',
      description: 'Complimentary trolleys and packing materials'
    },
    {
      icon: <Award />,
      title: 'Climate Controlled',
      description: 'Temperature and humidity controlled environment'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Perfect for storing my furniture during renovation. Clean, secure, and easy access!',
      location: 'Dubai Marina'
    },
    {
      name: 'Ahmed Ali',
      rating: 5,
      text: 'Great service! Stored my belongings for 6 months while traveling. Everything was in perfect condition.',
      location: 'Business Bay'
    },
    {
      name: 'Lisa Chen',
      rating: 5,
      text: 'The climate control is excellent for my art collection. Highly recommended!',
      location: 'JLT'
    }
  ];

  return (
    <div className="uae-personal-storage-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="personal-hero-section">
        <div className="personal-container">
          <div className="personal-hero-content">
            <div className="hero-badge">
              <Home size={16} />
              <span>Personal Storage Solutions</span>
            </div>
            <h1>Personal Storage Units in <span className="text-highlight">Dubai</span></h1>
            <p>Secure, affordable storage for all your personal belongings. From a few boxes to entire home contents.</p>
            
            <div className="hero-features" style={{ color:'white' }}>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span className="text-highlight">Affordable monthly rates</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span className="text-highlight">No long-term contracts</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span className="text-highlight">Free insurance included</span>
              </div>
            </div>

            <div className="hero-cta">
              <button className="btn-primary">
                <Phone size={18} />
                Call +971 50 577 3388
              </button>
              <button className="btn-secondary">
                View Unit Sizes
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="trust-indicators">
              <div className="indicator">
                <Users size={20} />
                <span>5,000+ Happy Customers</span>
              </div>
              <div className="indicator">
                <Star size={20} />
                <span>4.9/5 Google Rating</span>
              </div>
              <div className="indicator">
                <Award size={20} />
                <span>Most Trusted Storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Can You Store Section */}
      {/*<section className="storage-categories-section">
        <div className="personal-container">
          <div className="section-header">
            <h2>What Can You Store?</h2>
            <p>We provide secure storage for all your personal belongings</p>
          </div>

          <div className="categories-tabs">
            {storageCategories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          <div className="category-content">
            {storageCategories.map(category => (
              <div
                key={category.id}
                className={`category-detail ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <div className="items-grid">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="item-card">
                      <CheckCircle size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="storage-note">
            <p>✨ Special handling available for fragile and valuable items</p>
          </div>
        </div>
      </section>*/}

      {/* Unit Sizes Section */}
     {/* <section className="unit-sizes-section">
        <div className="personal-container">
          <div className="section-header">
            <h2>Choose Your Perfect Storage Unit</h2>
            <p>Flexible sizes to match your needs and budget</p>
          </div>

          <div className="units-grid">
            {unitSizes.map((unit, idx) => (
              <div key={idx} className={`unit-card ${unit.popular ? 'popular' : ''}`}>
                {unit.popular && <div className="popular-badge">Most Popular</div>}
                <div className="unit-header">
                  <h3>{unit.name}</h3>
                  <span className="unit-size">{unit.size}</span>
                </div>
                <div className="unit-ideal">
                  <Package size={18} />
                  <span>{unit.ideal}</span>
                </div>
                <div className="unit-price">
                  <span className="price">{unit.price}</span>
                  <span className="period">/month</span>
                </div>
                <button className="unit-select-btn">
                  Select This Unit
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="size-help">
            <p>Not sure what size you need? <a href="#">Use our size calculator</a> or <a href="#">talk to our experts</a></p>
          </div>
        </div>
      </section>*/}

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="personal-container">
          <div className="section-header">
            <h2>Why Choose SafeStorage for Personal Storage?</h2>
            <p>Experience the best storage service in Dubai</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="personal-container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Get your storage unit in 4 simple steps</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Phone size={30} />
              </div>
              <h3>Book Your Unit</h3>
              <p>Call us or book online. Get instant confirmation.</p>
            </div>

            <div className="step-connector">→</div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Box size={30} />
              </div>
              <h3>Packing and Pickup</h3>
              <p>We pack your items and pick your items from your doorstep.</p>
            </div>

            <div className="step-connector">→</div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Shield size={30} />
              </div>
              <h3>Storing In Warehouse</h3>
              <p>We store your items in our secured Warehouses.</p>
            </div>

              <div className="step-connector">→</div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon">
                <Shield size={30} />
              </div>
              <h3>Doorstep Delivery</h3>
              <p>We return your items back whenever you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="personal-container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Join thousands of satisfied customers in Dubai</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#ff6b35" color="#ff6b35" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="offers-section">
        <div className="personal-container">
          <div className="offer-card">
            <div className="offer-content">
              <h2>Limited Time Offer!</h2>
              <p className="offer-highlight">First Month 50% OFF</p>
              <p>Plus free moving van for new customers</p>
              <ul className="offer-features">
                <li><CheckCircle size={18} /> No setup fees</li>
                <li><CheckCircle size={18} /> Free padlock</li>
                <li><CheckCircle size={18} /> Free insurance</li>
              </ul>
            </div>
            <div className="offer-cta">
              <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
              <button className="claim-offer-btn">
                Claim This Offer
                <ArrowRight size={18} />
              </button>
            </a>
              <p className="offer-note">*Terms and conditions apply</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="personal-container">
          <div className="cta-content">
            <h2>Ready to Store Your Belongings?</h2>
            <p style={{ color:'white' }}>Get started today with Dubai's most trusted storage provider</p>
            <div className="cta-buttons">
              <a href="tel:+97150577338">
              <button className="cta-btn primary">
                <Phone size={18} />
                Call Now
              </button>
            </a>
              <a href="/uae/get-quote" className="cta-btn secondary">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEPersonalStoragePage;