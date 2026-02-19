import { TimelineInterface } from '@/modules/common/components/Stepper/interfaces'

export const getActiveStep = (TIMELINE_DATA: TimelineInterface[]): number => {
  let currentActiveStep = 0
  const previousDate = new Date(
    new Date(new Date().getTime()).setDate(new Date().getDate() - 1)
  )

  for (const { date } of TIMELINE_DATA) {
    if (previousDate > date) {
      currentActiveStep++
    }
  }

  return currentActiveStep
}
