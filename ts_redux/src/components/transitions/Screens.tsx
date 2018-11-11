import React, { SFC } from 'react';
import { PlayButton } from './PlayButton';

interface StartProps {
  onPlayClick(): void;
}

export const Start: SFC<StartProps> = ({ onPlayClick }) => (
  <div className="snake__start-screen">
    <div className="snake__start-screen-title">Snake</div>
    <PlayButton onClick={onPlayClick} />
  </div>
);

export const GameOver: SFC<StartProps> = ({ onPlayClick }) => {
  return (
    <div className="snake__game-over-screen">
      <div className="snake__game-over-title">Game Over</div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
};
