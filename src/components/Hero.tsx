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
    <section className="min-h-screen flex items-center justify-center pt-16 grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Build Worlds, Skip the{' '}
            <span className="text-neon-green">&lt;code&gt;</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
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
              className="w-full h-32 bg-dark-gray border border-neon-green rounded-xl p-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {suggestedGames.map((game, index) => (
            <button
              key={index}
              onClick={() => setInputValue(game.text)}
              className="flex items-center space-x-3 bg-dark-gray hover:bg-gray-800 border border-gray-700 rounded-lg p-4 text-left transition-all hover:border-neon-green"
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
    </section>
  )
}

export default Hero 