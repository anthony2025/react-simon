import Rx from 'rxjs/Rx';

export const spitRandomInteger = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
)

export const randomizedArray = (source, length) => (
  Array(length).fill().map(() => source[spitRandomInteger(0, source.length-1)])
)

export const isArrayIncluded = (arrayA, arrayB) => (
  arrayA.every((item, index) => item === arrayB[index])
)

export const lightenAnimation = (element, length) => {
  const keyframes = [
    {filter: 'brightness(1)'},
    {filter: 'brightness(2.5)'}
  ]
  const options = {
    duration: length,
    easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)'
  }
  element.animate(keyframes, options)
}

