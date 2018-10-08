import React from 'react';
import { Board } from '../board/Board';
import { ScoreBoard } from '../scoreboard/ScoreBoard';

export const Paint = () => (
  <div className="snake__app">
    <ScoreBoard highScore={10} score={10} />
    <Board row={25} col={25} />
  </div>
);
