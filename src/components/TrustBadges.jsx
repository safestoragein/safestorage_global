import { motion } from 'framer-motion'
import { Shield, Award, Lock, CheckCircle, TrendingUp, Users, Globe, Zap } from 'lucide-react'

const TrustBadges = () => {
  const certifications = [
    {
      icon: <Shield size={32} />,
      title: 'ISO 9001:2015',
      description: 'Quality Management Certified',
      color: '#3b82f6'
    },
    {
      icon: <Lock size={32} />,
      title: 'SOC 2 Type II',
      description: 'Security & Compliance Verified',
      color: '#10b981'
    },
    {
      icon: <Award size={32} />,
      title: 'Best Storage 2024',
      description: 'Industry Excellence Award',
      color: '#f59e0b'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'SSA Certified',
      description: 'Self Storage Association Member',
      color: '#8b5cf6'
    }
  ]

  const trustMetrics = [
    { number: '15+', label: 'Years of Excellence', icon: <TrendingUp size={20} /> },
    { number: '50,000+', label: 'Satisfied Customers', icon: <Users size={20} /> },
    { number: '35', label: 'Global Facilities', icon: <Globe size={20} /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Zap size={20} /> }
  ]

  return (
    <section className="trust-badges" id="trust">
      <div className="container">
        <motion.div 
          className="trust-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            Certified excellence in storage solutions with global recognition
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="cert-icon" style={{ color: cert.color }}>
                {cert.icon}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <div className="verified-badge">
                <CheckCircle size={16} />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="trust-metrics"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="metric-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-content">
                <h4>{metric.number}</h4>
                <p>{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBadges