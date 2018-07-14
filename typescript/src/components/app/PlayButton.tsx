import React from 'react';

export const PlayButton: React.SFC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="snake__start-screen-play-container">
      <button className="snake__start-screen-play" onClick={onClick}>
        Play
      </button>
    </div>
  );
};
