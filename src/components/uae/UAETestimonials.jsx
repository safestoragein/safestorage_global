import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './UAETestimonials.css';

const UAETestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Al Rashid",
      location: "Business Bay",
      rating: 5,
      text: "Excellent service! I've been using SafeStorage for 3 years now. The facility is always clean, climate-controlled, and the staff is very professional. Highly recommended!",
      company: "CEO, Tech Startup"
    },
    {
      name: "Sarah Johnson",
      location: "Dubai Marina",
      rating: 5,
      text: "As an expat, I needed flexible storage while traveling. SafeStorage's month-to-month terms and 24/7 access are perfect. The security gives me complete peace of mind.",
      company: "Marketing Manager"
    },
    {
      name: "Mohammed Hassan",
      location: "JLT",
      rating: 5,
      text: "Best storage solution in Dubai! The climate control is essential for protecting my business inventory. Customer service is outstanding - they even helped with moving!",
      company: "Restaurant Owner"
    },
    {
      name: "Fatima Al Maktoum",
      location: "Al Quoz",
      rating: 5,
      text: "I store my seasonal decorations and extra furniture here. The units are spacious, clean, and the biometric access makes me feel my belongings are secure.",
      company: "Interior Designer"
    },
    {
      name: "James Miller",
      location: "DIFC",
      rating: 5,
      text: "Professional service from start to finish. The online booking was simple, prices are transparent, and the facility exceeds expectations. Truly a premium service.",
      company: "Financial Advisor"
    },
    {
      name: "Priya Sharma",
      location: "Dubai Marina",
      rating: 5,
      text: "SafeStorage made my relocation so much easier! They provided free pickup for my belongings and the staff speaks multiple languages. Excellent value for money.",
      company: "IT Consultant"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="uae-testimonials">
      <div className="dubai-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Customer Reviews</span>
          <h2 className="section-title">
            What Our Customers
            <span className="highlight"> Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Join over 1 lakh satisfied customers who trust SafeStorage Dubai
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-wrapper">
          <button className="carousel-btn prev" onClick={prevTestimonial}>
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-grid">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <Quote size={30} />
                </div>
                
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>

                <p className="testimonial-text">{testimonial.text}</p>

                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                    <span className="location">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextTestimonial}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Google Reviews Badge */}
        <div className="reviews-badge">
          <div className="badge-content">
            <div className="google-logo">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="badge-info">
              <div className="rating-display">
                <strong>4.9</strong>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
              </div>
              <p>Based on 1,000+ Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAETestimonials;