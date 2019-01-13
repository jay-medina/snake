import { GameThunkAction, Apple, TimeStamp, Direction } from '../common/types';
import { findNewApplePosition, isSnakeAtPosition } from '../common/util';

interface GameAction {
  type: 'START_GAME';
}

interface AppleAction {
  type: 'UPDATE_APPLE';
  payload: {
    apple: Apple;
  };
}

interface ScoreAction {
  type: 'INCREASE_SCORE';
}

export interface TickTimeAction {
  type: 'TICK_TIME';
  payload: {
    timestamp: TimeStamp;
  };
}

export interface SnakeDirectionAction {
  type: 'UPDATE_SNAKE_DIRECTION';
  payload: {
    direction: Direction;
  };
}

export interface SnakeSizeAction {
  type: 'UPDATE_SNAKE_SIZE';
}

export type SnakeAction = SnakeDirectionAction | SnakeSizeAction;

export type AppAction = GameAction | AppleAction | TickTimeAction | SnakeAction | ScoreAction;

export const startGame = (): GameAction => ({
  type: 'START_GAME',
});

export const newApplePosition = (position: Apple): AppleAction => ({
  type: 'UPDATE_APPLE',
  payload: {
    apple: position,
  },
});

export const tickForward = (timestamp: TimeStamp): TickTimeAction => ({
  type: 'TICK_TIME',
  payload: {
    timestamp,
  },
});

export const growSnake = (): SnakeSizeAction => ({
  type: 'UPDATE_SNAKE_SIZE',
});

export const updateScore = (): ScoreAction => ({
  type: 'INCREASE_SCORE',
});

export const newAppleThunk = (): GameThunkAction => (dispatch, getState) => {
  const appState = getState();

  const newApple = findNewApplePosition(appState);
  return dispatch(newApplePosition(newApple));
};

export const tickForwardThunk = (timestamp: TimeStamp): GameThunkAction => (dispatch, getState) => {
  dispatch(tickForward(timestamp));

  const appState = getState();
  const { snake, apple } = appState;

  if (isSnakeAtPosition(snake.body)(apple)) {
    dispatch(growSnake());
    dispatch(newAppleThunk());
    dispatch(updateScore());
  }
};

export const startGameThunk = (): GameThunkAction => (dispatch) => {
  dispatch(startGame());
  dispatch(newAppleThunk());
};

export const updateSnakeDirection = (direction: Direction): SnakeDirectionAction => ({
  type: 'UPDATE_SNAKE_DIRECTION',
  payload: {
    direction,
  },
});
