import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Pad.css'

import lightenAnimation from 'src/utils/lightenAnimation'

export default class Pad extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    observable: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.audioObject = new Audio(`audio/sound-${this.props.color}.mp3`)
    this.pad // reference to the DOM element
  }

  light = () => lightenAnimation(this.pad)
  sound = () => this.audioObject.play()
  animate = () => {this.light(); this.sound()} // light + sound

  handleClick = () => {
    this.animate()
    this.props.onClick(this.props.color)
  }

  componentDidUpdate = () => {
    if (this.props.observable) {
      this.props.observable.subscribe((color) => {
        if (color === this.props.color) this.animate()
      })
    }
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
