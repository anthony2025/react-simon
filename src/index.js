import React from 'react'
import {render} from 'react-dom'
import './index.css'

import store from 'src/store/configureStore'
import {Provider} from 'react-redux'
import App from 'src/App/App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
