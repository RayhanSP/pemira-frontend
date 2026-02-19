import React from 'react'

export interface TimelineInterface {
  event: string
  description: string
  date: Date
}

export interface StepperProps {
  withLabel: boolean
  withIndex: boolean
}

export interface StepperContentProps {
  children: React.ReactNode
}
