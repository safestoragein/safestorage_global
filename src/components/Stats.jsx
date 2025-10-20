import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const stats = [
    { value: 35, suffix: '+', label: 'Facilities Worldwide' },
    { value: 100000, suffix: '+', label: 'Happy Customers' },
    { value: 99.9, suffix: '%', label: 'Ontime Guarantee' },
    { value: 10, suffix: '+', label: 'Years of Excellence' }
  ]

  const CountUp = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!isVisible) return
      
      let startTime
      const startValue = 0
      
      const updateCount = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * (end - startValue) + startValue))
        
        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }
      
      requestAnimationFrame(updateCount)
    }, [isVisible, end, duration])
    
    return <span>{count}{suffix}</span>
  }

  return (
    <section className="stats">
      <div className="stats-bg">
        <div className="stats-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="stats-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsVisible(true)}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="stat-value">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats