import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { Search, Filter, MapPin, Phone, Calculator, Shield, Package, Ruler, DollarSign, Clock, Award, Check, TrendingUp, Info, ChevronDown, Star, Zap, Lock, Thermometer, Camera, Truck, Key } from 'lucide-react';
import '../components/uae/UAEStorageUnits.css';

const UAEStorageUnitsPage = () => {
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [activeTab, setActiveTab] = useState('personal');

  const storageUnits = [
    // Locker Size
    {
      id: 1,
      category: 'locker',
      type: 'personal',
      name: 'Mini Locker',
      size: '10 sq ft',
      dimensions: '5\' x 2\' x 7\'',
      price: 99,
      originalPrice: 150,
      discount: 34,
      popular: false,
      features: ['Climate Controlled', '24/7 Access', 'Ground Floor'],
      ideal: 'Seasonal items, documents, small boxes',
      image: 'locker-unit.jpg'
    },
    {
      id: 2,
      category: 'locker',
      type: 'personal',
      name: 'Standard Locker',
      size: '25 sq ft',
      dimensions: '5\' x 5\' x 7\'',
      price: 199,
      originalPrice: 299,
      discount: 33,
      popular: true,
      features: ['Climate Controlled', '24/7 Access', 'Security Camera'],
      ideal: 'Studio apartment items, seasonal decorations',
      image: 'locker-unit.jpg'
    },
    // Small Size
    {
      id: 3,
      category: 'small',
      type: 'personal',
      name: 'Small Unit',
      size: '50 sq ft',
      dimensions: '10\' x 5\' x 8\'',
      price: 349,
      originalPrice: 499,
      discount: 30,
      popular: true,
      features: ['Climate Controlled', '24/7 Access', 'Drive-up Access'],
      ideal: '1-bedroom apartment, furniture, appliances',
      image: 'small-unit.jpg'
    },
    // Medium Size
    {
      id: 4,
      category: 'medium',
      type: 'personal',
      name: 'Medium Unit',
      size: '100 sq ft',
      dimensions: '10\' x 10\' x 8\'',
      price: 599,
      originalPrice: 799,
      discount: 25,
      popular: false,
      features: ['Climate Controlled', '24/7 Access', 'Wide Entry'],
      ideal: '2-bedroom apartment, vehicle storage',
      image: 'medium-unit.jpg'
    },
    // Large Size
    {
      id: 5,
      category: 'large',
      type: 'business',
      name: 'Large Unit',
      size: '150 sq ft',
      dimensions: '15\' x 10\' x 8\'',
      price: 899,
      originalPrice: 1199,
      discount: 25,
      popular: false,
      features: ['Climate Controlled', 'Loading Bay', 'Office Space'],
      ideal: '3-bedroom home, business inventory',
      image: 'large-unit.jpg'
    },
    // Extra Large
    {
      id: 6,
      category: 'xlarge',
      type: 'business',
      name: 'Warehouse Space',
      size: '300+ sq ft',
      dimensions: '20\' x 15\' x 10\'',
      price: 1599,
      originalPrice: 2199,
      discount: 27,
      popular: false,
      features: ['Loading Dock', 'Office Space', 'Parking'],
      ideal: 'Business warehouse, large inventory',
      image: 'warehouse-unit.jpg'
    }
  ];

  const locations = [
    'Business Bay',
    'Dubai Marina', 
    'JLT',
    'Al Quoz',
    'DIFC'
  ];

  const features = [
    { icon: <Thermometer />, title: 'Climate Controlled', desc: 'Temperature regulated 24/7' },
    { icon: <Lock />, title: 'High Security', desc: 'CCTV & biometric access' },
    { icon: <Clock />, title: '24/7 Access', desc: 'Access your unit anytime' },
    { icon: <Truck />, title: 'Free Move-In', desc: 'Complimentary truck service' },
    { icon: <Shield />, title: 'Insurance', desc: 'Contents protection available' },
    { icon: <Key />, title: 'Smart Lock', desc: 'App-controlled access' },
    { icon: <Package />, title: 'Flexible Sizes', desc: 'Units from 10 to 300+ sq ft' },
    { icon: <DollarSign />, title: 'Best Price Guarantee', desc: 'Match any competitor price' },
    { icon: <Award />, title: 'Award Winning', desc: 'Dubai\'s #1 rated storage' },
    { icon: <Zap />, title: 'Instant Move-In', desc: 'No waiting, move in today' }
  ];

  const filteredUnits = storageUnits.filter(unit => {
    if (activeTab !== 'all' && unit.type !== activeTab) return false;
    if (selectedSize !== 'all' && unit.category !== selectedSize) return false;
    return true;
  });

  return (
    <div className="uae-storage-units-page">
      <UAEHeader />
      
      {/* Hero Section with Search */}
      <section className="storage-hero" style={{background: 'linear-gradient(135deg, #001f3f 0%, #003366 30%, #ff6b35 70%, #ff5722 100%)'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Dubai's Most Trusted Storage Units</h1>
            <p>Affordable monthly rates • No Hidden Fees • Instant Move-In</p>
            
            {/* Quick Search Bar */}
            <div className="hero-search">
              <div className="search-card">
                <div className="search-inputs">
                  <div className="search-field">
                    <MapPin size={20} />
                    <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                      <option value="all">All Locations</option>
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="search-field">
                    <Package size={20} />
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                      <option value="all">All Sizes</option>
                      <option value="locker">Locker (10-25 sq ft)</option>
                      <option value="small">Small (50 sq ft)</option>
                      <option value="medium">Medium (100 sq ft)</option>
                      <option value="large">Large (150 sq ft)</option>
                      <option value="xlarge">Extra Large (300+ sq ft)</option>
                    </select>
                  </div>
                  
                  <button className="search-btn">
                    <Search size={20} />
                    Search Units
                  </button>
                </div>
                
                <div className="search-tags">
                  <span className="tag active">🔥 50% Off First Month</span>
                  <span className="tag">Free Moving Truck</span>
                  <span className="tag">No Security Deposit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Units
            </button>
            <button 
              className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Storage
            </button>
            <button 
              className={`tab ${activeTab === 'business' ? 'active' : ''}`}
              onClick={() => setActiveTab('business')}
            >
              Business Storage
            </button>
          </div>
        </div>
      </section>

      {/* Units Grid */}
      <section className="units-section">
        <div className="container">
          <div className="section-header">
            <h2>Available Storage Units</h2>
            <p>Choose from {filteredUnits.length} available units</p>
          </div>
          
          <div className="units-grid">
            {filteredUnits.map(unit => (
              <div key={unit.id} className={`unit-card ${unit.popular ? 'popular' : ''}`}>
                {unit.popular && <span className="popular-badge">Most Popular</span>}
                {unit.discount > 0 && <span className="discount-badge">-{unit.discount}%</span>}
                
                <div className="unit-image" data-category={unit.category}>
                  <div className="size-label">{unit.size}</div>
                </div>
                
                <div className="unit-details">
                  <h3>{unit.name}</h3>
                  <p className="dimensions">{unit.dimensions}</p>
                  
                  <div className="price-section">
                    <div className="price">
                      <span className="currency">AED</span>
                      <span className="amount">{unit.price}</span>
                      <span className="period">/month</span>
                    </div>
                    {unit.originalPrice && (
                      <span className="original-price">AED {unit.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="features-list">
                    {unit.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <Check size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="ideal-for">
                    <strong>Ideal for:</strong> {unit.ideal}
                  </p>
                  
                  <div className="unit-actions">
                    <a href="/uae/get-quote" className="btn-primary">Get a Free Quote</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose SafeStorage Dubai</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="size-guide">
        <div className="container">
          <div className="size-guide-header">
            <h2>Not Sure What Size You Need?</h2>
            <p>Let us help you find the perfect storage unit size for your needs</p>
          </div>

          <div className="size-selector-cards">
            <div className="size-card" data-size="locker">
              <div className="size-card-icon">
                <Package size={40} />
              </div>
              <h3>Locker Size</h3>
              <div className="size-specs">10-25 sq ft</div>
              <div className="size-visual">
                <div className="room-icon small">🗄️</div>
              </div>
              <div className="size-ideal">
                <strong>Perfect for:</strong>
                <ul>
                  <li>• Seasonal decorations</li>
                  <li>• Important documents</li>
                  <li>• Sports equipment</li>
                  <li>• 5-10 boxes</li>
                </ul>
              </div>
              <div className="size-price">Contact for pricing</div>
              <button className="select-size-btn">Select This Size</button>
            </div>

            <div className="size-card" data-size="small">
              <div className="size-card-icon">
                <Package size={40} />
              </div>
              <h3>Small Unit</h3>
              <div className="size-specs">50 sq ft</div>
              <div className="size-visual">
                <div className="room-icon medium">📦</div>
              </div>
              <div className="size-ideal">
                <strong>Perfect for:</strong>
                <ul>
                  <li>• Studio apartment</li>
                  <li>• Bedroom furniture</li>
                  <li>• Small appliances</li>
                  <li>• 20-30 boxes</li>
                </ul>
              </div>
              <div className="size-price">Contact for pricing</div>
              <button className="select-size-btn popular">Most Popular</button>
            </div>

            <div className="size-card" data-size="medium">
              <div className="size-card-icon">
                <Package size={40} />
              </div>
              <h3>Medium Unit</h3>
              <div className="size-specs">100 sq ft</div>
              <div className="size-visual">
                <div className="room-icon large">🏠</div>
              </div>
              <div className="size-ideal">
                <strong>Perfect for:</strong>
                <ul>
                  <li>• 2-bedroom apartment</li>
                  <li>• Full home furniture</li>
                  <li>• Vehicle storage</li>
                  <li>• 50+ boxes</li>
                </ul>
              </div>
              <div className="size-price">Contact for pricing</div>
              <button className="select-size-btn">Select This Size</button>
            </div>

            <div className="size-card" data-size="large">
              <div className="size-card-icon">
                <Package size={40} />
              </div>
              <h3>Large Unit</h3>
              <div className="size-specs">150+ sq ft</div>
              <div className="size-visual">
                <div className="room-icon xlarge">🏢</div>
              </div>
              <div className="size-ideal">
                <strong>Perfect for:</strong>
                <ul>
                  <li>• 3+ bedroom home</li>
                  <li>• Business inventory</li>
                  <li>• Multiple vehicles</li>
                  <li>• Commercial storage</li>
                </ul>
              </div>
              <div className="size-price">Contact for pricing</div>
              <button className="select-size-btn">Select This Size</button>
            </div>
          </div>

          <div className="calculator-section">
            <div className="calc-header">
              <Calculator size={24} />
              <h3>Storage Size Calculator</h3>
            </div>
            <p>Select items you need to store and we'll recommend the perfect size</p>
            
            <div className="calc-grid">
              <div className="calc-category">
                <h4>Furniture</h4>
                <div className="calc-items">
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>King/Queen Bed</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Sofa Set</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Dining Table</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Wardrobe</span>
                  </label>
                </div>
              </div>

              <div className="calc-category">
                <h4>Appliances</h4>
                <div className="calc-items">
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Refrigerator</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Washing Machine</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Microwave/Oven</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>AC Units</span>
                  </label>
                </div>
              </div>

              <div className="calc-category">
                <h4>Boxes & Others</h4>
                <div className="calc-items">
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>10-20 Boxes</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>20-50 Boxes</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Sports Equipment</span>
                  </label>
                  <label className="calc-checkbox">
                    <input type="checkbox" />
                    <span>Office Equipment</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="calc-result">
              <button className="calculate-btn">
                <Calculator size={20} />
                Calculate My Storage Size
              </button>
            </div>
          </div>

          <div className="size-help-cta">
            <div className="help-content">
              <h3>Still Not Sure?</h3>
              <p>Our storage experts are here to help you choose the perfect size</p>
            </div>
            <div className="help-actions">
              <button className="btn-chat">
                <Phone size={18} />
                Talk to Expert
              </button>
              <button className="btn-tour">
                <Camera size={18} />
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <div className="promo-text">
              <h2>Limited Time Offer</h2>
              <h3>Get 50% OFF Your First 2 Months!</h3>
              <p>Plus FREE moving truck and packing supplies</p>
              <div className="promo-features">
                <span><Check /> No Security Deposit</span>
                <span><Check /> Free Lock</span>
                <span><Check /> Flexible Terms</span>
              </div>
            </div>
            <div className="promo-action">
              <div className="countdown">
                <span className="offer-ends">Offer ends in:</span>
                <div className="timer">2 Days 14:23:45</div>
              </div>
              <button className="promo-btn">
                <Zap /> Claim Offer Now
              </button>
              <a href="tel:+971505773388" className="promo-call">
                <Phone /> +971 50 577 3388
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <Award size={40} />
              <strong>SIRA Approved</strong>
              <span>Licensed & Regulated</span>
            </div>
            <div className="trust-item">
              <Shield size={40} />
              <strong>100% Secure</strong>
              <span>24/7 CCTV Monitoring</span>
            </div>
            <div className="trust-item">
              <Star size={40} />
              <strong>4.9/5 Rating</strong>
              <span>1000+ Reviews</span>
            </div>
            <div className="trust-item">
              <TrendingUp size={40} />
              <strong>10+ Years</strong>
              <span>Trusted Since 2014</span>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEStorageUnitsPage;