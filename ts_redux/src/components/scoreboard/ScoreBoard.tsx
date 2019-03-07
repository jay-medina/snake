import React from 'react';
import { connect } from 'react-redux';
import { STP, AppState } from '../../common/types';

export type ScoreBoardProps = AppState['score'];

interface ScoreProps {
  title: string;
  num: number;
}

const Score: React.StatelessComponent<ScoreProps> = ({ title, num }) => (
  <div className="snake__score">
    <div className="snake__score-title">{title}</div>
    <div className="snake__score-number">{num}</div>
  </div>
);

const ScoreBoard: React.SFC<ScoreBoardProps> = ({ current, high }) => (
  <div className="snake__scoreboard">
    <Score title="score" num={current} />
    <Score title="high" num={high} />
  </div>
);

ScoreBoard.displayName = 'Scoreboard';

const mSTP: STP<ScoreBoardProps> = ({ score }) => score;

export default connect(mSTP)(ScoreBoard);
