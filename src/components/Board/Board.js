import React from 'react'
import styles from './Board.css'

import {COLORS} from 'src/store/constants'

import Console from 'src/components/Console/Console'
import Pad from 'src/components/Pad/Pad'

export default function Board () {
  return (
    <div className={styles.board}>
      <Console />
      {COLORS.map(color => <Pad color={color} key={color} />)}
    </div>
  )
}
