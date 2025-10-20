import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What security measures does SafeStorage Global provide?',
      answer: 'We offer military-grade security with 24/7 CCTV monitoring, biometric access control, individual unit alarms, security personnel on-site, and comprehensive insurance coverage for all stored items.',
      category: 'security'
    },
    {
      question: 'How much does storage cost per month?',
      answer: 'Our storage costs vary by location and unit size, starting from $50/month for small units. We offer transparent pricing with no hidden fees, flexible contracts, and discounts for long-term storage.',
      category: 'pricing'
    },
    {
      question: 'Can I access my storage unit anytime?',
      answer: 'Yes! We provide 24/7 access to your storage unit through our mobile app and smart access system. You can visit your unit anytime that suits your schedule.',
      category: 'access'
    },
    {
      question: 'Do you offer climate-controlled storage units?',
      answer: 'Absolutely! All our facilities feature climate-controlled units maintaining optimal temperature (65-75°F) and humidity levels (30-50%) to protect sensitive items.',
      category: 'features'
    },
    {
      question: 'What sizes of storage units are available?',
      answer: 'We offer units from 25 sq ft (locker size) to 400 sq ft (garage size). Our storage experts can help you choose the perfect size based on your needs.',
      category: 'units'
    },
    {
      question: 'Is there a minimum rental period?',
      answer: 'No minimum rental period! We offer flexible month-to-month contracts. You can store for as short as one month or as long as you need.',
      category: 'contract'
    },
    {
      question: 'Do you provide moving and packing services?',
      answer: 'Yes, we offer comprehensive moving services including professional packing, free pickup from your location, and delivery when you need your items back.',
      category: 'services'
    },
    {
      question: 'How do I pay for my storage unit?',
      answer: 'We accept all major credit cards, debit cards, bank transfers, and online payments. Auto-pay options are available for your convenience.',
      category: 'payment'
    },
    {
      question: 'What items are prohibited in storage units?',
      answer: 'Prohibited items include hazardous materials, perishables, illegal items, and live animals. Our team can provide a complete list and suggest alternatives for special items.',
      category: 'rules'
    },
    {
      question: 'Can I share my storage unit with someone else?',
      answer: 'Yes, you can authorize additional users through our app. Each person gets their own access code while you maintain primary control of the unit.',
      category: 'sharing'
    }
  ]

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="faq-badge">
            <HelpCircle size={16} />
            <span>Frequently Asked Questions</span>
          </motion.div>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            Find answers to common questions about our storage services
          </p>
        </motion.div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <motion.button
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  whileHover={{ backgroundColor: '#f8fafc' }}
                >
                  <h3>{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="faq-icon"
                  >
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {activeIndex === index && (
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

          <motion.div 
            className="faq-support"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="support-card">
              <MessageSquare size={40} className="support-icon" />
              <h3>Still Have Questions?</h3>
              <p>Our storage experts are here to help you find the perfect solution</p>
              
              <div className="support-options">
                <div className="support-item">
                  <strong>Call Us</strong>
                  <p>+1 (800) 123-4567</p>
                </div>
                <div className="support-item">
                  <strong>Email</strong>
                  <p>support@safestorage.global</p>
                </div>
                <div className="support-item">
                  <strong>Live Chat</strong>
                  <p>Available 24/7</p>
                </div>
              </div>
              
              <motion.button 
                className="btn-support"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Expert Help
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ