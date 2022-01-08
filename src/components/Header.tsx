import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import { useTheme } from '@material-ui/core/styles'
import { useAppConfig } from '/@/hooks/app-config'

const Header: React.FC = () => {
  const { layout, palette } = useTheme()
  const { toggleMode } = useAppConfig()

  return (
    <Box component="header" sx={{ height: 52 }}>
      <Box
        sx={{
          height: 52,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: layout.header.bgcolor,
          boxSizing: 'border-box',
          padding: '8px 24px',
          color: layout.header.color,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: theme => theme.zIndex.appBar,
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
        }}
      >
        <IconButton
          sx={{
            color: layout.header.color,
            mx: 1,
          }}
          onClick={() => toggleMode()}
        >
          {palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        current mode is: <Box fontWeight="bold" mx={1}>{String(palette.mode).toUpperCase()}</Box>
      </Box>
    </Box>
  )
}

export default Header
