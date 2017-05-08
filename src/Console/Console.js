import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Console.css'

export default class Console extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  render() {
    return (
      <div className={styles.console}>
        <div className={styles.title}>
          Simon<sup className={styles.sup}>&reg;</sup>
        </div>
        <button className={styles.reset} onClick={this.props.onClick}/>
        <div className={styles.resetLabel}>RESET</div>
      </div>
    )
  }
}
