import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Shield, Clock, TrendingUp, Award, Users, Globe2,
  ArrowRight, Sparkles, CheckCircle, Star, Zap
} from 'lucide-react'

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [activeCategory, setActiveCategory] = useState('security')

  const categories = [
    { id: 'security', label: '🔒 Security', color: '#FF6B6B' },
    { id: 'convenience', label: '⚡ Convenience', color: '#4ECDC4' },
    { id: 'trust', label: '🤝 Trust', color: '#95E77E' },
    { id: 'global', label: '🌍 Global', color: '#FFD93D' }
  ]

  const features = {
    security: [
      {
        emoji: '🛡️',
        title: 'Military-Grade Security',
        description: 'Multi-layered protection with biometric access and 24/7 surveillance',
        stats: '99.9%',
        statsLabel: 'Security Rating',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      {
        emoji: '🔐',
        title: 'Private Vault Units',
        description: 'Individual secured units with personalized access codes',
        stats: '256-bit',
        statsLabel: 'Encryption',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      {
        emoji: '📹',
        title: 'AI-Powered Monitoring',
        description: 'Smart CCTV with facial recognition and motion detection',
        stats: '24/7',
        statsLabel: 'Surveillance',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      }
    ],
    convenience: [
      {
        emoji: '📱',
        title: 'Mobile App Access',
        description: 'Manage your storage, book visits, and track inventory on the go',
        stats: '2 mins',
        statsLabel: 'Quick Access',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
      },
      {
        emoji: '🚚',
        title: 'Hassle Free Pickup Service',
        description: 'Complimentary collection and delivery for your convenience',
        stats: 'Same Day',
        statsLabel: 'Service',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      },
      {
        emoji: '📦',
        title: 'Smart Inventory',
        description: 'Digital cataloging with photo documentation of all items',
        stats: '100%',
        statsLabel: 'Organized',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
      }
    ],
    trust: [
      {
        emoji: '⭐',
        title: '10+ Years Excellence',
        description: 'Trusted by 1 Lakh+ customers across three continents',
        stats: '1 Lakh+',
        statsLabel: 'Happy Customers',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
      },
      {
        emoji: '🏆',
        title: 'Award Winning',
        description: 'Recognized as the best storage provider in multiple regions',
        stats: '25+',
        statsLabel: 'Awards',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
      },
      {
        emoji: '💎',
        title: 'Premium Insurance',
        description: 'Comprehensive coverage for all stored items at no extra cost',
        stats: '$1M',
        statsLabel: 'Coverage',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
      }
    ],
    global: [
      {
        emoji: '🌏',
        title: 'Global Network',
        description: 'Seamless storage solutions across India, Dubai, and UK',
        stats: '3',
        statsLabel: 'Countries',
        gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
      },
      {
        emoji: '🌐',
        title: 'Multi-Language Support',
        description: '24/7 customer service in 8+ languages',
        stats: '8+',
        statsLabel: 'Languages',
        gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
      },
      {
        emoji: '✈️',
        title: 'International Relocation',
        description: 'Easy transfer between our global facilities',
        stats: 'Worldwide',
        statsLabel: 'Service',
        gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
      }
    ]
  }

  const allFeatures = Object.values(features).flat()

  return (
    <section className="features-redesigned" id="features">
      <div className="container">
        <motion.div 
          className="features-header-enhanced"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="features-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles size={16} />
            <span>Why Choose Us</span>
            <Sparkles size={16} />
          </motion.div>
          
          <h2 className="features-title-gradient">
            Experience the SafeStorage
            <span className="highlight-text"> Difference</span>
          </h2>
          <p className="features-subtitle">
            Discover what makes us the global leader in premium storage solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="features-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: activeCategory === category.id ? category.color : 'transparent',
                background: activeCategory === category.id ? 
                  `linear-gradient(135deg, ${category.color}20 0%, ${category.color}10 100%)` : 
                  'white'
              }}
            >
              <span>{category.label}</span>
              {activeCategory === category.id && (
                <motion.span 
                  className="active-indicator"
                  layoutId="activeTab"
                  style={{ background: category.color }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="features-showcase"
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {features[activeCategory].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card-modern"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <motion.div 
                className="feature-gradient-bg"
                style={{ background: feature.gradient }}
                animate={{
                  opacity: hoveredFeature === index ? 0.15 : 0.08
                }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="feature-emoji-large"
                animate={{
                  scale: hoveredFeature === index ? 1.2 : 1,
                  rotate: hoveredFeature === index ? [0, -10, 10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {feature.emoji}
              </motion.div>

              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <motion.div 
                className="feature-stats"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="stats-number"
                  style={{ background: feature.gradient }}
                  animate={{
                    scale: hoveredFeature === index ? 1.1 : 1
                  }}
                >
                  {feature.stats}
                </motion.div>
                <span className="stats-label">{feature.statsLabel}</span>
              </motion.div>

              <motion.div 
                className="feature-hover-indicator"
                animate={{
                  opacity: hoveredFeature === index ? 1 : 0,
                  x: hoveredFeature === index ? 0 : -10
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div 
          className="features-stats-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stats-banner-content">
            <div className="stat-item">
              <motion.div 
                className="stat-number-large"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                1 Lakh+
              </motion.div>
              <span>Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <motion.div 
                className="stat-number-large"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              >
                35+
              </motion.div>
              <span>Storage Facilities</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <motion.div 
                className="stat-number-large"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              >
                99.9%
              </motion.div>
              <span>Satisfaction Rate</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <motion.div 
                className="stat-number-large"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              >
                10+
              </motion.div>
              <span>Years of Excellence</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="features-cta-enhanced"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="cta-pattern-bg">
            <div className="floating-shape shape-1" />
            <div className="floating-shape shape-2" />
            <div className="floating-shape shape-3" />
          </div>
          
          <div className="cta-content-modern">
            <motion.div 
              className="cta-icon"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360]
              }}
              transition={{
                y: { duration: 2, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            >
              <Star size={40} fill="currentColor" />
            </motion.div>
            
            <h3>Ready to Experience Premium Storage?</h3>
            <p>Join 1 Lakh+ happy customers who trust us with their valuables</p>
            
            <div className="cta-benefits">
              <span className="benefit-pill">
                <CheckCircle size={16} /> Free Consultation
              </span>
              <span className="benefit-pill">
                <CheckCircle size={16} /> Same-day Service
              </span>
              <span className="benefit-pill">
                <CheckCircle size={16} /> No Hidden Fees
              </span>
            </div>
            
            <div className="cta-buttons-modern">
              <motion.button 
                className="btn-gradient-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={20} />
                <span>Get Instant Quote</span>
              </motion.button>
              <motion.button 
                className="btn-glass"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Virtual Tour</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features