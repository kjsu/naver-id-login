import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '~/views/pages/Home'
import Login from '~/views/pages/Login'
import LoginNaverCallback from '~/views/pages/LoginNaverCallback'

export const HOME = '/'
export const LOGIN = '/login'
export const LOGIN_NAVER_CALLBACK = '/login/naver'

const Router: React.FC = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path={LOGIN} component={Login} />
      <Route exact path={LOGIN_NAVER_CALLBACK} component={LoginNaverCallback} />
      <Route exact path={HOME} component={Home} />
    </Switch>
  </Suspense>
)

export default Router
