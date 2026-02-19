import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { CustomButton as Button } from '@/modules/common/components/Button'
import { CandidatePairInterface } from '@/modules/candidate/actions/getCandidatePairs/interfaces'

export const dynamic = 'force-dynamic';
export const CandidateCard = async ({
  id,
  election_number,
  tagline,
  candidate_pair_photo,
  name,
  is_empty_box,
}: CandidatePairInterface) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: { xs: '100%', md: '35%' },
        flexDirection: 'column',
        gap: '14px',
        maxWidth: { lg: '50%' },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(44, 132, 160, 0.3)',
          padding: 2,
          borderRadius: '8px',
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            color: '#585858',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Paslon No.{election_number}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#CBBC47',
          height: '100%',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 250,
            borderRadius: '8px',
            width: '100%',
            maxHeight: { xs: 300, md: 350 },
            maxWidth: { xs: 'full', md: 'full' },
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            aspectRatio: '1/1',
          }}
          alt={name}
          src={candidate_pair_photo}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '12px 8px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              fontWeight={700}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#585858',
              }}
            >
              {tagline}
            </Typography>
          </Box>
          {!is_empty_box && (
            <Link
              href={`/kandidat/${id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <Button size={'block'}>Lihat Detail Kandidat</Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  )
}
