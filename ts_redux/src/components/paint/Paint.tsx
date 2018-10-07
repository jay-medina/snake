import React from 'react';
import { ScoreBoard } from '../scoreboard/ScoreBoard';

export const Paint = () => {
  return (
    <div className="snake__app">
      <ScoreBoard highScore={10} score={10} />
    </div>
  );
};