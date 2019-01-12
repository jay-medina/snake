import React from 'react'
import { ScoreBoard } from '../scoreboard/ScoreBoard'
import Board from '../board/Board'
import TransitionScreen from '../transitions/TransitionScreen'
import Keyboard from '../keyboard/Keyboard'

export function Paint() {
  return (
    <div className="snake__app">
      <Keyboard>
        <ScoreBoard highScore={10} score={10} />
        <Board />
        <TransitionScreen />
      </Keyboard>
    </div>
  )
}
