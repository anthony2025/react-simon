import React, {Component} from 'react'
import styles from './Simon.css';
import Rx from 'rxjs/Rx'

import Button from 'src/Button'
import Console from 'src/Console'
import GithubCorner from 'src/GithubCorner'
import {
  randomizeArray,
  arrayIncludes
} from 'src/utils'

export default class Simon extends Component {
  //DEFINITION
  SEQUENCE_SPEED = 900
  COLORS = ['green', 'red', 'blue', 'yellow']
  MAX_LEVEL = 5

  static stateTypes = {
    sequence: 'array',
    buttonPresses: 'array',
    currentLevel: 'number',
    observable: 'observable'
  }

  // STATE SETTERS
  resetGame = (state, props) => ({
    sequence: randomizeArray(this.COLORS, this.MAX_LEVEL),
    buttonPresses: [],
    currentLevel: 10,  // should initialize to 1
  })

  levelWon = (state, props) => ({
    buttonPresses: [],
    currentLevel: state.currentLevel + 1
  })

  levelLost = (state, props) => ({
    buttonPresses: []
  })

  buttonWasPressed = (color) => (state, props) => ({
    buttonPresses: [...state.buttonPresses, color]
  })

  createObservable = (state, props) => ({
    observable:
      Rx.Observable
      .interval(this.SEQUENCE_SPEED)
      .take(state.currentLevel)
      .map(x => state.sequence[x])
  })

  // CONDITIONALS
  hasGameEnded = () => this.state.currentLevel >= this.MAX_LEVEL
  hasLevelEnded = () => this.state.buttonPresses.length === this.state.currentLevel
  isPlayerCorrect = () => arrayIncludes(this.state.buttonPresses, this.state.sequence)

  // CLASS METHODS
  checkGameState = () => {
    if (this.hasGameEnded()) {
      this.setState(this.resetGame)
    }
    else if (this.hasLevelEnded()) {
      this.isPlayerCorrect()
        ? this.setState(this.wonLevel)
        : this.setState(this.lostLevel)
    }
  }

  handleClick = (color) => {
    this.setState(this.buttonWasPressed(color))
  }

  // LIFECYCLE
  componentWillMount = () => {
    this.setState(this.resetGame)
    this.setState(this.createObservable)
  }

  componentDidUpdate = () => this.checkGameState()

  render () {
    return (
      <div className={styles.app}>
        <div className={styles.simon}>
          {this.COLORS.map((color) => (
            <Button
              key={color}
              color={color}
              observable={this.state.observable}
              onClick={this.handleClick}
            />
          ))}
          <Console />
        </div>

        <GithubCorner
          repository='https://github.com/anthony2025/simon-game'
          bgColor='white'
          mainColor='#9F0F17'
        />
      </div>

    )
  }
}
