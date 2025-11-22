import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Calculator, Check, X, TrendingUp, Shield, Clock,
  Package, Home, Building, Car, Archive, Maximize,
  ChevronRight, Star, Phone, MessageCircle, Gift,
  Percent, Calendar, CreditCard, Award, Info
} from 'lucide-react';
import '../components/uae/UAEPricingPage.css';

const UAEPricingPage = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [duration, setDuration] = useState(3);
  const [addOns, setAddOns] = useState({
    insurance: false,
    climate: true,
    pickup: false,
    packing: false
  });

  // Pricing data
  const unitSizes = [
    {
      id: 'locker',
      name: 'Locker',
      size: '1 m²',
      dimensions: '1m x 1m x 2m',
      price: 99,
      originalPrice: 150,
      icon: <Archive size={40} />,
      idealFor: 'Boxes, files, small items',
      fits: '5-10 boxes',
      popular: false
    },
    {
      id: 'small',
      name: 'Small',
      size: '2-5 m²',
      dimensions: '2m x 2.5m x 2.5m',
      price: 199,
      originalPrice: 299,
      icon: <Package size={40} />,
      idealFor: 'Studio contents, seasonal items',
      fits: '1 room furniture',
      popular: false
    },
    {
      id: 'medium',
      name: 'Medium',
      size: '6-10 m²',
      dimensions: '3m x 3m x 2.5m',
      price: 349,
      originalPrice: 499,
      icon: <Home size={40} />,
      idealFor: '1-2 bedroom apartment',
      fits: '50-75 boxes + furniture',
      popular: true
    },
    {
      id: 'large',
      name: 'Large',
      size: '11-20 m²',
      dimensions: '4m x 5m x 2.5m',
      price: 599,
      originalPrice: 849,
      icon: <Building size={40} />,
      idealFor: '2-3 bedroom home',
      fits: '100+ boxes + furniture',
      popular: false
    },
    {
      id: 'xlarge',
      name: 'Extra Large',
      size: '20+ m²',
      dimensions: '5m x 6m x 3m',
      price: 899,
      originalPrice: 1299,
      icon: <Maximize size={40} />,
      idealFor: 'Villa, commercial storage',
      fits: 'Full house + garage',
      popular: false
    },
    {
      id: 'vehicle',
      name: 'Vehicle',
      size: 'Varies',
      dimensions: 'Indoor/Outdoor',
      price: 450,
      originalPrice: 650,
      icon: <Car size={40} />,
      idealFor: 'Cars, boats, RVs',
      fits: 'Various vehicles',
      popular: false
    }
  ];

  const addOnServices = [
    {
      id: 'insurance',
      name: 'Storage Insurance',
      price: 25,
      description: 'Comprehensive coverage up to AED 50,000'
    },
    {
      id: 'climate',
      name: 'Climate Control',
      price: 0,
      description: 'Temperature & humidity controlled (FREE)',
      included: true
    },
    {
      id: 'pickup',
      name: 'Free Pickup Service',
      price: 0,
      description: 'We pick up your items (FREE for 3+ months)'
    },
    {
      id: 'packing',
      name: 'Packing Supplies',
      price: 75,
      description: 'Boxes, tape, bubble wrap delivered'
    }
  ];

  const discounts = [
    { months: 1, discount: 0 },
    { months: 3, discount: 10 },
    { months: 6, discount: 20 },
    { months: 12, discount: 30 }
  ];

  const getDiscountRate = () => {
    const tier = discounts.find(d => duration >= d.months);
    return tier ? tier.discount : 0;
  };

  const calculateTotal = () => {
    const unit = unitSizes.find(u => u.id === selectedSize);
    if (!unit) return 0;

    let basePrice = unit.price;
    
    // Add add-ons
    Object.keys(addOns).forEach(key => {
      if (addOns[key]) {
        const addon = addOnServices.find(a => a.id === key);
        if (addon && !addon.included) {
          basePrice += addon.price;
        }
      }
    });

    // Apply duration discount
    const discountRate = getDiscountRate();
    const discountedPrice = basePrice * (1 - discountRate / 100);
    
    return {
      monthly: discountedPrice,
      total: discountedPrice * duration,
      savings: (unit.originalPrice - discountedPrice) * duration,
      discountRate
    };
  };

  const pricing = calculateTotal();

  return (
    <div className="uae-pricing-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="pricing-hero-section">
        <div className="pricing-container">
          <div className="pricing-hero-content">
            <div className="hero-badge-pricing">
              <Gift size={16} />
              <span>Limited Time Offer</span>
            </div>
            <h1>Transparent Pricing, <span className="highlight-text">No Hidden Fees</span></h1>
            <p>Save up to 30% with long-term storage. All prices include VAT.</p>
            
            <div className="hero-features-pricing">
              <div className="feature-item-pricing">
                <Check size={20} />
                <span>Free Move-in Truck</span>
              </div>
              <div className="feature-item-pricing">
                <Check size={20} />
                <span>No Security Deposit</span>
              </div>
              <div className="feature-item-pricing">
                <Check size={20} />
                <span>Cancel Anytime</span>
              </div>
              <div className="feature-item-pricing">
                <Check size={20} />
                <span>Price Match Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="calculator-section">
        <div className="pricing-container">
          <div className="calculator-header">
            <h2>Storage Unit Pricing Calculator</h2>
            <p>Choose your unit size and duration to see instant pricing</p>
          </div>

          <div className="calculator-grid">
            {/* Unit Selection */}
            <div className="unit-selection">
              <h3>1. Select Unit Size</h3>
              <div className="units-grid">
                {unitSizes.map(unit => (
                  <div
                    key={unit.id}
                    className={`unit-card-pricing ${selectedSize === unit.id ? 'selected' : ''} ${unit.popular ? 'popular' : ''}`}
                    onClick={() => setSelectedSize(unit.id)}
                  >
                    {unit.popular && <span className="popular-badge">Most Popular</span>}
                    <div className="unit-icon-pricing">{unit.icon}</div>
                    <h4>{unit.name}</h4>
                    <p className="unit-size">{unit.size}</p>
                    <p className="unit-dims">{unit.dimensions}</p>
                    <div className="unit-price-pricing">
                      <span className="price-from">From</span>
                      <span className="price-amount">AED {unit.price}</span>
                      <span className="price-period">/month</span>
                      <span className="original-price">AED {unit.originalPrice}</span>
                    </div>
                    <p className="unit-ideal">{unit.idealFor}</p>
                    <p className="unit-fits">{unit.fits}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration & Add-ons */}
            <div className="options-panel">
              <div className="duration-section">
                <h3>2. Select Duration</h3>
                <div className="duration-slider">
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="slider"
                  />
                  <div className="duration-labels">
                    <span>1 mo</span>
                    <span>3 mo</span>
                    <span>6 mo</span>
                    <span>12 mo</span>
                  </div>
                  <div className="duration-display">
                    <span className="duration-number">{duration}</span>
                    <span className="duration-text">Month{duration > 1 ? 's' : ''}</span>
                    {getDiscountRate() > 0 && (
                      <span className="discount-chip">
                        <Percent size={14} />
                        {getDiscountRate()}% OFF
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="addons-section">
                <h3>3. Add-on Services</h3>
                <div className="addons-list">
                  {addOnServices.map(addon => (
                    <label key={addon.id} className="addon-item">
                      <input
                        type="checkbox"
                        checked={addOns[addon.id]}
                        onChange={(e) => setAddOns({...addOns, [addon.id]: e.target.checked})}
                        disabled={addon.included}
                      />
                      <div className="addon-details">
                        <div className="addon-header">
                          <span className="addon-name">{addon.name}</span>
                          {addon.included ? (
                            <span className="addon-included">INCLUDED</span>
                          ) : (
                            <span className="addon-price">+AED {addon.price}/mo</span>
                          )}
                        </div>
                        <p className="addon-desc">{addon.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="price-summary">
                <h3>Your Quote</h3>
                <div className="summary-card">
                  <div className="summary-row">
                    <span>Monthly Rate:</span>
                    <span className="price">AED {pricing.monthly.toFixed(0)}</span>
                  </div>
                  {pricing.discountRate > 0 && (
                    <div className="summary-row discount">
                      <span>Discount Applied:</span>
                      <span className="discount-amount">-{pricing.discountRate}%</span>
                    </div>
                  )}
                  <div className="summary-row">
                    <span>Duration:</span>
                    <span>{duration} month{duration > 1 ? 's' : ''}</span>
                  </div>
                  <div className="summary-divider"></div>
                  <div className="summary-row total">
                    <span>Total Amount:</span>
                    <span className="total-price">AED {pricing.total.toFixed(0)}</span>
                  </div>
                  <div className="summary-row savings">
                    <span>You Save:</span>
                    <span className="savings-amount">AED {pricing.savings.toFixed(0)}</span>
                  </div>
                  
                  <div className="summary-actions">
                    <button className="btn-book-now">
                      <Calendar size={18} />
                      Book This Unit
                    </button>
                    <button className="btn-contact-pricing">
                      <Phone size={18} />
                      Call for Deal
                    </button>
                  </div>

                  <div className="summary-features">
                    <div className="feature-check">
                      <Check size={16} />
                      <span>Free cancellation</span>
                    </div>
                    <div className="feature-check">
                      <Check size={16} />
                      <span>No hidden fees</span>
                    </div>
                    <div className="feature-check">
                      <Check size={16} />
                      <span>Move-in today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="comparison-section">
        <div className="pricing-container">
          <div className="comparison-header">
            <h2>Compare All Unit Sizes</h2>
            <p>Find the perfect size for your storage needs</p>
          </div>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Unit Size</th>
                  <th>Dimensions</th>
                  <th>Ideal For</th>
                  <th>Monthly Rate</th>
                  <th>Features</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {unitSizes.map(unit => (
                  <tr key={unit.id}>
                    <td>
                      <div className="size-cell">
                        <strong>{unit.name}</strong>
                        <span>{unit.size}</span>
                      </div>
                    </td>
                    <td>{unit.dimensions}</td>
                    <td>{unit.idealFor}</td>
                    <td>
                      <div className="price-cell">
                        <span className="current-price">AED {unit.price}</span>
                        <span className="crossed-price">AED {unit.originalPrice}</span>
                      </div>
                    </td>
                    <td>
                      <div className="features-cell">
                        <span className="feature-tag">24/7 Access</span>
                        <span className="feature-tag">Climate Control</span>
                        <span className="feature-tag">Security</span>
                      </div>
                    </td>
                    <td>
                      <button className="btn-select-unit">
                        Select
                        <ChevronRight size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-mobile">
            {unitSizes.map(unit => (
              <div key={unit.id} className="comparison-card-mobile">
                <div className="card-header-mobile">
                  <h4>{unit.name}</h4>
                  <span className="size-badge">{unit.size}</span>
                </div>
                <div className="card-body-mobile">
                  <div className="info-row">
                    <span>Dimensions:</span>
                    <strong>{unit.dimensions}</strong>
                  </div>
                  <div className="info-row">
                    <span>Ideal For:</span>
                    <strong>{unit.idealFor}</strong>
                  </div>
                  <div className="info-row">
                    <span>Monthly Rate:</span>
                    <div className="price-mobile">
                      <strong>AED {unit.price}</strong>
                      <span className="original">AED {unit.originalPrice}</span>
                    </div>
                  </div>
                </div>
                <button className="btn-select-mobile">Select This Unit</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="offers-section">
        <div className="pricing-container">
          <div className="offers-header">
            <h2>Limited Time Offers</h2>
            <p>Save more with our special promotions</p>
          </div>

          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-badge">New Customer</div>
              <h3>50% Off First Month</h3>
              <p>Get half off your first month's rent for any unit size</p>
              <ul>
                <li><Check size={16} /> Valid for new customers</li>
                <li><Check size={16} /> All unit sizes included</li>
                <li><Check size={16} /> No minimum commitment</li>
              </ul>
              <button className="btn-claim-offer">
                Claim Offer
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="offer-card featured">
              <div className="offer-badge">Best Value</div>
              <h3>Pay 10, Get 12 Months</h3>
              <p>Book for a year and get 2 months absolutely FREE</p>
              <ul>
                <li><Check size={16} /> Save AED 800+</li>
                <li><Check size={16} /> Free moving truck</li>
                <li><Check size={16} /> Priority support</li>
              </ul>
              <button className="btn-claim-offer">
                Get This Deal
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="offer-card">
              <div className="offer-badge">Business</div>
              <h3>Corporate Discounts</h3>
              <p>Special rates for businesses storing 3+ units</p>
              <ul>
                <li><Check size={16} /> Up to 40% discount</li>
                <li><Check size={16} /> Flexible payment terms</li>
                <li><Check size={16} /> Dedicated account manager</li>
              </ul>
              <button className="btn-claim-offer">
                Contact Sales
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="included-section">
        <div className="pricing-container">
          <div className="included-header">
            <h2>What's Included in Every Unit</h2>
            <p>Premium features at no extra cost</p>
          </div>

          <div className="included-grid">
            <div className="included-item">
              <Shield size={32} />
              <h4>Advanced Security</h4>
              <p>24/7 CCTV, individual alarms, and biometric access</p>
            </div>
            <div className="included-item">
              <Clock size={32} />
              <h4>24/7 Access</h4>
              <p>Access your unit anytime with your personal code</p>
            </div>
            <div className="included-item">
              <Package size={32} />
              <h4>Free Moving Truck</h4>
              <p>2 hours free truck use for units 10m² and above</p>
            </div>
            <div className="included-item">
              <CreditCard size={32} />
              <h4>Flexible Payment</h4>
              <p>Monthly billing, no long-term contracts required</p>
            </div>
            <div className="included-item">
              <Award size={32} />
              <h4>Best Price Guarantee</h4>
              <p>We'll match any competitor's written quote</p>
            </div>
            <div className="included-item">
              <MessageCircle size={32} />
              <h4>Expert Support</h4>
              <p>24/7 customer service via phone, chat, or WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section">
        <div className="pricing-container">
          <div className="pricing-cta-content">
            <h2>Ready to Save on Storage?</h2>
            <p>Join 1 Lakh+ satisfied customers across Dubai</p>
            <div className="cta-buttons-pricing">
              <button className="btn-primary-pricing">
                <Calculator size={18} />
                Calculate My Price
              </button>
              <button className="btn-secondary-pricing">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </button>
            </div>
            <div className="trust-indicators">
              <div className="indicator">
                <Star size={16} />
                <span>4.8/5 Rating</span>
              </div>
              <div className="indicator">
                <Shield size={16} />
                <span>100% Secure</span>
              </div>
              <div className="indicator">
                <TrendingUp size={16} />
                <span>Best Prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEPricingPage;