import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Pad.css'

import lightenAnimation from 'src/utils/lightenAnimation'

export default class Pad extends Component {
  state = {
    subscription: null
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    observable: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  // INTERACTION METHODS
  animation = () => lightenAnimation(this.pad)
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
  componentDidMount = () => this.setState(this.subscribe, this.forceUpdate())
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
        ref={pad => this.pad = pad}
        onClick={this.handleClick}
      />
    )
  }
}
