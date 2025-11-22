import React from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  FileText, Shield, Lock, Archive, Search, Clock,
  CheckCircle, ArrowRight, Phone, Award, Database, Folder
} from 'lucide-react';
import '../components/uae/UAEDocumentStoragePage.css';

const UAEDocumentStoragePage = () => {
  const features = [
    {
      icon: <Shield />,
      title: 'Bank-Grade Security',
      description: 'Fire-proof, flood-proof storage with 24/7 surveillance'
    },
    {
      icon: <Archive />,
      title: 'Climate Controlled',
      description: 'Optimal temperature and humidity for document preservation'
    },
    {
      icon: <Search />,
      title: 'Easy Retrieval',
      description: 'Digital cataloging with quick access to your documents'
    },
    {
      icon: <Lock />,
      title: 'Compliance Ready',
      description: 'Meets UAE regulatory requirements for document storage'
    }
  ];

  const documentTypes = [
    'Legal Documents',
    'Financial Records',
    'Medical Records',
    'HR Files',
    'Contracts',
    'Tax Documents',
    'Insurance Papers',
    'Property Documents'
  ];

  return (
    <div className="uae-document-storage-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="document-hero-section">
        <div className="document-container">
          <div className="document-hero-content">
            <div className="hero-badge">
              <FileText size={16} />
              <span>Document Storage Solutions</span>
            </div>
            <h1>Secure Document Storage in <span className="highlight">Dubai</span></h1>
            <p>Professional document archiving and management for businesses and individuals</p>
            
            <div className="hero-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>Fire & Flood Proof</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Climate Controlled</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>24/7 Security</span>
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

            <div className="trust-badge">
              <Award size={20} />
              <span>ISO 9001:2015 Certified | SIRA Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="document-types-section">
        <div className="document-container">
          <div className="section-header">
            <h2>What Documents Can You Store?</h2>
            <p>Secure storage for all your important documents</p>
          </div>

          <div className="document-types-grid">
            {documentTypes.map((type, idx) => (
              <div key={idx} className="document-type-card">
                <Folder size={24} />
                <span>{type}</span>
              </div>
            ))}
          </div>

          <div className="special-note">
            <Database size={20} />
            <p>Digital cataloging available for easy retrieval and management</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="document-container">
          <div className="section-header">
            <h2>Why Choose SafeStorage for Documents?</h2>
            <p>Industry-leading document storage solutions</p>
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

      {/* Services Section */}
      <section className="services-section">
        <div className="document-container">
          <div className="services-content">
            <div className="services-info">
              <h2>Complete Document Management Services</h2>
              <p>More than just storage - a complete document solution</p>
              
              <div className="service-list">
                <div className="service-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Pickup & Delivery</h4>
                    <p>We collect and deliver documents to your location</p>
                  </div>
                </div>
                <div className="service-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Scanning & Digitization</h4>
                    <p>Convert physical documents to digital format</p>
                  </div>
                </div>
                <div className="service-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Shredding Services</h4>
                    <p>Secure disposal of confidential documents</p>
                  </div>
                </div>
                <div className="service-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Retention Management</h4>
                    <p>Automated alerts for document retention periods</p>
                  </div>
                </div>
              </div>

              <button className="learn-more-btn">
                Learn More About Our Services
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="services-image">
              <div className="image-placeholder">
                <FileText size={80} />
                <p>Professional Document Storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="document-container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple process for secure document storage</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <Phone size={30} />
              <h3>Contact Us</h3>
              <p>Discuss your document storage needs</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">2</div>
              <Archive size={30} />
              <h3>We Collect</h3>
              <p>Secure pickup from your location</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">3</div>
              <Database size={30} />
              <h3>Store & Catalog</h3>
              <p>Documents stored and digitally indexed</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="process-step">
              <div className="step-number">4</div>
              <Search size={30} />
              <h3>Access Anytime</h3>
              <p>Retrieve documents when needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="document-container">
          <div className="pricing-card">
            <div className="pricing-header">
              <h2>Transparent Pricing</h2>
              <p>Affordable document storage solutions</p>
            </div>
            
            <div className="pricing-options">
              <div className="pricing-option">
                <h3>Box Storage</h3>
                <div className="price">
                  <span className="amount">AED 29</span>
                  <span className="period">/box/month</span>
                </div>
                <ul>
                  <li><CheckCircle size={16} /> Standard archive box</li>
                  <li><CheckCircle size={16} /> Climate controlled</li>
                  <li><CheckCircle size={16} /> Free retrieval</li>
                </ul>
              </div>

              <div className="pricing-option featured">
                <div className="featured-badge">Most Popular</div>
                <h3>Business Package</h3>
                <div className="price">
                  <span className="amount">AED 499</span>
                  <span className="period">/month</span>
                </div>
                <ul>
                  <li><CheckCircle size={16} /> Up to 50 boxes</li>
                  <li><CheckCircle size={16} /> Digital cataloging</li>
                  <li><CheckCircle size={16} /> Priority retrieval</li>
                  <li><CheckCircle size={16} /> Monthly reports</li>
                </ul>
              </div>

              <div className="pricing-option">
                <h3>Enterprise</h3>
                <div className="price">
                  <span className="amount">Custom</span>
                  <span className="period">pricing</span>
                </div>
                <ul>
                  <li><CheckCircle size={16} /> Unlimited storage</li>
                  <li><CheckCircle size={16} /> Dedicated manager</li>
                  <li><CheckCircle size={16} /> Custom solutions</li>
                </ul>
              </div>
            </div>

            <div className="pricing-cta">
              <button className="get-started-btn">
                Get Started Today
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="document-cta-section">
        <div className="document-container">
          <div className="cta-content">
            <h2>Secure Your Documents Today</h2>
            <p>Join thousands of businesses trusting SafeStorage with their documents</p>
            <div className="cta-buttons">
              <button className="cta-btn-primary">
                <Phone size={18} />
                Call Now
              </button>
              <button className="cta-btn-secondary">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEDocumentStoragePage;