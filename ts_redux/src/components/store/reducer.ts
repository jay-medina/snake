import { AppAction } from './actions';
import { AppState, GameState, initialState } from './util';

type Game = (start: AppState | undefined, action: AppAction) => AppState;

export const game: Game = (state = initialState, action) => {
  if (action.type === 'START_GAME') {
    return {
      gameState: GameState.Run,
    };
  }

  return state;
};
