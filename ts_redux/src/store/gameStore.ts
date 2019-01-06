import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { app } from './reducer';

export function createGameStore() {
  return createStore(app, applyMiddleware(thunk));
}
