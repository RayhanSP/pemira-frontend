import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getVoteCount } from '@/modules/home/actions/getVoteCount'

export const VoteCount = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    getVoteCount().then((res) => setCount(res.count))
  }, [])

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '45%', md: '65%', lg: '45%' },
        height: { xs: '80%', sm: '40%', md: '65%', lg: '35%' },
        backgroundColor: {
          xs: 'rgba(0, 0, 0, 0.5)',
          sm: 'rgba(0, 0, 0, 0.75)',
        },
        borderRadius: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '64px',
        fontWeight: 'bold',
      }}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        Jumlah Suara Masuk
      </Typography>
      {count}
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        Suara
      </Typography>
    </Box>
  )
}
