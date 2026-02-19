'use client'

import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { GiftBox } from '@/modules/common/components/Icons/GIftBox'
import { VoteCount } from '@/modules/home/components/VoteCount'
import Link from 'next/link'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { useSession } from 'next-auth/react'
import {
  VOTING_END_DATE,
  VOTING_START_DATE,
} from '@/modules/common/constants/voting.constant'
import { VoteCountdown } from '@/modules/home/components/VoteCountdown'

export const HeroContent: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { status } = useSession()

  const now = new Date()

  const isVotingPeriod =
    now >= new Date(VOTING_START_DATE) && now <= new Date(VOTING_END_DATE)

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        paddingX: '2rem',
        paddingTop: { xs: '0', sm: '4rem' },
        gap: { xs: '30px', sm: '0' },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: 'min-content' },
          maxWidth: { xs: '500px', sm: 'none' },
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: { xs: '6px solid #ff0000', sm: '14px solid #ff0000' },
            padding: { xs: '5px 0 5px 10px', sm: '5px 0 5px 30px' },
            gap: '15px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                whiteSpace: 'nowrap',
                fontWeight: 600,
                fontSize: { xs: '36px', sm: '64px' },
              }}
            >
              {isMobile ? 'PEMIRA ' : 'Pemilihan Raya '}
              IKM
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#FEE87A',
                fontWeight: 600,
                fontSize: { xs: '24px', sm: '48px' },
              }}
            >
              Fasilkom UI
            </Typography>
          </Box>
          <Typography
            component="p"
            variant="body1"
            sx={{
              textAlign: 'justify',
              fontSize: '20px',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Pemilihan Raya IKM FASILKOM UI (PEMIRA IKM FASILKOM UI) Merupakan
            wadah regenerasi kepemimpinan lembaga eksekutif dan legislatif di
            FASILKOM UI
          </Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
          {status === 'authenticated' && (
            <Link href={'/e-voting'} style={{ width: '50%' }}>
              <Button size={'block'}>Vote</Button>
            </Link>
          )}
          <Link href={'/kandidat'} style={{ width: '50%' }}>
            <Button size={'block'} variant={'secondary'}>
              Kandidat
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', sm: '70%', md: '45%' },
          aspectRatio: '1/1',
          position: 'relative',
        }}
      >
        {isVotingPeriod && (
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <VoteCount />
            <VoteCountdown />
          </Box>
        )}
        <GiftBox />
      </Box>
    </Box>
  )
}
