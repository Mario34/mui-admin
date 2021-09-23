import React from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  return (
    <Box>
      <Button onClick={() => history.push('/module/page-home')}>to home</Button>
      <Typography variant="h4" component="h4" gutterBottom>
          Next.js v5-beta with TypeScript example
      </Typography>
    </Box>
  )
}

export default Home