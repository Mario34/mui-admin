import React from 'react'
import { Box, Divider, IconButton } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import { useTheme } from '@material-ui/core/styles'
import { useAppConfig } from '/@/hooks/app-config'

const Header: React.FC = () => {
  const { layout, palette } = useTheme()
  const { toggleMode } = useAppConfig()

  return (
    <Box component="header" sx={{ height: 52 }}>
      <Box sx={{
        height: 52,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: layout.header.bgcolor,
        padding: '8px 24px',
        color: layout.header.color,
        position: 'fixed',
        top: 0,
        width: '100%',
      }}>
        <Box>🍞</Box>
        <Divider sx={{
          height: 18,
          margin: '0 10px 0',
          backgroundColor: layout.header.color,
        }} orientation="vertical" />
        <Box>Material Admin</Box>
        <IconButton onClick={() => toggleMode()} sx={{
          color: layout.header.color,
          mx: 1,
        }}>
          {palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        current mode is: <Box mx={1} fontWeight="bold">{String(palette.mode).toUpperCase()}</Box>
      </Box>
    </Box>
  )
}

export default Header