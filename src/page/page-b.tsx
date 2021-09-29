import React from 'react'
import { Button, Box, Typography } from '@material-ui/core'

const Home = (props) => {
  return (
    <Box>
      <Button>button</Button>
      <Typography variant="h4" component="h4" gutterBottom>
        page-b: Next.js v5-beta with TypeScript example
      </Typography>
      {props.children}
    </Box>
  )
}

export default Home