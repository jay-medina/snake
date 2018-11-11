import React from 'react';
import { Board } from '../board/Board';
import { ScoreBoard } from '../scoreboard/ScoreBoard';
import TransitionScreen from '../transitions/TransitionScreen';

export const Paint = () => {
  const apple = { row: 1, col: 1 };
  const snake = [{ row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }];

  return (
    <div className="snake__app">
      <ScoreBoard highScore={10} score={10} />
      <Board rows={25} cols={25} apple={apple} snake={snake} />
      <TransitionScreen />
    </div>
  );
};
