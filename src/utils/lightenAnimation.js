const lightenAnimation = (element, duration) => {
  const keyframes = [
    {filter: 'brightness(1)'},
    {filter: 'brightness(2.5)'}
  ]
  const options = {
    duration: duration,
    easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)'
  }
  element.animate(keyframes, options)
}

export default lightenAnimation
