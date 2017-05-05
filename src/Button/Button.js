import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'

export default class Button extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    animate: PropTypes.func
  }

  keyframes = [
    {filter: 'brightness(1)'},
    {filter: 'brightness(2.5)'},
  ]

  options = {
    duration: 1000,
    easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)'
  }

  triggerAnimation = () => this.button.animate(this.keyframes, this.options)
  exposeAnimation = () => this.triggerAnimation

  render() {
    return (
      <button
        className={styles[this.props.id]}
        ref={button => this.button = button}
        onClick={this.triggerAnimation} />
    )
  }
}
