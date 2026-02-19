import { TooltipProps } from '@mui/material'
import React from 'react'

export interface CustomTooltipProps {
  title: string
  placement?: TooltipProps['placement']
  withArrow?: boolean
  children: React.ReactElement<any, any>
}
