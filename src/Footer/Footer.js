import React from 'react'
import styles from './Footer.css'

import {REPOSITORY} from 'src/utils/constants'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <a
        href={REPOSITORY}
        className={styles.text}
      >
        made with ♥ by Anthony
      </a>
    </div>
  )
}
