import React from 'react'
import { Box } from '@mui/material'
import { HeroBackground } from '@/modules/home/components/HeroBackground'
import { HeroContent } from '@/modules/home/components/HeroContent'

export const Hero: React.FC = () => (
  <Box
    sx={{
      minHeight: '100vh',
      marginBottom: '4rem',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <HeroBackground />
    </Box>
    <Box
      sx={{
        position: 'relative',
        color: 'white',
        width: '100%',
        maxWidth: '1440px',
      }}
    >
      <HeroContent />
    </Box>
  </Box>
)
