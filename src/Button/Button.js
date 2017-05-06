import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'

import {lightenAnimation as animation} from 'src/utils'

export default class Button extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    observable: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  triggerAnimation = () => this.button.animate(animation.keyframes, animation.options)

  subscribeToObservable = (state, props) => ({
    subscription:
      props.observable.subscribe(
        color => {if (color === props.color) this.triggerAnimation()}
      )
  })

  state = this.subscribeToObservable(this.state, this.props)
  // componentDidUpdate = () => this.setState(this.subscribeToObservable)
  componentWillUnmount = () => this.state.subscription.dispose()

  handleClick = (event) => {
    event.preventDefault()
    this.triggerAnimation()
    this.props.onClick(this.props.color)
  }

  render() {
    return (
      <button
        className={styles[this.props.color]}
        ref={button => this.button = button}
        onClick={this.handleClick} />
    )
  }
}
