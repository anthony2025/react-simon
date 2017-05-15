import React from 'react'
import styles from './Board.css';

import {COLORS} from 'src/utils/constants'

import Console from 'src/Console'
import Pad from 'src/Pad'

export default function Board () {
  return (
    <div className={styles.board}>
      <Console />
      {COLORS.map((color) =>
        <Pad color={color} key={color} />
      )}
    </div>
  )
}
