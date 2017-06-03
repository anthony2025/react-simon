import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Pad.css'

import {connect} from 'react-redux'
import {handlePadClick, getObservable} from 'src/store/facade'

import {ANIMATION_DURATION} from 'src/store/constants'
import lightenAnimation from 'src/utils/lightenAnimation'

const mapStateToProps = state => ({
  observable: state.observable
})
const mapDispatchToProps = {
  onPadClick: handlePadClick
}

class Pad extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onPadClick: PropTypes.func.isRequired,
    observable: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.audioObject = new Audio(`audio/sound-${this.props.color}.mp3`)
    this.pad // reference to the DOM element
  }

  light = () => lightenAnimation(this.pad, ANIMATION_DURATION)
  sound = () => this.audioObject.play()
  animate = () => {
    this.light()
    this.sound()
  } // light + sound

  refreshObservable = () => {
    this.props.observable.subscribe(color => {
      if (color === this.props.color) this.light()
    })
  }

  handlePadClick = () => {
    this.animate()
    this.props.onPadClick(this.props.color)
  }

  componentDidMount() {
    this.refreshObservable()
  }
  componentDidUpdate() {
    this.refreshObservable()
  }

  render() {
    return (
      <button
        className={styles[this.props.color]}
        ref={pad => (this.pad = pad)}
        onClick={this.handlePadClick}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pad)
