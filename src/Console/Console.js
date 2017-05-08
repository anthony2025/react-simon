import React from 'react'
import PropTypes from 'prop-types'
import styles from './Console.css'

import EightBitScreen from 'src/EightBitScreen'

Console.propTypes = {
  isStrict: PropTypes.bool.isRequired
}

export default function Console (props) {
  const strictClass = (props.isStrict) ? styles.strictOn : styles.strict
  return (
    <div className={styles.console}>
      <div className={styles.title}>
        Simon<sup className={styles.sup}>&reg;</sup>
      </div>

      <EightBitScreen />

      <div className={strictClass}>
        <button
          className={styles.button}
          onClick={props.onStrictClick}
        />
        <div className={styles.label}>STRICT</div>
      </div>

      <div className={styles.reset}>
        <button
          className={styles.button}
          onClick={props.onResetClick}
        />
        <div className={styles.label}>RESET</div>
      </div>
    </div>
  )
}
