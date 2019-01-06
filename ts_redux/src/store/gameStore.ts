import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AppState, GameState } from './util';
import { app } from './reducer';

const initialState: AppState = {
  dimensions: {
    cols: 25,
    rows: 25,
  },
  apple: {
    row: 4,
    col: 4,
  },
  gameState: GameState.Start,
};

export function createGameStore() {
  return createStore(app, initialState, applyMiddleware(thunk));
}
