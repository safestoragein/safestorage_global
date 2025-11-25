import axios from 'axios';

// Free IP geolocation API service
const getCountryFromIP = async () => {
  try {
    // Using ipapi.co free tier (1000 requests/day)
    const response = await axios.get('https://ipapi.co/json/');
    const data = response.data;
    
    // Return country code
    return {
      country: data.country_name,
      countryCode: data.country_code,
      city: data.city,
      region: data.region
    };
  } catch (error) {
    console.error('Error detecting location:', error);
    // Fallback to browser's language settings
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Map common language codes to countries
    if (browserLang.includes('en-GB')) return { countryCode: 'GB' };
    if (browserLang.includes('ar-AE')) return { countryCode: 'AE' };
    if (browserLang.includes('hi-IN') || browserLang.includes('en-IN')) return { countryCode: 'IN' };
    
    return null;
  }
};

// Determine redirect based on country
export const getRedirectPath = async () => {
  const location = await getCountryFromIP();
  
  if (!location) return null;
  
  const countryCode = location.countryCode;
  
  // Redirect logic based on country
  switch(countryCode) {
    case 'IN': // India
      return { 
        type: 'external', 
        url: 'https://safestorage.in',
        country: 'India'
      };
      
    case 'AE': // UAE (Dubai specifically)
    case 'OM': // Oman
    case 'QA': // Qatar  
    case 'KW': // Kuwait
    case 'BH': // Bahrain
    case 'SA': // Saudi Arabia
      return { 
        type: 'internal', 
        path: '/uae',
        country: 'UAE'
      };
      
    case 'GB': // United Kingdom
    case 'UK': // Alternative UK code
      return { 
        type: 'internal', 
        path: '/uk',
        country: 'UK'
      };
      
    default:
      // For other countries, don't redirect but show country selector
      return null;
  }
};

// Check if user has manually selected a country (stored in localStorage)
export const getUserCountryPreference = () => {
  return localStorage.getItem('selectedCountry');
};

// Save user's country preference
export const setUserCountryPreference = (country) => {
  localStorage.setItem('selectedCountry', country);
};

// Clear user's country preference
export const clearUserCountryPreference = () => {
  localStorage.removeItem('selectedCountry');
};