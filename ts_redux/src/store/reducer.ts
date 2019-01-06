import { AppAction } from './actions';
import { GameState, Apple, AppState } from './util';
import { getInitialState } from './initialState';

const gameState = (state: GameState, action: AppAction): GameState => {
  if (action.type === 'START_GAME') {
    return GameState.Run;
  }

  return state;
};

const apple = (state: Apple, _action: AppAction): Apple => {
  return state;
};

export const app = (state: AppState = getInitialState(), action: AppAction): AppState => {
  return {
    ...state,
    apple: apple(state.apple, action),
    gameState: gameState(state.gameState, action),
  };
};
