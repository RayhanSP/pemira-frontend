'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, Suspense } from 'react'
import { SessionProvider } from 'next-auth/react'
import { AuthProvider } from '@/modules/auth/components/AuthProvider'
import { Preloader } from '@/modules/common/components/Preloader'

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <Suspense fallback={<Preloader />}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <AuthProvider>{children}</AuthProvider>
        </SessionProvider>
      </QueryClientProvider>
    </Suspense>
  )
}
