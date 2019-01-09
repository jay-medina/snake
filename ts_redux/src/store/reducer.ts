import { AppAction } from './actions';
import { GameState, Apple, AppState, Snake } from '../common/types';
import { isSnakeAbleToMove } from '../common/util';

const initialState: AppState = {
  dimensions: {
    cols: 25,
    rows: 25,
  },
  apple: {
    row: 2,
    col: 2,
  },
  snake: {
    body: [{ row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }],
    incrementTimer: 200,
    lastIncrementTimestamp: 0,
  },
  gameState: GameState.Start,
};

const gameState = (state: GameState, action: AppAction): GameState => {
  if (action.type === 'START_GAME') {
    return GameState.Run;
  }

  return state;
};

const apple = (state: Apple, action: AppAction): Apple => {
  if (action.type === 'UPDATE_APPLE') {
    return action.payload.apple;
  }

  return state;
};

// TODO determine if snake is ded
// TODO eating apple - increment counter
const snake = (state: AppState, action: AppAction): Snake => {
  const { snake: snakeState } = state;

  if (action.type === 'TICK_TIME') {
    const { payload } = action;

    if (isSnakeAbleToMove(snakeState, payload.timestamp)) {
      // TODO move in the direction
      return {
        ...snakeState,
        lastIncrementTimestamp: payload.timestamp,
      };
    }
  }

  return snakeState;
};

export const app = (state: AppState = initialState, action: AppAction): AppState => {
  return {
    ...state,
    snake: snake(state, action),
    apple: apple(state.apple, action),
    gameState: gameState(state.gameState, action),
  };
};
