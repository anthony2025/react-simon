import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Console.css'

export default class Console extends Component {
  // DEFINITION
  static propTypes = {
  }

  static stateTypes = {
  }

  // STATE SETTERS

  // CLASS METHODS

  // LIFECYCLE

  render() {
    return (
      <div
        className={styles.console}
        ref={button => this.button = button}
        onClick={this.handleClick}
      >
        <div className={styles.title}>
          Simon<sup className={styles.sup}>&reg;</sup>
        </div>
        <button className={styles.start} />
      </div>
    )
  }
}
