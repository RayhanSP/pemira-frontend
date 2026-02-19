import React from 'react'

export const EllipseTransparentPink: React.FC = () => (
  <svg height="1600px" width="100%">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: 'transparent', stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: '#FF003D68', stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <ellipse cx="56%" cy="0" rx="44%" ry="50%" fill="url(#grad1)" />
  </svg>
)
