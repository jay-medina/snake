import React from 'react'
import { connect } from 'react-redux'
import { STP } from '../../common/types'

export interface ScoreBoardProps {
  score: number
  highScore: number
}

interface ScoreProps {
  title: string
  num: number
}

const Score: React.StatelessComponent<ScoreProps> = ({ title, num }) => (
  <div className="snake__score">
    <div className="snake__score-title">{title}</div>
    <div className="snake__score-number">{num}</div>
  </div>
)

const ScoreBoard: React.SFC<ScoreBoardProps> = ({ score, highScore }) => (
  <div className="snake__scoreboard">
    <Score title="score" num={score} />
    <Score title="high" num={highScore} />
  </div>
)

ScoreBoard.displayName = 'Scoreboard'

const mSTP: STP<ScoreBoardProps> = ({ score }) => ({
  score: score.current,
  highScore: score.high,
})

export default connect(mSTP)(ScoreBoard)
