import React, { Component } from 'react'
import _ from 'lodash'
import styles from 'styles/App.css'
// import CardDiscover from 'components/CardDiscover.js'

export default class App extends Component {
  render () {
    return (
      <div className={`${styles.app} ${styles.layout}`}>
        <div className={styles.section}>
          {_.times(6, () => <CardDiscover key={Math.random()} />)}
        </div>
        <div className={styles.section}>
          {_.times(35, () => <CardGenres key={Math.random()} />)}
        </div>
      </div>
    )
  }
}
