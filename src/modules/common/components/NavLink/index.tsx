'use client'

import Link from 'next/link'
import { NavLinkInterface } from '@/modules/common/components/NavLink/interfaces'
import { usePathname } from 'next/navigation'
import { Box, Typography } from '@mui/material'
import React from 'react'

export const NavLink = ({ url, children }: NavLinkInterface) => {
  const pathname = usePathname()

  return (
    <Box
      sx={{
        display: 'block',
        '&:hover': {
          '& .underline': {
            width: '30px',
          },
        },
      }}
    >
      <Link
        href={url}
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <Typography>{children}</Typography>
        <Box
          className="underline"
          sx={{
            width: url === pathname ? '30px' : '0px',
            height: '2px',
            backgroundColor: '#F8A932',
            transition: 'all 0.3s',
          }}
        />
      </Link>
    </Box>
  )
}
