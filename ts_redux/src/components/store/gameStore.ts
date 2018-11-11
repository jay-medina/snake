import { createStore } from 'redux';
import { game } from './reducer';

export function createGameStore() {
  return createStore(game);
}
