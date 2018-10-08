import React from 'react';

interface BoardProps {
  row: number;
  col: number;
}

interface RowProps {
  col: number;
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

const Col = () => {
  return <div className={getClassName()} />;
};

const Row: React.SFC<RowProps> = ({ col }) => {
  const cols = [];

  for (let c = 0; c < col; c += 1) {
    cols.push(<Col key={c} />);
  }

  return <div className="snake__board-row">{cols}</div>;
};

export const Board: React.SFC<BoardProps> = ({ row, col }) => {
  const rows = [];

  for (let r = 0; r < row; r += 1) {
    rows.push(<Row key={r} col={col} />);
  }

  return <div className="snake__board">{rows}</div>;
};

Board.displayName = 'Board';
