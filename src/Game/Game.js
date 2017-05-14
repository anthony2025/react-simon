import React, {Component} from 'react'

import Rx from 'rxjs/Rx'
import getRandomArray from 'src/utils/getRandomArray'
import isArrayIncluded from 'src/utils/isArrayIncluded'
import {
  SEQUENCE_SPEED,
  COLORS,
  MAX_LEVEL,
} from 'src/utils/constants'

import Board from 'src/Board'

export default class Game extends Component {
  state = {
    solutionSequence: getRandomArray(COLORS, MAX_LEVEL),
    padsPlayed: [],
    currentLevel: 1,
    strictMode: false,
    observable: null
  }

  resetGame = () => ({
    solutionSequence: getRandomArray(COLORS, MAX_LEVEL),
    padsPlayed: [],
    currentLevel: 1
  })
  nextLevel = (state) => ({
    padsPlayed: [],
    currentLevel: state.currentLevel + 1
  })
  redoLevel = () => ({
    padsPlayed: []
  })
  toggleStrict = (state) => ({
    strictMode: !state.strictMode
  })
  playPad = (color) => (state) => ({
    padsPlayed: [...state.padsPlayed, color]
  })
  createObservable = (state) => ({
    observable: Rx.Observable
      .interval(SEQUENCE_SPEED)
      .take(state.currentLevel)
      .map(i => state.solutionSequence[i])
  })

  isLastLevel = () => this.state.currentLevel >= MAX_LEVEL
  hasLevelEnded = () => this.state.padsPlayed.length === this.state.currentLevel
  hasPlayerMadeMistake = () => !isArrayIncluded(this.state.padsPlayed, this.state.solutionSequence)
  isStrictModeOn = () => this.state.strictMode

  checkGameState = () => {
    if (this.hasPlayerMadeMistake()) {
      if (this.isStrictModeOn()) {
        this.setState(this.resetGame)
      }
      else {
        this.setState(this.redoLevel)
        console.log('resetting level')
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

  handlePadClick = (color) => {
    this.setState(this.playPad(color),
    this.checkGameState)
  }
  handleStrictClick = () => {
    this.setState(this.toggleStrict)
  }
  handleResetClick = () => {
    this.setState(this.resetGame)
  }

  componentDidMount = () => {
    this.setState(this.createObservable)
  }

  render () {
    return (
      <Board
        strictMode={this.state.strictMode}
        onStrictClick={this.handleStrictClick}
        onResetClick={this.handleResetClick}
        onPadClick={this.handlePadClick}
        observable={this.state.observable}
      />
    )
  }
}
