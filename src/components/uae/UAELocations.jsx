import React, { useState } from 'react';
import { MapPin, Clock, Phone, Car, Navigation } from 'lucide-react';
import './UAELocations.css';

const UAELocations = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      name: "Al Quoz",
      address: "Al Quoz Industrial Area 3, Dubai, UAE",
      phone: "+971 50 577 3388",
      hours: "Office: 8AM - 6PM | Access: 24/7",
      features: ["Largest facility", "Loading docks", "Free parking", "Moving services"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785632014!2d55.22139831500945!3d25.197169837710674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sAl%20Quoz%20Industrial%20Area%203!5e0!3m2!1sen!2sae!4v1234567890"
    },
    {
      name: "Business Bay",
      address: "Bay Square, Building 11, Dubai",
      phone: "+971 50 577 3388",
      hours: "Office: 8AM - 6PM | Access: 24/7",
      features: ["Premium location", "Valet parking", "Executive units", "Meeting rooms"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6498714284657!2d55.257388315009565!3d25.248763836744654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d45d0a9f9e7%3A0x6e9e6a5d7f5d5d5d!2sBusiness%20Bay!5e0!3m2!1sen!2sae!4v1234567890"
    },
    {
      name: "Dubai Marina",
      address: "Marina Plaza, Tower 2, Dubai Marina",
      phone: "+971 50 577 3388",
      hours: "Office: 8AM - 6PM | Access: 24/7",
      features: ["Waterfront location", "Climate controlled", "Small units available", "Express service"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.4987894850245!2d55.13363931500776!3d25.085017841950854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4f445f40ad%3A0x7e8b8c8f8f8f8f8f!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1234567890"
    },
    {
      name: "JLT",
      address: "Cluster F, Jumeirah Lake Towers",
      phone: "+971 50 577 3388",
      hours: "Office: 8AM - 6PM | Access: 24/7",
      features: ["Central location", "Easy metro access", "Business storage", "Document storage"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.917380279735!2d55.14444631500803!3d25.105147041149563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b50d1c30e9f%3A0xa1a1a1a1a1a1a1a1!2sJumeirah%20Lake%20Towers!5e0!3m2!1sen!2sae!4v1234567890"
    },
    {
      name: "DIFC",
      address: "Gate District, DIFC, Dubai",
      phone: "+971 50 577 3388",
      hours: "Office: 8AM - 6PM | Access: 24/7",
      features: ["Financial district", "High security", "Premium units", "Concierge service"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.239374646943!2d55.27846931500975!3d25.262394136244256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc8833693f7%3A0xb1b1b1b1b1b1b1b1!2sDubai%20International%20Financial%20Centre!5e0!3m2!1sen!2sae!4v1234567890"
    }
  ];

  return (
    <section className="uae-locations">
      <div className="dubai-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Our Locations</span>
          <h2 className="section-title">
            5 Convenient Locations
            <span className="highlight"> Across Dubai</span>
          </h2>
          <p className="section-subtitle">
            Find a SafeStorage facility near you with easy access from major highways
          </p>
        </div>

        {/* Locations Grid */}
        <div className="locations-container">
          {/* Location Tabs */}
          <div className="location-tabs">
            {locations.map((location, index) => (
              <button
                key={index}
                className={`location-tab ${activeLocation === index ? 'active' : ''}`}
                onClick={() => setActiveLocation(index)}
              >
                <MapPin size={20} />
                <span>{location.name}</span>
              </button>
            ))}
          </div>

          {/* Active Location Details */}
          <div className="location-content">
            <div className="location-details">
              <div className="location-header">
                <h3>{locations[activeLocation].name}</h3>
               {/* <button className="directions-btn">
                  <Navigation size={18} />
                  Get Directions
                </button>*/}
              </div>

              <div className="location-info">
                <div className="info-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Address</strong>
                    <p>{locations[activeLocation].address}</p>
                  </div>
                </div>

                <div className="info-item">
                  <Phone size={20} />
                  <div>
                    <strong>Phone</strong>
                    <p>{locations[activeLocation].phone}</p>
                  </div>
                </div>

                <div className="info-item">
                  <Clock size={20} />
                  <div>
                    <strong>Hours</strong>
                    <p>{locations[activeLocation].hours}</p>
                  </div>
                </div>
              </div>

              <div className="location-features">
                <strong>Features at this location:</strong>
                <div className="features-list">
                  {locations[activeLocation].features.map((feature, idx) => (
                    <span key={idx} className="feature-badge">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
<a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
              <button className="book-location-btn">
                Get A Free Quote
              </button>
            </a>
            </div>

            {/* Map */}
            <div className="location-map">
              <iframe
                src={locations[activeLocation].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`SafeStorage ${locations[activeLocation].name} Location`}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Service Area Banner */}
        <div className="service-area-banner">
          <Car size={40} />
          <div>
            <h3>Hassle - Free Pickup Service</h3>
            <p>We offer hassle free pickup service within Dubai</p>
          </div>
          <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
          <button className="schedule-pickup-btn">Schedule Pickup</button></a>
        </div>
      </div>
    </section>
  );
};

export default UAELocations;