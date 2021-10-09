import React, { useRef } from 'react'
import useScript from '~/hooks/useScript'
import { NaverOAuthInfo, NaverLogin, NaverLoginRequest } from '~/interfaces/login'

const LoginNaverCallback: React.FC = () => {
  const naverLogin = useRef<NaverLogin>()

  const callback = () => {
    const request: NaverLoginRequest = {
      clientId: NaverOAuthInfo.CLIENT_ID,
      callbackUrl: NaverOAuthInfo.CALLBACK_URL,
      isPopup: true,
      callbackHandle: true,
    }
    naverLogin.current = new window.naver.LoginWithNaverId(request)
    naverLogin.current?.init()
    naverLogin.current?.getLoginStatus(getLoginStatusCallback)
  }

  useScript('https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js', 'naverSdk', callback)

  const getLoginStatusCallback = (status: boolean) => {
    if (status && naverLogin.current) {
      const { nickname } = naverLogin.current.user

      // 필수 제공 동의 조건
      if (nickname === undefined) {
        alert('필수 제공 항목을 모두 동의해주세요.')
        naverLogin.current.reprompt()
        return
      }

      window.opener && window.open('', 'opener')
      window.opener?.location.replace(NaverOAuthInfo.REDIRECT_URL + location.hash)
      window.opener?.location.reload()
      window.close()
    } else {
      console.log('callback fail')
    }
  }

  return <></>
}

export default LoginNaverCallback
