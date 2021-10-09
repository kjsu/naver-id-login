import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/App'
import appConfig from '~/appConfig'

ReactDOM.render(
  <React.StrictMode>
    <App config={appConfig} />
  </React.StrictMode>,
  document.getElementById('root'),
)
