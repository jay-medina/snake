import { AppAction } from './actions';
import { GameState, Apple } from './util';

type Game = (start: GameState | undefined, action: AppAction) => GameState;

export const game: Game = (state = GameState.Start, action) => {
  if (action.type === 'START_GAME') {
    return GameState.Run;
  }

  return state;
};

const initialApple: Apple = {
  row: 2,
  col: 2,
};

export const apple = (state: Apple = initialApple, _action: AppAction): Apple => {
  return state;
};
