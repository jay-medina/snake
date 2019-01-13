import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Paint } from './components/paint/Paint';
import { createGameStore } from './store/gameStore';
import { startLoop } from './components/app/gameloop';

export function createGame() {
  const store = createGameStore();

  const Game = (
    <Provider store={store}>
      <Paint />
    </Provider>
  );

  ReactDOM.render(Game, document.getElementById('root'));

  startLoop(store);
}
