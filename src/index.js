import React from 'react'
import {render} from 'react-dom'
import registerServiceWorker from 'services/serviceWorker'

import injectResetCSS from 'styling/reset'
import {ThemeProvider} from 'styled-components'
import theme from 'styling/theme'

import configureStore from 'store/configureStore'
import {Provider} from 'react-redux'
import App from 'components/App/App'

render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

injectResetCSS()
registerServiceWorker()
