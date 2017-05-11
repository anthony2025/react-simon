import React, {Component} from 'react'
import styles from './Simon.css';

import Rx from 'rxjs/Rx'
import getRandomArray from 'src/utils/getRandomArray'
import isArrayIncluded from 'src/utils/isArrayIncluded'
import {
  SEQUENCE_SPEED,
  COLORS,
  MAX_LEVEL
} from 'src/utils/constants'

import Pad from 'src/Pad'
import Console from 'src/Console'
import GithubCorner from 'src/GithubCorner'

export default class Simon extends Component {
  state = {
    sequence: getRandomArray(COLORS, MAX_LEVEL),
    played: [],
    currentLevel: 1, // should be 1 in production
    strict: false
  }

  // STATE SETTERS
  resetGame = (state, props) => ({
    sequence: getRandomArray(COLORS, MAX_LEVEL),
    played: [],
    currentLevel: 1
  })
  nextLevel = (state, props) => ({
    played: [],
    currentLevel: state.currentLevel + 1
  })
  redoLevel = (state, props) => ({
    played: []
  })

  // STATE GETTERS
  isLastLevel = () => this.state.currentLevel >= MAX_LEVEL
  hasLevelEnded = () => this.state.played.length === this.state.currentLevel
  hasPlayerMadeMistake = () => !isArrayIncluded(this.state.played, this.state.sequence)
  isStrictModeOn = () => this.state.strict

  // GAME LOGIC
  checkGameState = () => {
    if (this.hasPlayerMadeMistake()) {
      if (this.isStrictModeOn()) {
        this.setState(this.resetGame)
      }
      else {
        this.setState(this.redoLevel)
      }
      return this.setState(this.createObservable)
    }
    if (this.hasLevelEnded()) {
      if (this.isLastLevel()) {
        this.setState(this.resetGame)
      }
      else {
        this.setState(this.nextLevel)
      }
      this.setState(this.createObservable)
    }
  }

  // OBSERVABLE
  createObservable = (state, props) => ({
    observable: Rx.Observable
      .interval(SEQUENCE_SPEED)
      .take(state.currentLevel)
      .map(i => state.sequence[i])
      .subscribe((color) => this[color].light())
    })

  // LIFECYCLE METHODS
  componentDidMount = () => {
      this.setState(this.createObservable)
  }
  componentDidUpdate = () => this.checkGameState()

  // BUTTON HANDLERS
  handlePadClick = (color) => {
    this.setState((state) => ({played: [...state.played, color]}))
  }
  handleStrictClick = () => {
    this.setState((state) => ({strict: !state.strict}))
  }
  handleResetClick = () => {
    this.setState(this.resetGame)
  }

  render () {
    return (
      <div className={styles.app}>
        <GithubCorner
          repository='https://github.com/anthony2025/simon-game'
          bgColor='white'
          mainColor='#9F0F17'
        />

        <div className={styles.simon}>
          {COLORS.map((color) => (
            <Pad
              key={color}
              color={color}
              ref={pad => this[color] = pad} // should be removed in production
              onClick={this.handlePadClick}
            />
          ))}
          <Console
            isStrict={this.state.strict}
            onStrictClick={this.handleStrictClick}
            onResetClick={this.handleResetClick}
          />
        </div>
      </div>

    )
  }
}
