import React from 'react';
import { Apple, Snake } from '../common/types';
import { isSnakeAtPosition, isTheApple } from '../common/util';

export interface BoardProps {
  row: number;
  col: number;
  apple: Apple;
  snake: Snake;
}

type Filled = 'snake' | 'apple' | undefined;

function getClassName(filled = ''): string {
  const className = 'snake__board-col';

  if (filled === 'apple') {
    return `${className} snake__board-col-apple`;
  }

  if (filled === 'snake') {
    return `${className} snake__board-col-snake`;
  }

  return className;
}

function getFilled(snake: Snake, apple: Apple, row: number, col: number): Filled {
  if (isSnakeAtPosition(snake, row, col)) {
    return 'snake';
  }

  if (isTheApple(apple, row, col)) {
    return 'apple';
  }

  return undefined;
}

const Col = ({ filled }: { filled: Filled }) => <div className={getClassName(filled)} />;

const Row: React.SFC<BoardProps> = ({ row, col: totalColumns, snake, apple }) => {
  const rows = [];

  for (let c = 0; c < totalColumns; c += 1) {
    rows.push(<Col key={c} filled={getFilled(snake, apple, row, c)} />);
  }

  return <div className="snake__board-row">{rows}</div>;
};

const Board: React.StatelessComponent<BoardProps> = ({ col, snake, row, apple }) => {
  const rows = [];

  for (let r = 0; r < row; r += 1) {
    rows.push(<Row key={r} row={r} col={col} snake={snake} apple={apple} />);
  }

  return <div className="snake__board">{rows}</div>;
};

export default Board;
