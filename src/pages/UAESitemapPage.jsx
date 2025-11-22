import React from 'react';
import { Link } from 'react-router-dom';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Globe, Home, Package, Building, FileText, Car,
  Truck, Phone, Shield, MapPin, DollarSign, Clock,
  ExternalLink, ArrowRight
} from 'lucide-react';
import '../components/uae/UAESitemapPage.css';

const UAESitemapPage = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: <Home />,
      pages: [
        { name: "Home", path: "/uae", description: "Main landing page for SafeStorage Dubai" },
        { name: "How It Works", path: "/uae/how-it-works", description: "Step-by-step guide to our storage process" },
        { name: "Locations", path: "/uae/locations", description: "All our storage facility locations in Dubai" },
        { name: "Pricing", path: "/uae/pricing", description: "Transparent pricing for all storage units" }
      ]
    },
    {
      category: "Storage Services",
      icon: <Package />,
      pages: [
        { name: "Storage Units", path: "/uae/storage-units", description: "Overview of available storage unit sizes" },
        { name: "Personal Storage", path: "/uae/personal-storage", description: "Storage solutions for personal belongings" },
        { name: "Business Storage", path: "/uae/business-storage", description: "Commercial storage for businesses" },
        { name: "Document Storage", path: "/uae/document-storage", description: "Secure document archiving services" },
        { name: "Vehicle Storage", path: "/uae/vehicle-storage", description: "Safe storage for cars, bikes, and boats" }
      ]
    },
    {
      category: "Business Solutions",
      icon: <Building />,
      pages: [
        { name: "Business Overview", path: "/uae/business", description: "Comprehensive business storage solutions" },
        { name: "Moving Services", path: "/uae/moving-services", description: "Professional moving and relocation services" }
      ]
    },
    {
      category: "Support & Legal",
      icon: <FileText />,
      pages: [
        { name: "Contact Us", path: "/uae/contact", description: "Get in touch with our support team" },
        { name: "Privacy Policy", path: "/uae/privacy", description: "How we protect your personal information" },
        { name: "Terms of Service", path: "/uae/terms", description: "Terms and conditions for our services" },
        { name: "Sitemap", path: "/uae/sitemap", description: "Complete site navigation structure" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Quote", icon: <DollarSign />, description: "Get instant pricing for your storage needs" },
    { name: "Find Location", icon: <MapPin />, description: "Find the nearest storage facility" },
    { name: "24/7 Access", icon: <Clock />, description: "Access your unit anytime" },
    { name: "Security Features", icon: <Shield />, description: "Learn about our security measures" }
  ];

  const externalResources = [
    { name: "Dubai Municipality", url: "https://www.dm.gov.ae", description: "Official Dubai government portal" },
    { name: "UAE Government", url: "https://u.ae", description: "United Arab Emirates official website" },
    { name: "SIRA Dubai", url: "https://sira.gov.ae", description: "Security Industry Regulatory Agency" }
  ];

  return (
    <div className="uae-sitemap-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="sitemap-hero-section">
        <div className="sitemap-container">
          <div className="sitemap-hero-content">
            <div className="hero-icon">
              <Globe size={60} />
            </div>
            <h1>Sitemap</h1>
            <p>Complete navigation guide to SafeStorage Dubai website</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{siteStructure.reduce((acc, cat) => acc + cat.pages.length, 0)}</span>
                <span className="stat-label">Total Pages</span>
              </div>
              <div className="stat">
                <span className="stat-number">{siteStructure.length}</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="site-structure-section">
        <div className="sitemap-container">
          <div className="section-header">
            <h2>Site Structure</h2>
            <p>Organized navigation of all pages and services</p>
          </div>

          {siteStructure.map((category, idx) => (
            <div key={idx} className="category-section">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.category}</h3>
                <span className="page-count">{category.pages.length} pages</span>
              </div>
              
              <div className="pages-grid">
                {category.pages.map((page, pageIdx) => (
                  <Link key={pageIdx} to={page.path} className="page-card">
                    <div className="page-header">
                      <h4>{page.name}</h4>
                      <ArrowRight size={16} />
                    </div>
                    <p>{page.description}</p>
                    <div className="page-path">
                      <span>safestorage.ae{page.path}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="sitemap-container">
          <div className="section-header">
            <h2>Quick Access</h2>
            <p>Popular actions and information</p>
          </div>

          <div className="quick-links-grid">
            {quickLinks.map((link, idx) => (
              <div key={idx} className="quick-link-card">
                <div className="link-icon">{link.icon}</div>
                <h4>{link.name}</h4>
                <p>{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Tips */}
      <section className="search-tips-section">
        <div className="sitemap-container">
          <div className="search-tips-content">
            <h2>Finding What You Need</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <Package size={30} />
                <h4>Storage Solutions</h4>
                <p>Browse our storage services by type - personal, business, document, or vehicle storage</p>
              </div>
              <div className="tip-card">
                <MapPin size={30} />
                <h4>Location-Specific Info</h4>
                <p>Find facility details, hours, and contact information for each Dubai location</p>
              </div>
              <div className="tip-card">
                <DollarSign size={30} />
                <h4>Pricing Information</h4>
                <p>Get transparent pricing for all unit sizes and additional services</p>
              </div>
              <div className="tip-card">
                <Phone size={30} />
                <h4>Support & Contact</h4>
                <p>Multiple ways to reach our team including phone, email, and WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="external-resources-section">
        <div className="sitemap-container">
          <div className="section-header">
            <h2>Related Resources</h2>
            <p>Official UAE and Dubai government websites</p>
          </div>

          <div className="external-links-grid">
            {externalResources.map((resource, idx) => (
              <a 
                key={idx} 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="external-link-card"
              >
                <div className="external-header">
                  <h4>{resource.name}</h4>
                  <ExternalLink size={16} />
                </div>
                <p>{resource.description}</p>
                <div className="external-url">
                  <span>{resource.url}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="disclaimer">
            <p>
              <strong>Disclaimer:</strong> External links are provided for convenience. 
              SafeStorage Dubai is not responsible for the content of external websites.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="sitemap-cta-section">
        <div className="sitemap-container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Our customer service team is here to help you find the information you need</p>
            <div className="cta-buttons">
              <Link to="/uae/contact" className="cta-btn-primary">
                <Phone size={18} />
                Contact Support
              </Link>
              <a href="tel:+971505773388" className="cta-btn-secondary">
                Call +971 50 577 3388
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="last-updated-section">
        <div className="sitemap-container">
          <div className="last-updated-content">
            <p>
              <strong>Last Updated:</strong> November 2024 | 
              <strong> Total Pages:</strong> {siteStructure.reduce((acc, cat) => acc + cat.pages.length, 0)}
            </p>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAESitemapPage;