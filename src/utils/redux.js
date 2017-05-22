import getRandomArray from 'src/utils/getRandomArray'
import getNewObservable from 'src/utils/getNewObservable'
import {COLORS, MAX_LEVEL, SEQUENCE_SPEED} from 'src/utils/constants'

const TOGGLE_STRICT = 'TOGGLE_STRICT'
const ADD_PAD = 'ADD_PAD'
const REDO_LEVEL = 'REDO_LEVEL'
const RESET_GAME = 'RESET_GAME'
const INCREMENT_LEVEL = 'INCREMENT_LEVEL'

const addPad = (color) => ({type: 'ADD_PAD', color: color})
const toggleStrict = () => ({type: 'TOGGLE_STRICT'})
const redoLevel = () => ({type: 'REDO_LEVEL'})
const resetGame = () => ({type: 'RESET_GAME'})
const incrementLevel = () => ({type: 'INCREMENT_LEVEL'})

const initialState = () => {
  let sequence = getRandomArray(COLORS, MAX_LEVEL)
  let observable = getNewObservable(sequence, 1, SEQUENCE_SPEED)
  return {
    sequence: sequence,
    padsPlayed: [],
    currentLevel: 1,
    strictMode: false,
    observable: observable
  }
}

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'ADD_PAD':
      return {
        ...state,
        padsPlayed: [...state.padsPlayed, action.color]
      }
    case 'TOGGLE_STRICT':
      return {
        ...state,
        strictMode: !state.strictMode
      }
    case 'REDO_LEVEL':
      return {
        ...state,
        padsPlayed: [],
        observable: getNewObservable(state.sequence, state.currentLevel, SEQUENCE_SPEED)
      }
    case 'RESET_GAME':
      return {
        ...state,
        sequence: getRandomArray(COLORS, MAX_LEVEL),
        padsPlayed: [],
        currentLevel: 1,
        observable: getNewObservable(state.sequence, state.currentLevel, SEQUENCE_SPEED)
      }
    case 'INCREMENT_LEVEL':
      return {
        ...state,
        padsPlayed: [],
        currentLevel: state.currentLevel + 1,
        observable: getNewObservable(state.sequence, state.currentLevel + 1, SEQUENCE_SPEED)
      }
    default:
      return state
  }
}

export const handlePadClick = (color) => (dispatch, getState) => {
  const {
    sequence,
    padsPlayed,
    currentLevel,
    strictMode
  } = getState()

  const isWrongAnswer = color !== sequence[padsPlayed.length]
  const hasLevelEnded = padsPlayed.length + 1 >= currentLevel
  const hasGameEnded = currentLevel >= MAX_LEVEL
  const isStrictMode = strictMode

  if (isWrongAnswer) {
    if (isStrictMode) {
      return dispatch(resetGame())
    }
    return dispatch(redoLevel())
  }
  if (hasLevelEnded) {
    if (hasGameEnded) {
      return dispatch(resetGame())
    }
    return dispatch(incrementLevel())
  }
  dispatch(addPad(color))
}

export const handleStrictClick = () => (toggleStrict())
export const handleResetClick = () => (resetGame())
export default reducer
