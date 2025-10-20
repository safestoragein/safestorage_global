import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
import './App.css'

function App() {
  const [selectedLocation, setSelectedLocation] = useState('india')

  return (
    <Router>
      <div className="app">
        <Header selectedLocation={selectedLocation} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App