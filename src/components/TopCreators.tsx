import React from 'react'

const TopCreators: React.FC = () => {
  const creators = [
    {
      username: '@spacegamer',
      gamesCreated: '47 Games Created',
      avatar: '/avatar1.png',
      buttonColor: 'bg-teal-500',
      textColor: 'text-teal-500',
      buttonTextColor: 'text-black',
      url: 'https://www.google.com'
    },
    {
      username: '@alexdev',
      gamesCreated: '32 Games Created',
      avatar: '/avatar2.png',
      buttonColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      buttonTextColor: 'text-black',
    },
    {
      username: '@sarah_g',
      gamesCreated: '47 Games Created',
      avatar: '/avatar3.png',
      buttonColor: 'bg-neon-green',
      textColor: 'text-neon-green',
      buttonTextColor: 'text-black',
    },
    {
      username: '@puzzler',
      gamesCreated: '47 Games Created',
      avatar: '/avatar4.png',
      buttonColor: 'bg-cyan-500',
      textColor: 'text-cyan-500',
      buttonTextColor: 'text-black',
    }
  ]

  return (
    <section id="creators" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-center mb-16 font-clash-medium text-5xl">
          Top Creators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <div key={index} className="bg-dark-gray p-6 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group" style={{ borderRadius: '20px' }}>
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform">
                <img
                  src={creator.avatar}
                  alt={`${creator.username} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Username */}
              <h3 className="text-lg font-poppins font-semibold text-white mb-2 group-hover:text-neon-green transition-colors">{creator.username}</h3>

              {/* Games Created */}
              <p className={`font-poppins-regular text-sm mb-4 ${creator.textColor} group-hover:opacity-80 transition-opacity`}>{creator.gamesCreated}</p>

              {/* View Games Button */}
              <button onClick={() => window.open(creator.url, '_blank')} className={`w-full ${creator.buttonColor} ${creator.buttonTextColor} py-2 px-4 rounded-lg font-poppins font-semibold hover:opacity-80 transition-opacity`}>
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