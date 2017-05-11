import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Pad.css'

import lightenAnimation from 'src/utils/lightenAnimation'

export default class Pad extends Component {
  state = {
    audioObject: new Audio(`audio/sound-${this.props.color}.mp3`),
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  // INTERACTION METHODS
  animation = () => lightenAnimation(this.pad)
  sound = () => this.state.audioObject.play()
  light = () => {this.animation(); this.sound()}

  // BUTTON HANDLERS
  handleClick = () => {
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
