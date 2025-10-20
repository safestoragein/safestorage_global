import Services from '../components/Services'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
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
            Our Storage Services
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive storage solutions for all your needs
          </motion.p>
        </div>
      </div>
      <Services />
      <div className="service-additional-info">
        <div className="container">
          <motion.div 
            className="info-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Our Services?</h2>
            <p>With over 10 years of experience and 1 Lakh+ happy customers, we provide the most reliable and secure storage solutions across India, Dubai, and the UK.</p>
            <div className="service-benefits-grid">
              <div className="benefit">
                <span className="benefit-icon">✅</span>
                <h3>24/7 Access</h3>
                <p>Access your storage unit anytime with our smart app</p>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🛡️</span>
                <h3>Maximum Security</h3>
                <p>Multi-layer security with CCTV and biometric access</p>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🌡️</span>
                <h3>Climate Control</h3>
                <p>Perfect conditions for sensitive items</p>
              </div>
              <div className="benefit">
                <span className="benefit-icon">📦</span>
                <h3>Hassle Free Pickup</h3>
                <p>Complimentary collection from your location</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage