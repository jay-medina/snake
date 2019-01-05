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

export interface GridItem {
  row: number;
  col: number;
}

export type Apple = GridItem;

export type Snake = GridItem[];
