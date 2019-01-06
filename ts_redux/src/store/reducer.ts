import { AppAction } from './actions';
import { GameState, Apple, AppState, Snake } from './util';

const initialState: AppState = {
  dimensions: {
    cols: 25,
    rows: 25,
  },
  apple: {
    row: 2,
    col: 2,
  },
  snake: [{ row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }],
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

const snake = (state: Snake, _action: AppAction): Snake => {
  return state;
};

export const app = (state: AppState = initialState, action: AppAction): AppState => {
  return {
    ...state,
    snake: snake(state.snake, action),
    apple: apple(state.apple, action),
    gameState: gameState(state.gameState, action),
  };
};
