import { Box, Typography } from '@mui/material'
import { STEPPER_CONTENT_STYLE } from './constants'
import { StepperContentProps } from './interfaces'

export const StepperContent: React.FC<StepperContentProps> = ({ children }) => (
  <Box sx={{ ...STEPPER_CONTENT_STYLE }}>
    <Typography sx={{ fontSize: '10px', color: 'white' }}>
      {' '}
      {children}{' '}
    </Typography>
  </Box>
)
