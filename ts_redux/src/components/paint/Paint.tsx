import React from 'react'
import ScoreBoard from '../scoreboard/ScoreBoard'
import Board from '../board/Board'
import TransitionScreen from '../transitions/TransitionScreen'
import Keyboard from '../keyboard/Keyboard'

export function Paint() {
  return (
    <div className="snake__app">
      <Keyboard>
        <ScoreBoard />
        <Board />
        <TransitionScreen />
      </Keyboard>
    </div>
  )
}
