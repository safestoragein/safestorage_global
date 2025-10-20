import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Verified, TrendingUp, Heart, MessageCircle, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const Testimonials = ({ selectedLocation }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = {
    india: [
      {
        name: 'Rajesh Kumar',
        role: 'Business Owner',
        city: 'Mumbai',
        rating: 5,
        avatar: '👨‍💼',
        verified: true,
        highlight: 'Top-notch security',
        text: 'SafeStorage has been instrumental in managing our inventory overflow. The facilities in Mumbai are top-notch with excellent security. Their professional team made everything seamless!',
        service: 'Business Storage',
        duration: '2+ years customer'
      },
      {
        name: 'Priya Sharma',
        role: 'IT Professional',
        city: 'Bangalore',
        rating: 5,
        avatar: '👩‍💻',
        verified: true,
        highlight: 'Stress-free experience',
        text: 'Moving abroad was stress-free thanks to SafeStorage. They kept my belongings safe for 2 years while I was overseas. The digital inventory tracking gave me peace of mind.',
        service: 'Personal Storage',
        duration: '3 years customer'
      },
      {
        name: 'Amit Patel',
        role: 'Entrepreneur',
        city: 'Delhi',
        rating: 5,
        avatar: '👨‍💼',
        verified: true,
        highlight: 'Exceptional service',
        text: 'The climate-controlled units are perfect for our sensitive documents. Customer service is exceptional! They went above and beyond to accommodate our special requirements.',
        service: 'Document Storage',
        duration: '1 year customer'
      },
      {
        name: 'Sneha Reddy',
        role: 'Fashion Designer',
        city: 'Hyderabad',
        rating: 5,
        avatar: '👩‍🎨',
        verified: true,
        highlight: 'Perfect for seasonal items',
        text: 'I store my seasonal collections here. The app-based access and photo inventory system helps me manage everything remotely. Absolutely love the convenience!',
        service: 'Business Storage',
        duration: '6 months customer'
      }
    ],
    dubai: [
      {
        name: 'Ahmed Al Rashid',
        role: 'CEO',
        city: 'Dubai',
        rating: 5,
        avatar: '👨‍💼',
        verified: true,
        highlight: 'Premium standards',
        text: 'Premium service that matches Dubai standards. The Business Bay facility is convenient and professionally managed. Their concierge service is outstanding!',
        service: 'Executive Storage',
        duration: '4 years customer'
      },
      {
        name: 'Sarah Williams',
        role: 'Expat',
        city: 'Dubai Marina',
        rating: 5,
        avatar: '👩‍💼',
        verified: true,
        highlight: 'Smooth relocation',
        text: 'As an expat, SafeStorage made my relocation smooth. The app-based access system is incredibly convenient. Their pickup and delivery service saved me so much time!',
        service: 'Personal Storage',
        duration: '2 years customer'
      },
      {
        name: 'Mohammad Khan',
        role: 'Retailer',
        city: 'DIFC',
        rating: 5,
        avatar: '👨‍💼',
        verified: true,
        highlight: 'Flexible contracts',
        text: 'We store our excess inventory here. The flexible contracts and competitive pricing work perfectly for our business. The 24/7 access is a game-changer!',
        service: 'Business Storage',
        duration: '3+ years customer'
      },
      {
        name: 'Fatima Ali',
        role: 'Art Collector',
        city: 'Business Bay',
        rating: 5,
        avatar: '👩‍🎨',
        verified: true,
        highlight: 'Climate perfection',
        text: 'The climate-controlled environment is perfect for my art collection. The security measures give me complete peace of mind. Truly world-class facilities!',
        service: 'Specialty Storage',
        duration: '1 year customer'
      }
    ],
    uk: [
      {
        name: 'James Thompson',
        role: 'Consultant',
        city: 'London',
        rating: 5,
        avatar: '👨‍💼',
        verified: true,
        highlight: '24/7 accessibility',
        text: 'Outstanding facilities in Central London. The 24/7 access is crucial for my unpredictable schedule. The mobile app makes everything so convenient!',
        service: 'Personal Storage',
        duration: '5 years customer'
      },
      {
        name: 'Emily Brown',
        role: 'Student',
        city: 'Manchester',
        rating: 5,
        avatar: '👩‍🎓',
        verified: true,
        highlight: 'Student-friendly',
        text: 'Perfect for storing my belongings during university breaks. Affordable and secure! The student discount made it even better. Highly recommend to all students!',
        service: 'Student Storage',
        duration: '2 years customer'
      },
      {
        name: 'David Wilson',
        role: 'Property Developer',
        city: 'Birmingham',
        rating: 5,
        avatar: '👨‍💼',
        verified: true,
        highlight: 'Professional service',
        text: 'We use SafeStorage for staging furniture. Professional service and excellent value for money. Their team is always helpful and accommodating.',
        service: 'Business Storage',
        duration: '3+ years customer'
      },
      {
        name: 'Sophie Martinez',
        role: 'Interior Designer',
        city: 'Leeds',
        rating: 5,
        avatar: '👩‍🎨',
        verified: true,
        highlight: 'Flexible solutions',
        text: 'I store client furniture and samples here. The variety of unit sizes and flexible terms are perfect for my business needs. Exceptional experience!',
        service: 'Business Storage',
        duration: '18 months customer'
      }
    ]
  }

  const currentTestimonials = testimonials[selectedLocation] || testimonials.india

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % currentTestimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentTestimonials.length])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % currentTestimonials.length)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length)
  }

  const handleDotClick = (index) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section className="testimonials-redesigned" id="testimonials">
      <div className="testimonials-bg-pattern">
        <div className="pattern-circle circle-1" />
        <div className="pattern-circle circle-2" />
        <div className="pattern-circle circle-3" />
      </div>

      <div className="container">
        <motion.div 
          className="testimonials-header-enhanced"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="testimonials-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart size={16} />
            <span>Customer Stories</span>
            <Heart size={16} />
          </motion.div>

          <h2 className="testimonials-title-gradient">
            Trusted by 1 Lakh+
            <span className="highlight-testimonial"> Worldwide</span>
          </h2>
          <p className="testimonials-subtitle">
            Real stories from customers who chose SafeStorage Global
          </p>

          <div className="rating-summary">
            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <span className="rating-text">4.9/5 based on 1 Lakh+ reviews</span>
          </div>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="testimonials-carousel-container">
          <motion.button 
            className="carousel-nav prev"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="testimonials-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="testimonial-featured"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-quote-mark">
                  <Quote size={40} />
                </div>

                <div className="testimonial-content-main">
                  <motion.div 
                    className="testimonial-highlight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles size={16} />
                    <span>{currentTestimonials[activeIndex].highlight}</span>
                  </motion.div>

                  <motion.p 
                    className="testimonial-text-large"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{currentTestimonials[activeIndex].text}"
                  </motion.p>

                  <motion.div 
                    className="testimonial-meta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="author-details">
                      <div className="author-avatar-large">
                        {currentTestimonials[activeIndex].avatar}
                      </div>
                      <div className="author-info-detailed">
                        <div className="author-name-verified">
                          <h4>{currentTestimonials[activeIndex].name}</h4>
                          {currentTestimonials[activeIndex].verified && (
                            <Verified size={18} className="verified-icon" />
                          )}
                        </div>
                        <p className="author-role">{currentTestimonials[activeIndex].role}</p>
                        <div className="author-location">
                          <MapPin size={14} />
                          <span>{currentTestimonials[activeIndex].city}</span>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-tags">
                      <span className="tag service-tag">
                        {currentTestimonials[activeIndex].service}
                      </span>
                      <span className="tag duration-tag">
                        {currentTestimonials[activeIndex].duration}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button 
            className="carousel-nav next"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {currentTestimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="testimonials-grid-modern"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {currentTestimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card-compact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="card-header">
                <div className="rating-compact">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                {testimonial.verified && (
                  <Verified size={16} className="verified-badge" />
                )}
              </div>

              <p className="testimonial-text-compact">
                "{testimonial.text.substring(0, 100)}..."
              </p>

              <div className="author-compact">
                <span className="author-avatar-small">{testimonial.avatar}</span>
                <div className="author-details-compact">
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statistics */}
        <motion.div 
          className="trust-statistics"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stats-grid">
            <motion.div 
              className="stat-card-modern"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="stat-icon-gradient">
                <TrendingUp size={24} />
              </div>
              <h3>1 Lakh+</h3>
              <p>Happy Customers</p>
              <div className="stat-bar">
                <motion.div 
                  className="stat-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="stat-card-modern featured"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="stat-icon-gradient">
                <Star size={24} />
              </div>
              <h3>4.9/5</h3>
              <p>Average Rating</p>
              <div className="stat-bar">
                <motion.div 
                  className="stat-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '98%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="stat-card-modern"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="stat-icon-gradient">
                <MessageCircle size={24} />
              </div>
              <h3>98%</h3>
              <p>Would Recommend</p>
              <div className="stat-bar">
                <motion.div 
                  className="stat-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '98%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="testimonial-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4>Join 1 Lakh+ Happy Customers</h4>
            <motion.button 
              className="btn-testimonial-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Storage Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials