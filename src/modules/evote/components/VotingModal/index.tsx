'use client'

import { Box, Typography } from '@mui/material'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { CustomModal as Modal } from '@/modules/common/components/Modal'
import { VotingModalInterface } from '@/modules/evote/components/VotingModal/interfaces'
import { VoteBox } from '@/modules/common/components/Icons/VoteBox'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { vote } from '@/modules/evote/actions/vote'
import { signOut } from 'next-auth/react'

export const VotingModal = ({
  candidate,
  handleSectionAction,
}: VotingModalInterface) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (candidateId: string) => vote(candidateId),
    onError: (error) => {
      if (error instanceof Error && error.message === 'Session expired') {
        alert('Session expired, please login again')
        signOut({ redirect: true, callbackUrl: '/' })
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['voteStatus'] })
      handleSectionAction('PROFILE')
    },
  })

  return (
    <Modal
      trigger={
        <Button variant="primary" size="block">
          Pilih
        </Button>
      }
    >
      {({ setIsOpen }) => (
        <Box
          component={'div'}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '24px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                height: '100%',
                display: { sm: 'block', xs: 'none' },
                gap: '12px',
              }}
            >
              <VoteBox />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: { sm: '80%', xs: '100%' },
                }}
              >
                <Typography
                  component={'p'}
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                  }}
                >
                  Konfirmasi Pilihan
                </Typography>
                <Box
                  sx={{
                    height: '1px',
                    marginY: '2px',
                    width: '100%',
                    backgroundColor: 'grey',
                  }}
                ></Box>
                <Typography component={'p'}>
                  Apakah Anda yakin dengan pilihan:
                </Typography>
              </Box>
              <Box>
                <Typography
                  component={'p'}
                  sx={{
                    fontSize: { sm: '16px', xs: '14px' },
                    fontWeight: '600',
                    fontFamily: 'Inter',
                  }}
                >
                  Pasangan Calon {candidate.election_number}
                </Typography>
                <Box
                  component={'ol'}
                  sx={{ marginLeft: '17px', marginBottom: '22px' }}
                >
                  <Typography
                    component={'li'}
                    sx={{
                      fontSize: { sm: '16px', xs: '14px' },
                      fontFamily: 'Inter',
                    }}
                  >
                    {candidate.president} (Calon Ketua BEM Fasilkom UI 2026)
                  </Typography>
                  <Typography
                    component={'li'}
                    sx={{
                      fontSize: { sm: '16px', xs: '14px' },
                      fontFamily: 'Inter',
                    }}
                  >
                    {candidate.vice_president} (Calon Wakil BEM Fasilkom UI
                    2026)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Button
              onClick={() => setIsOpen(false)}
              variant="secondary"
              size="block"
            >
              Batal
            </Button>
            <Button
              variant="primary"
              size="block"
              onClick={() => mutate(candidate.id)}
            >
              Pilih
            </Button>
          </Box>
        </Box>
      )}
    </Modal>
  )
}
