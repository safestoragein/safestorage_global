import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, ChevronRight, Shield, Award } from 'lucide-react';
import safeStorageLogo from '../../assets/safestorage-logo.jpeg';
import './UAEFooter.css';

const UAEFooter = () => {
  return (
    <footer className="uae-footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="uae-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column company-info">
              <img src={safeStorageLogo} alt="SafeStorage" className="footer-logo" />
              <p className="company-description">
                Dubai's premier self-storage solution. Secure, accessible, 
                and affordable storage units for personal and business needs.
              </p>
              <div className="certifications">
                <div className="cert-badge">
                  <Shield size={20} />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="cert-badge">
                  <Award size={20} />
                  <span>SIRA Approved</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Storage Solutions</h3>
              <ul className="footer-links">
                <li><Link to="/uae/personal-storage">Personal Storage</Link></li>
                <li><Link to="/uae/business-storage">Business Storage</Link></li>
                <li><Link to="/uae/document-storage">Document Storage</Link></li>
                <li><Link to="/uae/vehicle-storage">Vehicle Storage</Link></li>
                <li><Link to="/uae/wine-storage">Wine Storage</Link></li>
                <li><Link to="/uae/moving-services">Moving Services</Link></li>
              </ul>
            </div>

            {/* Locations */}
            <div className="footer-column">
              <h3>Our Locations</h3>
              <ul className="footer-links">
                <li><Link to="/uae/locations/business-bay">Business Bay</Link></li>
                <li><Link to="/uae/locations/dubai-marina">Dubai Marina</Link></li>
                <li><Link to="/uae/locations/jlt">JLT</Link></li>
                <li><Link to="/uae/locations/al-quoz">Al Quoz</Link></li>
                <li><Link to="/uae/locations/difc">DIFC</Link></li>
                <li><Link to="/uae/locations">View All Locations</Link></li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="footer-column">
              <h3>Get In Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Al Quoz Industrial Area 3<br />Dubai, UAE</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+971 4 562 1101</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>dubai@safestorage.ae</span>
                </div>
                <div className="contact-item">
                  <Clock size={16} />
                  <span>Office: 8AM - 6PM<br />Access: 24/7</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <div className="newsletter-content">
              <div className="newsletter-text">
                <h3>Stay Updated</h3>
                <p>Get storage tips, special offers, and updates</p>
              </div>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                  <ChevronRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="uae-container">
          <div className="bottom-content">
            <div className="copyright">
              <p>© 2024 SafeStorage UAE. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <Link to="/uae/privacy">Privacy Policy</Link>
              <Link to="/uae/terms">Terms & Conditions</Link>
              <Link to="/uae/sitemap">Sitemap</Link>
            </div>
            <div className="payment-methods">
              <span>We Accept:</span>
              {/* Visa */}
              <svg viewBox="0 0 48 32" height="25">
                <rect fill="#f0f0f0" stroke="#0066B2" strokeWidth="2" width="48" height="32" rx="4"/>
                <text x="24" y="20" fill="#0066B2" fontSize="12" fontWeight="bold" textAnchor="middle">VISA</text>
              </svg>
              {/* MasterCard */}
              <svg viewBox="0 0 48 32" height="25">
                <rect fill="#f0f0f0" stroke="#ddd" strokeWidth="1" width="48" height="32" rx="4"/>
                <circle fill="#EB001B" cx="19" cy="16" r="8" opacity="0.8"/>
                <circle fill="#FF5F00" cx="29" cy="16" r="8" opacity="0.8"/>
              </svg>
              {/* Amex */}
              <svg viewBox="0 0 48 32" height="25">
                <rect fill="#f0f0f0" stroke="#006FCF" strokeWidth="2" width="48" height="32" rx="4"/>
                <text x="24" y="20" fill="#006FCF" fontSize="10" fontWeight="bold" textAnchor="middle">AMEX</text>
              </svg>
              {/* Cash */}
              <svg viewBox="0 0 48 32" height="25">
                <rect fill="#f0f0f0" stroke="#4CAF50" strokeWidth="2" width="48" height="32" rx="4"/>
                <text x="24" y="20" fill="#4CAF50" fontSize="10" fontWeight="bold" textAnchor="middle">CASH</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UAEFooter;