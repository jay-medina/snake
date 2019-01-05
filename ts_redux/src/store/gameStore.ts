import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { game, apple } from './reducer';
import { AppState } from './util';

const app = combineReducers<AppState>({
  apple,
  gameState: game,
});

export function createGameStore() {
  return createStore(app, applyMiddleware(thunk));
}
