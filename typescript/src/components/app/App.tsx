import React from 'react';
import ReactDOM from 'react-dom';
import Paint from './Paint';

import { State } from '../common/types';
import { StateOptions, getInitialState, updateState, resetGame } from '../updater/updater';
import { isGameOver } from '../common/util';

export function createApp(options: StateOptions) {
  let state = getInitialState(options);

  paintGame(state, () => {
    gameLoop(state);
  });
}

function gameLoop(state: State) {
  let timerId = setTimeout(() => {
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
