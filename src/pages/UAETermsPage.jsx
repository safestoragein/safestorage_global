import React from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  FileText, Shield, AlertTriangle, DollarSign, Clock, 
  Key, Package, Phone, Mail, Calendar, CheckCircle
} from 'lucide-react';
import '../components/uae/UAETermsPage.css';

const UAETermsPage = () => {
  const lastUpdated = "November 2024";

  const terms = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FileText />,
      content: [
        "By using SafeStorage Dubai services, you agree to these Terms of Service",
        "These terms constitute a legally binding agreement under UAE law",
        "You must be 18 years or older to enter into this agreement",
        "Corporate customers must have authority to bind their organization",
        "Continued use of services implies acceptance of any updates to these terms"
      ]
    },
    {
      id: "services",
      title: "Storage Services",
      icon: <Package />,
      content: [
        "We provide secure self-storage units in various sizes",
        "Storage units are rented on a month-to-month basis",
        "Climate-controlled units maintain optimal temperature and humidity",
        "24/7 access is provided with personal access codes",
        "Additional services include moving assistance and packing supplies",
        "Business storage solutions with customized features available"
      ]
    },
    {
      id: "payment",
      title: "Payment Terms",
      icon: <DollarSign />,
      content: [
        "Rent is due monthly in advance on the same date each month",
        "Accepted payment methods: Credit card, bank transfer, cash",
        "Late fees apply after 5-day grace period as per UAE regulations",
        "Security deposits may be required for certain storage units",
        "All prices are in UAE Dirhams (AED) and include applicable taxes",
        "Price changes require 30 days written notice"
      ]
    },
    {
      id: "access",
      title: "Access and Security",
      icon: <Key />,
      content: [
        "Access codes are provided upon payment confirmation",
        "Facility access hours: 24/7 for most locations",
        "You are responsible for maintaining confidentiality of access codes",
        "Lost access cards will incur replacement charges",
        "CCTV surveillance operates throughout all facilities",
        "Unauthorized access attempts will be reported to authorities"
      ]
    },
    {
      id: "liability",
      title: "Liability and Insurance",
      icon: <Shield />,
      content: [
        "Basic contents insurance included up to AED 10,000",
        "Additional insurance available for high-value items",
        "SafeStorage is not liable for loss due to natural disasters",
        "Customers responsible for proper packing and storage",
        "Report any damage or security concerns immediately",
        "Limitation of liability as per UAE Commercial Code"
      ]
    },
    {
      id: "prohibited",
      title: "Prohibited Items",
      icon: <AlertTriangle />,
      content: [
        "Hazardous materials, chemicals, or explosives",
        "Illegal substances or contraband items",
        "Perishable food items or live animals",
        "Firearms or weapons (without proper UAE licensing)",
        "Items with strong odors or that may attract pests",
        "Anything that violates UAE laws or regulations"
      ]
    }
  ];

  return (
    <div className="uae-terms-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="terms-hero-section">
        <div className="terms-container">
          <div className="terms-hero-content">
            <div className="hero-icon">
              <FileText size={60} />
            </div>
            <h1>Terms of Service</h1>
            <p>Clear terms and conditions for our storage services in Dubai</p>
            <div className="last-updated">
              <Calendar size={16} />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="terms-intro-section">
        <div className="terms-container">
          <div className="intro-content">
            <h2>Welcome to SafeStorage Dubai</h2>
            <p>
              These Terms of Service ("Terms") govern your use of storage services provided by 
              SafeStorage Dubai in the United Arab Emirates. Please read these terms carefully 
              as they contain important information about your rights and obligations.
            </p>
            <div className="intro-highlights">
              <div className="highlight-item">
                <CheckCircle size={20} />
                <span>UAE Law Compliant</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={20} />
                <span>Clear & Fair Terms</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={20} />
                <span>Customer Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="terms-content-section">
        <div className="terms-container">
          {terms.map((term, idx) => (
            <div key={idx} className="terms-section">
              <div className="section-header">
                <div className="section-icon">{term.icon}</div>
                <h3>{term.title}</h3>
              </div>
              <div className="section-content">
                <ul>
                  {term.content.map((item, i) => (
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

      {/* Termination Section */}
      <section className="termination-section">
        <div className="terms-container">
          <div className="termination-content">
            <h2>Termination and Vacating</h2>
            <div className="termination-grid">
              <div className="termination-item">
                <Clock size={24} />
                <h4>Notice Period</h4>
                <p>30 days written notice required for termination by either party</p>
              </div>
              <div className="termination-item">
                <Package size={24} />
                <h4>Property Removal</h4>
                <p>All belongings must be removed by the termination date</p>
              </div>
              <div className="termination-item">
                <DollarSign size={24} />
                <h4>Outstanding Payments</h4>
                <p>All fees must be paid before access to retrieve belongings</p>
              </div>
              <div className="termination-item">
                <Key size={24} />
                <h4>Access Codes</h4>
                <p>Access codes will be deactivated upon termination</p>
              </div>
            </div>
            
            <div className="abandonment-notice">
              <AlertTriangle size={24} />
              <div>
                <h4>Abandoned Property</h4>
                <p>
                  Items left beyond the termination date may be considered abandoned. 
                  After 30 days notice, unclaimed items may be disposed of or sold 
                  to recover outstanding debts as permitted under UAE law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="dispute-section">
        <div className="terms-container">
          <div className="dispute-content">
            <h2>Dispute Resolution</h2>
            <p>
              We are committed to resolving any disputes amicably and efficiently:
            </p>
            
            <div className="dispute-steps">
              <div className="dispute-step">
                <div className="step-number">1</div>
                <h4>Direct Resolution</h4>
                <p>Contact our customer service team first to resolve any issues</p>
              </div>
              <div className="dispute-step">
                <div className="step-number">2</div>
                <h4>Mediation</h4>
                <p>If needed, we will engage in good faith mediation</p>
              </div>
              <div className="dispute-step">
                <div className="step-number">3</div>
                <h4>UAE Courts</h4>
                <p>Final disputes will be resolved in Dubai courts under UAE law</p>
              </div>
            </div>

            <div className="governing-law">
              <h4>Governing Law</h4>
              <p>
                These terms are governed by the laws of the United Arab Emirates. 
                The Dubai Courts have exclusive jurisdiction over any disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="terms-container">
          <div className="contact-content">
            <h2>Questions About These Terms?</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+971 50 577 3388</p>
                  <span>Available 7 days a week</span>
                </div>
              </div>
              <div className="contact-method">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>legal@safestorage.ae</p>
                  <span>Response within 24 hours</span>
                </div>
              </div>
              <div className="contact-method">
                <FileText size={24} />
                <div>
                  <h4>Address</h4>
                  <p>SafeStorage Dubai</p>
                  <span>Al Quoz Industrial Area 3, Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="updates-section">
        <div className="terms-container">
          <div className="updates-content">
            <h2>Terms Updates</h2>
            <p>
              We may update these Terms of Service from time to time. When we make 
              significant changes, we will notify existing customers via email or 
              posted notice at our facilities at least 30 days before the changes 
              take effect.
            </p>
            <div className="effective-date">
              <Calendar size={20} />
              <span>These terms are effective as of {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAETermsPage;