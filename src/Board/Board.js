import React from 'react'
import PropTypes from 'prop-types'
import styles from './Board.css';

import {COLORS} from 'src/utils/constants'

import Console from 'src/Console'
import Pad from 'src/Pad'

Board.propTypes = {
  strictMode: PropTypes.bool.isRequired,
  onStrictClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
  onPadClick: PropTypes.func.isRequired,
  observable: PropTypes.object
}

export default function Board (props) {
  return (
    <div className={styles.board}>
      <Console
        strictMode={props.strictMode}
        onStrictClick={props.onStrictClick}
        onResetClick={props.onResetClick}
      />
      {COLORS.map((color) =>
        <Pad
          key={color}
          color={color}
          onClick={props.onPadClick}
          observable={props.observable}
        />
      )}
    </div>
  )
}
