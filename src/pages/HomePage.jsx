import { useState } from 'react'
import Hero from '../components/Hero'
import LocationSelector from '../components/LocationSelector'
import Services from '../components/Services'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState('india')

  return (
    <>
      <Hero />
      <LocationSelector 
        selectedLocation={selectedLocation} 
        setSelectedLocation={setSelectedLocation} 
      />
      <Services />
      <Features />
      <Stats />
      <Testimonials selectedLocation={selectedLocation} />
      <FAQ />
      <Contact selectedLocation={selectedLocation} />
    </>
  )
}

export default HomePage