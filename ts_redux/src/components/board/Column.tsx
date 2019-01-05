import React from 'react';

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

export const Col: React.SFC<ColProps> = ({ filled }) => {
  return <div className={getClassName(filled)} />;
};

Col.displayName = 'Col';
