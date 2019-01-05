import { AppAction } from './actions';
import { AppState, GameState } from './util';

type Game = (start: AppState, action: AppAction) => AppState;

export const game: Game = (state, action) => {
  if (action.type === 'START_GAME') {
    return {
      gameState: GameState.Run,
    };
  }

  return state;
};
