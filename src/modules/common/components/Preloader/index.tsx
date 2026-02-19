import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'

export const Preloader = () => (
  <Box
    sx={{
      background: 'rgb(0, 0, 0, 0.3)',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99,
      height: '100vh',
      width: '100vw',
    }}
  >
    <Box
      sx={{
        width: { md: '320px', xs: '120px' },
        height: { md: '320px', xs: '120px' },
        position: 'relative',
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.1)', opacity: 0.7 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        animation: 'pulse 1s ease-in-out infinite',
      }}
    >
      <Image
        src="/assets/pemira-logo.png"
        alt="pemira-logo"
        fill
        objectFit={'contain'}
      />
    </Box>
  </Box>
)
