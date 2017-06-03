import {toggleStrict, resetGame, playerPressedPad} from './actionCreators'

export const handleStrictClick = () => toggleStrict()
export const handleResetClick = () => resetGame()
export const handlePadClick = (color) => playerPressedPad(color)

export const getObservable = state => state.observable
export const getStrictMode = state => state.strictMode
