import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight, CheckCircle, Headphones, Shield } from 'lucide-react'
import { useState } from 'react'

const Contact = ({ selectedLocation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: selectedLocation,
    service: '',
    message: ''
  })

  const locations = {
    india: {
      address: 'SafeStorage Tower, Koramangala, Bangalore 560034',
      phone: '+918088848484',
      phoneDisplay: '+91 808 884 8484',
      email: 'info@safestorage.in',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      flag: '🇮🇳',
      mapUrl: 'https://maps.google.com/?q=Bangalore'
    },
    dubai: {
      address: 'Bay Square Building 13, Business Bay, Dubai, UAE',
      phone: '+971505773388',
      phoneDisplay: '+971 50 577 3388',
      email: 'info@safestorage.in',
      hours: 'Sun-Thu: 8:00 AM - 6:00 PM',
      flag: '🇦🇪',
      mapUrl: 'https://maps.google.com/?q=Dubai'
    },
    uk: {
      address: '123 Storage Street, Canary Wharf, London E14 5AB',
      phone: '', // No UK number available yet
      phoneNote: 'Coming soon',
      email: 'info@safestorage.in',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      flag: '🇬🇧',
      mapUrl: 'https://maps.google.com/?q=London'
    }
  }

  const benefits = [
    { icon: <CheckCircle size={20} />, text: 'Free consultation' },
    { icon: <CheckCircle size={20} />, text: 'Same-day response' },
    { icon: <CheckCircle size={20} />, text: 'Customized solutions' },
    { icon: <CheckCircle size={20} />, text: 'Transparent pricing' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const currentLocation = locations[selectedLocation]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Start a Conversation</h2>
          <p className="section-subtitle">
            Get personalized storage solutions tailored to your needs
          </p>
        </motion.div>

        <div className="contact-wrapper">
          <div className="contact-main-grid">
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-header">
                <h3>Request Your Free Quote</h3>
                <p>Fill out the form and we'll get back to you within 24 hours</p>
                <div className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="benefit-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {benefit.icon}
                      <span>{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <form className="modern-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select Service Type</option>
                    <option value="personal">Personal Storage</option>
                    <option value="business">Business Storage</option>
                    <option value="archive">Archive Storage</option>
                    <option value="moving">Moving & Relocation</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <textarea
                    name="message"
                    placeholder="Tell us about your storage needs..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input"
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="submit-btn-modern"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="location-card">
                <div className="location-header">
                  <span className="location-flag">{currentLocation.flag}</span>
                  <h3>{selectedLocation === 'uk' ? 'United Kingdom' : selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1)} Office</h3>
                </div>
                
                <div className="contact-details">
                  <div className="detail-item">
                    <div className="detail-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="detail-content">
                      <h4>Address</h4>
                      <p>{currentLocation.address}</p>
                      <a href={currentLocation.mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">
                        View on map <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">
                      <Phone size={20} />
                    </div>
                    <div className="detail-content">
                      <h4>Phone</h4>
                      {currentLocation.phone ? (
                        <>
                          <p>{currentLocation.phoneDisplay || currentLocation.phone}</p>
                          <a href={`tel:${currentLocation.phone.replace(/\s/g, '')}`} className="call-link">
                            Call now
                          </a>
                        </>
                      ) : (
                        <p>{currentLocation.phoneNote || 'Coming soon'}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">
                      <Mail size={20} />
                    </div>
                    <div className="detail-content">
                      <h4>Email</h4>
                      <p>{currentLocation.email}</p>
                      <a href={`mailto:${currentLocation.email}`} className="email-link">
                        Send email
                      </a>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">
                      <Clock size={20} />
                    </div>
                    <div className="detail-content">
                      <h4>Business Hours</h4>
                      <p>{currentLocation.hours}</p>
                      <span className="status-badge">Open Now</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <h4>Need Immediate Assistance?</h4>
                <div className="action-buttons">
                  <motion.button 
                    className="action-btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={20} />
                    <span>Live Chat</span>
                  </motion.button>
                  <motion.button 
                    className="action-btn secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Headphones size={20} />
                    <span>Request Callback</span>
                  </motion.button>
                </div>
              </div>

              <div className="trust-indicators">
                <div className="indicator">
                  <Shield size={24} />
                  <div>
                    <h5>100% Secure</h5>
                    <p>Your data is protected</p>
                  </div>
                </div>
                <div className="indicator">
                  <Clock size={24} />
                  <div>
                    <h5>Quick Response</h5>
                    <p>Reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact