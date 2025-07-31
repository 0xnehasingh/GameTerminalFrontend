import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedGames from './components/FeaturedGames'
import TopCreators from './components/TopCreators'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <FeaturedGames />
      <TopCreators />
      <Footer />
      
    </div>
  )
}

export default App 