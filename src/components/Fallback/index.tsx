import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

const FallBack = (
  <Box sx={{
    minHeight: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <CircularProgress />
  </Box>
)

export default FallBack