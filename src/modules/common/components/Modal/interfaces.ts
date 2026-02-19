import React, { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react'
import { CustomButton } from '@/modules/common/components/Button'

export interface ModalChildrenInterface {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ModalInterface {
  trigger: ReactElement<ComponentPropsWithoutRef<typeof CustomButton>>
  title?: string
  children: ReactNode | ((props: ModalChildrenInterface) => ReactNode)
  isLoading?: boolean
  staticBackdrop?: boolean
}
