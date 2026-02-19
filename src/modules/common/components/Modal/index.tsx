'use client'

import React, { cloneElement, useState } from 'react'
import Modal from '@mui/material/Modal'
import { ModalInterface } from '@/modules/common/components/Modal/interfaces'
import { Box } from '@mui/system'

export const CustomModal = ({ trigger, children }: ModalInterface) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTriggerClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (trigger.props.onClick) {
      trigger.props.onClick(e)
    }
    setIsOpen(true)
  }

  const injectedTrigger = cloneElement(trigger, { onClick: handleTriggerClick })

  return (
    <>
      {injectedTrigger}
      <Modal
        open={isOpen}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: { lg: '45%', md: '60%', sm: '80%', xs: '90%' },
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            minHeight: '30%',
            borderRadius: '24px',
            maxWidth: { lg: '612px' },
          }}
        >
          {typeof children === 'function' ? children({ setIsOpen }) : children}
        </Box>
      </Modal>
    </>
  )
}
