import React from 'react'
import { Button, Box, Typography } from '@material-ui/core'

const Home: React.FC = (props) => {
  return (
    <Box>
      <Button>button</Button>
      <Typography gutterBottom component="h4" variant="h4">
        page-a: Next.js v5-beta with TypeScript example
      </Typography>
      {props.children}
    </Box>
  )
}

export default Home
