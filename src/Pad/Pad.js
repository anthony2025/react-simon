import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Pad.css'

import {connect} from 'react-redux'
import {handlePadClick} from 'src/utils/redux'

import {ANIMATION_DURATION} from 'src/utils/constants'
import lightenAnimation from 'src/utils/lightenAnimation'

const mapStateToProps = (state) => ({
  observable: state.observable
})
const mapDispatchToProps = (dispatch) => ({
  onClick: (color) => dispatch(handlePadClick(color)),
})

class Pad extends Component {
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

  light = () => lightenAnimation(this.pad, ANIMATION_DURATION)
  sound = () => this.audioObject.play()
  animate = () => {this.light(); this.sound()} // light + sound

  handleClick = () => {
    this.animate()
    this.props.onClick(this.props.color)
  }

  componentDidMount = () => {
    if (this.props.observable) {
      this.props.observable.subscribe((color) => {
        if (color === this.props.color) this.animate()
      })
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)
