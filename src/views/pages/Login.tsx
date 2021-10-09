import React, { useEffect } from 'react'
import useNaverOAuth from '~/hooks/useNaverOAuth'
import { NaverOAuthInfo, NaverUserInfo, RequestLoginInfo } from '~/interfaces/login'
import { Button, Stack } from '@mui/material'

const Login: React.FC = () => {
  const onLoginSuccess = (naverUserInfo: NaverUserInfo) => {
    alert(naverUserInfo.nickname) // 닉네임 recoil 처리

    // action
  }
  const [NaverLoginElement, isLogin, logout, deleteMember] = useNaverOAuth(onLoginSuccess)

  return (
    <>
      {isLogin || NaverLoginElement}
      {isLogin && (
        <Stack direction="row" spacing={1} mb={1}>
          <Button variant="outlined" size="small" onClick={(e) => logout(NaverOAuthInfo.REDIRECT_URL)}>로그아웃</Button>
          <Button variant="outlined" size="small" onClick={(e) => deleteMember(NaverOAuthInfo.REDIRECT_URL)}>탈퇴</Button>
        </Stack>
      )}
    </>
  )
}

export default Login
