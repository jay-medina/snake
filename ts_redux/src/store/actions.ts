import { GameThunkAction, Apple } from '../common/types';
import { findNewPosition } from '../common/util';

interface GameAction {
  type: 'START_GAME';
}

interface AppleAction {
  type: 'UPDATE_APPLE';
  payload: {
    apple: Apple;
  };
}

export type AppAction = GameAction | AppleAction;

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
  const newApple = findNewPosition(appState);

  dispatch(startGame());
  dispatch(newApplePosition(newApple));
};
