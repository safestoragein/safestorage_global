import React, { createContext, useState, useContext } from 'react';

const CountryContext = createContext();

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within CountryProvider');
  }
  return context;
};

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('global');

  const value = {
    selectedCountry,
    setSelectedCountry
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};