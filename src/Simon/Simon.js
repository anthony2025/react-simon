import React, {Component} from 'react'
import styles from './Simon.css';

import Button from 'src/Button'

export default function Simon (props) {
  return (
    <div className={styles.simon}>
      <Button id='green' />
      <Button id='red' />
      <Button id='yellow' />
      <Button id='blue' />
    </div>
  )
}
