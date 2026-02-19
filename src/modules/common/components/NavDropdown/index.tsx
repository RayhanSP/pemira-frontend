'use client'

import React from 'react'
import Link from 'next/link'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { NavbarBodyInterface } from './interfaces'
import { SSOButton } from '@/modules/auth/components/SSOButton'
import { Navigation } from '@/modules/common/components/Navigation'

export const NavDropdown: React.FC<NavbarBodyInterface> = ({
  isDropdownCollapsed,
  toggleDropdownAction,
  isLogoutButtonCollapsed,
  toggleLogoutButtonAction,
}) => {
  return (
    <>
      <Box
        sx={{
          display: isDropdownCollapsed ? 'none' : { xs: 'block', md: 'none' },
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
        onClick={toggleDropdownAction}
      />
      <Box
        component={'nav'}
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          position: 'absolute',
          zIndex: 19,
          width: '100%',
          bottom: '0',
          transform: isDropdownCollapsed ? '0' : 'translateY(100%)',
          backgroundColor: '#f4f4f4',
          transition: 'all 0.3s',
        }}
      >
        <Navigation
          navLink={({ url, label, key }) => (
            <Link
              key={key}
              href={url}
              onClick={toggleDropdownAction}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#E5E7E6',
                  },
                }}
              >
                <Typography sx={{ borderLeft: 'solid 2.2px #F8A932', px: 1 }}>
                  {label}
                </Typography>
              </Box>
            </Link>
          )}
        />
        <Box
          sx={{
            px: 2,
            py: 1.5,
            width: '100%',
          }}
        >
          <SSOButton
            size="block"
            logoutButtonState={isLogoutButtonCollapsed}
            toggleLogoutButtonAction={toggleLogoutButtonAction}
          />
        </Box>
      </Box>
    </>
  )
}
