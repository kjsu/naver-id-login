export enum NaverOAuthInfo {
  CLIENT_ID = 'KiE0I0s67NMDmxSD5owH',
  CALLBACK_URL = 'http://localhost:3030/login/naver',
  REDIRECT_URL = 'http://localhost:3030/login',
}

export enum NaverLoginButtonIconType {
  SIMPLE = 1, // 아이콘 단독
  EXTENDED, // 아이콘 + 문장 축약
  ORIGINAL, // 아이콘 + 문장 원본
}

export interface NaverLoginButton {
  color: 'green' | 'white'
  height: number
  type: NaverLoginButtonIconType
}

export interface NaverLoginRequest {
  clientId: string
  callbackUrl: string
  isPopup: boolean
  callbackHandle?: boolean
  loginButton?: NaverLoginButton
}

export interface NaverUserInfo {
  age: '0-9' | '10-19' | '20-29' | '30-39' | '40-49' | '50-59' | '60-'
  birthday: string
  birthyear: string
  email: string
  gender: 'M' | 'F'
  id: string
  mobile: string
  name: string
  nickname: string
  profile_image: string
}

export interface NaverLogin {
  accessToken: string
  callbackHandler: object
  callbackUrl: string
  clientId: string
  isPopup: boolean
  loginButtonHandler: object
  loginButtonOptions: NaverLoginButton
  state: string
  user: NaverUserInfo
  userLoginButtons: string
  version: string
  attachLoginButtonEvent: Function
  authorize: Function
  generateAuthorizeUrl: Function
  generateReauthenticateUrl: Function
  generateRefromptUrl: Function
  generateState: Function
  getLoginStatus: Function
  getVersion: Function
  init: Function
  logout: Function
  oauthCallback: Function
  popup: Function
  reprompt: Function
  setLoginButton: Function
  setOauthCallbackUrl: Function
}

export interface RequestLoginInfo {
  accessToken: string
}