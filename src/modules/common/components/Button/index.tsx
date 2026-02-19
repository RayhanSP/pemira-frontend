'use client'

import { Button, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { BUTTON_SIZES, BUTTON_STYLES } from './constants'
import { ButtonInterface } from './interfaces'

export const CustomButton: React.FC<ButtonInterface> = ({
  isDisabled = false,
  variant = 'primary',
  startIcon,
  endIcon,
  children,
  size = 'regular',
  onClick,
}) => {
  const theme = useTheme()

  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={isDisabled}
      sx={{
        ...BUTTON_STYLES[variant],
        width: size === 'regular' ? 'max-content' : '100%',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: useMediaQuery(theme.breakpoints.down('md'))
          ? BUTTON_SIZES[size].font.md
          : BUTTON_SIZES[size].font.lg,
        padding: useMediaQuery(theme.breakpoints.down('md'))
          ? BUTTON_SIZES[size].padding.md
          : BUTTON_SIZES[size].padding.lg,

        borderRadius: '8px',
      }}
    >
      {children}
    </Button>
  )
}
