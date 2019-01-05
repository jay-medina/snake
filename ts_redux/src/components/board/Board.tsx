import React from 'react';
import { Apple, Snake } from 'store/util';
import { Row } from './Row';
import { AppState } from 'store/util';
import { connect } from 'react-redux';

interface StateProps {
  rows: number;
  cols: number;
  apple: Apple;
  snake: Snake;
}

type BoardProps = StateProps;

export const Board: React.SFC<BoardProps> = ({ rows, cols, snake, apple }) => {
  const components = [];

  for (let r = 0; r < rows; r += 1) {
    components.push(<Row key={r} cols={cols} row={r} snake={snake} apple={apple} />);
  }

  return <div className="snake__board">{components}</div>;
};

Board.displayName = 'Board';

const mapStateToProps = (state: AppState): StateProps => {
  const rows = 25;
  const cols = 25;
  const snake = [{ row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }];

  return {
    apple: state.apple,
    rows,
    cols,
    snake,
  };
};

export default connect(mapStateToProps)(Board);
