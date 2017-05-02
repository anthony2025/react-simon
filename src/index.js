import React from 'react'
import {render} from 'react-dom'
import './global.css'

import Simon from './Simon'

const App = () => (
  <Simon />
)

render(
  <App />,
  document.querySelector('#root')
)
