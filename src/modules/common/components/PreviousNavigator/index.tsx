'use client'

import { Button, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

export const PreviousNavigator = () => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.back()}
      sx={{
        display: 'flex',
        gap: 1,
      }}
    >
      <ArrowBack />
      <Typography>Kembali</Typography>
    </Button>
  )
}
