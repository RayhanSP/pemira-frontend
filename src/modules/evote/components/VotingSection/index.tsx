'use client'

import { VotingSectionInterface } from '@/modules/evote/components/VotingSection/interfaces'
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { useQuery } from '@tanstack/react-query'
import { getCandidatePairs } from '@/modules/candidate/actions/getCandidatePairs'
import { useState } from 'react'
import { VotingModal } from '@/modules/evote/components/VotingModal'
import { CandidatePairInterface } from '@/modules/candidate/actions/getCandidatePairs/interfaces'

export const VotingSection = ({
  handleSectionAction,
}: VotingSectionInterface) => {
  const [selectedCandidate, setSelectedCandidate] =
    useState<CandidatePairInterface | null>(null)

  const { data, isLoading } = useQuery({
    queryKey: ['candidatePairs'],
    queryFn: async () => await getCandidatePairs(),
  })

  return (
    <>
      <Typography
        component={'p'}
        sx={{
          fontSize: { sm: '16px', xs: '14px' },
          fontStyle: 'italic',
          fontFamily: 'Inter',
          color: '#0B3F78',
          marginTop: '28px',
          marginBottom: '15px',
        }}
      >
        Pilih salah satu
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Box component={'div'}>
          <FormControl sx={{ width: '100%' }}>
            <RadioGroup
              onChange={(event) =>
                setSelectedCandidate(
                  data
                    ? data.content.candidates.filter(
                        (candidate) => candidate.id === event.target.value
                      )[0]
                    : null
                )
              }
              sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              {isLoading || !data ? (
                <>
                  <Box
                    sx={{
                      width: '100%',
                      height: '70px',
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
                  <Box
                    sx={{
                      width: '100%',
                      height: '70px',
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
                </>
              ) : (
                data.content.candidates.map((candidate) => (
                  <FormControlLabel
                    key={candidate.id}
                    sx={{
                      borderRadius: '8px',
                      marginInline: 'auto',
                      paddingLeft: '14px',
                      width: '100%',
                      border:
                        selectedCandidate?.id === candidate.id
                          ? '1px solid #0B3F78'
                          : '1px solid #E5E7E6',
                      backgroundColor:
                        selectedCandidate?.id === candidate.id
                          ? 'rgba(28, 161, 195, 0.2)'
                          : '',
                      '&:hover': {
                        backgroundColor:
                          selectedCandidate?.id === candidate.id
                            ? 'rgba(28, 161, 195, 0.2)'
                            : 'rgba(28, 161, 195, 0.05)',
                      },
                    }}
                    control={
                      <Radio
                        sx={{
                          color: '#B8B8B8',
                          '&.Mui-checked': {
                            color: '#023260',
                          },
                        }}
                      />
                    }
                    value={candidate.id}
                    label={
                      <Box
                        component={'div'}
                        sx={{ paddingY: '12px', marginLeft: '14px' }}
                      >
                        <Typography
                          component={'p'}
                          sx={{
                            fontSize: { sm: '16px', xs: '14px' },
                            fontWeight: '600',
                            fontFamily: 'Inter',
                          }}
                        >
                          {candidate.name}
                        </Typography>
                        <Typography
                          component={'p'}
                          sx={{
                            fontSize: { sm: '14px', xs: '12px' },
                            fontFamily: 'Inter',
                          }}
                        >
                          {candidate.tagline}
                        </Typography>
                      </Box>
                    }
                  />
                ))
              )}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: { sm: '50%', xs: '100%' },
            gap: '10px',
          }}
        >
          <Button
            onClick={() => handleSectionAction('PROFILE')}
            variant="secondary"
            size="block"
          >
            Kembali
          </Button>
          {!selectedCandidate ? (
            <Button variant="secondary" size="block" isDisabled={true}>
              Pilih
            </Button>
          ) : (
            <VotingModal
              candidate={selectedCandidate}
              handleSectionAction={handleSectionAction}
            />
          )}
        </Box>
      </Box>
    </>
  )
}
