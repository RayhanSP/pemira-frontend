'use client'

import { Fade, Tooltip, useMediaQuery, useTheme } from '@mui/material'
import { TOOLTIP_STYLE } from './constant'
import { CustomTooltipProps } from './interface'

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  placement = 'bottom',
  withArrow = true,
  children,
}) => {
  const theme = useTheme()

  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow={withArrow}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      componentsProps={{ popper: { sx: TOOLTIP_STYLE } }}
      disableFocusListener={useMediaQuery(theme.breakpoints.down('md'))}
      disableHoverListener={useMediaQuery(theme.breakpoints.down('md'))}
      disableTouchListener={useMediaQuery(theme.breakpoints.down('md'))}
      PopperProps={{
        disablePortal: true,
      }}
    >
      {children}
    </Tooltip>
  )
}
