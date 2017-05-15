import getRandomArray from 'src/utils/getRandomArray'
import getNewObservable from 'src/utils/getNewObservable'
import {COLORS, MAX_LEVEL, SEQUENCE_SPEED} from 'src/utils/constants'

// STATE SETTERS
const initialState = () => {
  const sequence = getRandomArray(COLORS, MAX_LEVEL)
  const observable = getNewObservable(sequence, 1, SEQUENCE_SPEED)
  return {
    sequence: sequence,
    padsPlayed: [],
    currentLevel: 1,
    strictMode: false,
    observable: observable
  }
}
const addPad = (state, action) => ({
  ...state,
  padsPlayed: [...state.padsPlayed, action.color]
})
const redoLevel = (state) => ({
  ...state,
  padsPlayed: [],
  observable: getNewObservable(state.sequence, state.currentLevel, SEQUENCE_SPEED)
})
const resetGame = (state) => ({
  ...state,
  sequence: getRandomArray(COLORS, MAX_LEVEL),
  padsPlayed: [],
  currentLevel: 1,
  observable: getNewObservable(state.sequence, state.currentLevel, SEQUENCE_SPEED)
})
const incrementLevel = (state) => ({
  ...state,
  padsPlayed: [],
  currentLevel: state.currentLevel + 1,
  observable: getNewObservable(state.sequence, state.currentLevel + 1, SEQUENCE_SPEED)
})

// REDUCERS
const mainReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'TOGGLE_STRICT':
      return {
        ...state,
        strictMode: !state.strictMode
      }
    case 'RESET_GAME':
      return {
        ...initialState(),
        strictMode: state.strictMode,
      }
    case 'PLAY_PAD':
      return gameLogic(state, action)
    default:
      return state
  }
}

const gameLogic = (state = [], action) => {
  const isWrongAnswer = action.color !== state.sequence[state.padsPlayed.length]
  const hasLevelEnded = state.padsPlayed.length + 1 >= state.currentLevel
  const hasGameEnded = state.currentLevel >= MAX_LEVEL
  const isStrictMode = state.strictMode

  if (isWrongAnswer) {
    if (isStrictMode) {
      return resetGame(state)
    }
    return redoLevel(state)
  }
  if (hasLevelEnded) {
    if (hasGameEnded) {
      return resetGame(state)
    }
    return incrementLevel(state)
  }
  return addPad(state, action)
}

export default mainReducer

// ACTIONS
export const handleStrictClick = () => ({type: 'TOGGLE_STRICT'})
export const handleResetClick = () => ({type: 'RESET_GAME'})
export const handlePadClick = (color) => ({type: 'PLAY_PAD', color: color})
