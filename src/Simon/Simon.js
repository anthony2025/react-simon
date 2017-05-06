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

  state = this.resetGame()

  wonLevel = () => ({
    buttonPresses: [],
    currentLevel: state.currentLevel + 1
  })

  lostLevel = () => ({
    buttonPresses: []
  })

  pushButtonPress = (color) => (state) => ({
    buttonPresses: [...state.buttonPresses, color]
  })

  hasGameEnded = () => this.state.currentLevel >= this.MAX_LEVEL
  hasLevelEnded = () => this.state.buttonPresses.length === this.state.currentLevel
  isPlayerCorrect = () => arrayIncludes(this.state.buttonPresses, this.state.sequence)

  checkGameState = () => {
      if (hasGameEnded()) {
        return this.setState(this.resetGame)
      }
      if (hasLevelEnded()) {
        isPlayerCorrect()
          ? this.setState(this.wonLevel)
          : this.setState(this.lostLevel)
      }
    }

  componentDidUpdate = () => null
  componentDidMount = () => null

  handleClick = (color) => {
    this.setState(this.pushButtonPress(color))
  }

  render () {
    const {sequence, level} = this.state
    return (
      <div className={styles.simon}>
        {this.COLORS.map((color) => (
          <Button
            key={color}
            color={color}
            observable={getObservable(sequence, level, 1000)}
            onClick={this.handleClick}
          />
        ))}
      </div>
    )
  }
}
