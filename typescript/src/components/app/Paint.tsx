import React from 'react';
import ScoreBoard from '../scoreboard/Scoreboard';
import Board from '../board/Board';
import { Snake, Apple } from '../common/types';

export interface AppProps {
  row: number;
  col: number;
  score: number;
  highScore: number;
  snake: Snake;
  apple: Apple;
}

const App: React.StatelessComponent<AppProps> = ({ row, col, score, highScore, snake, apple }) => (
  <div className="snake__app">
    <ScoreBoard score={score} highScore={highScore} />
    <Board apple={apple} snake={snake} row={row} col={col} />
  </div>
);

export default App;
