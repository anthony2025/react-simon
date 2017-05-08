import React, {Component} from 'react'
import styles from './Simon.css';
import Rx from 'rxjs/Rx'

import Button from 'src/Button'
import Console from 'src/Console'
import GithubCorner from 'src/GithubCorner'
import {randomizeArray, arrayIncludes} from 'src/utils'

export default class Simon extends Component {
  //DEFINITION
  SEQUENCE_SPEED = 900
  COLORS = ['green', 'red', 'blue', 'yellow']
  MAX_LEVEL = 10

  state = {
    sequence: randomizeArray(this.COLORS, this.MAX_LEVEL),
    buttonPresses: [],
    currentLevel: 1,
    observable: 'observable',
    strict: false
  }

  // STATE SETTERS
  resetGame = (state, props) => ({
    sequence: randomizeArray(this.COLORS, this.MAX_LEVEL),
    buttonPresses: [],
    currentLevel: 1
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
  isLastLevel = () => this.state.currentLevel >= this.MAX_LEVEL
  hasLevelEnded = () => this.state.buttonPresses.length === this.state.currentLevel
  hasPlayerMadeMistake = () => !arrayIncludes(this.state.buttonPresses, this.state.sequence)
  isStrictModeOn = () => this.state.strict

  // CLASS METHODS
  checkGameState = () => {
    if (this.hasPlayerMadeMistake()) {
      if (this.isStrictModeOn()) {
        return this.setState(this.resetGame, console.log('you lost, resetting game'))
      }
      this.setState(this.levelLost, console.log('wrong answer, resetting level'))
    }
    if (this.hasLevelEnded()) {
      if (this.isLastLevel()) {
        return this.setState(this.resetGame, console.log('you won, reseting game'))
      }
      this.setState(this.levelWon, console.log('right answer, next level'))
    }
  }

  handleClick = (color) => {
    this.setState(
      this.buttonWasPressed(color),
    )
  }

  // LIFECYCLE
  componentWillMount = () => {
    this.setState(this.createObservable)
  }

  componentDidUpdate = () => {
    this.checkGameState()
  }

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
          <Console onClick={() => console.log('reset button was clicked')}/>
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
