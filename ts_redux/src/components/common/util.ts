import { GridItem, Snake } from 'store/util';

const isAtPosition = (gridItem1: GridItem) => (gridItem2: GridItem) => {
  return gridItem1.row === gridItem2.row && gridItem1.col === gridItem2.col;
};

export const isSnakeAtPosition = (snake: Snake) => (gridItem: GridItem) =>
  !!snake.find(isAtPosition(gridItem));

export const isTheApple = isAtPosition;
