import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Box } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import type { RouteConfigComponentProps } from 'react-router-config'

const Layout: React.FC<RouteConfigComponentProps> = (props) => {
  const { layout } = useTheme()
  const location = useLocation()
  return (
    <Box>
      <Header />
      <SideBar />
      <Box sx={{
        minHeight: 'calc(100vh - 52px)',
        marginLeft: layout.side.fixed ? '270px' : '70px',
      }}>
        <Box >
          {console.log(props.route)}
          {renderRoutes(props.route?.routes)}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout