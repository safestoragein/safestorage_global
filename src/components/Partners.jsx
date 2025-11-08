import { motion } from 'framer-motion'
import { Building2, Handshake } from 'lucide-react'

const Partners = () => {
  const partners = [
    { name: 'Microsoft', type: 'Enterprise Client' },
    { name: 'Amazon', type: 'Enterprise Client' },
    { name: 'Google', type: 'Technology Partner' },
    { name: 'DHL', type: 'Logistics Partner' },
    { name: 'FedEx', type: 'Logistics Partner' },
    { name: 'Wells Fargo', type: 'Financial Partner' },
    { name: 'JP Morgan', type: 'Enterprise Client' },
    { name: 'Deloitte', type: 'Enterprise Client' }
  ]

  const industries = [
    { name: 'E-commerce', count: '500+' },
    { name: 'Healthcare', count: '200+' },
    { name: 'Finance', count: '150+' },
    { name: 'Technology', count: '300+' },
    { name: 'Retail', count: '400+' },
    { name: 'Manufacturing', count: '250+' }
  ]

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <motion.div 
          className="partners-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="partners-badge">
            <Handshake size={16} />
            <span>Trusted Partnerships</span>
          </motion.div>
          <h2 className="section-title">Trusted by Leading Companies</h2>
          <p className="section-subtitle">
            Fortune 500 companies and industry leaders choose SafeStorage
          </p>
        </motion.div>

        <motion.div 
          className="partners-logos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="partners-track">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="partner-logo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Building2 size={32} className="partner-icon" />
                <div className="partner-info">
                  <h4>{partner.name}</h4>
                  <p>{partner.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="industries-served"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Industries We Serve</h3>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="industry-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>{industry.count}</h4>
                <p>{industry.name} Companies</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="partnership-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="cta-content">
            <h3>Join Our Network of Success</h3>
            <p>Partner with SafeStorage for enterprise-grade storage solutions</p>
            <motion.button 
              className="btn-partner"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners