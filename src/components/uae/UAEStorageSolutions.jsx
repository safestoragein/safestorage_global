import React, { useState } from 'react';
import { Home, Building, FileText, Car, Package, ChevronRight, Check } from 'lucide-react';
import './UAEStorageSolutions.css';

const UAEStorageSolutions = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const solutions = {
    personal: {
      icon: <Home size={24} />,
      title: "Personal Storage",
      description: "Perfect for household items, furniture, and personal belongings",
      units: [
        {
          size: "Small Box",
          dimensions: "10-25 sq ft",
          ideal: "Boxes, small furniture",
          price: "AED 99",
          period: "/month",
          features: ["Climate controlled", "24/7 access", "Security cameras", "Free insurance"]
        },
        {
          size: "Studio",
          dimensions: "50 sq ft",
          ideal: "Studio apartment items",
          price: "AED 299",
          period: "/month",
          popular: true,
          features: ["Climate controlled", "24/7 access", "Security cameras", "Free insurance", "Shelving included"]
        },
        {
          size: "1 Bedroom",
          dimensions: "100 sq ft",
          ideal: "1BR apartment contents",
          price: "AED 549",
          period: "/month",
          features: ["Climate controlled", "24/7 access", "Security cameras", "Free insurance", "Free pickup"]
        },
        {
          size: "2 Bedroom",
          dimensions: "150+ sq ft",
          ideal: "2BR apartment or villa",
          price: "AED 799",
          period: "/month",
          features: ["Climate controlled", "24/7 access", "Security cameras", "Free insurance", "Free pickup", "Premium location"]
        }
      ]
    },
    business: {
      icon: <Building size={24} />,
      title: "Business Storage",
      description: "Scalable solutions for inventory, equipment, and office supplies",
      units: [
        {
          size: "Startup",
          dimensions: "50-100 sq ft",
          ideal: "Small inventory",
          price: "AED 449",
          period: "/month",
          features: ["Loading dock access", "Inventory management", "24/7 access", "Flexible terms"]
        },
        {
          size: "Small Business",
          dimensions: "200 sq ft",
          ideal: "Retail stock",
          price: "AED 999",
          period: "/month",
          popular: true,
          features: ["Loading dock access", "Inventory software", "24/7 access", "Dedicated manager", "Pallet storage"]
        },
        {
          size: "Enterprise",
          dimensions: "500+ sq ft",
          ideal: "Warehouse needs",
          price: "Custom",
          period: "quote",
          features: ["Private loading bay", "Inventory system", "24/7 access", "Account manager", "Custom solutions"]
        }
      ]
    },
    specialty: {
      icon: <Package size={24} />,
      title: "Specialty Storage",
      description: "Specialized storage for vehicles, documents, and more",
      units: [
        {
          size: "Document Storage",
          dimensions: "Per box",
          ideal: "Legal documents",
          price: "AED 29",
          period: "/box/month",
          features: ["Climate controlled", "Fireproof", "Indexed filing", "Retrieval service"]
        },
        {
          size: "Vehicle Storage",
          dimensions: "Car/Bike",
          ideal: "Cars, motorcycles",
          price: "AED 599",
          period: "/month",
          features: ["Indoor parking", "Battery maintenance", "Regular checks", "Dust protection"]
        },
        {
          size: "Art Storage",
          dimensions: "Custom",
          ideal: "Artwork & collectibles",
          price: "AED 199",
          period: "/month",
          features: ["Climate controlled", "UV protection", "Security monitoring", "White-glove handling"]
        }
      ]
    }
  };

  return (
    <section className="uae-storage-solutions">
      <div className="dubai-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Storage Solutions</span>
          <h2 className="section-title">
            Find Your Perfect
            <span className="highlight"> Storage Unit</span>
          </h2>
          <p className="section-subtitle">
            From small lockers to large warehouses, we have the right space for your needs
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="solution-tabs">
          {Object.keys(solutions).map((key) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {solutions[key].icon}
              <span>{solutions[key].title}</span>
            </button>
          ))}
        </div>

        {/* Active Solution Content */}
        <div className="solution-content">
          <div className="solution-header">
            <h3>{solutions[activeTab].title}</h3>
            <p>{solutions[activeTab].description}</p>
          </div>

          <div className="units-grid">
            {solutions[activeTab].units.map((unit, index) => (
              <div key={index} className={`unit-card ${unit.popular ? 'popular' : ''}`}>
                {unit.popular && <span className="popular-badge">Most Popular</span>}
                
                <div className="unit-header">
                  <h4>{unit.size}</h4>
                  <p className="dimensions">{unit.dimensions}</p>
                  <p className="ideal-for">{unit.ideal}</p>
                </div>

                <div className="unit-pricing">
                  <span className="price">{unit.price}</span>
                  <span className="period">{unit.period}</span>
                </div>

                <ul className="unit-features">
                  {unit.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="unit-cta">
                  Get Started
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="solutions-cta">
          <div className="cta-content">
            <h3>Not sure what size you need?</h3>
            <p>Our storage experts will help you find the perfect unit</p>
          </div>
          <div className="cta-buttons">
            <a href="tel:+971505773388" className="cta-call">
              Call Us Now
            </a>
            <button className="cta-calculator">
              Size Calculator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEStorageSolutions;