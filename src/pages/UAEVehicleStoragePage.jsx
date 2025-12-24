import React from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Car, Bike, Shield, Camera, Clock, Battery,
  CheckCircle, ArrowRight, Phone, Key, Wrench, Navigation
} from 'lucide-react';
import '../components/uae/UAEVehicleStoragePage.css';

const UAEVehicleStoragePage = () => {
  const vehicleTypes = [
    { icon: <Car />, name: 'Cars', desc: 'Sedans, SUVs, Sports cars' },
    { icon: <Bike />, name: 'Motorcycles', desc: 'Bikes, Scooters, ATVs' },
    { icon: <Navigation />, name: 'Boats', desc: 'Jet skis, Small boats' },
    { icon: <Car />, name: 'Classic Cars', desc: 'Vintage & collector cars' }
  ];

  const features = [
    {
      icon: <Shield />,
      title: '24/7 Security',
      description: 'CCTV surveillance and secure access control'
    },
    {
      icon: <Camera />,
      title: 'Covered Parking',
      description: 'Protection from sun and weather elements'
    },
    {
      icon: <Battery />,
      title: 'Battery Maintenance',
      description: 'Regular battery charging to keep vehicles ready'
    },
    {
      icon: <Wrench />,
      title: 'Basic Maintenance',
      description: 'Tire pressure checks and basic care'
    }
  ];

  return (
    <div className="uae-vehicle-storage-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="vehicle-hero-section">
        <div className="vehicle-container">
          <div className="vehicle-hero-content">
            <div className="hero-badge">
              <Car size={16} />
              <span>Vehicle Storage Solutions</span>
            </div>
            <h1>Vehicle Storage in <span className="highlight">Dubai</span></h1>
            <p>Secure indoor and outdoor storage for cars, motorcycles, boats, and more</p>
            
            <div className="hero-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>Indoor & Outdoor Options</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>24/7 Security</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Battery Maintenance</span>
              </div>
            </div>

            <div className="hero-actions">
<a href='tel:+971505773388'>
              <button className="btn-primary">
                <Phone size={18} />
                Call +971 50 577 3388
              </button>
            </a>
              <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
              <button className="btn-secondary">
                Check Availability
                <ArrowRight size={18} />
              </button>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="vehicle-types-section">
        <div className="vehicle-container">
          <div className="section-header">
            <h2>What Vehicles Can You Store?</h2>
            <p>We accommodate all types of vehicles</p>
          </div>

          <div className="vehicle-types-grid">
            {vehicleTypes.map((type, idx) => (
              <div key={idx} className="vehicle-type-card">
                <div className="type-icon">{type.icon}</div>
                <h3>{type.name}</h3>
                <p>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="vehicle-container">
          <div className="section-header">
            <h2>Complete Vehicle Care</h2>
            <p>More than just parking - complete vehicle storage solutions</p>
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

      {/* Storage Options Section */}
      <section className="options-section">
        <div className="vehicle-container">
          <div className="options-grid">
            <div className="option-card">
              <h3>Indoor Storage</h3>
              <div className="option-price">Contact for pricing</div>
              <ul>
                <li><CheckCircle size={16} /> Climate controlled</li>
                <li><CheckCircle size={16} /> Complete protection</li>
                <li><CheckCircle size={16} /> Dust-free environment</li>
                <li><CheckCircle size={16} /> Premium security</li>
              </ul>
              <button className="select-btn">Select Indoor Storage</button>
            </div>

            <div className="option-card">
              <h3>Outdoor Storage</h3>
              <div className="option-price">Contact for pricing</div>
              <ul>
                <li><CheckCircle size={16} /> Covered parking</li>
                <li><CheckCircle size={16} /> 24/7 surveillance</li>
                <li><CheckCircle size={16} /> Easy access</li>
                <li><CheckCircle size={16} /> Secure compound</li>
              </ul>
              <button className="select-btn">Select Outdoor Storage</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="vehicle-container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple process to store your vehicle</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <Phone size={30} />
              <h3>Book Your Space</h3>
              <p>Call or book online</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">2</div>
              <Car size={30} />
              <h3>Drop Off Vehicle</h3>
              <p>Bring your vehicle to our facility</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">3</div>
              <Key size={30} />
              <h3>Secure Storage</h3>
              <p>Your vehicle is safely stored</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">4</div>
              <Clock size={30} />
              <h3>Access Anytime</h3>
              <p>Retrieve with advance notice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vehicle-cta-section">
        <div className="vehicle-container">
          <div className="cta-content">
            <h2>Secure Your Vehicle Today</h2>
            <p>Professional vehicle storage with complete peace of mind</p>
            <div className="cta-buttons">
              <button className="cta-btn-primary">
                <Phone size={18} />
                Call Now
              </button>
              <a href="/uae/get-quote" className="cta-btn-secondary">
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

export default UAEVehicleStoragePage;