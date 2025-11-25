import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Linkedin, Twitter,
  ChevronRight, Shield, Award
} from 'lucide-react';
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
                Dubai&apos;s premier self-storage solution. Secure, accessible, 
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
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/uae/storage-units">Storage Units</Link></li>
                <li><Link to="/uae/how-it-works">How It Works</Link></li>
                <li><Link to="/uae/business">Business Storage</Link></li>
                <li><Link to="/uae/locations">Locations</Link></li>
                <li><Link to="/uae/blog">Blog</Link></li>
                <li><Link to="/uae/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Storage Solutions */}
            <div className="footer-column">
              <h3>Storage Solutions</h3>
              <ul className="footer-links">
                <li><Link to="/uae/personal-storage">Personal Storage</Link></li>
                <li><Link to="/uae/business-storage">Business Storage</Link></li>
                <li><Link to="/uae/document-storage">Document Storage</Link></li>
                <li><Link to="/uae/vehicle-storage">Vehicle Storage</Link></li>
                <li><Link to="/uae/moving-services">Moving Services</Link></li>
              </ul>
            </div>


            {/* Get In Touch (Active Section) */}
            <div className="footer-column">
              <h3>Get In Touch</h3>
              <ul className="footer-links">
                <li><MapPin size={16} className="contact-icon" />Al Quoz Industrial Area 3, Dubai, UAE</li>
                <li><Phone size={16} className="contact-icon" />+971 50 577 3388</li>
                <li><Mail size={16} className="contact-icon" />safestoragedubai@gmail.com</li>
                <li><Clock size={16} className="contact-icon" />Access: 24/7</li>
              </ul>

              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              </div>
            </div>

            {/* Contact & Hours (Hidden for now) */}
            {/*
            <div className="footer-column">
              <h3>Get In Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} className="contact-icon" />
                  <a
                    href="https://goo.gl/maps/your-location"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Al Quoz Industrial Area 3, Dubai, UAE
                  </a>
                </div>

                <div className="contact-item">
                  <Phone size={18} className="contact-icon" />
                  <a href="tel:+97145621101">+971 4 562 1101</a>
                </div>

                <div className="contact-item">
                  <Mail size={18} className="contact-icon" />
                  <a href="mailto:dubai@safestorage.ae">dubai@safestorage.ae</a>
                </div>

                <div className="contact-item">
                  <Clock size={18} className="contact-icon" />
                  <div className="contact-hours">
                    <span>Office: 8AM - 6PM</span>
                    <span>Access: 24/7</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              </div>
            </div>
            */}
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
              <p>© 2025 SafeStorage UAE. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <Link to="/uae/privacy">Privacy Policy</Link>
              <Link to="/uae/terms">Terms & Conditions</Link>
              <Link to="/uae/sitemap">Sitemap</Link>
            </div>
            <div className="made-with-love">
              <span>Made with ❤️ by SafeStorage Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UAEFooter;
