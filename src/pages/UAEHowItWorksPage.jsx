import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Search, Phone, Calendar, Truck, Key, Shield, Check, ArrowRight, 
  Clock, MapPin, Package, CreditCard, Smartphone, Video, MessageCircle,
  FileText, Home, ChevronRight, Play, Star, Award, Users, Zap
} from 'lucide-react';
import '../components/uae/UAEHowItWorksPage.css';

const UAEHowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeTab, setActiveTab] = useState('personal');

  const steps = [
    {
      id: 1,
      number: '01',
      icon: <Search size={30} />,
      title: 'Packing',
      shortDesc: 'We pack at your home',
      fullDesc: 'Protect your belongings with our 3-layer professional packing system designed for maximum safety and damage prevention. Our experts ensure every item is securely packed using high-quality materials for worry-free storage and transport.',
features: [
  '3-layer protective packing system',
  'High-quality packing materials',
  'Expert handling for fragile items',
  'Maximum safety & damage prevention'
],
      time: '2 minutes'
    },
    {
      id: 2,
      number: '02',
      icon: <Calendar size={30} />,
     title: 'Doorstep Pickup',
shortDesc: 'We pick up your items directly from your doorstep',
fullDesc: 'Schedule a hassle-free doorstep pickup where our trained team arrives at your location, professionally packs your items using our 3-layer safety system, and transports them securely to our storage facility.',
features: [
  'Doorstep pickup at your convenience',
  'Professional 3-layer packing',
  'Trained packing & handling team',
  'Safe and secure transportation'
],
      time: '30 seconds'
    },
    {
      id: 3,
      number: '03',
      icon: <Truck size={30} />,
     title: 'Storing',
shortDesc: 'Your items are stored safely in our secure warehouses',
fullDesc: 'Your belongings are carefully stored in our secure, monitored warehouses with strict safety protocols to ensure protection, cleanliness, and long-term preservation.',
features: [
  '24/7 monitored secure warehouses',
  'Clean & well-maintained storage units',
  'Restricted access & safety controls',
  'Protection from damage, dust & moisture'
],
      time: 'Same day'
    },
    {
      id: 4,
      number: '04',
      icon: <Key size={30} />,
    title: 'Doorstep Delivery',
shortDesc: 'We deliver your items back to your doorstep',
fullDesc: 'Request delivery anytime and our team will safely retrieve, pack, and deliver your stored items directly to your doorstep at your preferred time.',
features: [
  'On-demand doorstep delivery',
  'Safe handling during retrieval',
  'Flexible delivery scheduling',
  'Careful unpacking on request'
],
      time: 'Always available'
    }
  ];

  const processFeatures = [
    {
      icon: <Smartphone />,
      title: 'Digital Experience',
      desc: 'Manage everything from our mobile app'
    },
    {
      icon: <Shield />,
      title: 'Maximum Security',
      desc: 'CCTV, biometric access, and on-site security'
    },
    {
      icon: <CreditCard />,
      title: 'Flexible Payment',
      desc: 'Pay monthly, no long-term contracts'
    },
    {
      icon: <MessageCircle />,
      title: '24/7 Support',
      desc: 'Help available anytime you need it'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I move in?',
      answer: 'You can move in immediately! Book online and get instant access, or visit us for same-day move-in.'
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No! We offer flexible month-to-month rentals. Stay as long or short as you need.'
    },
    {
      question: 'Is the moving truck really free?',
      answer: 'Yes! New customers get up to 2 hours of free truck use for move-in. Fuel included.'
    },
    {
      question: 'Can I change unit sizes later?',
      answer: 'Absolutely! Upgrade or downsize anytime based on availability. We\'ll even help you move.'
    },
    {
      question: 'What security measures are in place?',
      answer: '24/7 CCTV monitoring, biometric access control, individual unit alarms, and on-site security guards.'
    },
    {
      question: 'Can someone else access my unit?',
      answer: 'You can authorize additional users through our app or customer service. You control who has access.'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al Rashid',
      location: 'Business Bay',
      rating: 5,
      text: 'The process was incredibly smooth. Booked online, moved in the same day with their free truck. Couldn\'t be easier!'
    },
    {
      name: 'Sarah Mitchell',
      location: 'Dubai Marina',
      rating: 5,
      text: 'Love the 24/7 access and mobile app. I can check on my unit anytime and even grant access to my assistant remotely.'
    },
    {
      name: 'Raj Patel',
      location: 'JLT',
      rating: 5,
      text: 'Best storage experience in Dubai. The staff helped me choose the right size and the whole process took less than 30 minutes.'
    }
  ];

  return (
    <div className="uae-how-it-works-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="hiw-hero">
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <Zap size={16} />
                <span>Quick & Easy Process</span>
              </div>
              <h1>
                Store With <span className="text-gradient">Confidence</span>
                <br />In 4 Simple Steps
              </h1>
              <p>Join 1 Lakh+ satisfied customers who trust SafeStorage Dubai for their storage needs. 
                 Get started in minutes with our streamlined process.</p>
              
              <div className="hero-features">
                <div className="hero-feature">
                  <Check size={20} />
                  <span>No Hidden Fees</span>
                </div>
                <div className="hero-feature">
                  <Check size={20} />
                  <span>Instant Booking</span>
                </div>
                <div className="hero-feature">
                  <Check size={20} />
                  <span>Flexible Terms</span>
                </div>
              </div>

              <div className="hero-cta">
                <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>

                <button className="btn-primary">
                  <Calendar size={18} />
                  Start Storing Today
                </button></a>
                  <a href='tel:+97150577338' target='__blank'>

                <button className="btn-secondary">
                  <Phone size={18} />
                  <span>Talk to Expert</span>
                </button></a>
              </div>

              <div className="hero-trust">
                <div className="trust-avatars">
                  <div className="avatar">👤</div>
                  <div className="avatar">👤</div>
                  <div className="avatar">👤</div>
                  <div className="avatar">👤</div>
                </div>
                <div className="trust-text">
                  <strong>1 Lakh+ Happy Customers</strong>
                  <div className="trust-rating">
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-header">
                  <h3>4 Simple Steps</h3>
                  <span className="visual-badge">Quick Process</span>
                </div>
                <div className="process-timeline">
                  {steps.map((step, index) => (
                    <div key={step.id} className="timeline-step">
                      {index < steps.length - 1 && <div className="step-connector"></div>}
                      <div className="step-number-box">
                        <span>{step.number}</span>
                      </div>
                      <div className="step-content">
                        <div className="step-icon-box">
                          {React.cloneElement(step.icon, { size: 20 })}
                        </div>
                        <div className="step-details">
                          <h4>{step.title}</h4>
                          <p>{step.shortDesc}</p>
                          <span className="step-time">
                            <Clock size={14} />
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="visual-footer">
                  <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
                  <button className="get-started-btn">
                    Get Started Now
                    <ArrowRight size={16} />
                  </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="process-steps">
        <div className="container">
          <div className="section-header">
            <h2>4 Simple Steps to Storage</h2>
            <p>Get your storage unit in minutes, not hours</p>
          </div>

          <div className="steps-container">
            <div className="steps-timeline">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`timeline-item ${activeStep === step.id ? 'active' : ''} ${step.id < activeStep ? 'completed' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="timeline-marker" >
                    <span className="step-number" style={{ paddingTop: '10px', marginTop:'15px' }}>{step.number}</span>
                    {step.id < activeStep && <Check className="check-icon" size={20} />}
                  </div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.shortDesc}</p>
                    <span className="step-time">{step.time}</span>
                  </div>
                  {index < steps.length - 1 && <div className="timeline-line" />}
                </div>
              ))}
            </div>

            <div className="step-detail-card">
              {steps.map(step => (
                <div 
                  key={step.id} 
                  className={`detail-content ${activeStep === step.id ? 'active' : ''}`}
                >
                  <div className="detail-header">
                    <div className="detail-icon">{step.icon}</div>
                    <div>
                      <h3>{step.title}</h3>
                      <span className="detail-time">
                        <Clock size={14} />
                        {step.time}
                      </span>
                    </div>
                  </div>
                  <p className="detail-desc">{step.fullDesc}</p>
                  <ul className="detail-features">
                    {step.features.map((feature, idx) => (
                      <li key={idx}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
                  <button className="detail-cta">
                    {step.id === 1 ? 'Browse Units' : 
                     step.id === 2 ? 'Book Now' :
                     step.id === 3 ? 'Learn More' : 
                     'Sign Up'}
                    <ArrowRight size={16} />
                  </button>
                </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Storage Types Section */}
      <section className="storage-types">
        <div className="container">
          <div className="section-header">
            <h2>Storage Solutions for Everyone</h2>
            <p>Whether personal or business, we have the perfect solution</p>
          </div>

          <div className="types-tabs">
            <button 
              className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              <Home size={20} />
              Personal Storage
            </button>
            <button 
              className={`tab ${activeTab === 'business' ? 'active' : ''}`}
              onClick={() => setActiveTab('business')}
            >
              <Package size={20} />
              Business Storage
            </button>
          </div>

          <div className="types-content">
            {activeTab === 'personal' && (
              <div className="type-grid">
                <div className="type-card">
                  <div className="type-icon">🏠</div>
                  <h3>Moving Home</h3>
                  <p>Store furniture and belongings during your move</p>
                  <ul>
                    <li>Flexible short-term options</li>
                    <li>Various unit sizes</li>
                    <li>Packing supplies available</li>
                  </ul>
                </div>
                <div className="type-card">
                  <div className="type-icon">🎿</div>
                  <h3>Seasonal Items</h3>
                  <p>Keep sports equipment and seasonal decorations</p>
                  <ul>
                    <li>Climate-controlled units</li>
                    <li>Easy seasonal access</li>
                    <li>Compact locker sizes</li>
                  </ul>
                </div>
                <div className="type-card">
                  <div className="type-icon">🚗</div>
                  <h3>Vehicle Storage</h3>
                  <p>Secure parking for cars, bikes, and boats</p>
                  <ul>
                    <li>Indoor & outdoor options</li>
                    <li>24/7 security monitoring</li>
                    <li>Battery maintenance service</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div className="type-grid">
                <div className="type-card">
                  <div className="type-icon">📦</div>
                  <h3>Inventory Storage</h3>
                  <p>Store excess stock and supplies</p>
                  <ul>
                    <li>Bulk storage discounts</li>
                    <li>Inventory management tools</li>
                    <li>Delivery acceptance service</li>
                  </ul>
                </div>
                <div className="type-card">
                  <div className="type-icon">📁</div>
                  <h3>Document Archive</h3>
                  <p>Secure storage for business records</p>
                  <ul>
                    <li>Climate-controlled environment</li>
                    <li>Organized filing systems</li>
                    <li>Retrieval services</li>
                  </ul>
                </div>
                <div className="type-card">
                  <div className="type-icon">🏢</div>
                  <h3>Office Storage</h3>
                  <p>Extra space for office equipment</p>
                  <ul>
                    <li>Furniture storage</li>
                    <li>IT equipment security</li>
                    <li>Flexible lease terms</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="process-features">
        <div className="container">
          <div className="features-grid">
            {processFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-content">
            <div className="video-text">
              <h2>See How Easy It Is</h2>
              <p>Watch our 2-minute video to see the entire process from booking to move-in</p>
              <div className="video-features">
                <div className="vf-item">
                  <Video size={20} />
                  <span>Virtual facility tour</span>
                </div>
                <div className="vf-item">
                  <Smartphone size={20} />
                  <span>App walkthrough</span>
                </div>
                <div className="vf-item">
                  <Key size={20} />
                  <span>Access demonstration</span>
                </div>
              </div>
            </div>
            <div className="video-player">
              <div className="video-thumbnail">
                <button className="play-btn">
                  <Play size={40} />
                </button>
                <div className="video-duration">2:45</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Join thousands of satisfied customers in Dubai</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ff6b35" color="#ff6b35" />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section">
        <div className="container">
          <div className="faqs-content">
            <div className="faqs-header">
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our storage process</p>
            </div>

            <div className="faqs-grid">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h3>
                    <FileText size={18} />
                    {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="faqs-cta">
              <p>Still have questions?</p>
              <div className="cta-buttons">
                <a
  href="https://api.whatsapp.com/send/?phone=971505773388&text=Hi%2C+I%27m+interested+in+your+storage+services.+Can+you+please+provide+more+information%3F&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="btn-chat">
    <MessageCircle size={18} />
    Chat with us
  </button>
</a>
<a href='tel:+97150577338'>
                <button className="btn-call">
                  <Phone size={18} />
                  Call Us 24/7
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Join 1 Lakh+ satisfied customers • No deposit required • Move in today</p>
              <div className="cta-benefits">
                <span><Check /> 50% off first month</span>
                <span><Check /> Hassle - Free storing</span>
                <span><Check /> 24/7 access</span>
              </div>
              <div className="cta-actions">
                <button className="btn-primary">
                  <Calendar size={18} />
                  Book Your Unit
                </button>
                <a href='tel:+97150577338'>

                <button className="btn-secondary">
                  <Phone size={18} />
                  +971 50 577 3388
                </button></a>
              </div>
            </div>
            <div className="cta-visual" style= {{ backgroundColor:'#002850' }}>
              <div className="trust-badges">
                <div className="badge">
                  <Award size={30} />
                  <span>Most Trusted Unit</span>
                </div>
                <div className="badge">
                  <Users size={30} />
                  <span>1 Lakh+ Customers</span>
                </div>
                <div className="badge">
                  <Star size={30} />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEHowItWorksPage;