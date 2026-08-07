import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import HeroSearchSection from './Components/HeroSearchSection'
import AboutUsSection from './Components/AboutUsSection'
import WhyChooseUs from './Components/WhyChooseUs'
import PopularResidencesSection from './Components/PopularResidencesSection'
import TestimonialsSection from './Components/TestimonialsSection'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeroSearchSection />
      <AboutUsSection />
      <WhyChooseUs />
      <PopularResidencesSection />
      <TestimonialsSection />
    </div>
  )
}

export default App