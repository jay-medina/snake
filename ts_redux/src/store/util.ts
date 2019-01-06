export enum GameState {
  Start,
  Run,
  GameOver,
}

export interface AppState {
  gameState: GameState;
  apple: Apple;
  snake: Snake;
  dimensions: {
    rows: number;
    cols: number;
  };
}

export interface GridItem {
  row: number;
  col: number;
}

export type Apple = GridItem;

export type Snake = GridItem[];
