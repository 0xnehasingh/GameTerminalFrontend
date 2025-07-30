import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="relative flex items-center space-x-3">
      {/* GT Symbol */}
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="text-neon-green"
          fill="currentColor"
        >
          {/* Intertwined GT logo with proper integration */}
          <g className="drop-shadow-[0_0_25px_#66FF00]">
            {/* G shape - thick, bold G with opening on right */}
            <path
              d="M24 4C12.954 4 4 12.954 4 24s8.716 20 20 20c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"
              strokeWidth="3"
            />
            {/* T shape - horizontal bar extending from G's inner curve */}
            <path
              d="M30 20h12v4H30v-4z"
            />
            {/* T shape - vertical bar extending through and below G */}
            <path
              d="M36 20v28h4V20h-4z"
            />
            {/* Inner curve of G to show the opening clearly */}
            <path
              d="M24 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        </svg>
        {/* Multi-layered glow effect */}
        <div className="absolute inset-0 bg-neon-green rounded-full opacity-50 blur-lg animate-pulse"></div>
        <div className="absolute inset-0 bg-neon-green rounded-full opacity-30 blur-xl animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute inset-0 bg-neon-green rounded-full opacity-20 blur-2xl animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>

      {/* Text Elements */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-white leading-tight">
          GameTerminal
        </h1>
        <p className="text-xs text-gray-300 leading-tight">
          Multiple Games, One Platform
        </p>
      </div>
    </div>
  )
}

export default Logo 