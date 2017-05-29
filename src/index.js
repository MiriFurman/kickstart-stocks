import React from 'react'
import { render } from 'react-dom'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './view/app/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import reducer from './model/reducer'
import { updateStocks } from './model/actions'
import { indentity } from 'lodash/fp'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || indentity;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

setInterval(() => {
  store.dispatch(updateStocks)
}, 3000)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
