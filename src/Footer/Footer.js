import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.css'

Footer.propTypes = {
  className: PropTypes.string
}

const link = 'https://github.com/anthony2025/react-simon-game'

export default function Footer ({className}) {
  return (
    <div className={styles.footer + ' ' + className}>
      <a href={link} className={styles.text}>
        made with ♥ by Anthony Ascencio
      </a>
    </div>
  )
}
