import { Apple, Snake, State, GridItem } from './types';

const isAtPosition = (gridItem1: GridItem) => (gridItem2: GridItem) => {
  return gridItem1.row === gridItem2.row && gridItem1.col === gridItem2.col;
};

export function isSnakeAtApple(snake: Snake, apple: Apple) {
  return isSnakeAtPosition(snake, apple.row, apple.col);
}

export function isSnakeAtPosition(snake: Snake, row: number, col: number) {
  return !!snake.find(isAtPosition({ row, col }));
}

export const isTheApple = (apple: Apple, row: number, col: number) => {
  return isAtPosition(apple)({ row, col });
};

export const initialSnake = [{ row: 12, col: 12 }, { row: 12, col: 11 }, { row: 12, col: 10 }];

export function isGameOver(state: State) {
  return state.gameState === 'gameover';
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
    col,
    row,
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
