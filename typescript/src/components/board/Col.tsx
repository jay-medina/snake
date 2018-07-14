import React from 'react';

export interface ColProps {
  filled?: string;
}

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

export default ({ filled }: ColProps) => <div className={getClassName(filled)} />;
