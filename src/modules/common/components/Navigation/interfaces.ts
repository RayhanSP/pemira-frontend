import { ReactNode } from 'react'

export interface NavigationInterface {
  navLink: ({
    label,
    url,
    key,
  }: {
    label: string
    url: string
    key: number
  }) => ReactNode
}
