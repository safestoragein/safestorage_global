import { useEffect } from 'react';

const SEOHead = ({ 
  title = "SafeStorage - Secure Storage Solutions", 
  description = "Premium storage solutions across India, Dubai, and UK",
  keywords = "storage, secure storage, document storage, business storage",
  canonical = "",
  ogImage = "/assets/safestorage-logo.jpeg"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateProperty = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    
    // Open Graph tags
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:image', ogImage);
    updateProperty('og:type', 'website');
    
    // Twitter tags
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);
    updateMeta('twitter:card', 'summary_large_image');
    
    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', `https://safestorageglobal.com${canonical}`);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEOHead;