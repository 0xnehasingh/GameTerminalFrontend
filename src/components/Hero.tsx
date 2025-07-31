import React, { useState } from 'react'
import { Paperclip, Mic, Zap } from 'lucide-react'

const Hero: React.FC = () => {
  const [inputValue, setInputValue] = useState('')

  const suggestedGames = [
    { text: 'Make a Space Invaders Game', icon: '/M1.png' },
    { text: 'Create a 2D Platformer Game', icon: '/M2.png' },
    { text: 'Build a Tic Tac Toe Game', icon: '/M3.png' },
    { text: 'Develop a Memory Matching Game', icon: '/M4.png' },
    { text: 'Create a Snake Game', icon: '/M5.png' },
    { text: 'Build a Card-Matching Game', icon: '/M6.png' },
  ]

  return (
    <section id="game" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Left Background */}
      <img
        src="/leftbg.svg"
        alt="left background"
        className="hidden md:block absolute left-0 top-0 h-full w-auto z-0 pointer-events-none select-none"
        style={{ minHeight: '100%', maxHeight: '100vh' }}
        aria-hidden="true"
      />
      {/* Right Background */}
      <img
        src="/rightbg.svg"
        alt="right background"
        className="hidden md:block absolute right-0 top-0 h-full w-auto z-0 pointer-events-none select-none"
        style={{ minHeight: '100%', maxHeight: '100vh' }}
        aria-hidden="true"
      />
      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold font-clash-medium text-white mb-4">
            Build Worlds, Skip the{' '}
            <br />
            <span className="text-neon-green">&lt;code&gt;</span>
          </h1>
          <p className="text-gray-300 font-poppins font-light text-lg opacity-50">
            Create amazing games with AI assistance – no programming required.
          </p>
        </div>

        {/* Input Field */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
          <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Hey, what game do you want to build?"
              className="w-full h-44 bg-dark-gray rounded-xl p-4 text-white placeholder-gray-400 resize-none focus:outline-none  "
              style={{
                border: '2px solid transparent',
                borderRadius: '20px',
                background: 'linear-gradient(#141313, #141313) padding-box, linear-gradient(252.01deg, #8EFE49 -1.57%, rgba(115, 205, 59, 0.3) 7.95%, rgba(85, 152, 44, 0.1) 85.16%, #8EFE49 119.37%) border-box',
                backgroundClip: 'padding-box, border-box',
                backgroundOrigin: 'padding-box, border-box'
              }}
            />
            
            {/* Input Icons */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
              <button className="text-gray-400 hover:text-neon-green transition-colors">
                <Paperclip size={20} />
              </button>
              <button className="text-gray-400 hover:text-neon-green transition-colors">
                <Mic size={20} />
              </button>
            </div>
            
            {/* Send Button */}
            <button className="absolute bottom-4 right-4 bg-neon-green text-black p-2 rounded-lg hover:bg-green-400 transition-colors">
              <Zap size={20} />
            </button>
          </div>
        </div>

        {/* Suggested Games */}
        <div className="flex flex-col gap-4 font-poppins font-regular mx-auto">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4">
            {suggestedGames.slice(0, 3).map((game, index) => (
              <button
                key={index}
                onClick={() => setInputValue(game.text)}
                className="flex items-center space-x-3 bg-dark-gray hover:bg-gray-800 border border-gray-700 rounded-lg p-4 text-left transition-all hover:border-neon-green flex-1 min-w-[280px]"
                style={{
                  minWidth: game.text === 'Build a Tic Tac Toe Game' ? '20px' : '0px'
                }}
              >
                <img 
                  src={game.icon} 
                  alt={`${game.text} icon`}
                  className="w-5 h-5 flex-shrink-0"
                />
                <span className="text-white text-sm">{game.text}</span>
              </button>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4">
            {suggestedGames.slice(3, 6).map((game, index) => (
              <button
                key={index + 3}
                onClick={() => setInputValue(game.text)}
                className="flex items-center space-x-3 bg-dark-gray hover:bg-gray-800 border border-gray-700 rounded-lg p-4 text-left transition-all hover:border-neon-green flex-1 min-w-[280px]"
                style={{
                  minWidth: game.text === 'Develop a Memory Matching Game' ? '320px' : '280px'
                }}
              >
                <img 
                  src={game.icon} 
                  alt={`${game.text} icon`}
                  className="w-5 h-5 flex-shrink-0"
                />
                <span className="text-white text-sm">{game.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 