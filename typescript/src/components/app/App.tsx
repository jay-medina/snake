import React from 'react';
import ReactDOM from 'react-dom';
import Paint from './Paint';

import { State } from '../common/types';
import { isGameOver } from '../common/util';
import { getInitialState, resetGame, StateOptions, updateState } from '../updater/updater';

export function createApp(options: StateOptions) {
  const state = getInitialState(options);

  paintGame(state, () => {
    gameLoop(state);
  });
}

function gameLoop(state: State) {
  setTimeout(() => {
    const newState = updateState(state);

    paintGame(newState, () => {
      gameLoop(resetGame(state));
    });

    if (!isGameOver(newState)) {
      gameLoop(newState);
    }
  }, state.timer);
}

function paintGame(state: State, onPlayClick: () => void) {
  ReactDOM.render(<Paint {...state} onPlayClick={onPlayClick} />, document.getElementById('root'));
}
