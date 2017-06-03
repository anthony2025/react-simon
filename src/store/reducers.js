import getRandomArray from 'src/utils/getRandomArray'
import getNewObservable from 'src/utils/getNewObservable'

import {COLORS, MAX_LEVEL, SEQUENCE_SPEED} from './constants'
import {
  ADD_PAD,
  TOGGLE_STRICT,
  REDO_LEVEL,
  RESET_GAME,
  INCREMENT_LEVEL
} from './actions'

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

export default (state = initialState(), action) => {
  switch (action.type) {
    case ADD_PAD:
      return {
        ...state,
        padsPlayed: [...state.padsPlayed, action.color]
      }
    case TOGGLE_STRICT:
      return {
        ...state,
        strictMode: !state.strictMode
      }
    case REDO_LEVEL:
      return {
        ...state,
        padsPlayed: [],
        observable: getNewObservable(
          state.sequence,
          state.currentLevel,
          SEQUENCE_SPEED
        )
      }
    case RESET_GAME:
      return {
        ...state,
        sequence: getRandomArray(COLORS, MAX_LEVEL),
        padsPlayed: [],
        currentLevel: 1,
        observable: getNewObservable(state.sequence, 1, SEQUENCE_SPEED)
      }
    case INCREMENT_LEVEL:
      return {
        ...state,
        padsPlayed: [],
        currentLevel: state.currentLevel + 1,
        observable: getNewObservable(
          state.sequence,
          state.currentLevel + 1,
          SEQUENCE_SPEED
        )
      }
    default:
      return state
  }
}
