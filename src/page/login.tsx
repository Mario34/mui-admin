import React from 'react'
import {
  Box, FormGroup, Card, TextField, Alert, Typography, Button,
} from '@material-ui/core'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'
import { styled } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'

const Center = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Login: React.FC = () => {
  const history = useHistory()

  return (
    <Box>
      <Center sx={{ minHeight: '100vh' }}>
        <Card sx={{ width: 500, p: 4 }}>
          <Center sx={{ mb: 3 }}>
            <AccountCircleTwoToneIcon sx={{ fontSize: 60 }} />
          </Center>
          <Center sx={{ mb: 3 }}>
            <Typography variant="h6">欢迎回来</Typography>
          </Center>
          <Alert severity="info" sx={{ mb: 3 }}>支持使用用户名或邮箱进行登录</Alert>
          <FormGroup sx={{ mb: 3 }}>
            <TextField id="standard-basic" label="用户名或邮箱" sx={{ mb: 3 }} variant="outlined" />
            <TextField id="standard-basic" label="密 码" variant="outlined" />
          </FormGroup>
          <Button
            sx={{ width: '100%', mb: 2 }}
            variant="contained"
            onClick={() => {
              history.replace('/')
            }}
          >登 录
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button>忘记密码</Button>
            <Button>立即注册</Button>
          </Box>
        </Card>
      </Center>
    </Box>
  )
}

export default Login
