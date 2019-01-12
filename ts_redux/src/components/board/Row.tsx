import React from 'react';
import { Apple, Snake } from '../../common/types';
import { isSnakeAtPosition, isTheApple } from '../../common/util';
import { Col } from './Column';

interface RowProps {
  row: number;
  cols: number;
  apple: Apple;
  snake: Snake['body'];
}

function getFilled(snake: Snake['body'], apple: Apple, row: number, col: number) {
  const gridItem = { row, col };

  if (isSnakeAtPosition(snake)(gridItem)) {
    return 'snake';
  }

  if (isTheApple(apple)(gridItem)) {
    return 'apple';
  }

  return undefined;
}

export const Row: React.SFC<RowProps> = ({ cols, row, snake, apple }) => {
  const colComponents = [];

  for (let c = 0; c < cols; c += 1) {
    colComponents.push(<Col key={c} filled={getFilled(snake, apple, row, c)} />);
  }

  return <div className="snake__board-row">{colComponents}</div>;
};

Row.displayName = 'Row';
