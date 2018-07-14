import React from 'react';
import { PlayButton } from './PlayButton';

export interface StartProps {
  onPlayClick: () => void;
}

export const Start: React.SFC<StartProps> = ({ onPlayClick }) => {
  return (
    <div className="snake__start-screen">
      <div className="snake__start-screen-title">Snake</div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
};
