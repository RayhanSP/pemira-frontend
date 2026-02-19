'use client'

import { MENUS } from '@/modules/common/components/Navbar/constants'
import { NavigationInterface } from '@/modules/common/components/Navigation/interfaces'
import { useSession } from 'next-auth/react'

export const Navigation = ({ navLink }: NavigationInterface) => {
  const { status } = useSession()
  return MENUS.map(({ url, label, isActive }, index) => {
    return !isActive
      ? ''
      : label === 'E-Voting' && status === 'unauthenticated'
        ? ''
        : label === 'Hasil' &&
            new Date().getUTCDate() !== 28 &&
            new Date().getUTCHours() + 7 !== 14
          ? ''
          : navLink({ label, url, key: index })
  })
}
