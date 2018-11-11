import { AppAction } from './actions';

enum GameState {
  Start,
  Run,
  GameOver,
}

interface AppState {
  gameState: GameState;
}

export function game(state: AppState, action: AppAction): AppState {
  if (action.type === 'START_GAME') {
    return {
      gameState: GameState.Run,
    };
  }

  return state;
}
