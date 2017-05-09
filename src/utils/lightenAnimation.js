const lightenAnimation = (element, length) => {
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

export default lightenAnimation
