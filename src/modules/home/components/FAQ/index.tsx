import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { FAQContent } from '@/modules/home/components/FAQ/constants'
import { Disclosure } from '@/modules/common/components/Disclosure'

export const FAQ: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      backgroundColor: '#387589',
      padding: { xs: '4rem 0', sm: '8rem 0' },
    }}
  >
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" sx={{ color: 'white', fontWeight: '600' }}>
          FAQ
        </Typography>
        <Box
          sx={{
            width: { xs: 173, sm: 323 },
            height: { xs: 5, sm: 14 },
            backgroundColor: '#ff0000',
          }}
        ></Box>
      </Box>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {FAQContent.map(({ title, desc }, idx) => {
          return (
            <Disclosure key={idx} title={title}>
              <Typography
                component={'p'}
                sx={{
                  fontSize: { xs: '12px', sm: '16px' },
                  padding: { xs: '2px', sm: '24px' },
                  margin: '0',
                  background: 'white',
                  borderRadius: '0 0 12px 12px',
                }}
              >
                {desc}
              </Typography>
            </Disclosure>
          )
        })}
      </div>
    </Container>
  </Box>
)
