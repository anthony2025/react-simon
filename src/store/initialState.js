import getRandomArray from 'utils/getRandomArray'
import getNewObservable from 'utils/getNewObservable'
import {PADS, MAX_LEVEL, SEQUENCE_SPEED} from './constants'

export default () => {
  let sequence = getRandomArray(PADS, MAX_LEVEL)
  let observable = getNewObservable(sequence, 1, SEQUENCE_SPEED)
  return {
    sequence: sequence,
    padsPlayed: [],
    currentLevel: 1,
    strictMode: false,
    observable: observable
  }
}
