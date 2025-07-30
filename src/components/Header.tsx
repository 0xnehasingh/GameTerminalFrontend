import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <svg 
              width="32" 
              height="24" 
              viewBox="0 0 32 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.619 18.6039V18.9656V24H22.6534V14.886V9.46104H14.0891L10.1976 14.4954H17.2428H17.619V14.8715V18.6039Z" fill="#8EFE49"/>
              <path d="M13.1486 0C6.58079 0 1.069 5.20799 0.880923 11.6312C0.77964 14.8862 1.9804 17.982 4.25163 20.3256C6.47951 22.6258 9.45962 23.9278 12.6423 23.9857L16.5917 18.9802L12.8593 18.9513C10.8918 18.9513 8.9967 18.1122 7.68022 16.6366C6.36379 15.161 5.72723 13.1936 5.95871 11.2117C6.34931 7.69626 9.40178 5.04887 13.0618 5.04887H23.4344L27.3259 0.0144827L13.1486 0Z" fill="#8EFE49"/>
              <path d="M27.6585 9.47575L23.767 14.5101H31.6079V9.47575H27.6585Z" fill="#8EFE49"/>
            </svg>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-neon-green transition-colors">
              Features
            </a>
            <a href="#game" className="text-white hover:text-neon-green transition-colors">
              Game
            </a>
            <a href="#creators" className="text-white hover:text-neon-green transition-colors">
              Creators
            </a>
            <a href="#pricing" className="text-white hover:text-neon-green transition-colors">
              Pricing
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-neon-green transition-colors">
              Sign In
            </button>
            <button className="bg-neon-green text-black px-4 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 