import {MAX_LEVEL} from './constants'

export const isWrongAnswer = (state, color) =>
  color !== state.sequence[state.padsPlayed.length]

export const hasLevelEnded = state =>
  state.padsPlayed.length + 1 >= state.currentLevel

export const hasGameEnded = state => state.currentLevel >= MAX_LEVEL
export const isStrictMode = state => state.strictMode
export const getObservable = state => state.observable
export const getGameTree = ({observable, ...gameTree}) => gameTree
