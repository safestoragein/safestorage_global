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
  // Always redirect to UAE page regardless of location
  return { 
    type: 'internal', 
    path: '/uae',
    country: 'UAE'
  };
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