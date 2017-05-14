import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './EightBitScreen.css'

export default class EightBitScreen extends Component {
  static propTypes = {
    level: PropTypes.number,
    smallWin: PropTypes.any,
    bigWin: PropTypes.any,
    error: PropTypes.any
  }

  state = {
    value: 10
  }

  render() {
    return (
      <div className={styles.screen}>
        {this.state.value}
      </div>
    )
  }
}
