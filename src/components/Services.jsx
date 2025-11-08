import { motion } from 'framer-motion'
import { Shield, Thermometer, Camera, Key, Sparkles } from 'lucide-react'
import { useState } from 'react'

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    {
      emoji: '🏠',
      title: 'Household Storage',
      description: 'Safe & secure storage for your furniture, appliances, and personal items',
      features: ['Climate controlled', 'Various unit sizes', '24/7 access'],
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      emoji: '💼',
      title: 'Business Storage',
      description: 'Professional storage for office equipment, inventory & supplies',
      features: ['Bulk storage', 'Inventory tracking', 'Business rates'],
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      emoji: '📄',
      title: 'Document Storage',
      description: 'Secure archival solutions for important documents and files',
      features: ['Fire-proof units', 'Digital cataloging', 'Easy retrieval'],
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      emoji: '🚗',
      title: 'Automobile Storage',
      description: 'Protected parking for cars, bikes, boats & recreational vehicles',
      features: ['Covered parking', 'Security patrol', 'Battery maintenance'],
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ]

  const features = [
    { icon: <Shield size={24} />, text: '24/7 Security' },
    { icon: <Thermometer size={24} />, text: 'Climate Control' },
    { icon: <Camera size={24} />, text: 'CCTV Monitoring' },
    { icon: <Key size={24} />, text: 'Private Access' }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="services-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles size={16} />
            <span>Premium Storage Solutions</span>
          </motion.div>
          <h2 className="section-title">Our Storage Services</h2>
          <p className="section-subtitle">
            Choose the perfect storage solution for your needs
          </p>
        </motion.div>

        <div className="services-grid-four">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card-enhanced"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div 
                className="service-card-glow"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0
                }}
              />
              
              <motion.div 
                className="service-gradient-bg"
                style={{ background: service.color }}
                animate={{
                  opacity: hoveredIndex === index ? 0.1 : 0
                }}
              />

              <motion.div 
                className="service-emoji-wrapper"
                animate={{
                  scale: hoveredIndex === index ? 1.15 : 1,
                  rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0
                }}
                transition={{ duration: 0.4 }}
              >
                <span className="service-emoji">{service.emoji}</span>
                <div className="emoji-glow"></div>
              </motion.div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="service-feature-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                  >
                    <span className="feature-dot"></span>
                    {feature}
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="service-cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Features Banner */}
        <motion.div 
          className="services-features-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="features-banner-content">
            <h3>Why Choose SafeStorage?</h3>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services