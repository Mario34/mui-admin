import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Box } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import type { RouteConfigComponentProps } from '/@/router'

const Layout: React.FC<RouteConfigComponentProps> = (props) => {
  const { layout } = useTheme()
  return (
    <Box>
      <SideBar />
      <Box sx={{
        minHeight: '100vh',
        marginLeft: layout.side.fixed ? '258px' : '70px',
      }}>
        <Header />
        <Box component="main" sx={{ minHeight: 'calc(100vh - 52px)', padding: '30px 40px' }}>
          <Box sx={{
            minHeight: '100%',
          }}>
            {props.children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout