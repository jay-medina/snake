import React from 'react';

export interface PlayButtonProps {
  onClick(): void;
}

export const PlayButton: React.SFC<PlayButtonProps> = ({ onClick }) => (
  <div className="snake__start-screen-play-container">
    <button className="snake__start-screen-play" onClick={onClick}>
      Play
    </button>
  </div>
);

PlayButton.displayName = 'PlayButton';
