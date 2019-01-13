import { AppAction } from './actions';
import { GameState, Apple, AppState, Score } from '../common/types';
import { snakeReducer } from './snake/reducer';

const initialState: AppState = {
  score: {
    current: 0,
    high: 100,
  },
  dimensions: {
    cols: 25,
    rows: 25,
  },
  apple: {
    row: 2,
    col: 2,
  },
  snake: {
    body: [{ row: 5, col: 3 }, { row: 5, col: 2 }, { row: 5, col: 1 }],
    incrementTimer: 200,
    lastTimestamp: 0,
    direction: 'right',
  },
  gameState: 'Start',
};

const gameState = (state: GameState, action: AppAction): GameState => {
  if (action.type === 'START_GAME') {
    return 'Run';
  }

  if (action.type === 'END_GAME') {
    return 'GameOver';
  }

  return state;
};

const apple = (state: Apple, action: AppAction): Apple => {
  if (action.type === 'UPDATE_APPLE') {
    return action.payload.apple;
  }

  return state;
};

const score = (state: Score, action: AppAction): Score => {
  if (action.type === 'INCREASE_SCORE') {
    const { current, high } = state;
    const newCurrent = current + 10;

    return {
      current: newCurrent,
      high: high > newCurrent ? high : newCurrent,
    };
  }

  return state;
};

export const app = (state: AppState = initialState, action: AppAction): AppState => {
  let newState = state;

  if (action.type === 'START_GAME') {
    newState = {
      ...initialState,
      score: {
        current: initialState.score.current,
        high: newState.score.high,
      },
    };
  }

  return {
    ...newState,
    snake: snakeReducer(newState.snake, action),
    apple: apple(newState.apple, action),
    gameState: gameState(newState.gameState, action),
    score: score(newState.score, action),
  };
};
