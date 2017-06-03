import React from 'react'
import PropTypes from 'prop-types'
import styles from './Console.css'

import {connect} from 'react-redux'
import {handleStrictClick, handleResetClick} from 'src/store/facade'

import EightBitScreen from 'src/EightBitScreen/EightBitScreen'

Console.propTypes = {
  strictMode: PropTypes.bool.isRequired,
  onStrictClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  strictMode: state.strictMode
})
const mapDispatchToProps = dispatch => ({
  onStrictClick: () => dispatch(handleStrictClick()),
  onResetClick: () => dispatch(handleResetClick())
})

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
