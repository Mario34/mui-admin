import React, { useState } from 'react'
import { Box, FormGroup, FormControlLabel, Switch, TextField } from '@material-ui/core'

const Login: React.FC = () => {
  return (
    <Box>
      <h3>this is login page.</h3>
      <FormGroup>
        <TextField id="standard-basic" label="用户名" variant="standard" />
        <TextField id="standard-basic" label="密 码" variant="standard" />
      </FormGroup>
    </Box>
  )
}

export default Login