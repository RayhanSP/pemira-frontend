'use client'

import { Box, Typography } from '@mui/material'
import { People } from '@/modules/common/components/Icons/People'
import { VoterProfileSection } from '@/modules/evote/components/VoterProfileSection'
import { useState } from 'react'
import { VotingSection } from '@/modules/evote/components/VotingSection'

export default function EVotingPage() {
  const [section, setSection] = useState<'PROFILE' | 'VOTE'>('PROFILE')

  return (
    <Box
      component={'div'}
      sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingTop: '5rem',
        paddingBottom: '1rem',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { md: '70%', xs: '90%' },
          maxWidth: '1024px',
          gap: 4,
        }}
      >
        <Box component={'div'} sx={{ width: { lg: '65%', xs: '100%' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <Typography
              sx={{
                color: '#023260',
                fontWeight: '700',
                fontSize: '16px',
                fontFamily: 'Inter',
              }}
            >
              E-Voting
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: { sm: '24px', xs: '20px' },
                  lineHeight: '120%',
                }}
              >
                Pemilihan Calon Ketua dan Wakil Ketua{' '}
              </Typography>
              <Typography>BEM Fasilkom UI 2025</Typography>
            </Box>
          </Box>
          {section === 'PROFILE' ? (
            <VoterProfileSection handleSectionAction={setSection} />
          ) : (
            <VotingSection handleSectionAction={setSection} />
          )}
        </Box>

        <Box
          component={'div'}
          sx={{ width: '412px', display: { lg: 'block', xs: 'none' } }}
        >
          <People />
        </Box>
      </Box>
    </Box>
  )
}
