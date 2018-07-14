import React from 'react';
import ReactDOM from 'react-dom';
import Paint from './Paint';

import { State } from '../common/types';
import { StateOptions, getInitialState, updateState } from '../updater/updater';
import { isGameOver } from '../common/util';

export function createApp(options: StateOptions) {
  let state = getInitialState(options);

  paintGame(state);

  gameLoop(state);
}

function gameLoop(state: State) {
  setTimeout(() => {
    const newState = updateState(state);
    paintGame(newState);

    if (!isGameOver(newState)) {
      gameLoop(newState);
    }
  }, state.timer);
}

function paintGame(state: State) {
  ReactDOM.render(<Paint {...state} />, document.getElementById('root'));
}
