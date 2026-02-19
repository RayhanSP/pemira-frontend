import { ReactNode } from 'react'

export interface ButtonInterface {
  size?: 'small' | 'regular' | 'block'
  isDisabled?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger'
  startIcon?: ReactNode
  endIcon?: ReactNode
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
