import { useState } from 'react'
import LocationSelector from '../components/LocationSelector'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const LocationsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('india')

  const allLocations = {
    india: {
      title: 'India Operations',
      cities: ['Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Mumbai', 'Delhi', 'Noida', 'Kolkata', 'Coimbatore', 'Jaipur'],
      facilities: '25+',
      customers: '50K+',
      flag: '🇮🇳'
    },
    dubai: {
      title: 'Dubai Operations',
      cities: ['Business Bay', 'DIFC', 'JLT', 'Dubai Marina'],
      facilities: '8',
      customers: '3K+',
      flag: '🇦🇪'
    },
    uk: {
      title: 'UK Operations',
      cities: ['London', 'Manchester', 'Birmingham', 'Leeds'],
      facilities: '12',
      customers: '4K+',
      flag: '🇬🇧'
    }
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Global Locations
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium storage facilities across three continents
          </motion.p>
        </div>
      </div>
      
      <LocationSelector 
        selectedLocation={selectedLocation} 
        setSelectedLocation={setSelectedLocation} 
      />

      <div className="all-locations-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            All Our Locations
          </motion.h2>
          
          <div className="locations-cards-grid">
            {Object.entries(allLocations).map(([key, location], index) => (
              <motion.div 
                key={key}
                className="location-detail-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="location-card-header">
                  <span className="location-flag-large">{location.flag}</span>
                  <h3>{location.title}</h3>
                </div>
                
                <div className="location-stats">
                  <div className="stat">
                    <strong>{location.facilities}</strong>
                    <span>Facilities</span>
                  </div>
                  <div className="stat">
                    <strong>{location.customers}</strong>
                    <span>Customers</span>
                  </div>
                </div>

                <div className="cities-section">
                  <h4><MapPin size={16} /> Cities We Serve</h4>
                  <div className="cities-list">
                    {location.cities.map((city, cityIndex) => (
                      <span key={cityIndex} className="city-tag">{city}</span>
                    ))}
                  </div>
                </div>

                <button 
                  className="select-location-btn"
                  onClick={() => setSelectedLocation(key)}
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationsPage