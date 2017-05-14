import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Console.css'

import EightBitScreen from 'src/EightBitScreen'

export default class Console extends Component {
  static propTypes = {
    strictMode: PropTypes.bool.isRequired,
    onStrictClick: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={styles.console}>
        <div className={styles.title}>
          Simon<sup className={styles.sup}>&reg;</sup>
        </div>

        <div className={styles.screenContainer}>
          <EightBitScreen className={styles.screen}/>
          <div className={styles.label}>LEVEL</div>
        </div>

        <div className={(this.props.strictMode) ? styles.strictOn : styles.strict}>
          <button
            className={styles.button}
            onClick={this.props.onStrictClick}
          />
          <div className={styles.label}>STRICT</div>
        </div>

        <div className={styles.reset}>
          <button
            className={styles.button}
            onClick={this.props.onResetClick}
          />
          <div className={styles.label}>RESET</div>
        </div>
      </div>
    )
  }
}
