import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './EightBitScreen.css'

export default class EightBitScreen extends Component {
  // DEFINITION
  static propTypes = {
    level: PropTypes.number,
    smallWin: PropTypes.any,
    bigWin: PropTypes.any,
    error: PropTypes.any
  }

  state = {
    value: 10
  }

  // STATE SETTERS

  // CLASS METHODS

  // LIFECYCLE

  render() {
    return (
      <div className={styles.screen + ' ' + this.props.className}>
        {this.state.value}
      </div>
    )
  }
}
