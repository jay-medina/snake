import { Snake, Apple, State } from './types';

export function isSnakeAtApple(snake: Snake, apple: Apple) {
  return isSnakeAtPosition(snake, apple.row, apple.col);
}

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

/**
 * Gets the new position for the apple
 */
export function randomizeApple(snake: Snake, rows: number, cols: number): Apple {
  const row = randomNumber(rows);
  const col = randomNumber(cols);

  if (isSnakeAtPosition(snake, row, col)) {
    return randomizeApple(snake, row, col);
  }

  return {
    row,
    col,
  };
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

function randomNumber(num: number) {
  return Math.floor(Math.random() * num);
}
