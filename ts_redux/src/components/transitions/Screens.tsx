import React from 'react';
import { PlayButton } from './PlayButton';

export interface StartProps {
  onPlayClick(): void;
}

export function Start({ onPlayClick }: StartProps) {
  return (
    <div className="snake__start-screen">
      <div className="snake__start-screen-title">Snake</div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
}

export function GameOver({ onPlayClick }: StartProps) {
  return (
    <div className="snake__game-over-screen">
      <div className="snake__game-over-title">Game Over</div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
}
