import React from 'react'
import { Box } from '@mui/material'
import { EllipseTransparentPink } from '@/modules/common/components/Icons/EllipseTransparentPink'
import { EllipseBlue } from '@/modules/common/components/Icons/EllipseBlue'

export const HeroBackground: React.FC = () => (
  <Box
    sx={{
      position: 'relative',
      zIndex: -10,
      width: '100%',
      minWidth: 650,
    }}
  >
    <Box
      sx={{
        position: 'relative',
        float: 'right',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '200%',
          transform: 'rotate(-3deg)',
          float: 'right',
          transformOrigin: 'right 40%',
        }}
      >
        <EllipseTransparentPink />
      </Box>
    </Box>
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        top: 0,
        right: 0,
        width: '200%',
      }}
    >
      <EllipseBlue />
    </Box>
  </Box>
)
