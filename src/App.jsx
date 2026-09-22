import React from 'react'
import Navbar from './Components/Common/Navbar'
import Hero from './Components/Home/Hero'
import TechBadges from './Components/Home/TechBadges'
import Experience from './Components/Home/Experience'
import Projects from './Components/Home/Projects'
import Footer from './Components/Common/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <TechBadges/> 
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App