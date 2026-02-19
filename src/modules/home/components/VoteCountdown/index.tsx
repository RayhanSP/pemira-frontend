import React, { useEffect, useState } from 'react'
import { Grid2 as Grid, Typography } from '@mui/material'
import { VOTING_END_DATE } from '@/modules/common/constants/voting.constant'

const calculateTimeLeft = () => {
  const endDate = new Date(VOTING_END_DATE)
  const now = new Date()
  const difference = endDate.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  if (difference >= 86400000) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: 0,
    }
  }

  return {
    days: 0,
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export const VoteCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const isLessThan24Hours =
    new Date(VOTING_END_DATE).getTime() - new Date().getTime() < 86400000

  const segmentStyle = {
    display: 'flex',
    gap: '0.2rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const,
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    px: '1rem',
    py: '0.25rem',
  }

  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: { xs: '100%', sm: '45%', md: '65%', lg: '45%' },
        height: { xs: '35%', sm: '20%', md: '25%', lg: '15%' },
        backgroundColor: {
          xs: 'rgba(0, 0, 0, 0.5)',
          sm: 'rgba(0, 0, 0, 0.75)',
        },
        gap: '0.5rem',
        borderRadius: '14px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '64px',
        fontWeight: 'bold',
      }}
    >
      {isLessThan24Hours ? (
        <>
          <Grid size={4} sx={segmentStyle}>
            <Typography sx={{ fontSize: '20px' }}>
              {timeLeft.hours.toString().padStart(2, '0')}
            </Typography>
            <Typography>Jam</Typography>
          </Grid>
          <Grid size={4} sx={segmentStyle}>
            <Typography sx={{ fontSize: '20px' }}>
              {timeLeft.minutes.toString().padStart(2, '0')}
            </Typography>
            <Typography>Menit</Typography>
          </Grid>
          <Grid size={4} sx={segmentStyle}>
            <Typography sx={{ fontSize: '20px' }}>
              {timeLeft.seconds.toString().padStart(2, '0')}
            </Typography>
            <Typography>Detik</Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid size={4} sx={segmentStyle}>
            <Typography sx={{ fontSize: '20px' }}>
              {timeLeft.days.toString().padStart(2, '0')}
            </Typography>
            <Typography>Hari</Typography>
          </Grid>
          <Grid size={4} sx={segmentStyle}>
            <Typography sx={{ fontSize: '20px' }}>
              {timeLeft.hours.toString().padStart(2, '0')}
            </Typography>
            <Typography>Jam</Typography>
          </Grid>
          <Grid size={4} sx={segmentStyle}>
            <Typography sx={{ fontSize: '20px' }}>
              {timeLeft.minutes.toString().padStart(2, '0')}
            </Typography>
            <Typography>Menit</Typography>
          </Grid>
        </>
      )}
    </Grid>
  )
}
