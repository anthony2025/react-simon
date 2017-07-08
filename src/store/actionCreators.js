import {
  ADD_PAD,
  TOGGLE_STRICT,
  REDO_LEVEL,
  RESET_GAME,
  INCREMENT_LEVEL,
  WIN_GAME
} from './actionTypes'
import {
  isWrongAnswer,
  hasGameEnded,
  hasLevelEnded,
  isStrictMode
} from './selectors'

export const toggleStrict = () => ({type: TOGGLE_STRICT})
export const redoLevel = () => ({type: REDO_LEVEL})
export const resetGame = () => ({type: RESET_GAME})
export const winGame = () => ({type: WIN_GAME})
export const incrementLevel = () => ({type: INCREMENT_LEVEL})

export const playerPressedPad = color => (dispatch, getState) => {
  if (isWrongAnswer(getState(), color)) {
    if (isStrictMode(getState())) {
      return dispatch(resetGame())
    }
    return dispatch(redoLevel())
  }
  if (hasLevelEnded(getState())) {
    if (hasGameEnded(getState())) {
      return dispatch(winGame())
    }
    return dispatch(incrementLevel())
  }
  dispatch({type: ADD_PAD, color: color})
}
