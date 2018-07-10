import { Snake, Apple } from './types';

export function isSnakeAtPosition(snake: Snake, row: number, col: number) {
  return !!snake.find((part) => part.row === row && part.col === col);
}

export function isTheApple(apple: Apple, row: number, col: number) {
  return row === apple.row && col === apple.col;
}

export function getInitialSnake() {
  return [{ row: 12, col: 12 }, { row: 12, col: 11 }, { row: 12, col: 10 }];
}
