import React from 'react';
import { Apple, Snake } from '../common/types';
import { isSnakeAtPosition, isTheApple } from '../common/util';

interface BoardProps {
  rows: number;
  cols: number;
  apple: Apple;
  snake: Snake;
}

interface RowProps {
  row: number;
  cols: number;
  apple: Apple;
  snake: Snake;
}

interface ColProps {
  filled?: Filled;
}

type Filled = 'snake' | 'apple';

function getClassName(filled?: Filled): string {
  const className = 'snake__board-col';

  if (filled === 'apple') {
    return `${className} snake__board-col-apple`;
  }

  if (filled === 'snake') {
    return `${className} snake__board-col-snake`;
  }

  return className;
}

const Col: React.SFC<ColProps> = ({ filled }) => {
  return <div className={getClassName(filled)} />;
};

function getFilled(snake: Snake, apple: Apple, row: number, col: number) {
  const gridItem = { row, col };

  if (isSnakeAtPosition(snake)(gridItem)) {
    return 'snake';
  }

  if (isTheApple(apple)(gridItem)) {
    return 'apple';
  }

  return undefined;
}

const Row: React.SFC<RowProps> = ({ cols, row, snake, apple }) => {
  const colComponents = [];

  for (let c = 0; c < cols; c += 1) {
    colComponents.push(
      <Col key={c} filled={getFilled(snake, apple, row, c)} />,
    );
  }

  return <div className="snake__board-row">{colComponents}</div>;
};

export const Board: React.SFC<BoardProps> = ({ rows, cols, snake, apple }) => {
  const components = [];

  for (let r = 0; r < rows; r += 1) {
    components.push(
      <Row key={r} cols={cols} row={r} snake={snake} apple={apple} />,
    );
  }

  return <div className="snake__board">{components}</div>;
};

Board.displayName = 'Board';
