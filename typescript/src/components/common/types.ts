interface GridItem {
  row: number;
  col: number;
}

export type Apple = GridItem;

export type Snake = GridItem[];

export type Direction = 'left' | 'right' | 'up' | 'down';

export type GameState = 'run' | 'gameover';

export type State = {
  row: number;
  col: number;
  snake: Snake;
  direction: Direction;
  score: number;
  highScore: number;
  timer: number;
  apple: Apple;
  gameState: GameState;
};
