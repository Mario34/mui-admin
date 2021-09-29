import React from 'react'
import { Box, Divider } from '@material-ui/core'

interface LayoutHeaderProps {
  title?: string
  renderRight?: () => JSX.Element
}

const LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
  return (
    <header>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Box sx={{
          fontSize: '24px',
          fontWeight: 600,
          color: theme => theme.palette.text.primary,
        }}>{props.title}</Box>
        <Box>{props.renderRight?.()}</Box>
      </Box>
      <Divider sx={{ paddingTop: 2, mb: 3 }} />
    </header>
  )
}

export default LayoutHeader