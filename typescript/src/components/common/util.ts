import { Snake, Apple, State } from './types';

export function isSnakeAtPosition(snake: Snake, row: number, col: number) {
  return !!snake.find((part) => part.row === row && part.col === col);
}

export function isTheApple(apple: Apple, row: number, col: number) {
  return row === apple.row && col === apple.col;
}

export function getInitialSnake() {
  return [{ row: 12, col: 12 }, { row: 12, col: 11 }, { row: 12, col: 10 }];
}

export function isGameOver(state: State) {
  // return state.gameState.current === 'gameover';
}

export function isSnakeDead(snake: Snake, rows: number, cols: number) {
  return isSnakeInWall(snake, rows, cols) || isSnakeAtItself(snake);
}

function isSnakeInWall(snake: Snake, rows: number, cols: number) {
  const [{ row, col }] = snake;
  return row < 0 || row >= rows || col < 0 || col >= cols;
}

function isSnakeAtItself(snake: Snake) {
  const [head, ...rest] = snake;

  return isSnakeAtPosition(rest, head.row, head.col);
}
