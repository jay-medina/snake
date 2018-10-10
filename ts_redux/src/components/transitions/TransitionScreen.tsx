import React, { SFC } from 'react';
import { GameState } from '../common/types';
import { PlayButton } from './PlayButton';

interface TransitionScreenProps {
  gameState: GameState;
  onPlayClick(): void;
}

interface GameOverProps {
  onPlayClick: () => void;
}

interface StartProps {
  onPlayClick(): void;
}

const Start = ({ onPlayClick }: StartProps) => (
  <div className="snake__start-screen">
    <div className="snake__start-screen-title">Snake</div>
    <PlayButton onClick={onPlayClick} />
  </div>
);

const GameOver = ({ onPlayClick }: GameOverProps) => {
  return (
    <div className="snake__game-over-screen">
      <div className="snake__game-over-title">Game Over</div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
};

export const TransitionScreen: SFC<TransitionScreenProps> = ({
  gameState,
  onPlayClick,
}) => {
  if (gameState === 'start') {
    return <Start onPlayClick={onPlayClick} />;
  }
  if (gameState === 'gameover') {
    return <GameOver onPlayClick={onPlayClick} />;
  }

  return null;
};

TransitionScreen.displayName = 'TransitionScreen';
