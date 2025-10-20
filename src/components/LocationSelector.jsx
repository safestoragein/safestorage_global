import { motion } from 'framer-motion'
import { MapPin, Building, Users, Package, Sparkles, TrendingUp, Star } from 'lucide-react'
import { useState } from 'react'

const LocationSelector = ({ selectedLocation, setSelectedLocation }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null)
  
  const locations = [
    {
      id: 'india',
      name: 'India',
      cities: ['Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Mumbai', 'Delhi', 'Noida', 'Kolkata', 'Coimbatore', 'Jaipur'],
      flag: '🇮🇳',
      stats: { units: '500+', customers: '50K+', facilities: '25' },
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
      description: 'Serving 10 major cities across India'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      cities: ['Business Bay', 'DIFC', 'JLT', 'Marina'],
      flag: '🇦🇪',
      stats: { units: '150+', customers: '3K+', facilities: '8' },
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Premium facilities in Dubai\'s business districts'
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      cities: ['London', 'Manchester', 'Birmingham', 'Leeds'],
      flag: '🇬🇧',
      stats: { units: '180+', customers: '4K+', facilities: '12' },
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Strategic locations across the United Kingdom'
    }
  ]

  const activeLocation = locations.find(loc => loc.id === selectedLocation)

  return (
    <section className="location-selector" id="locations">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Choose Your Location</h2>
          <p className="section-subtitle">
            Premium storage solutions across three continents with local expertise
          </p>
        </motion.div>

        <div className="location-tabs-container">
          <motion.div 
            className="tabs-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            <span>Select Your Region</span>
          </motion.div>
          
          <div className="location-tabs">
            {locations.map((location, index) => (
              <motion.button
                key={location.id}
                className={`location-tab-enhanced ${selectedLocation === location.id ? 'active' : ''}`}
                onClick={() => setSelectedLocation(location.id)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: selectedLocation === location.id ? location.gradient : 'white',
                  border: selectedLocation === location.id ? 'none' : '2px solid #e2e8f0'
                }}
              >
                <motion.span 
                  className="location-flag-small"
                  animate={{
                    rotate: hoveredLocation === location.id ? [0, -10, 10, 0] : 0,
                    scale: hoveredLocation === location.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {location.flag}
                </motion.span>
                <div className="location-text">
                  <span className="location-name-small">{location.name}</span>
                  {selectedLocation === location.id && (
                    <motion.span 
                      className="active-badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star size={10} fill="currentColor" /> Active
                    </motion.span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          className="location-content"
          key={selectedLocation}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="location-grid">
            <div className="location-info">
              <motion.div 
                className="location-header-enhanced"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="location-emoji">{activeLocation.flag}</span>
                <div>
                  <h3>{activeLocation.name} Operations</h3>
                  <p className="location-subtitle">World-class storage facilities at your service</p>
                </div>
              </motion.div>
              
              <div className="cities-list-enhanced">
                <h4><MapPin size={18} /> Major Cities We Serve</h4>
                <div className="cities">
                  {activeLocation.cities.map((city, index) => (
                    <motion.span 
                      key={city} 
                      className="city-badge-enhanced"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <span className="city-dot"></span>
                      {city}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="location-stats-grid">
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  style={{ background: activeLocation.gradient }}
                >
                  <Package className="stat-icon-white" />
                  <div>
                    <h4>{activeLocation.stats.units}</h4>
                    <p>Storage Units</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  style={{ background: activeLocation.gradient }}
                >
                  <Users className="stat-icon-white" />
                  <div>
                    <h4>{activeLocation.stats.customers}</h4>
                    <p>Happy Customers</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  style={{ background: activeLocation.gradient }}
                >
                  <Building className="stat-icon-white" />
                  <div>
                    <h4>{activeLocation.stats.facilities}</h4>
                    <p>Facilities</p>
                  </div>
                </motion.div>
              </div>

              <motion.div className="location-features">
                <div className="feature-badge">
                  <TrendingUp size={16} />
                  <span>Fastest Growing Network</span>
                </div>
                <div className="feature-badge">
                  <Star size={16} />
                  <span>4.9★ Customer Rating</span>
                </div>
              </motion.div>

              <motion.button 
                className="btn-gradient-location"
                style={{ background: activeLocation.gradient }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore {activeLocation.name} Facilities
                <span className="btn-arrow">→</span>
              </motion.button>
            </div>

            <div className="location-image">
              <img 
                src={activeLocation.image} 
                alt={`${activeLocation.name} facilities`}
              />
              <div className="image-overlay">
                <span>View All Locations</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LocationSelector