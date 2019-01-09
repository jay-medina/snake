import { GameThunkAction, Apple, TimeStamp } from '../common/types';
import { findNewApplePosition } from '../common/util';

interface GameAction {
  type: 'START_GAME';
}

interface AppleAction {
  type: 'UPDATE_APPLE';
  payload: {
    apple: Apple;
  };
}

interface TickTimeAction {
  type: 'TICK_TIME';
  payload: {
    timestamp: TimeStamp;
  };
}

export type AppAction = GameAction | AppleAction | TickTimeAction;

export const startGame = (): GameAction => ({
  type: 'START_GAME',
});

export const newApplePosition = (position: Apple): AppleAction => ({
  type: 'UPDATE_APPLE',
  payload: {
    apple: position,
  },
});

export const startGameThunk = (): GameThunkAction => (dispatch, getState) => {
  const appState = getState();
  const newApple = findNewApplePosition(appState);

  dispatch(startGame());
  dispatch(newApplePosition(newApple));
};
