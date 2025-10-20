import { motion } from 'framer-motion'
import { Shield, Award, Clock, Globe2, Play, ArrowRight, Sparkles, TrendingUp, MapPin, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Secure', 'Reliable', 'Global', 'Premium']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: '📦', value: '500+', label: 'Storage Units' },
    { icon: '🏢', value: '35+', label: 'Facilities' },
    { icon: '⭐', value: '4.9/5', label: 'Rating' }
  ]

  const features = [
    { icon: Shield, text: '100% Secure' },
    { icon: Award, text: 'ISO Certified' },
    { icon: Clock, text: '24/7 Access' },
    { icon: Globe2, text: '3 Countries' }
  ]

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content-wrapper">
          <motion.div 
            className="hero-main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="hero-badge-new"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Trusted by 1 Lakh+ Happy Customers Worldwide</span>
              <Sparkles size={16} />
            </motion.div>

            {/* Main Title */}
            <h1 className="hero-title-new">
              <span className="hero-title-line">The Most</span>
              <span className="hero-title-animated">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text"
                >
                  {words[currentWord]}
                </motion.span>
              </span>
              <span className="hero-title-line">Storage Solution</span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              className="hero-subtitle-new"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Experience world-class storage facilities with cutting-edge security, 
              climate control, and seamless access across India, Dubai, and the UK. 
              Your belongings, our responsibility.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="hero-buttons-new"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button 
                className="btn-primary-hero"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Instant Quote
                <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                className="btn-secondary-hero"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} />
                Watch Virtual Tour
              </motion.button>
            </motion.div>

            {/* Features Row */}
            <motion.div 
              className="hero-features-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="hero-feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <feature.icon size={18} />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Cards - Redesigned */}
          <motion.div 
            className="hero-stats-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Main Stats Grid */}
            <div className="stats-grid-modern">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card-modern"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                >
                  <div className="stat-glow"></div>
                  <div className="stat-icon-wrapper">
                    <span className="stat-icon-modern">{stat.icon}</span>
                  </div>
                  <div className="stat-info">
                    <h3 className="stat-value-modern">{stat.value}</h3>
                    <p className="stat-label-modern">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Feature Card */}
            <motion.div 
              className="feature-highlight-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="highlight-bg-animation"></div>
              <div className="highlight-content">
                <div className="highlight-left">
                  <div className="pulse-circle">
                    <div className="pulse"></div>
                    <div className="pulse-dot"></div>
                  </div>
                  <div className="highlight-text">
                    <h4>99.9%</h4>
                    <p>Ontime</p>
                  </div>
                </div>
                <div className="highlight-divider"></div>
                <div className="highlight-right">
                  <Star size={20} className="star-icon" />
                  <div className="rating-text">
                    <strong>Top Rated</strong>
                    <span>Service Provider</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="trust-indicators-modern"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="indicator-item">
                <Shield size={16} />
                <span>Insured</span>
              </div>
              <div className="indicator-item">
                <Award size={16} />
                <span>Certified</span>
              </div>
              <div className="indicator-item">
                <Globe2 size={16} />
                <span>Global</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Location Strip */}
        <motion.div 
          className="hero-location-strip"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="location-strip-content">
            <MapPin size={18} />
            <span>Now Available in:</span>
            <div className="location-pills">
              <span className="location-pill">🇮🇳 10 Cities in India</span>
              <span className="location-pill">🇦🇪 Dubai</span>
              <span className="location-pill">🇬🇧 United Kingdom</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero