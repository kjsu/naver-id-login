import React, { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Box, Typography, Container, Stack, Grid } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useNaverOAuth from '~/hooks/useNaverOAuth'
import { NaverOAuthInfo, NaverUserInfo } from '~/interfaces/login'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Jinsu '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [nickname, setNickname] = useState<string>()
  const onLoginSuccess = (naverUserInfo: NaverUserInfo) => {
    setNickname(naverUserInfo.nickname)
  }
  const [NaverLoginElement, isLogin, logout, deleteMember] = useNaverOAuth(onLoginSuccess)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.action' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 5 }}>
            네이버 아이디로 로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {isLogin || (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  disabled={true}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  disabled={true}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  disabled={true}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={true}
                >
                  Sign In
                </Button>
              </>
            )}
            <Grid
              container
              alignItems="center"
              justifyContent="center"
            >
              {isLogin || NaverLoginElement}
              {isLogin && (
                <Stack direction="column" spacing={3} mb={1}>
                  <Typography component="h1" variant="h6" align="center">
                    {nickname}님 환영합니다!
                  </Typography>
                  <Stack direction="row" spacing={1} mb={1}>
                    <Button variant="contained" size="large" onClick={(e) => logout(NaverOAuthInfo.REDIRECT_URL)}>로그아웃</Button>
                    <Button variant="contained" size="large" onClick={(e) => deleteMember(NaverOAuthInfo.REDIRECT_URL)}>탈퇴</Button>
                  </Stack>
                </Stack>
              )}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}