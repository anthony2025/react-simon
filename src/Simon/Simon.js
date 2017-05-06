import React, {Component} from 'react'
import styles from './Simon.css';

import Button from 'src/Button'
import {
  getObservableWithIntervalFromArray as getObservable,
  randomizeArray,
  arrayIncludes
} from 'src/utils'

export default class Simon extends Component {
  COLORS = ['green', 'red', 'blue', 'yellow']
  MAX_LEVEL = 5

  resetGame = () => ({
    sequence: randomizeArray(this.COLORS, this.MAX_LEVEL),
    buttonPresses: [],
    currentLevel: 1
  })

  incrementLevel = (state) => ({
    currentLevel: state.currentLevel + 1
  })

  pushButtonPress = (color) => (state) => ({
    buttonPresses: state.buttonPresses.push(color)
  })

  hasGameEnded = () => this.state.currentLevel >= this.MAX_LEVEL
  hasLevelEnded = () => this.state.buttonPresses.length < this.state.currentLevel

  checkGameState = () => {
      if (hasGameEnded()) return this.resetGame
      if (buttonPresses.length < currentLevel) {
        return console.log('keep playing')
      }
      if (buttonPresses.length === currentLevel) {
        if (arrayIncludes(buttonPresses, sequence)) {
          this.setState(this.incrementLevel)
          this.setState(this.resetGame)
        }
        this.resetGame()
      }
      if (buttonPresses.length > currentLevel) {
        return this.resetGame()
      }
    }

  state = this.resetGame()
  componentDidUpdate = () => null
  componentDidMount = () => null

  handleClick = (color) => {
    this.setState(this.pushButtonPress(color))
  }

  render () {
    const {sequence, level} = this.state
    return (
      <div className={styles.simon}>
        <Button
          className='green'
          observable={getObservable(sequence, level, 1000)}
          onClick={this.handleClick}
        />
        <Button
          className='red'
          observable={getObservable(sequence, level, 1000)}
          onClick={this.handleClick}
        />
        <Button
          className='blue'
          observable={getObservable(sequence, level, 1000)}
          onClick={this.handleClick}
        />
        <Button
          className='yellow'
          observable={getObservable(sequence, level, 1000)}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}
