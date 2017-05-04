import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'

export default class Button extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  buttonClass = styles[this.props.id]

  animation = {
    keyframes: [
      {filter: 'brightness(1)'},
      {filter: 'brightness(2)'},
    ],
    options: {
      duration: 1000,
      easing: 'linear'
    }
  }

  handleClick = (event) => {
    const element = event.target
    element.animate(this.animation.keyframes, this.animation.options);
  }

  render() {
    return (
      <button className={this.buttonClass} onClick={this.handleClick} />
    )
  }
}
