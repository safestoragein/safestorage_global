import { useState, useRef, useEffect } from 'react'
import { Menu, X, Phone, Mail, Globe, ChevronDown, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCountry } from '../contexts/CountryContext'
import safeStorageLogo from '../assets/safestorage-logo.jpeg'

const Header = ({ selectedLocation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const { selectedCountry, setSelectedCountry } = useCountry()
  const [showCountrySelector, setShowCountrySelector] = useState(false)
  const dropdownRef = useRef(null)

  const countryOptions = [
    { id: 'global', name: 'Global', flag: '🌍', url: null },
    { id: 'india', name: 'India', flag: '🇮🇳', url: 'https://safestorage.in/' },
    { id: 'uae', name: 'UAE', flag: '🇦🇪', url: 'https://safestorage.ae/' },
    { id: 'uk', name: 'UK', flag: '🇬🇧', url: null }
  ]

  const handleCountryChange = (countryId) => {
    const country = countryOptions.find(c => c.id === countryId)
    
    if (country?.url) {
      // Smooth redirect to external domain
      window.location.replace(country.url)
    } else {
      // Stay on current site for global
      setSelectedCountry(countryId)
    }
    setShowCountrySelector(false)
  }

  const toggleCountrySelector = () => {
    setShowCountrySelector(!showCountrySelector)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountrySelector(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const locations = {
    global: { 
      phone: '', // No global number yet
      email: 'info@safestorage.in',
      sites: [
        { city: 'New York', url: '#newyork' },
        { city: 'Los Angeles', url: '#losangeles' },
        { city: 'Chicago', url: '#chicago' },
        { city: 'Houston', url: '#houston' }
      ]
    },
    india: { 
      phone: '+91 8088848484',
      phoneDisplay: '808-884-8484',
      email: 'india@safestorage.global',
      sites: [
        { city: 'Bangalore', url: '#bangalore' },
        { city: 'Hyderabad', url: '#hyderabad' },
        { city: 'Chennai', url: '#chennai' },
        { city: 'Pune', url: '#pune' },
        { city: 'Mumbai', url: '#mumbai' },
        { city: 'Delhi', url: '#delhi' },
        { city: 'Noida', url: '#noida' },
        { city: 'Kolkata', url: '#kolkata' },
        { city: 'Coimbatore', url: '#coimbatore' },
        { city: 'Jaipur', url: '#jaipur' }
      ]
    },
    uae: { 
      phone: '+971 505773388',
      phoneDisplay: '+971-50-577-3388',
      email: 'safestoragedubai@gmail.com',
      sites: [
        { city: 'Business Bay', url: '#business-bay' },
        { city: 'DIFC', url: '#difc' },
        { city: 'JLT', url: '#jlt' },
        { city: 'Dubai Marina', url: '#marina' }
      ]
    },
    uk: { 
      phone: '', // UK number not available yet
      email: 'uk@safestorage.global',
      sites: [
        { city: 'London', url: '#london' },
        { city: 'Manchester', url: '#manchester' },
        { city: 'Birmingham', url: '#birmingham' },
        { city: 'Leeds', url: '#leeds' }
      ]
    }
  }

  const allSites = [
    { country: '🌍 Global', locations: locations.global.sites },
    { country: '🇮🇳 India', locations: locations.india.sites },
    { country: '🇦🇪 UAE', locations: locations.uae.sites },
    { country: '🇬🇧 UK', locations: locations.uk.sites }
  ]

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="country-selector-wrapper" ref={dropdownRef}>
              <div 
                className="country-selector"
                onClick={toggleCountrySelector}
              >
                <span className="selected-country">
                  {countryOptions.find(c => c.id === selectedCountry)?.flag} {countryOptions.find(c => c.id === selectedCountry)?.name}
                </span>
                <ChevronDown size={14} className={`chevron-icon ${showCountrySelector ? 'rotate' : ''}`} />
                
                {showCountrySelector && (
                  <motion.div 
                    className="country-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {countryOptions.map((country) => (
                      <button
                        key={country.id}
                        className={`country-option ${selectedCountry === country.id ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountryChange(country.id);
                        }}
                      >
                        <span className="country-flag">{country.flag}</span>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            <div className="contact-info">
              {locations[selectedCountry].phone && (
                <a href={`tel:${locations[selectedCountry].phone.replace(/\s/g, '')}`} className="phone-link">
                  <Phone size={14} /> 
                  <span>{locations[selectedCountry].phoneDisplay || locations[selectedCountry].phone}</span>
                </a>
              )}
              <a href={`mailto:${locations[selectedCountry].email}`} className="email-link">
                <Mail size={14} /> 
                <span>{locations[selectedCountry].email}</span>
              </a>
            </div>
            <div 
              className="location-badge"
              onMouseEnter={() => setShowLocationDropdown(true)}
              onMouseLeave={() => setShowLocationDropdown(false)}
            >
              <Globe size={14} />
              <span>Serving India, Dubai & UK</span>
              <ChevronDown size={14} />
              
              {showLocationDropdown && (
                <motion.div 
                  className="location-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {allSites.map((countryGroup) => (
                    <div key={countryGroup.country} className="dropdown-section">
                      <h4>{countryGroup.country}</h4>
                      <div className="dropdown-cities">
                        {countryGroup.locations.map((site) => (
                          <a key={site.city} href={site.url} className="dropdown-city">
                            <MapPin size={12} />
                            {site.city}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/">
              <motion.div 
                className="logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={safeStorageLogo} 
                  alt="SafeStorage" 
                  className="logo-img"
                />
              </motion.div>
            </Link>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/locations" onClick={() => setIsMenuOpen(false)}>Locations</Link>
              <Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
              <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="cta-button">Get Quote</button>
              </Link>
            </div>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header