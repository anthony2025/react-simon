import React from 'react'
import {render} from 'react-dom'
import './index.css'

import configureStore from 'src/store/configureStore'
import {Provider} from 'react-redux'
import App from 'src/App/App'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
