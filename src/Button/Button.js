import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'

import {lightenAnimation as lighten} from 'src/utils'

export default class Button extends Component {
  // DEFINITION
  ANIMATION_SPEED = 650

  static propTypes = {
    color: PropTypes.string.isRequired,
    observable: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  state = {
    subscription: 'observer',
    sound: new Audio(`audio/sound-${this.props.color}.mp3`)
  }

  // STATE SETTERS
  subscribe = (state, props) => ({
    subscription: props.observable.subscribe(
      (color)  => {
        if (color === props.color) {
          lighten(this.button, this.ANIMATION_SPEED)
        }
      }
    )
  })

  // CLASS METHODS
  handleClick = (event) => {
    event.preventDefault()
    lighten(this.button, this.ANIMATION_SPEED)
    this.state.sound.play()
    this.props.onClick(this.props.color)
  }

  // LIFECYCLE
  componentDidMount = () => this.setState(this.subscribe)
  componentWillUnmount = () => this.state.subscription.dispose()

  render() {
    return (
      <button
        className={styles[this.props.color]}
        ref={button => this.button = button}
        onClick={this.handleClick} />
    )
  }
}
