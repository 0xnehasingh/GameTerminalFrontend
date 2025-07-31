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
      					<div className='fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(var(--primary),0.05),transparent_70%)]' />

    </div>
  )
}

export default App 