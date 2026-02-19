'use client'

import React, { useEffect } from 'react'

import { AuthProviderInterface } from './interfaces'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { signIn, useSession } from 'next-auth/react'
import { Preloader } from '@/modules/common/components/Preloader'

export const AuthProvider: React.FC<AuthProviderInterface> = ({ children }) => {
  const pathname = usePathname()

  const query = useSearchParams()

  const router = useRouter()

  const { isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const callbackUrl = localStorage.getItem('callbackUrl')

      return await signIn('credentials', {
        ticket: query.get('ticket'),
        redirect: true,
        callbackUrl: callbackUrl || pathname,
      })
    },
    enabled: !!query.get('ticket'),
  })

  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated' && pathname === '/e-voting') {
      router.push('/')
    }
  }, [status, router, pathname])

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        fontFamily: 'Inter',
      }}
    >
      {isLoading || status === 'loading' ? <Preloader /> : children}
    </Box>
  )
}
