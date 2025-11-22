import React from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Shield, Lock, Eye, FileText, Phone, Mail, 
  Calendar, Globe, AlertTriangle, CheckCircle
} from 'lucide-react';
import '../components/uae/UAEPrivacyPage.css';

const UAEPrivacyPage = () => {
  const lastUpdated = "November 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <FileText />,
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Storage unit preferences and requirements",
        "Payment information and billing details",
        "Communication records and service interactions",
        "Location data when you visit our facilities",
        "Website usage data through cookies and analytics"
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Eye />,
      content: [
        "Provide and maintain our storage services",
        "Process payments and manage billing",
        "Send service updates and important notifications",
        "Improve our services and customer experience",
        "Comply with legal obligations under UAE law",
        "Prevent fraud and ensure facility security"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: <Globe />,
      content: [
        "We do not sell your personal information to third parties",
        "We may share information with service providers (payment processors, security companies)",
        "Information may be disclosed if required by UAE law enforcement",
        "Business transfers may include customer information",
        "Emergency situations may require information disclosure"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Lock />,
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers with regular security updates",
        "Limited access to personal information by authorized staff only",
        "Regular security audits and monitoring",
        "CCTV surveillance at all facilities with restricted access",
        "Compliance with UAE Data Protection regulations"
      ]
    }
  ];

  return (
    <div className="uae-privacy-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="privacy-hero-section">
        <div className="privacy-container">
          <div className="privacy-hero-content">
            <div className="hero-icon">
              <Shield size={60} />
            </div>
            <h1>Privacy Policy</h1>
            <p>Your privacy and data security are our top priorities</p>
            <div className="last-updated">
              <Calendar size={16} />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="privacy-intro-section">
        <div className="privacy-container">
          <div className="intro-content">
            <h2>Our Commitment to Your Privacy</h2>
            <p>
              SafeStorage Dubai ("we," "our," or "us") is committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our storage services and visit our facilities 
              in the United Arab Emirates.
            </p>
            <div className="intro-highlights">
              <div className="highlight-item">
                <CheckCircle size={20} />
                <span>UAE Data Protection Compliant</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={20} />
                <span>No Sale of Personal Data</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={20} />
                <span>Secure Data Storage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="privacy-content-section">
        <div className="privacy-container">
          {sections.map((section, idx) => (
            <div key={idx} className="privacy-section">
              <div className="section-header">
                <div className="section-icon">{section.icon}</div>
                <h3>{section.title}</h3>
              </div>
              <div className="section-content">
                <ul>
                  {section.content.map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cookies Section */}
      <section className="cookies-section">
        <div className="privacy-container">
          <div className="cookies-content">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website 
              and mobile applications. These technologies help us understand user preferences and improve 
              our services.
            </p>
            
            <div className="cookie-types">
              <div className="cookie-type">
                <h4>Essential Cookies</h4>
                <p>Required for basic website functionality and security</p>
              </div>
              <div className="cookie-type">
                <h4>Analytics Cookies</h4>
                <p>Help us understand how visitors interact with our website</p>
              </div>
              <div className="cookie-type">
                <h4>Marketing Cookies</h4>
                <p>Used to deliver relevant advertisements and track campaign effectiveness</p>
              </div>
            </div>

            <div className="cookie-controls">
              <p>You can control cookies through your browser settings or our cookie preference center.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="rights-section">
        <div className="privacy-container">
          <div className="rights-content">
            <h2>Your Rights and Choices</h2>
            <p>Under UAE law, you have certain rights regarding your personal information:</p>
            
            <div className="rights-grid">
              <div className="right-item">
                <Eye size={24} />
                <h4>Access</h4>
                <p>Request access to your personal information we hold</p>
              </div>
              <div className="right-item">
                <FileText size={24} />
                <h4>Correction</h4>
                <p>Request correction of inaccurate personal information</p>
              </div>
              <div className="right-item">
                <Lock size={24} />
                <h4>Deletion</h4>
                <p>Request deletion of your personal information (subject to legal requirements)</p>
              </div>
              <div className="right-item">
                <Globe size={24} />
                <h4>Portability</h4>
                <p>Receive your personal information in a structured format</p>
              </div>
            </div>

            <div className="exercise-rights">
              <p>To exercise these rights, please contact us using the information provided below.</p>
            </div>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="transfers-section">
        <div className="privacy-container">
          <div className="transfers-content">
            <div className="warning-notice">
              <AlertTriangle size={24} />
              <div>
                <h3>International Data Transfers</h3>
                <p>
                  Some of our service providers may be located outside the UAE. When we transfer your 
                  personal information internationally, we ensure appropriate safeguards are in place 
                  to protect your data in accordance with UAE data protection laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="privacy-container">
          <div className="contact-content">
            <h2>Contact Us About Privacy</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+971 50 577 3388</p>
                </div>
              </div>
              <div className="contact-method">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>privacy@safestorage.ae</p>
                </div>
              </div>
              <div className="contact-method">
                <FileText size={24} />
                <div>
                  <h4>Address</h4>
                  <p>Al Quoz Industrial Area 3, Dubai, UAE</p>
                </div>
              </div>
            </div>

            <div className="response-time">
              <p><strong>Response Time:</strong> We will respond to privacy inquiries within 30 days as required by UAE law.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="updates-section">
        <div className="privacy-container">
          <div className="updates-content">
            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              for other operational, legal, or regulatory reasons. When we make material changes, we will 
              notify you by email or through our website.
            </p>
            <div className="effective-date">
              <Calendar size={20} />
              <span>This policy is effective as of {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEPrivacyPage;