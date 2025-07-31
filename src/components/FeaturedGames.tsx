import React from 'react'

const FeaturedGames: React.FC = () => {
  const games = [
    {
      title: 'Neon Blasters',
      description: 'Fast-paced space shooter with stunning visuals',
      developer: '@spacegamer',
      textColor: 'text-teal-500',
      image: 'space-shooter'
    },
    {
      title: 'Cyber Runner',
      description: 'Navigate through a cyberpunk cityscape',
      developer: '@neondev',
      textColor: 'text-blue-400',
      image: 'cyberpunk'
    },
    {
      title: 'Quantum Puzzle',
      description: 'Mind-bending puzzles in quantum realm',
      developer: '@puzzlemaster',
      textColor: 'text-orange-400',
      image: 'quantum'
    },
    {
      title: 'Neon Racers',
  
      description: <div>High-speed racing on neon highways <br/><br></br></div>,
      developer: '@speedfreak',
      textColor: 'text-neon-green',
      image: 'racing'
    }
  ]

  const getGameImage = (imageType: string) => {
    const images = {
      'space-shooter': (
        <div className="w-full h-50 rounded-t-[20px] relative overflow-hidden">
          <img 
            src="/img1.png" 
            alt="Neon Blasters - Space Shooter" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      ),
      'cyberpunk': (
        <div className="w-full h-50 rounded-t-[20px] relative overflow-hidden">
          <img 
            src="/img2.png" 
            alt="Cyber Runner - Cyberpunk Cityscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      ),
      'quantum': (
        <div className="w-full h-50 rounded-t-[20px] relative overflow-hidden">
          <img 
            src="/img3.png" 
            alt="Quantum Puzzle - Abstract Geometric Shapes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      ),
      'racing': (
        <div className="w-full h-50 rounded-t-[20px] relative overflow-hidden">
          <img 
            src="/img4.png" 
            alt="Neon Racers - Futuristic Racing Cars" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )
    }
    return images[imageType as keyof typeof images] || images['space-shooter']
  }

  return (
    <section id="features" className="py-5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-clash-medium text-white text-center mb-16">
          Featured Games
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div key={index} className="bg-dark-gray rounded-[20px] overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group">
              {getGameImage(game.image)}
              
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-white mb-2 group-hover:text-neon-green transition-colors">{game.title}</h3>
                <p className="text-gray-300 text-sm mb-6 font-poppins font-regular group-hover:text-gray-200 transition-colors" style={{ 
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '12px',
                  color: '#BCBCBC',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}>{game.description}</p>
                <p className={`text-neon-cyan text-xs mb-4 font-poppins font-semibold ${game.textColor} group-hover:opacity-80 transition-opacity`}>By {game.developer}</p>
                <button className="w-full bg-neon-green text-black py-2 px-4 rounded-lg hover:bg-green-400 font-poppins font-semibold transition-colors">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames 