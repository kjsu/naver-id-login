import React, { useState, useRef, ReactElement } from 'react'
import useScript from '~/hooks/useScript'
import { NaverOAuthInfo, NaverLogin, NaverLoginRequest, NaverLoginButtonIconType } from '~/interfaces/login'
import { deleteNaverOAuthToken } from '~/apis/naverIdLogin'

type NaverOAuth = [ReactElement, boolean, Function, Function]

function useNaverOAuth(onLoginSuccess: Function): NaverOAuth {
  const [isLogin, setIsLogin] = useState(false)
  const naverLogin = useRef<NaverLogin>()

  const callback = () => {
    window.name = 'opener'

    const request: NaverLoginRequest = {
      clientId: NaverOAuthInfo.CLIENT_ID,
      callbackUrl: NaverOAuthInfo.CALLBACK_URL,
      isPopup: true,
      loginButton: {
        color: 'green',
        height: 48,
        type: NaverLoginButtonIconType.ORIGINAL,
      },
    }
    naverLogin.current = new window.naver.LoginWithNaverId(request)
    naverLogin.current?.init()
    naverLogin.current?.getLoginStatus(getLoginStatusCallback)
  }

  useScript('https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js', 'naverSdk', callback)

  const getLoginStatusCallback = (status: boolean) => {
    setIsLogin(status)
    if (status && naverLogin.current) {
      onLoginSuccess(naverLogin.current.user)
    }
  }

  const logout = (url: string) => {
    naverLogin.current?.logout()
    location.replace(url)
  }

  const deleteMember = (url: string) => {
    naverLogin.current?.logout()
    const accessToken = getHashValue(location.hash, 'access_token')
    deleteNaverOAuthToken(accessToken)
    location.replace(url)
  }

  const getHashValue = (hash: string, param: string): string => {
    const result: any = {}
    hash.substr(1, hash.length).split('&').map((e) => {
      const keyValue = e.split('=')
      result[keyValue[0]] = keyValue[1]
    })
    return result[param]
  }

  return [<div id="naverIdLogin"></div>, isLogin, logout, deleteMember]
}

export default useNaverOAuth
