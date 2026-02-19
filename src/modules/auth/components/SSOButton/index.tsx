'use client'

import React from 'react'
import { SSOButtonInterface } from './interfaces'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { configKey } from '@/modules/common/configs'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

export const SSOButton: React.FC<SSOButtonInterface> = ({
  size = 'regular',
  logoutButtonState,
  toggleLogoutButtonAction,
}) => {
  const { data: session, status } = useSession()

  const pathname = usePathname()
  const router = useRouter()

  const handleLogin = () => {
    localStorage.setItem('callbackUrl', pathname)
    router.push(
      `https://sso.ui.ac.id/cas2/login?service=${configKey.serviceUrl}`
    )
  }

  return status === 'unauthenticated' || !session ? (
    <Button size={size} onClick={handleLogin}>
      Login SSO
    </Button>
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'start', md: 'end' },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 0.4,
          position: 'relative',
          zIndex: '22',
          width: { xs: '100%', md: 'auto' },
          backgroundColor: { xs: '#F4F4F4', md: 'white' },
          py: { xs: 1, md: 2.5 },
          cursor: 'pointer',
        }}
        onClick={toggleLogoutButtonAction}
      >
        <Typography>Halo, {session.user.name}!</Typography>
        <Typography
          color={'#54799E'}
          sx={{
            display: 'block',
            transform: logoutButtonState ? 'rotate(-180deg)' : 'rotate(0)',
            transition: 'all, 0.3s',
          }}
        >
          ⏶
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'block',
          marginTop: { xs: logoutButtonState ? '-40px' : '0', md: '0' },
          position: { xs: 'block', md: 'absolute' },
          width: '100%',
          minWidth: '200px',
          top: logoutButtonState ? '0' : '100%',
          opacity: logoutButtonState ? '0' : '1',
          px: { xs: 0, md: 2 },
          py: { xs: 0, md: 1.5 },
          backgroundColor: { xs: '#f4f4f4', md: 'white' },
          boxShadow: { xs: 'none', md: '0 0px 10px -2px rgba(0,0,0,0.5)' },
          transition: 'all 0.5s',
        }}
      >
        <Button variant="danger" size={size} onClick={() => signOut()}>
          Log out
        </Button>
      </Box>
    </Box>
  )
}
