import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X } from 'lucide-react';
import { setUserCountryPreference } from '../services/geoLocation';

const CountrySelector = () => {
  const [showSelector, setShowSelector] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user hasn't selected a country and is on the home page
    const hasPreference = localStorage.getItem('selectedCountry');
    const isHomePage = window.location.pathname === '/';
    
    if (!hasPreference && isHomePage) {
      // Show selector after a short delay
      setTimeout(() => {
        setShowSelector(true);
      }, 2000);
    }
  }, []);

  const countries = [
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      description: 'Premium storage solutions across major Indian cities',
      action: () => {
        setUserCountryPreference('india');
        window.location.href = 'https://safestorage.in/';
      }
    },
    {
      id: 'uae',
      name: 'UAE',
      flag: '🇦🇪',
      description: 'Secure storage facilities in Dubai and Abu Dhabi',
      action: () => {
        setUserCountryPreference('uae');
        navigate('/uae');
        setShowSelector(false);
      }
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      description: 'Professional storage services across the UK',
      action: () => {
        setUserCountryPreference('uk');
        navigate('/uk');
        setShowSelector(false);
      }
    },
    {
      id: 'global',
      name: 'Global',
      flag: '🌍',
      description: 'Explore all our international locations',
      action: () => {
        setUserCountryPreference('global');
        navigate('/');
        setShowSelector(false);
      }
    }
  ];

  if (!showSelector) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="country-selector-overlay"
        onClick={() => setShowSelector(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="country-selector-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="close-selector"
            onClick={() => setShowSelector(false)}
          >
            <X size={24} />
          </button>
          
          <div className="selector-header">
            <Globe size={48} color="#2563eb" />
            <h2>Choose Your Location</h2>
            <p>Select your country for the best experience</p>
          </div>

          <div className="countries-grid">
            {countries.map((country) => (
              <motion.button
                key={country.id}
                className="country-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={country.action}
              >
                <div className="country-flag-large">{country.flag}</div>
                <h3>{country.name}</h3>
                <p>{country.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountrySelector;