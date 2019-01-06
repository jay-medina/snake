import { AppAction } from './actions';
import { GameState, Apple, AppState } from './util';

const initialState = {
  dimensions: {
    cols: 25,
    rows: 25,
  },
  apple: {
    row: 2,
    col: 2,
  },
  gameState: GameState.Start,
};

const gameState = (state: GameState, action: AppAction): GameState => {
  if (action.type === 'START_GAME') {
    return GameState.Run;
  }

  return state;
};

const apple = (state: Apple, _action: AppAction): Apple => {
  return state;
};

export const app = (state: AppState = initialState, action: AppAction): AppState => {
  return {
    ...state,
    apple: apple(state.apple, action),
    gameState: gameState(state.gameState, action),
  };
};
