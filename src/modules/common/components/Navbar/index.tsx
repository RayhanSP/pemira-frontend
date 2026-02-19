'use client'

import React, { useState } from 'react'
import { DropDownStateProps, ShowLogoutButtonStateProps } from './interfaces'
import { Box, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { NavLink } from '@/modules/common/components/NavLink'
import Link from 'next/link'
import { SSOButton } from '@/modules/auth/components/SSOButton'
import { NavDropdown } from '@/modules/common/components/NavDropdown'
import Image from 'next/image'
import { Navigation } from '@/modules/common/components/Navigation'

export const Navbar: React.FC = () => {
  const [dropdownState, setDropdownState] = useState<DropDownStateProps>({
    isDropdownCollapsed: true,
  })

  const [showLogoutButtonState, setShowLogoutButtonState] =
    useState<ShowLogoutButtonStateProps>({
      isLogoutButtonCollapsed: true,
    })

  const toggleDropdown = () => {
    setDropdownState(() => ({
      isDropdownCollapsed: !dropdownState.isDropdownCollapsed,
    }))
  }

  const toggleLogoutButton = () => {
    setShowLogoutButtonState(() => ({
      isLogoutButtonCollapsed: !showLogoutButtonState.isLogoutButtonCollapsed,
    }))
  }

  return (
    <Box
      component={'header'}
      sx={{ position: 'fixed', width: '100%', zIndex: 100 }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 20,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '-20',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.15)',
          }}
        />
        <NavDropdown
          isDropdownCollapsed={dropdownState.isDropdownCollapsed}
          toggleDropdownAction={toggleDropdown}
          isLogoutButtonCollapsed={
            showLogoutButtonState.isLogoutButtonCollapsed
          }
          toggleLogoutButtonAction={toggleLogoutButton}
        />
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
            display: 'flex',
            zIndex: 20,
            px: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1440px',
              mx: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  py: 1.5,
                }}
              >
                <Image
                  src="/assets/pemira-logo.png"
                  alt="pemira-logo"
                  width={53}
                  height={49}
                />
                <Typography
                  fontWeight={'600'}
                  fontStyle="Inter"
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 16 },
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    PEMIRA IKM
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 16 },
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    FASILKOM UI 2024
                  </Typography>
                </Typography>
              </Box>
            </Link>
            <Box
              component={'nav'}
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 5,
                alignItems: 'center',
              }}
            >
              <Navigation
                navLink={({ url, label, key }) => (
                  <NavLink key={key} url={url}>
                    {label}
                  </NavLink>
                )}
              />
              <Box>
                <SSOButton
                  size="block"
                  logoutButtonState={
                    showLogoutButtonState.isLogoutButtonCollapsed
                  }
                  toggleLogoutButtonAction={toggleLogoutButton}
                />
              </Box>
            </Box>
            <Menu
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={toggleDropdown}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
