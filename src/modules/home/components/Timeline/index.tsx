import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { CustomStepper as Stepper } from '../../../common/components/Stepper'

export const Timeline: React.FC = () => (
  <Container
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '2rem',
      paddingTop: { xs: '10rem', sm: '0', md: '10rem' },
      paddingBottom: '2rem',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: '600',
        }}
      >
        Timeline
      </Typography>
      <Box
        sx={{
          width: { xs: 173, sm: 323 },
          height: { xs: 5, sm: 14 },
          backgroundColor: '#ff0000',
        }}
      ></Box>
    </Box>
    <Box
      sx={{
        backgroundColor: '#387589',
        padding: { xs: '1rem', sm: '2rem' },
        borderRadius: '12px',
        rowGap: '2em',
        display: 'flex',
        width: '100%',
        maxWidth: { xs: '400px', sm: 'none' },
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      <Stepper withIndex={true} withLabel={true} />
    </Box>
  </Container>
)
