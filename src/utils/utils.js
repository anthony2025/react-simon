import Rx from 'rxjs/Rx';

export const spitRandomInteger = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
)

export const randomizeArray = (source, length) => (
  Array(length).fill().map(() => source[spitRandomInteger(0, source.length-1)])
)

export const getObservableWithIntervalFromArray = (array, length, interval) => (
  Rx.Observable.interval(interval).take(array.length).map(i => array[i])
)

export const arrayIncludes = (arrayA, arrayB) => (
  arrayA.every((item, index) => item === arrayB[index])
)

export const lightenAnimation = {
  keyframes: [
    {filter: 'brightness(1)'},
    {filter: 'brightness(2.5)'},
  ],
  options: {
    duration: 750,
    easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)'
  }
}
