import { useState } from 'react'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TestimonialsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('india')

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
            Customer Testimonials
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real experiences from 1 Lakh+ happy customers worldwide
          </motion.p>
        </div>
      </div>
      
      <div className="location-toggle-section">
        <div className="container">
          <div className="location-toggle-buttons">
            <button 
              className={`location-toggle-btn ${selectedLocation === 'india' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('india')}
            >
              🇮🇳 India
            </button>
            <button 
              className={`location-toggle-btn ${selectedLocation === 'dubai' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('dubai')}
            >
              🇦🇪 Dubai
            </button>
            <button 
              className={`location-toggle-btn ${selectedLocation === 'uk' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('uk')}
            >
              🇬🇧 UK
            </button>
          </div>
        </div>
      </div>

      <Testimonials selectedLocation={selectedLocation} />
    </div>
  )
}

export default TestimonialsPage