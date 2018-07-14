import React from 'react';
import ReactDOM from 'react-dom';
import Paint from './Paint';

import { getInitialSnake } from '../common/util';
import { Snake } from '../common/types';
import { moveSnake } from '../updater/snakeMovement';
import { wireKeyboard } from '../common/keyboard';

export interface AppOptions {
  row: number;
  col: number;
}

export function createApp(options: AppOptions) {
  let snake = getInitialSnake();
  const keyboard = wireKeyboard();

  const gameOpts = {
    snake,
    ...options,
  };

  paintGame(gameOpts);

  setInterval(() => {
    snake = moveSnake(snake, keyboard.getDirection());
    paintGame({
      ...gameOpts,
      snake,
    });
  }, 500);
}

interface GameOptions extends AppOptions {
  snake: Snake;
}

function paintGame(options: GameOptions) {
  ReactDOM.render(
    <Paint
      row={options.row}
      col={options.col}
      score={10}
      highScore={100}
      snake={options.snake}
      apple={{ row: 0, col: 0 }}
    />,
    document.getElementById('root'),
  );
}
