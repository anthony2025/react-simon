import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Board.css';

import {COLORS} from 'src/utils/constants'

import Pad from 'src/Pad'
import Console from 'src/Console'

export default class Board extends Component {
  static propTypes = {
    strictMode: PropTypes.bool.isRequired,
    onStrictClick: PropTypes.func.isRequired,
    onPadClick: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={styles.board}>
        {COLORS.map((color) => (
          <Pad
            key={color}
            color={color}
            ref={pad => this[color] = pad} // should be removed in production
            onClick={this.props.onPadClick}
          />
        ))}
        <Console
          strictMode={this.props.strictMode}
          onStrictClick={this.props.onStrictClick}
          onResetClick={this.props.onResetClick}
        />
      </div>

    )
  }
}
