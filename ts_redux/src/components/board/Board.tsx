import React from 'react';
import { Apple, Snake } from '../../store/util';
import { Row } from './Row';
import { AppState } from '../../store/util';
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
  const { dimensions, snake } = state;

  return {
    apple: state.apple,
    rows: dimensions.rows,
    cols: dimensions.cols,
    snake,
  };
};

export default connect(mapStateToProps)(Board);
