export const BUTTON_STYLES = {
  primary: {
    background: 'linear-gradient(to bottom, #48CDF8, #37AED3)',
    color: 'white',
    '&:disabled': {
      backgroundColor: 'rgba(110, 113, 152, 0.2)',
      color: 'white',
    },
    '&:focus:after': {
      opacity: 1,
    },
    '&:hover:before': {
      opacity: 1,
    },
    zIndex: 1,
    '&:before': {
      borderRadius: '8px',
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to bottom, #1D586B, #2C84A0)',
      opacity: 0,
      transition: (theme: any) =>
        theme.transitions.create('all', {
          duration: theme.transitions.duration.standard,
        }),
    },
    '&:after': {
      borderRadius: '8px',
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to bottom, #54799E, #425F7B)',
      opacity: 0,
      transition: (theme: any) =>
        theme.transitions.create('all', {
          duration: theme.transitions.duration.standard,
        }),
    },
  },
  secondary: {
    backgroundColor: 'grey',
    color: 'white',
    '&:hover': {
      backgroundColor: 'lightgrey',
      filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15))',
    },
    '&:disabled': {
      backgroundColor: 'rgba(110, 113, 152, 0.2)',
      color: 'white',
    },
  },
  tertiary: {
    color: '#023260',
    '&:disabled': {
      color: 'rgba(110, 113, 152, 0.2)',
    },
  },
  outline: {
    border: 2,
    borderColor: '#023260',
    color: '#023260',
    '&:disabled': {
      borderColor: 'rgba(110, 113, 152, 0.2)',
    },
  },
  danger: {
    backgroundColor: 'rgba(194, 6, 25)',
    color: 'white',
    '&:disabled': {
      backgroundColor: 'rgba(110, 113, 152, 0.2)',
      color: 'white',
    },
    '&:focus': {
      backgroundColor: 'rgba(171, 12, 28)',
    },
    '&:hover': {
      backgroundColor: 'rgba(171, 12, 28)',
    },
  },
}

export const BUTTON_SIZES = {
  small: {
    padding: {
      md: '6px 16px',
      lg: '6px 24px',
    },
    font: {
      md: '8px',
      lg: '12px',
    },
  },
  regular: {
    padding: {
      md: '8px 24px',
      lg: '8px 32px',
    },
    font: {
      md: '12px',
      lg: '16px',
    },
  },
  block: {
    padding: {
      md: '8px 24px',
      lg: '8px 32px',
    },
    font: {
      md: '12px',
      lg: '16px',
    },
  },
}
