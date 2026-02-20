import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { getCandidatePairs } from '@/modules/candidate/actions/getCandidatePairs'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/app/api/auth/[...nextauth]/route'
import { CandidateCard } from '@/modules/candidate/components/CandidateCard'
import {
  VOTING_END_DATE,
  VOTING_START_DATE,
} from '@/modules/common/constants/voting.constant'

export default async function CandidatePage() {
  const response = await getCandidatePairs()

  const session = await getServerSession(authConfig)

  const now = new Date()

  const isVotingPeriod =
    now >= new Date(VOTING_START_DATE) && now <= new Date(VOTING_END_DATE)

  return (
    <Box
      component={'div'}
      sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingTop: '6rem',
        paddingBottom: '1rem',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { md: '70%', xs: '90%' },
          maxWidth: '1024px',
          gap: 1,
        }}
      >
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        ></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: { sm: 'row', xs: 'column' },
              justifyContent: { sm: 'space-between', xs: 'center' },
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '30%',
                display: { sm: 'block', xs: 'none' },
              }}
            />
            <Typography
              sx={{
                width: { sm: '30%', xs: '100%' },
                fontWeight: 600,
                fontSize: { lg: '38px', xs: '24px' },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Daftar Kandidat
            </Typography>
            <Box
              sx={{
                width: { sm: '30%', xs: '100%' },
                display: 'flex',
                justifyContent: { sm: 'flex-end', xs: 'center' },
              }}
            >
              {session && isVotingPeriod ? (
                <Box sx={{ width: { sm: 'auto', xs: '100%' } }}>
                  <Link
                    href={`/e-voting`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      width: '100%',
                    }}
                  >
                    <Button size="block">Vote Sekarang</Button>
                  </Link>
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              {response.content.candidates.map((candidate) => (
                <CandidateCard key={candidate.id} {...candidate} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
