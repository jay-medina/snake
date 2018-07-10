import React from 'react';

export interface ScoreProps {
  title: string;
  number: number;
}

const Score: React.StatelessComponent<ScoreProps> = ({ title, number }) => (
  <div className="snake__score">
    <div className="snake__score-title">{title}</div>
    <div className="snake__score-number">{number}</div>
  </div>
);

export default Score;
