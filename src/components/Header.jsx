import { useState } from 'react'
import { Menu, X, Phone, Mail, Globe, ChevronDown, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = ({ selectedLocation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)

  const locations = {
    india: { 
      phone: '+91 98765 43210', 
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
    dubai: { 
      phone: '+971 50 123 4567', 
      email: 'dubai@safestorage.global',
      sites: [
        { city: 'Business Bay', url: '#business-bay' },
        { city: 'DIFC', url: '#difc' },
        { city: 'JLT', url: '#jlt' },
        { city: 'Dubai Marina', url: '#marina' }
      ]
    },
    uk: { 
      phone: '+44 20 7946 0958', 
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
    { country: '🇮🇳 India', locations: locations.india.sites },
    { country: '🇦🇪 Dubai', locations: locations.dubai.sites },
    { country: '🇬🇧 UK', locations: locations.uk.sites }
  ]

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <span><Phone size={14} /> {locations[selectedLocation].phone}</span>
              <span><Mail size={14} /> {locations[selectedLocation].email}</span>
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
                <h1>SafeStorage<span>Global</span></h1>
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