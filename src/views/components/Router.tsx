import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '~/views/pages/Home'

export const MAIN = '/'
export const HOME = '/home'

const Router: React.FC = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path={HOME} component={Home} />
    </Switch>
  </Suspense>
)

export default Router
