import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Paint } from './components/paint/Paint';
import { createGameStore } from './store/gameStore';
import { Store } from 'redux';
import { AppState } from './common/types';
import { AppAction } from './store/actions';

export function createGame() {
  const store = createGameStore();

  const Game = (
    <Provider store={store}>
      <Paint />
    </Provider>
  );

  ReactDOM.render(Game, document.getElementById('root'));

  moveSnake(store);
}

function moveSnake(store: Store<AppState, AppAction>) {
  const gameloop = (() => {
    let started = false;

    return () => {
      if (started) return;

      started = true;
      setInterval(() => {
        store.dispatch({
          type: 'TICK_TIME',
          payload: {
            timestamp: 10,
          },
        });
      }, 1000);
    };
  })();

  store.subscribe(gameloop);
}
