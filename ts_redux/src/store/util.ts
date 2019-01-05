export enum GameState {
  Start,
  Run,
  GameOver,
}

export interface AppState {
  gameState: GameState;
  apple: Apple;
}

export interface GridItem {
  row: number;
  col: number;
}

export type Apple = GridItem;

export type Snake = GridItem[];

export const initialState: Partial<AppState> = {
  gameState: GameState.Start,
  apple: { row: 1, col: 1 },
};
