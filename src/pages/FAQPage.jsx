import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronDown, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📚' },
    { id: 'general', name: 'General', icon: '💡' },
    { id: 'pricing', name: 'Pricing & Payment', icon: '💰' },
    { id: 'storage', name: 'Storage Units', icon: '📦' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'access', name: 'Access & Hours', icon: '🕐' },
    { id: 'moving', name: 'Moving Services', icon: '🚚' },
    { id: 'international', name: 'International', icon: '🌍' }
  ]

  const faqs = [
    {
      category: 'general',
      question: 'What is SafeStorage and how does it work?',
      answer: 'SafeStorage is a premium storage solution provider operating across India, Dubai, and the UK. We offer secure, climate-controlled storage units for personal and business needs. Simply book a unit online, we\'ll pick up your items for free, store them safely, and deliver them back whenever you need them.'
    },
    {
      category: 'general',
      question: 'What items can I store with SafeStorage?',
      answer: 'You can store almost everything including furniture, appliances, documents, seasonal items, sports equipment, and business inventory. However, we cannot store hazardous materials, perishables, illegal items, or living things. Our team will guide you on any specific restrictions.'
    },
    {
      category: 'pricing',
      question: 'How much does storage cost?',
      answer: 'Our pricing depends on the unit size, duration, and location. We offer flexible plans starting from ₹999/month in India, AED 199/month in Dubai, and £49/month in the UK. We also provide discounts for long-term storage and have special rates for students and businesses.'
    },
    {
      category: 'pricing',
      question: 'Are there any hidden charges?',
      answer: 'No, we believe in transparent pricing. The quoted price includes storage, basic insurance, and 24/7 security. Additional services like packing materials, extended insurance, or frequent access may have separate charges which will be clearly communicated upfront.'
    },
    {
      category: 'storage',
      question: 'What sizes of storage units are available?',
      answer: 'We offer various unit sizes from 25 sq ft lockers to 300 sq ft rooms. Our team will help you choose the right size based on your items. You can also use our online space calculator to estimate your needs.'
    },
    {
      category: 'storage',
      question: 'Is climate control available for all units?',
      answer: 'Yes, all our facilities maintain optimal temperature (20-25°C) and humidity (30-50%) levels. This is especially important for storing electronics, documents, artwork, and furniture to prevent damage from extreme weather conditions.'
    },
    {
      category: 'security',
      question: 'How secure are the storage facilities?',
      answer: 'Our facilities feature 24/7 CCTV surveillance, biometric access control, individual unit alarms, security guards, and fire detection systems. Only you have access to your unit, and all visits are logged. We also provide complimentary insurance coverage up to ₹1 lakh.'
    },
    {
      category: 'security',
      question: 'Is my stored property insured?',
      answer: 'Yes, basic insurance coverage is included with all storage plans. You can opt for additional coverage for high-value items. Our insurance covers damage from fire, water, theft, and natural disasters, giving you complete peace of mind.'
    },
    {
      category: 'access',
      question: 'Can I access my items anytime?',
      answer: 'You have 24/7 access to your storage unit through our mobile app. Simply book a visit slot, and use your unique access code to enter the facility. For assisted access or delivery, our team is available during business hours.'
    },
    {
      category: 'access',
      question: 'How do I retrieve my items?',
      answer: 'You have three options: 1) Visit the facility and collect items yourself, 2) Request specific items through our app for delivery, or 3) Schedule a full unit clearance. We maintain a digital inventory with photos, making it easy to request specific items.'
    },
    {
      category: 'moving',
      question: 'Do you provide packing and moving services?',
      answer: 'Yes, we offer comprehensive packing and moving services. Our trained team can pack your items professionally, transport them to our facility, and even help with unpacking when you retrieve them. Packing materials are available at competitive prices.'
    },
    {
      category: 'moving',
      question: 'Is pickup and delivery really free?',
      answer: 'Yes, we provide hassle-free pickup and delivery services at no extra cost for standard storage contracts. This includes one pickup when you start storage and one delivery when you end it. Additional pickups/deliveries are available at nominal charges.'
    },
    {
      category: 'international',
      question: 'Can I transfer items between countries?',
      answer: 'Yes, we facilitate international transfers between our facilities in India, Dubai, and the UK. This service is perfect for expats and businesses. We handle all logistics and customs documentation, making international relocation seamless.'
    },
    {
      category: 'international',
      question: 'Do you offer storage for international students?',
      answer: 'Absolutely! We have special student packages with flexible terms, discounted rates, and summer storage options. Many international students use our services during breaks or when switching accommodations.'
    },
    {
      category: 'general',
      question: 'What is the minimum storage duration?',
      answer: 'Our minimum storage period is one month, but we offer daily pro-rated charges if you need to store for less. For maximum savings, consider our 3, 6, or 12-month prepaid plans which come with significant discounts.'
    },
    {
      category: 'general',
      question: 'How do I book a storage unit?',
      answer: 'Booking is simple: 1) Use our online calculator to determine space needed, 2) Select your preferred location and unit size, 3) Choose your plan duration, 4) Schedule a free pickup, 5) Our team will collect, inventory, and store your items safely.'
    },
    {
      category: 'storage',
      question: 'Can I upgrade or downgrade my unit size?',
      answer: 'Yes, you can change your unit size anytime based on availability. If you need more space, we\'ll help you upgrade. If you\'re using less space than expected, we can downgrade and adjust your billing accordingly.'
    },
    {
      category: 'security',
      question: 'Who has access to my storage unit?',
      answer: 'Only you and your authorized nominees have access to your unit. Our staff cannot enter your unit without your permission except in emergencies. All access is logged and you receive notifications for any unit activity.'
    },
    {
      category: 'pricing',
      question: 'Do you offer corporate/business accounts?',
      answer: 'Yes, we have tailored solutions for businesses including bulk storage discounts, dedicated account managers, flexible contracts, and integrated inventory management systems. Contact our business team for customized quotes.'
    },
    {
      category: 'access',
      question: 'Can someone else access my unit on my behalf?',
      answer: 'Yes, you can authorize nominees through our app. They\'ll receive a temporary access code valid for specific dates/times. You\'ll be notified when they access the unit, maintaining complete security and transparency.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to know about SafeStorage
          </motion.p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="faq-search-section">
        <div className="container">
          <motion.div 
            className="faq-search-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="faq-categories-section">
        <div className="container">
          <div className="faq-categories-grid">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`faq-category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="faq-items-section">
        <div className="container">
          <div className="faq-items-wrapper">
            {filteredFAQs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <motion.button 
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleQuestion(index)}
                  whileHover={{ backgroundColor: '#f8f9fa' }}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <HelpCircle size={48} />
              <h3>No results found</h3>
              <p>Try searching with different keywords or browse categories above</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Contact Support */}
      <div className="faq-support-section">
        <div className="container">
          <motion.div 
            className="support-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Still have questions?</h3>
            <p>Our customer support team is here to help you 24/7</p>
            
            <div className="support-options">
              <motion.div 
                className="support-option"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={24} />
                <h4>Live Chat</h4>
                <p>Chat with our team instantly</p>
                <button className="support-btn">Start Chat</button>
              </motion.div>

              <motion.div 
                className="support-option"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={24} />
                <h4>Call Us</h4>
                <p>Speak to our experts</p>
                <a href="tel:+919876543210" className="support-btn">+91 98765 43210</a>
              </motion.div>

              <motion.div 
                className="support-option"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
                <h4>Email Support</h4>
                <p>We'll respond within 24 hours</p>
                <a href="mailto:support@safestorage.global" className="support-btn">Send Email</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage