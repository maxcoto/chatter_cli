import React from "react";
import ReactDOM from "react-dom";
import HttpsRedirect from 'react-https-redirect'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './redux/store'

import "library/raven/sentry"

import App from './App'
import "assets/css/material-dashboard-react.css?v=1.9.0";


ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
)


// import registerServiceWorker from './registerServiceWorker'
// if(process.env.NODE_ENV !== 'production') { registerServiceWorker() }