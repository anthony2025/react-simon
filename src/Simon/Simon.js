import React, {Component} from 'react'
import styles from './Simon.css';

import Rx from 'rxjs/Rx'
import getRandomArray from 'src/utils/getRandomArray'
import isArrayIncluded from 'src/utils/isArrayIncluded'
import {
  SEQUENCE_SPEED,
  COLORS,
  MAX_LEVEL,
  REPOSITORY
} from 'src/utils/constants'

import GithubCorner from 'src/GithubCorner'
import Board from 'src/Board'
// import Footer from 'src/Footer'

export default class Simon extends Component {
  state = {
    solutionSequence: getRandomArray(COLORS, MAX_LEVEL),
    padsPlayed: [],
    currentLevel: 1, // should be 1 in production
    strictMode: false
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

  // LIFECYCLE METHODS
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
          repository={REPOSITORY}
          bgColor='white'
          mainColor='#9F0F17'
        />
        <Board
          strictMode={this.state.strictMode}
          onPadClick={this.handlePadClick}
          onStrictClick={this.handleStrictClick}
          onResetClick={this.handleResetClick}
        />
        {/*<Footer />*/}
      </div>
    )
  }
}
