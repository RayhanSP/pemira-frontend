'use client'

import { Box, Typography } from '@mui/material'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { VoterProfileSectionInterface } from '@/modules/evote/components/VoterProfileSection/interfaces'
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { getVoteStatus } from '../../actions/getVoteStatus'
import {
  VOTING_END_DATE,
  VOTING_START_DATE,
} from '@/modules/common/constants/voting.constant'

export const VoterProfileSection = ({
  handleSectionAction,
}: VoterProfileSectionInterface) => {
  const { data: session } = useSession()

  const { data, isLoading } = useQuery({
    queryKey: ['voteStatus'],
    queryFn: async () => await getVoteStatus(),
  })

  const now = new Date()

  const isVotingPeriod =
    now >= new Date(VOTING_START_DATE) && now <= new Date(VOTING_END_DATE)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '21px',
        paddingTop: '28px',
      }}
    >
      <Typography
        component={'p'}
        sx={{
          fontFamily: 'Inter',
          fontSize: { sm: '16px', xs: '14px' },
        }}
      >
        Sebelum memulai, pastikan bahwa data diri Anda sudah benar:
      </Typography>
      <Box
        component={'div'}
        sx={{
          width: { lg: '80%', xs: '100%' },
          display: { sm: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          gap: '16px',
          padding: { sm: '12px 25px', xs: '12px 16px' },
          backgroundColor: '#F4F4F4',
          border: '1px solid #E5E7E6',
          borderRadius: '4px',
        }}
      >
        <Box component={'div'}>
          <Typography
            component={'p'}
            sx={{ fontSize: { sm: '14px', xs: '12px' }, fontFamily: 'Inter' }}
          >
            <b>Nama</b>
          </Typography>
          <Typography
            component={'p'}
            sx={{
              fontSize: { sm: '16px', xs: '14px' },
              marginBottom: { sm: '0', xs: '16px' },
              fontFamily: 'Inter',
            }}
          >
            {session?.user.name}
          </Typography>
        </Box>
        <Box component={'div'}>
          <Typography
            component={'p'}
            sx={{ fontSize: { sm: '14px', xs: '12px' }, fontFamily: 'Inter' }}
          >
            <b>NPM</b>
          </Typography>
          <Typography
            component={'p'}
            sx={{
              fontSize: { sm: '16px', xs: '14px' },
              marginBottom: { sm: '0', xs: '16px' },
              fontFamily: 'Inter',
            }}
          >
            {session?.user.npm}
          </Typography>
        </Box>
        <Box component={'div'}>
          <Typography
            component={'p'}
            sx={{ fontSize: { sm: '14px', xs: '12px' }, fontFamily: 'Inter' }}
          >
            <b>Angkatan</b>
          </Typography>
          <Typography
            component={'p'}
            sx={{ fontSize: { sm: '16px', xs: '14px' }, fontFamily: 'Inter' }}
          >
            {session?.user.batch}
          </Typography>
        </Box>
      </Box>
      {isLoading ? (
        <Box
          sx={{
            width: '100%',
            height: '44px',
            borderRadius: '8px',
            backgroundColor: 'lightgray',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              animation: 'shimmer 2s infinite',
            },
            '@keyframes shimmer': {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(100%)' },
            },
          }}
        />
      ) : (
        <Button
          variant={
            data?.content.is_voted || !isVotingPeriod ? 'secondary' : 'primary'
          }
          size="block"
          isDisabled={data?.content.is_voted || !isVotingPeriod}
          onClick={() =>
            data?.content.is_voted || !isVotingPeriod
              ? null
              : handleSectionAction('VOTE')
          }
        >
          {!isVotingPeriod
            ? 'Voting belum dibuka'
            : data?.content.is_voted
              ? 'Kamu sudah memilih'
              : 'Vote Sekarang!'}
        </Button>
      )}
    </Box>
  )
}
