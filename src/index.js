import React from 'react'
import {render} from 'react-dom'
import './index.css'

import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from 'src/utils/redux.js'

import {Provider} from 'react-redux'
import App from 'src/App/App'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
