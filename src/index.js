import React from 'react'
import {render} from 'react-dom'
import './global.css'

import configureStore from 'src/store/configureStore'
import {Provider} from 'react-redux'
import App from 'src/components/App/App'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
