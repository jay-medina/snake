import React from 'react';
import { PlayButton } from './PlayButton';

export interface GameOverProps {
  onPlayClick: () => void;
}

export const GameOver: React.SFC<GameOverProps> = ({ onPlayClick }) => {
  return (
    <div className="snake__game-over-screen">
      <div className="snake__game-over-title">Game Over</div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
};
