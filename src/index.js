import React from 'react'
import {render} from 'react-dom'
import './index.css'

import {createStore} from 'redux'
import reducer from 'src/utils/reducer.js'

import {Provider} from 'react-redux'
import App from 'src/App'

render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
