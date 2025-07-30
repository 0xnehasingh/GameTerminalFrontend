import React from 'react'

const TopCreators: React.FC = () => {
  const creators = [
    {
      username: '@spacegamer',
      gamesCreated: '47 Games Created',
      avatar: '/avatar1.png',
      buttonColor: '#06B6D4',
      url: 'https://www.google.com'
    },
    {
      username: '@alexdev',
      gamesCreated: '32 Games Created',
      avatar: '/avatar2.png',
      buttonColor: '#3B82F6'
    },
    {
      username: '@sarah_g',
      gamesCreated: '47 Games Created',
      avatar: '/avatar3.png',
      buttonColor: '#8CF449'
    },
    {
      username: '@puzzler',
      gamesCreated: '47 Games Created',
      avatar: '/avatar4.png',
      buttonColor: '#08EFBB'
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Top Creators
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <div key={index} className="bg-dark-gray rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={creator.avatar} 
                  alt={`${creator.username} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Username */}
              <h3 className="text-lg font-bold text-white mb-2">{creator.username}</h3>
              
              {/* Games Created */}
              <p className="text-sm mb-4" style={{ color: creator.buttonColor }}>{creator.gamesCreated}</p>
              
              {/* View Games Button */}
              <button 
                onClick={() => window.open(creator.url, '_blank')}  
                className="w-full text-black py-2 px-4 rounded-lg font-medium hover:opacity-80 transition-opacity"
                style={{ backgroundColor: creator.buttonColor }}
              >
                View Games
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopCreators 