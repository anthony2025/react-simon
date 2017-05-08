import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'

import {lightenAnimation} from 'src/utils'

export default class Button extends Component {
  // DEFINITION
  ANIMATION_SPEED = 500

  state = {
    subscription: null
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    observable: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  // INTERACTION METHODS
  animation = () => lightenAnimation(this.button, this.ANIMATION_SPEED)
  sound = () => new Audio(`audio/sound-${this.props.color}.mp3`).play()

  // OBSERVABLE
  subscribe = (state, props) => ({
    subscription: props.observable.subscribe(
      (color)  => {
        if (color === props.color) {
          this.animation()
          this.sound()
        }
      }
    )
  })

  // LIFECYCLE METHODS
  componentDidMount = () => this.setState(this.subscribe)
  componentWillUnmount = () => this.state.subscription.dispose()

  // BUTTON HANDLERS
  handleClick = (event) => {
    event.preventDefault()
    this.animation()
    this.sound()
    this.props.onClick(this.props.color)
  }

  render() {
    return (
      <button
        className={styles[this.props.color]}
        ref={button => this.button = button}
        onClick={this.handleClick}
      />
    )
  }
}
