import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { FlashOn } from '@material-ui/icons'
import SimpleBar from 'simplebar-react'
import { MenuItem } from './MenuItem'
import { layoutRoutes } from '/@/router'

export default function SideBar() {
  const theme = useTheme()
  const menuList = layoutRoutes
  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        maxWidth: 258,
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.layout.side.bgcolor,
        position: 'fixed',
        zIndex: theme => theme.zIndex.appBar,
        left: 0,
        top: 0,
        height: '100%',
        '.simplebar-scrollbar::before': {
          backgroundColor: theme.layout.side.scrollBarColor,
          width: 6,
        },
      }}
    >
      <Box
        sx={{
          padding: '20px 12px 12px',
          color: '#fff',
          fontSize: '18px',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FlashOn color="primary" />
          Material Admin
        </Box>
      </Box>
      <SimpleBar style={{ maxHeight: '100%', boxSizing: 'border-box' }}>
        <Box
          sx={{
            padding: '0 12px',
          }}
        >
          {
            menuList.map(menu => (
              <MenuItem key={menu.path} {...menu} level={1} />
            ))
          }
        </Box>
      </SimpleBar>
    </Box>
  )
}
