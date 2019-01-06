import { GridItem, Snake, AppState } from './types';

const isAtPosition = (gridItem1: GridItem) => (gridItem2: GridItem) => {
  return gridItem1.row === gridItem2.row && gridItem1.col === gridItem2.col;
};

export const isSnakeAtPosition = (snake: Snake) => (gridItem: GridItem) =>
  !!snake.find(isAtPosition(gridItem));

export const isTheApple = isAtPosition;

/**
 * Returns a random number from 0 - num
 *
 */
const randomNumber = (num: number) => {
  return Math.floor(Math.random() * num);
};

const randomGridItem = (dimensions: AppState['dimensions']): GridItem => {
  return {
    row: randomNumber(dimensions.rows),
    col: randomNumber(dimensions.cols),
  };
};

export function findNewPosition(appState: AppState) {
  const { snake, dimensions } = appState;

  let newApple = randomGridItem(dimensions);

  while (isSnakeAtPosition(snake)(newApple)) {
    newApple = randomGridItem(dimensions);
  }

  return newApple;
}
