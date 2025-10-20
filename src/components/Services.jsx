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
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div 
                className="service-emoji-large"
                animate={{
                  scale: hoveredIndex === index ? [1, 1.3, 1.1] : 1,
                  rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 0.6 }}
              >
                {service.emoji}
              </motion.div>
              
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                  >
                    <span className="feature-check">✨</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className="service-btn-gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: service.color }}
              >
                <span>Learn More</span>
                <motion.span
                  className="btn-arrow"
                  animate={{ x: hoveredIndex === index ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-banner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="banner-content">
            <h3>All Our Facilities Include</h3>
            <div className="banner-features">
              {features.map((feature, index) => (
                <div key={index} className="banner-feature">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services