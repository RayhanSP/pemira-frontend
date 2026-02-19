import { FAQ } from '@/modules/home/components/FAQ'
import { Timeline } from '@/modules/home/components/Timeline'
import { Hero } from '@/modules/home/components/Hero'
import { Box } from '@mui/material'

export default function HomePage() {
  return (
    <Box component={'main'}>
      <Hero />
      <Timeline />
      <FAQ />
    </Box>
  )
}
