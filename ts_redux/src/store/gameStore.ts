import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { game } from './reducer';

export function createGameStore() {
  return createStore(game, applyMiddleware(thunk));
}
