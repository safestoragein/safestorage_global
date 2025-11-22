import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { CountryProvider } from './contexts/CountryContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import LocationsPage from './pages/LocationsPage'
import FeaturesPage from './pages/FeaturesPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import UAEBlogPage from './pages/UAEBlogPage'
import UAEBlogPostPage from './pages/UAEBlogPostPage'
import FAQPage from './pages/FAQPage'
import UAEPage from './pages/UAEPage'
import UAEStorageUnitsPage from './pages/UAEStorageUnitsPage'
import UAEHowItWorksPage from './pages/UAEHowItWorksPage'
import UAELocationsPage from './pages/UAELocationsPage'
import UAEPricingPage from './pages/UAEPricingPage'
import UAEBusinessPage from './pages/UAEBusinessPage'
import UAEContactPage from './pages/UAEContactPage'
import UAEPersonalStoragePage from './pages/UAEPersonalStoragePage'
import UAEBusinessStoragePage from './pages/UAEBusinessStoragePage'
import UAEDocumentStoragePage from './pages/UAEDocumentStoragePage'
import UAEVehicleStoragePage from './pages/UAEVehicleStoragePage'
import UAEMovingServicesPage from './pages/UAEMovingServicesPage'
import UAEPrivacyPage from './pages/UAEPrivacyPage'
import UAETermsPage from './pages/UAETermsPage'
import UAESitemapPage from './pages/UAESitemapPage'
import UAEGetQuotePage from './pages/UAEGetQuotePage'
import UAEGetQuoteStep2 from './pages/UAEGetQuoteStep2'
import UAEAdminPage from './pages/UAEAdminPage'
import UKPage from './pages/UKPage'
import ScrollToTop from './components/ScrollToTop'
import { getRedirectPath, getUserCountryPreference } from './services/geoLocation'
import './App.css'

// Component for handling IP detection and routing
function AppWithRouter() {
  const [selectedLocation, setSelectedLocation] = useState('global')
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Temporarily disable IP detection to fix infinite redirect loop
    // Just set loading to false and let user navigate normally
    setIsLoading(false)
    setSelectedLocation('uae')
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Detecting your location...</h2>
          <p>Redirecting to the best experience for you</p>
        </div>
      </div>
    )
  }

  // Check if we're on a country-specific page that has its own header/footer
  const isCountrySpecificPage = location.pathname.startsWith('/uae') || location.pathname.startsWith('/uk')

  return (
    <div className="app">
      <ScrollToTop />
      {/* Only show global header if NOT on country-specific pages */}
      {!isCountrySpecificPage && <Header selectedLocation={selectedLocation} />}
      
      <Routes>
        <Route path="/" element={<Navigate to="/uae" replace />} />
        <Route path="/uae" element={<UAEPage />} />
        <Route path="/uae/storage-units" element={<UAEStorageUnitsPage />} />
        <Route path="/uae/how-it-works" element={<UAEHowItWorksPage />} />
        <Route path="/uae/locations" element={<UAELocationsPage />} />
        <Route path="/uae/pricing" element={<UAEPricingPage />} />
        <Route path="/uae/business" element={<UAEBusinessPage />} />
        <Route path="/uae/contact" element={<UAEContactPage />} />
        <Route path="/uae/personal-storage" element={<UAEPersonalStoragePage />} />
        <Route path="/uae/business-storage" element={<UAEBusinessStoragePage />} />
        <Route path="/uae/document-storage" element={<UAEDocumentStoragePage />} />
        <Route path="/uae/vehicle-storage" element={<UAEVehicleStoragePage />} />
        <Route path="/uae/moving-services" element={<UAEMovingServicesPage />} />
        <Route path="/uae/privacy" element={<UAEPrivacyPage />} />
        <Route path="/uae/terms" element={<UAETermsPage />} />
        <Route path="/uae/sitemap" element={<UAESitemapPage />} />
        <Route path="/uae/get-quote" element={<UAEGetQuotePage />} />
        <Route path="/uae/get-quote/step2" element={<UAEGetQuoteStep2 />} />
        <Route path="/uae/admin" element={<UAEAdminPage />} />
        <Route path="/uae/blog" element={<BlogPage />} />
        <Route path="/uae/blog/:slug" element={<BlogPostPage />} />
        <Route path="/uae/locations/business-bay" element={<UAELocationsPage />} />
        <Route path="/uae/locations/dubai-marina" element={<UAELocationsPage />} />
        <Route path="/uae/locations/jlt" element={<UAELocationsPage />} />
        <Route path="/uae/locations/al-quoz" element={<UAELocationsPage />} />
        <Route path="/uae/locations/difc" element={<UAELocationsPage />} />
        <Route path="/uk" element={<UKPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      
      {/* Only show global footer if NOT on country-specific pages */}
      {!isCountrySpecificPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <CountryProvider>
      <Router basename="/">
        <AppWithRouter />
      </Router>
    </CountryProvider>
  )
}

export default App