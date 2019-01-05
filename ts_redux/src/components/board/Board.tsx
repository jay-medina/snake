import React from 'react';
import { Apple, Snake } from '../store/util';
import { Row } from './Row';

interface BoardProps {
  rows: number;
  cols: number;
  apple: Apple;
  snake: Snake;
}

export const Board: React.SFC<BoardProps> = ({ rows, cols, snake, apple }) => {
  const components = [];

  for (let r = 0; r < rows; r += 1) {
    components.push(<Row key={r} cols={cols} row={r} snake={snake} apple={apple} />);
  }

  return <div className="snake__board">{components}</div>;
};

Board.displayName = 'Board';
