import React from 'react';
import ReactDOM from 'react-dom';
import Paint from './Paint';

import './style.css';
import { getInitialSnake } from '../common/util';

export interface AppOptions {
  row: number;
  col: number;
}

export function createApp(options: AppOptions) {
  paintGame(options);
}

function paintGame(options: AppOptions) {
  ReactDOM.render(
    <Paint
      row={options.row}
      col={options.col}
      score={10}
      highScore={100}
      snake={getInitialSnake()}
      apple={{ row: 0, col: 0 }}
    />,
    document.getElementById('root'),
  );
}
