import React from 'react'
import { render } from 'react-dom'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './view/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import reducer from './model/reducer'
import { updateRemoteFavoriteStocks } from './model/actions'

const store = createStore(reducer, applyMiddleware(thunk))

setInterval(() => {
  store.dispatch(updateRemoteFavoriteStocks)
}, 3000)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
