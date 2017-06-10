import React from 'react'
import PropTypes from 'prop-types'
import styles from './Console.css'

import {connect} from 'react-redux'
import {toggleStrict, resetGame} from 'src/store/actionCreators'
import {isStrictMode} from 'src/store/selectors'

import EightBitScreen from 'src/components/EightBitScreen/EightBitScreen'

Console.propTypes = {
  strictMode: PropTypes.bool.isRequired,
  onStrictClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  strictMode: isStrictMode(state)
})
const mapDispatchToProps = {
  onStrictClick: toggleStrict,
  onResetClick: resetGame
}

function Console (props) {
  return (
    <div className={styles.console}>
      <div className={styles.title}>
        Simon<sup className={styles.sup}>®</sup>
      </div>

      <div className={styles.screenContainer}>
        <EightBitScreen className={styles.screen} />
        <div className={styles.label}>LEVEL</div>
      </div>

      <div className={styles.strictContainer}>
        <button
          className={
            props.strictMode ? styles.strictButtonOn : styles.strictButton
          }
          onClick={props.onStrictClick}
        />
        <div className={styles.label}>STRICT</div>
      </div>

      <div className={styles.resetContainer}>
        <button className={styles.resetButton} onClick={props.onResetClick} />
        <div className={styles.label}>RESET</div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Console)
