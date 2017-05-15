import React from 'react'

import {connect} from 'react-redux'
import {
  toggleStrict,
  resetGame,
  playPad
} from 'src/utils/reducer'

import Board from 'src/Board'

const mapStateToProps = (state) => ({
  strictMode: state.strictMode,
  observable: state.observable
})

const mapDispatchToProps = (dispatch) => ({
  onStrictClick: () => dispatch(toggleStrict()),
  onResetClick: () => dispatch(resetGame()),
  onPadClick: () => dispatch(playPad())
})

const BoardWithProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardWithProps
