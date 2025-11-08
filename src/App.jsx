import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
import FAQPage from './pages/FAQPage'
import UAEPage from './pages/UAEPage'
import UKPage from './pages/UKPage'
import { getRedirectPath, getUserCountryPreference } from './services/geoLocation'
import './App.css'

// Component for handling IP detection and routing
function AppWithRouter() {
  const [selectedLocation, setSelectedLocation] = useState('global')
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleIPRedirect = async () => {
      // Skip detection if user has already selected a country manually
      const userPreference = getUserCountryPreference()
      if (userPreference) {
        setSelectedLocation(userPreference)
        setIsLoading(false)
        return
      }

      // Skip detection if already on a country-specific route
      if (location.pathname === '/uae' || location.pathname === '/uk') {
        setIsLoading(false)
        return
      }

      try {
        const redirect = await getRedirectPath()
        
        if (redirect) {
          if (redirect.type === 'external') {
            // Redirect to external site (India)
            window.location.href = redirect.url
          } else if (redirect.type === 'internal') {
            // Navigate to internal route (UAE or UK)
            navigate(redirect.path)
            setSelectedLocation(redirect.country.toLowerCase())
          }
        }
      } catch (error) {
        console.error('Error in IP detection:', error)
      } finally {
        setIsLoading(false)
      }
    }

    handleIPRedirect()
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
      {/* Only show global header if NOT on country-specific pages */}
      {!isCountrySpecificPage && <Header selectedLocation={selectedLocation} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uae" element={<UAEPage />} />
        <Route path="/uk" element={<UKPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
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
      <Router>
        <AppWithRouter />
      </Router>
    </CountryProvider>
  )
}

export default App