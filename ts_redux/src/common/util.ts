import { GridItem, Snake, AppState, Apple } from './types';

const isAtPosition = (gridItem1: GridItem) => (gridItem2: GridItem) => {
  return gridItem1.row === gridItem2.row && gridItem1.col === gridItem2.col;
};

const randomNumber = (num: number) => {
  return Math.floor(Math.random() * num);
};

const randomGridItem = (dimensions: AppState['dimensions']): GridItem => {
  return {
    row: randomNumber(dimensions.rows),
    col: randomNumber(dimensions.cols),
  };
};

export const isTheApple = isAtPosition;

export const isSnakeAtPosition = (snake: Snake['body']) => (gridItem: GridItem) =>
  !!snake.find(isAtPosition(gridItem));

export function findNewApplePosition(appState: AppState): Apple {
  const { snake, dimensions } = appState;

  let newApple = randomGridItem(dimensions);

  while (isSnakeAtPosition(snake.body)(newApple)) {
    newApple = randomGridItem(dimensions);
  }

  return newApple;
}
