import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {ANIMATION_DURATION} from 'store/constants'
import lightenAnimation from 'styling/lightenAnimation'

export default class Pad extends Component {
  static propTypes = {
    color: PropTypes.string,
    sound: PropTypes.string,
    onClick: PropTypes.func,
    observable: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.audioObject = new Audio(props.sound)
    this.audioObject.preload = true // TODO, check this is working on mobile
    this.isObservableActive = false
  }

  light = () => lightenAnimation(this.pad, ANIMATION_DURATION)
  sound = () => this.audioObject.play()

  refreshObservable = () => {
    this.props.observable.subscribe(
      color => {
        this.isObservableActive = true
        if (color === this.props.color) this.light()
      },
      error => console.log(error),
      () => (this.isObservableActive = false)
    )
  }

  handleClick = () => {
    if (this.isObservableActive) return
    this.light()
    this.sound()
    this.props.onClick(this.props.color)
  }

  componentDidMount() {
    this.refreshObservable()
  }
  componentDidUpdate() {
    this.refreshObservable()
  }

  render() {
    return (
      <Button
        color={this.props.color}
        innerRef={pad => (this.pad = pad)}
        onClick={this.handleClick}
      />
    )
  }
}

const Button = styled.button`
  background-color: ${props => props.theme[props.color]};
  grid-area: ${props => props.color};
  box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
`
