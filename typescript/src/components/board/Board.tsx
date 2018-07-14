import React from 'react';
import Row from './Row';
import { Apple, Snake } from '../common/types';

export interface BoardProps {
  row: number;
  col: number;
  apple: Apple;
  snake: Snake;
}

const Board: React.StatelessComponent<BoardProps> = ({ col, snake, row, apple }) => {
  const rows = [];

  for (let r = 0; r < row; r += 1) {
    rows.push(<Row key={r} row={r} cols={col} snake={snake} apple={apple} />);
  }

  return <div className="snake__board">{rows}</div>;
};

export default Board;
