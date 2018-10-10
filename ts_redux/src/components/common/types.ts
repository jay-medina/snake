export interface GridItem {
  row: number;
  col: number;
}

export type Apple = GridItem;

export type Snake = GridItem[];

export type GameState = 'start' | 'run' | 'gameover';
