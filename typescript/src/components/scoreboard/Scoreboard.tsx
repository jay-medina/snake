import React from 'react';
import Score from './Score';

export interface ScoreBoardProps {
  score: number;
  highScore: number;
}

const ScoreBoard: React.StatelessComponent<ScoreBoardProps> = ({ score, highScore }) => (
  <div className="snake__scoreboard">
    <Score title="score" number={score} />
    <Score title="high" number={highScore} />
  </div>
);

export default ScoreBoard;
