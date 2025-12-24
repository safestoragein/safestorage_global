import React from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Truck, Package, Home, Building, Users, Shield,
  CheckCircle, ArrowRight, Phone, Clock, Globe, Award
} from 'lucide-react';
import '../components/uae/UAEMovingServicesPage.css';
import  UAE4steps from '../components/uae/UAE4steps';

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
              <a href='tel:+971505773388'>
              <button className="btn-primary">
                <Phone size={18} />
                Call +971 50 577 3388
              </button>
            </a>
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
                <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
                <button className="service-btn">Get A Free Quote →</button></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
<section
  style={{
    background: "linear-gradient(180deg, #ffffff, #f8fafc)",
    padding: "90px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "60px",
        alignItems: "center",
      }}
    >
      {/* WHY INFO */}
      <div>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "12px",
            color: "#0f172a",
          }}
        >
          Why Choose SafeStorage Moving?
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#64748b",
            marginBottom: "40px",
          }}
        >
          Dubai’s trusted moving partner since 2014
        </p>

        {/* Features */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Feature 1 */}
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                background: "#f1f5f9",
                padding: "14px",
                borderRadius: "14px",
                fontSize: "22px",
              }}
            >
              👥
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                Professional Team
              </h4>
              <p style={{ margin: "6px 0 0", color: "#64748b" }}>
                Trained and experienced moving professionals
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                background: "#f1f5f9",
                padding: "14px",
                borderRadius: "14px",
                fontSize: "22px",
              }}
            >
              🛡️
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                Fully Insured
              </h4>
              <p style={{ margin: "6px 0 0", color: "#64748b" }}>
                Complete insurance coverage for your belongings
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                background: "#f1f5f9",
                padding: "14px",
                borderRadius: "14px",
                fontSize: "22px",
              }}
            >
              ⏰
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                On-Time Delivery
              </h4>
              <p style={{ margin: "6px 0 0", color: "#64748b" }}>
                Punctual service with guaranteed timelines
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                background: "#f1f5f9",
                padding: "14px",
                borderRadius: "14px",
                fontSize: "22px",
              }}
            >
              🏆
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                Quality Service
              </h4>
              <p style={{ margin: "6px 0 0", color: "#64748b" }}>
                Award-winning service with attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TRACK RECORD */}
      <div
        style={{
          background: "#ffffff",
          padding: "48px",
          borderRadius: "22px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          Our Track Record
        </h3>

        <p style={{ color: "#64748b", marginBottom: "32px" }}>
          Trusted by thousands across UAE
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px",
          }}
        >
          {[
            { value: "10+ Years", label: "Experience", icon: "📅" },
            { value: "24/7", label: "Support", icon: "🎧" },
            { value: "100%", label: "Licensed & Insured", icon: "🛡️" },
            { value: "4.9 ★", label: "Google Rating", icon: "⭐" },
          ].map((item, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              <div
                style={{
                  background: "#f1f5f9",
                  padding: "14px",
                  borderRadius: "14px",
                  fontSize: "22px",
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "700" }}>
                  {item.value}
                </div>
                <div style={{ color: "#64748b", fontSize: "14px" }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        {/*<div style={{ marginTop: "36px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#64748b" }}>
            Trusted & Reviewed On
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginTop: "12px",
              flexWrap: "wrap",
            }}
          >
            <img src="/logos/google.svg" alt="Google" style={{ height: "30px" }} />
            <img
              src="/logos/trustpilot.svg"
              alt="Trustpilot"
              style={{ height: "30px" }}
            />
            <img
              src="/logos/dubai-gov.svg"
              alt="Dubai Govt"
              style={{ height: "30px" }}
            />
          </div>
        </div>*/}
      </div>
    </div>
  </div>
</section>

      {/* Process Section */}
      <UAE4steps />
      {/*<section className="process-section">
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
*/}
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
              {/*<p className="pricing-note">Usually responds within 2 hours</p>*/}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="moving-cta-section">
        <div className="moving-container">
          <div className="cta-content">
            <h2>Ready to Move?</h2>
            <p style={{ color:'white' }}>Let us handle your move while you focus on what matters</p>
            <div className="cta-buttons">
              <a href='tel:+971505773388'>
              <button className="cta-btn-primary">
                <Phone size={18} />
                Call Now
              </button>
            </a>
            <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
              <button className="cta-btn-secondary">
                Get A Free Quote
              </button>
            </a>
            </div>
            
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEMovingServicesPage;