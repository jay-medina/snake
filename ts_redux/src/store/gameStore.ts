import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { game, apple } from './reducer';
import { AppState, GameState } from './util';

const app = combineReducers({
  apple,
  gameState: game,
});

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
