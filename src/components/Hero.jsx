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
        {/* Add floating orbs for mobile */}
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content-wrapper-centered">
          <motion.div 
            className="hero-main-content-centered"
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
              <motion.a 
                href="https://safestorage.in/customer/create-quotation"
                className="btn-primary-hero"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                href="tel:8088848484"
                className="btn-secondary-hero"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span>Call 8088848484</span>
              </motion.a>
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