import getRandomArray from 'src/utils/getRandomArray'
import isArrayIncluded from 'src/utils/isArrayIncluded'
import {
  COLORS,
  MAX_LEVEL
} from 'src/utils/constants'

const initialState = {
  solutionSequence: getRandomArray(COLORS, MAX_LEVEL),
  padsPlayed: [],
  currentLevel: 1,
  strictMode: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_STRICT':
      return {
        ...state,
        strict: !state.strict
      }
    case 'RESET_GAME':
      return {
        ...initialState,
        strictMode: state.strictMode,
      }
    case 'ADD_PAD':
      return {
        ...state,
        padsPlayed: pads(state, action)
      }
    default:
      return state
  }
}

const isLastLevel = (state) => state.currentLevel >= MAX_LEVEL
const hasLevelEnded = (state) => state.padsPlayed.length === state.currentLevel
const hasPlayerMadeMistake = (state) => !isArrayIncluded(state.padsPlayed, state.solutionSequence)
const isStrictModeOn = (state) => state.strictMode

const pads = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAD': //action.pad ?
      if (hasPlayerMadeMistake(state)) {
        if (isStrictModeOn(state)) {
          return {
            ...initialState,
            strictMode: state.strictMode
          }
        }
        else {
          return {
            ...state,
            padsPlayed: []
          }
        }
        // Observable
      }
      if (hasLevelEnded(state)) {
        if (isLastLevel(state)) {
          return {
            ...initialState,
            strictMode: state.strictMode
          }
        }
        else {
          return {
            ...state,
            padsPlayed: [],
            currentLevel: state.currentLevel + 1
          }
        }
        // return {
        //   ...state,
        //   observable: Rx.Observable
        //     .interval(SEQUENCE_SPEED)
        //     .take(state.currentLevel)
        //     .map(i => state.solutionSequence[i])
        // }
      }
    }
  }

export default reducer

export const toggleStrict = () => ({type: 'TOGGLE_STRICT'})
export const resetGame = () => ({type: 'RESET_GAME'})
export const playPad = () => ({type: 'ADD_PAD'})
