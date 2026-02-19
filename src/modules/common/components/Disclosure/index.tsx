'use client'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { disclosureProps } from './interface'
import { ExpandLess } from '@mui/icons-material'

export const Disclosure: React.FC<disclosureProps> = ({
  title,
  children,
  isOpen = false,
}) => {
  const [isExpand, setIsExpand] = useState(isOpen)
  const [isDelayExpand, setIsDelayExpand] = useState(isOpen)

  const handleExpand = () => {
    if (isDelayExpand) {
      setTimeout(() => {
        setIsDelayExpand((prev) => !prev)
      }, 100)
      setIsExpand((prev) => !prev)
    } else {
      setIsDelayExpand((prev) => !prev)
      setTimeout(() => {
        setIsExpand((prev) => !prev)
      }, 0)
    }
  }

  return (
    <Box component={'div'} sx={{ width: '100%' }}>
      <Box
        onClick={handleExpand}
        component={'div'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: '21px',
          paddingY: '8px',
          color: 'white',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'linear-gradient(180deg, #48CDF8 0%, #37AED3 100%)',
          borderRadius: isExpand ? '12px 12px 0 0' : '12px',
          transition: 'all 150ms',
          transitionDelay: isExpand ? '' : '100ms',
        }}
      >
        <Typography
          component={'h5'}
          sx={{
            fontWeight: '600',
            fontSize: { xs: '14px', sm: '16px' },
            marginRight: '15px',
            height: '24px',
            textOverflow: isExpand ? '' : 'ellipsis',
          }}
        >
          {title}
        </Typography>
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '25px',
            height: '25px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '9999px',
            transform: isExpand ? '' : 'rotate(180deg)',
            transition: 'all 150ms',
          }}
        >
          <ExpandLess
            sx={{
              width: '20px',
              height: '20px',
            }}
          />
        </Box>
      </Box>
      <Box
        component={'div'}
        sx={{
          transform: isExpand ? '' : 'scaleY(0)',
          transition: 'all 150ms',
          transitionDelay: isExpand ? '100ms' : '',
          transformOrigin: 'top',
          backgroundColor: 'white',
          borderRadius: '0 0 12px 12px',
          filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15))',
        }}
      >
        <Box
          sx={{
            display: isDelayExpand ? '' : 'none',
            padding: '12px',
            lineHeight: '1.5',
            color: 'grey',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
