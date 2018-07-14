import React from 'react';

export interface ScoreProps {
  title: string;
  num: number;
}

const Score: React.StatelessComponent<ScoreProps> = ({ title, num }) => (
  <div className="snake__score">
    <div className="snake__score-title">{title}</div>
    <div className="snake__score-number">{num}</div>
  </div>
);

export default Score;
