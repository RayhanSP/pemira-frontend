'use client'

import React from 'react'
import {
  STEPPER_ELEMENT_STYLE,
  STEPPER_ELEMENT_STYLE_WITHOUT_INDEX,
  TIMELINE,
} from './constants'
import {
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  useTheme,
  StepContent,
} from '@mui/material'
import { StepperProps } from './interfaces'
import { StepperContent } from './StepperContent'
import { getActiveStep } from '@/modules/common/components/Stepper/actions'
import { CustomTooltip as Tooltip } from '../Tooltip'

export const CustomStepper: React.FC<StepperProps> = ({
  withIndex,
  withLabel,
}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Stepper
      activeStep={getActiveStep(TIMELINE)}
      sx={{
        ...(withIndex
          ? STEPPER_ELEMENT_STYLE
          : STEPPER_ELEMENT_STYLE_WITHOUT_INDEX),
        width: { md: '1450px' },
      }}
      orientation={matches ? 'vertical' : 'horizontal'}
    >
      {TIMELINE.map(({ event, description }, key) => (
        <Step
          sx={
            withIndex
              ? STEPPER_ELEMENT_STYLE
              : STEPPER_ELEMENT_STYLE_WITHOUT_INDEX
          }
          key={key}
        >
          <Tooltip title={description} withArrow={true} placement="bottom">
            <StepLabel
              sx={{
                textOverflow: 'ellipsis',
              }}
            >
              {withLabel ? event : ''}
            </StepLabel>
          </Tooltip>

          {matches && (
            <StepContent>
              <StepperContent> {description} </StepperContent>
            </StepContent>
          )}
        </Step>
      ))}
    </Stepper>
  )
}
