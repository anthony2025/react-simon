import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'

const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk), applyMiddleware(logger))
  )

export default configureStore
