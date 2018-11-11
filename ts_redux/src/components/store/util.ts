export enum GameState {
  Start,
  Run,
  GameOver,
}

export interface AppState {
  gameState: GameState;
}

export const initialState: AppState = {
  gameState: GameState.Start,
};
