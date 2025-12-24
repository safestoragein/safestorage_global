import React, { useState, useEffect } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { 
  MapPin, Phone, Clock, Shield, Car, Package, 
  Thermometer, Key, Camera, Search, Filter,
  ChevronRight, Star, Navigation, Mail, MessageCircle,
  Wifi, Truck, DollarSign, Award, CheckCircle, ArrowRight
} from 'lucide-react';
import '../components/uae/UAELocationsPage.css';

const UAELocationsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [showMap, setShowMap] = useState(true);

  // Dubai storage locations data
  const locations = [
    {
      id: 1,
      name: 'SafeStorage Al Quoz',
      area: 'Al Quoz',
      address: 'Al Quoz Industrial Area 3, Street 4A, Dubai',
      distance: '2.5 km',
      rating: 4.8,
      reviews: 234,
      phone: '+971 50 577 3388',
      email: 'alquoz@safestorage.ae',
      hours: '24/7 Access',
      availableUnits: 45,
      startingPrice: 150,
      discount: '50% off first month',
      coordinates: { lat: 25.1172, lng: 55.2058 },
      features: ['climate-controlled', '24-7-access', 'cctv', 'drive-up', 'trolleys'],
      sizes: ['small', 'medium', 'large', 'xlarge'],
      popularFor: ['Business Storage', 'Furniture Storage', 'Document Archive'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      nearbyLandmarks: ['Dubai Mall - 15 mins', 'Airport - 20 mins', 'Metro Station - 5 mins']
    },
    {
      id: 2,
      name: 'SafeStorage Business Bay',
      area: 'Business Bay',
      address: 'Bay Square, Building 5, Business Bay, Dubai',
      distance: '3.8 km',
      rating: 4.9,
      reviews: 189,
      phone: '+971 50 577 3388',
      email: 'businessbay@safestorage.ae',
      hours: '6 AM - 10 PM',
      availableUnits: 32,
      startingPrice: 200,
      discount: 'Free moving truck',
      coordinates: { lat: 25.1850, lng: 55.2650 },
      features: ['climate-controlled', 'cctv', 'elevator', 'wifi', 'package-acceptance'],
      sizes: ['small', 'medium', 'large'],
      popularFor: ['Office Storage', 'Personal Items', 'E-commerce Stock'],
      image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=600',
      nearbyLandmarks: ['Burj Khalifa - 10 mins', 'Downtown Dubai - 8 mins', 'Dubai Canal - 3 mins']
    },
    {
      id: 3,
      name: 'SafeStorage Dubai Marina',
      area: 'Dubai Marina',
      address: 'Marina Plaza, Tower B, Dubai Marina',
      distance: '5.2 km',
      rating: 4.7,
      reviews: 312,
      phone: '+971 50 577 3388',
      email: 'marina@safestorage.ae',
      hours: '24/7 Access',
      availableUnits: 28,
      startingPrice: 250,
      discount: '1 Month Free on 6+ months',
      coordinates: { lat: 25.0805, lng: 55.1405 },
      features: ['climate-controlled', '24-7-access', 'cctv', 'concierge', 'valet'],
      sizes: ['small', 'medium'],
      popularFor: ['Seasonal Storage', 'Sports Equipment', 'Home Renovation'],
      image: 'https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=600',
      nearbyLandmarks: ['JBR Beach - 5 mins', 'Marina Mall - 3 mins', 'Tram Station - 2 mins']
    },
    {
      id: 4,
      name: 'SafeStorage JLT',
      area: 'JLT',
      address: 'Cluster T, Jumeirah Lake Towers, Dubai',
      distance: '4.1 km',
      rating: 4.6,
      reviews: 156,
      phone: '+971 50 577 3388',
      email: 'jlt@safestorage.ae',
      hours: '7 AM - 11 PM',
      availableUnits: 38,
      startingPrice: 180,
      discount: 'No deposit required',
      coordinates: { lat: 25.0695, lng: 55.1415 },
      features: ['climate-controlled', 'cctv', 'elevator', 'moving-supplies', 'insurance'],
      sizes: ['small', 'medium', 'large'],
      popularFor: ['Corporate Storage', 'Household Items', 'Vehicle Storage'],
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600',
      nearbyLandmarks: ['DMCC Metro - 3 mins', 'Ibn Battuta Mall - 15 mins', 'Marina Beach - 10 mins']
    },
    {
      id: 5,
      name: 'SafeStorage Ras Al Khor',
      area: 'Ras Al Khor',
      address: 'Ras Al Khor Industrial Area 2, Dubai',
      distance: '6.7 km',
      rating: 4.5,
      reviews: 267,
      phone: '+971 50 577 3388',
      email: 'rasalkhor@safestorage.ae',
      hours: '24/7 Access',
      availableUnits: 62,
      startingPrice: 120,
      discount: 'Best prices guaranteed',
      coordinates: { lat: 25.1850, lng: 55.3250 },
      features: ['24-7-access', 'cctv', 'drive-up', 'vehicle-storage', 'outdoor-storage'],
      sizes: ['medium', 'large', 'xlarge'],
      popularFor: ['Vehicle Storage', 'Bulk Storage', 'Commercial Goods'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
      nearbyLandmarks: ['Dubai Creek - 10 mins', 'Festival City - 12 mins', 'Airport - 15 mins']
    },
    {
      id: 6,
      name: 'SafeStorage Downtown',
      area: 'Downtown Dubai',
      address: 'Boulevard Plaza, Tower 1, Downtown Dubai',
      distance: '1.2 km',
      rating: 4.9,
      reviews: 423,
      phone: '+971 50 577 3388',
      email: 'downtown@safestorage.ae',
      hours: '6 AM - 12 AM',
      availableUnits: 18,
      startingPrice: 300,
      discount: 'Premium member benefits',
      coordinates: { lat: 25.1972, lng: 55.2744 },
      features: ['climate-controlled', 'concierge', 'valet', 'premium-security', 'wifi'],
      sizes: ['small', 'medium'],
      popularFor: ['Luxury Items', 'Art Storage', 'Collectibles'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
      nearbyLandmarks: ['Burj Khalifa - 2 mins', 'Dubai Mall - 3 mins', 'Fountain - 1 min']
    }
  ];

  const areas = ['all', 'Al Quoz', 'Business Bay', 'Dubai Marina', 'JLT', 'Ras Al Khor', 'Downtown Dubai'];
  const sizes = [
    { value: 'all', label: 'All Sizes' },
    { value: 'small', label: 'Small (1-5 m²)' },
    { value: 'medium', label: 'Medium (6-15 m²)' },
    { value: 'large', label: 'Large (16-30 m²)' },
    { value: 'xlarge', label: 'Extra Large (30+ m²)' }
  ];
  const features = [
    { id: 'climate-controlled', label: 'Climate Controlled', icon: <Thermometer size={16} /> },
    { id: '24-7-access', label: '24/7 Access', icon: <Key size={16} /> },
    { id: 'cctv', label: 'CCTV Security', icon: <Camera size={16} /> },
    { id: 'drive-up', label: 'Drive-up Access', icon: <Car size={16} /> },
    { id: 'vehicle-storage', label: 'Vehicle Storage', icon: <Truck size={16} /> }
  ];

  // Filter locations based on search and filters
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesArea = selectedArea === 'all' || location.area === selectedArea;
    
    const matchesSize = selectedSize === 'all' || location.sizes.includes(selectedSize);
    
    const matchesFeatures = selectedFeatures.length === 0 || 
                           selectedFeatures.every(f => location.features.includes(f));
    
    return matchesSearch && matchesArea && matchesSize && matchesFeatures;
  });

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(f => f !== featureId)
        : [...prev, featureId]
    );
  };

  const getFeatureIcon = (feature) => {
    switch(feature) {
      case 'climate-controlled': return <Thermometer size={18} />;
      case '24-7-access': return <Key size={18} />;
      case 'cctv': return <Camera size={18} />;
      case 'drive-up': return <Car size={18} />;
      case 'elevator': return <Package size={18} />;
      case 'wifi': return <Wifi size={18} />;
      case 'trolleys': return <Truck size={18} />;
      case 'concierge': return <Award size={18} />;
      case 'valet': return <Star size={18} />;
      case 'vehicle-storage': return <Truck size={18} />;
      default: return <CheckCircle size={18} />;
    }
  };

  return (
    <div className="uae-locations-page">
      <UAEHeader />

      {/* Hero Section */}
      <section className="locations-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Find Your Perfect Storage Location in <span className="highlight">Dubai</span></h1>
            <p>6 Premium facilities across Dubai with 24/7 access and top-tier security</p>
            
            {/* Search Bar */}
           {/* <div className="hero-search">
              <div className="search-input-wrapper">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Search by area, landmark, or facility name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="search-btn">
                <Navigation size={18} />
                Use My Location
              </button>
            </div>*/}

            {/* Quick Stats */}
            <div className="hero-stats">
              <div className="stat">
                <Shield size={20} />
                <span>100% Secure</span>
              </div>
              <div className="stat">
                <MapPin size={20} />
                <span>6 Locations</span>
              </div>
              <div className="stat">
                <Key size={20} />
                <span>24/7 Access</span>
              </div>
              <div className="stat">
                <Star size={20} />
                <span>4.7+ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {/*<section className="filters-section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="filter-group">
              <label>Area</label>
              <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                {areas.map(area => (
                  <option key={area} value={area}>
                    {area === 'all' ? 'All Areas' : area}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Unit Size</label>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                {sizes.map(size => (
                  <option key={size.value} value={size.value}>{size.label}</option>
                ))}
              </select>
            </div>

            <div className="filter-group features-filter">
              <label>Features</label>
              <div className="features-dropdown">
                <button className="features-toggle">
                  <Filter size={16} />
                  {selectedFeatures.length > 0 ? `${selectedFeatures.length} selected` : 'Select features'}
                </button>
                <div className="features-menu">
                  {features.map(feature => (
                    <label key={feature.id} className="feature-option">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={() => handleFeatureToggle(feature.id)}
                      />
                      {feature.icon}
                      <span>{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button className="map-toggle" onClick={() => setShowMap(!showMap)}>
              <MapPin size={16} />
              {showMap ? 'Hide Map' : 'Show Map'}
            </button>
          </div>
        </div>
      </section>*/}

      {/* Main Content */}
      <section className="locations-content">
        <div className="container">
          <div className="content-grid">
            {/* Map Section */}
            {showMap && (
              <div className="map-section">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231283.94586200126!2d55.07183945!3d25.076280449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  
                  {/* Map Overlay with Markers */}
                  <div className="map-overlay-markers">
                    {filteredLocations.map((location, index) => (
                      <div
                        key={location.id}
                        className={`map-marker ${selectedLocation?.id === location.id ? 'active' : ''}`}
                        style={{
                          top: `${20 + index * 15}%`,
                          left: `${15 + index * 12}%`
                        }}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className="marker-badge">{index + 1}</div>
                        <div className="marker-tooltip">
                          <strong>{location.name}</strong>
                          <span>{location.availableUnits} units available</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Locations List */}
            <div className={`locations-list ${!showMap ? 'full-width' : ''}`}>
              <div className="list-header">
                <h2>{filteredLocations.length} Storage Facilities Found</h2>
                <span className="results-text">Sorted by distance from your location</span>
              </div>

              {filteredLocations.map((location) => (
                <div key={location.id} className="location-card">
                  <div className="card-image">
                    <img src={location.image} alt={location.name} />
                    {location.discount && (
                      <div className="discount-badge">{location.discount}</div>
                    )}
                    <div className="units-badge">{location.availableUnits} units</div>
                  </div>

                  <div className="card-content">
                    <div className="card-header">
                      <div className="header-left">
                        <h3>{location.name}</h3>
                        <div className="location-meta">
                          <span className="area">{location.area}</span>
                          <span className="distance">
                            <MapPin size={14} />
                            {location.distance} away
                          </span>
                          <div className="rating">
                            <Star size={14} fill="#FFD700" color="#FFD700" />
                            <span>{location.rating}</span>
                            <span className="reviews">({location.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="header-right">
                        <div className="price">
                          <span className="from">From</span>
                          <span className="amount">AED {location.startingPrice}</span>
                          <span className="period">/month</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-info">
                      <div className="info-row">
                        <MapPin size={16} />
                        <span>{location.address}</span>
                      </div>
                      <div className="info-row">
                        <Clock size={16} />
                        <span>{location.hours}</span>
                      </div>
                      <div className="info-row">
                        <Phone size={16} />
                        <span>{location.phone}</span>
                      </div>
                    </div>

                    <div className="card-features">
                      {location.features.slice(0, 5).map((feature) => (
                        <div key={feature} className="feature-tag">
                          {getFeatureIcon(feature)}
                          <span>{feature.replace(/-/g, ' ')}</span>
                        </div>
                      ))}
                      {location.features.length > 5 && (
                        <span className="more-features">+{location.features.length - 5} more</span>
                      )}
                    </div>

                    <div className="card-landmarks">
                      <strong>Nearby:</strong>
                      {location.nearbyLandmarks.map((landmark, idx) => (
                        <span key={idx} className="landmark">{landmark}</span>
                      ))}
                    </div>

                    <div className="card-popular">
                      <strong>Popular for:</strong>
                      <div className="popular-tags">
                        {location.popularFor.map((item, idx) => (
                          <span key={idx} className="popular-tag">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="card-actions">
                      <a href='tel:+97150577338'>

                      <button className="btn-primary">
                        <Phone size={16} />
                        Call Now
                      </button>
                    </a>
                      <a
  href="https://api.whatsapp.com/send/?phone=971505773388&text=Hi%2C+I%27m+interested+in+your+storage+services.+Can+you+please+provide+more+information%3F&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
>
                      <button className="btn-secondary">
                        <MessageCircle size={16} />
                        WhatsApp
                      </button> </a>
                      
                    </div>
                  </div>
                </div>
              ))}

              {filteredLocations.length === 0 && (
                <div className="no-results">
                  <MapPin size={48} />
                  <h3>No locations found</h3>
                  <p>Try adjusting your filters or search terms</p>
                  <button onClick={() => {
                    setSelectedArea('all');
                    setSelectedSize('all');
                    setSelectedFeatures([]);
                    setSearchQuery('');
                  }}>
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="locations-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Decide? Let Us Help!</h2>
            <p style = {{ color:'white' }}>Our storage experts will help you find the perfect location and unit size</p>
            <div className="cta-buttons">
              <a href='tel:+97150577338'>
              <button className="btn-primary">
                <Phone size={18} />
                Call +971 50 577 3388
              </button>
            </a>
 <a href='https://safestorageglobal.com/uae/get-quote' target='__blank'>
               <button className="btn-secondary">
                <Mail size={18} />
               Get A Free Quote
              </button>
            </a>
            </div>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAELocationsPage;