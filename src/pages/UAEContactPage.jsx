import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send,
  CheckCircle, Facebook, Instagram, Linkedin, Twitter,
  Navigation, Calendar, Users, Shield, Headphones
} from 'lucide-react';
import '../components/uae/UAEContactPage.css';

const UAEContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      primary: '+971 50 577 3388',
      secondary: '+971 4 123 4567',
      action: 'tel:+971505773388'
    },
    {
      icon: <Mail />,
      title: 'Email',
      primary: 'info@safestorage.ae',
      secondary: 'support@safestorage.ae',
      action: 'mailto:info@safestorage.ae'
    },
    {
      icon: <MapPin />,
      title: 'Head Office',
      primary: 'Al Quoz Industrial Area 3',
      secondary: 'Dubai, United Arab Emirates',
      action: null
    },
    {
      icon: <Clock />,
      title: 'Working Hours',
      primary: 'Mon-Sat: 8:00 AM - 7:00 PM',
      secondary: 'Sunday: 10:00 AM - 6:00 PM',
      action: null
    }
  ];

  const locations = [
    {
      name: 'Business Bay',
      address: 'Bay Square, Building 5',
      phone: '+971 50 111 2233',
      hours: '24/7 Access'
    },
    {
      name: 'Dubai Marina',
      address: 'Marina Plaza, Tower B',
      phone: '+971 50 222 3344',
      hours: '24/7 Access'
    },
    {
      name: 'Al Quoz',
      address: 'Al Quoz Industrial 3',
      phone: '+971 50 333 4455',
      hours: '24/7 Access'
    },
    {
      name: 'JLT',
      address: 'Cluster A, Lake View',
      phone: '+971 50 444 5566',
      hours: '24/7 Access'
    }
  ];

  return (
    <div className="uae-contact-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <div className="contact-hero-content">
            <h1>Get in Touch with <span className="text-highlight">SafeStorage Dubai</span></h1>
            <p>We're here to help you find the perfect storage solution for your needs</p>
            
            <div className="hero-quick-contacts">
              <a href="tel:+971505773388" className="quick-contact-btn">
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/971505773388" className="quick-contact-btn whatsapp">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:info@safestorage.ae" className="quick-contact-btn">
                <Mail size={18} />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="contact-info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p className="info-primary">{info.primary}</p>
                <p className="info-secondary">{info.secondary}</p>
                {info.action && (
                  <a href={info.action} className="info-action">
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+971 XX XXX XXXX"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="storage-inquiry">Storage Unit Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="business">Business Storage</option>
                      <option value="moving">Moving Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your storage needs..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <div className="form-footer">
                  <div className="form-note">
                    <CheckCircle size={16} />
                    <span>We respect your privacy. Your information will never be shared.</span>
                  </div>
                  <button type="submit" className="submit-btn">
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Sidebar */}
            <div className="contact-sidebar">
              {/* WhatsApp Card */}
              <div className="whatsapp-card">
                <div className="whatsapp-header">
                  <MessageCircle size={24} />
                  <h3>Chat on WhatsApp</h3>
                </div>
                <p>Get instant responses to your queries</p>
                <a href="https://wa.me/971505773388" className="whatsapp-btn">
                  <MessageCircle size={18} />
                  Start WhatsApp Chat
                </a>
              </div>

              {/* Support Features */}
              <div className="support-features">
                <h3>Why Choose SafeStorage?</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <Headphones size={20} />
                    <div>
                      <strong>24/7 Support</strong>
                      <span>Always here to help</span>
                    </div>
                  </div>
                  <div className="feature-item">
                    <Users size={20} />
                    <div>
                      <strong>Expert Team</strong>
                      <span>10+ years experience</span>
                    </div>
                  </div>
                  <div className="feature-item">
                    <Shield size={20} />
                    <div>
                      <strong>Secure Storage</strong>
                      <span>SIRA approved facility</span>
                    </div>
                  </div>
                  <div className="feature-item">
                    <Calendar size={20} />
                    <div>
                      <strong>Flexible Terms</strong>
                      <span>No long contracts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-card">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-link">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-link">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="social-link">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <div className="contact-container">
          <div className="section-header">
            <h2>Our Storage Locations in Dubai</h2>
            <p>Visit any of our convenient locations across Dubai</p>
          </div>

          <div className="locations-grid">
            {locations.map((location, idx) => (
              <div key={idx} className="location-card">
                <div className="location-header">
                  <Navigation size={20} />
                  <h3>{location.name}</h3>
                </div>
                <div className="location-info">
                  <p><MapPin size={16} /> {location.address}</p>
                  <p><Phone size={16} /> {location.phone}</p>
                  <p><Clock size={16} /> {location.hours}</p>
                </div>
                <button className="get-directions-btn">
                  Get Directions →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786518889863!2d55.22116831500945!3d25.196919383896607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xd7d0f0e8e93b3eb!2sAl%20Quoz%20Industrial%20Area%203%2C%20Dubai!5e0!3m2!1sen!2sae!4v1647856521398!5m2!1sen!2sae"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Find the perfect storage solution for your needs today</p>
            <div className="cta-buttons">
              <a href="tel:+971505773388" className="cta-btn primary">
                <Phone size={18} />
                Call Now
              </a>
              <a href="/uae/get-quote" className="cta-btn secondary">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEContactPage;