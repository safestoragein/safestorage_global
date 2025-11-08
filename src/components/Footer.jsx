import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  MapPin, Phone, Mail, ChevronRight, Heart
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <h2>SafeStorage<span>Global</span></h2>
                <p>Your trusted partner for premium storage solutions across India, Dubai, and the UK.</p>
              </div>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><ChevronRight size={16} /> <a href="#services">Our Services</a></li>
                <li><ChevronRight size={16} /> <a href="#locations">Locations</a></li>
                <li><ChevronRight size={16} /> <a href="#features">Features</a></li>
                <li><ChevronRight size={16} /> <a href="#pricing">Pricing</a></li>
                <li><ChevronRight size={16} /> <a href="#faq">FAQ</a></li>
                <li><ChevronRight size={16} /> <a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Our Locations</h3>
              <div className="location-list">
                <div className="location-item">
                  <MapPin size={16} />
                  <div>
                    <h4>India</h4>
                    <p>Bangalore, Hyderabad, Chennai, Pune, Mumbai</p>
                    <p>Delhi, Noida, Kolkata, Coimbatore, Jaipur</p>
                  </div>
                </div>
                <div className="location-item">
                  <MapPin size={16} />
                  <div>
                    <h4>Dubai</h4>
                    <p>Business Bay, DIFC, JLT, Marina</p>
                  </div>
                </div>
                <div className="location-item">
                  <MapPin size={16} />
                  <div>
                    <h4>United Kingdom</h4>
                    <p>London, Manchester, Birmingham</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new locations and special offers</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
              <div className="certifications">
                <p>Certified by:</p>
                <div className="cert-badges">
                  <span>ISO 9001</span>
                  <span>ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>© 2024 SafeStorage. All rights reserved.</p>
            <div className="bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            <p className="made-with">
              Made with <Heart size={14} fill="currentColor" /> by SafeStorage Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer