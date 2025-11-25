import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, MessageCircle, Globe, ChevronDown } from 'lucide-react';
import safeStorageLogo from '../../assets/safestorage-logo.jpeg';
import './UAEHeader.css';

const UAEHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <header className={`uae-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="uae-container">
          <nav className="uae-nav">
            <Link to="/uae" className="uae-logo">
              <img src={safeStorageLogo} alt="SafeStorage" />
            </Link>

            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <Link to="/uae" className="nav-link">Home</Link>
              <Link to="/uae/storage-units" className="nav-link">Storage Units</Link>
              <Link to="/uae/how-it-works" className="nav-link">How It Works</Link>
              <Link to="/uae/business" className="nav-link">Business Storage</Link>
            </div>

            <div className="nav-actions">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <select 
                  style={{
                    padding: '10px 16px',
                    border: '2px solid #333',
                    borderRadius: '8px',
                    background: 'white',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#000000',
                    minWidth: '120px',
                    height: '44px',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#000000';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#000000';
                  }}
                  onChange={(e) => {
                    if (e.target.value === 'india') {
                      window.location.href = 'https://safestorage.in/';
                    }
                  }}
                  defaultValue="uae"
                >
                  <option value="uae">🇦🇪 UAE</option>
                  <option value="india">🇮🇳 India</option>
                </select>
              </div>
              <a href="https://wa.me/971505773388" className="whatsapp-btn">
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
              <Link to="/uae/get-quote" className="quote-btn">Get a Free Quote</Link>
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>
  );
};

export default UAEHeader;