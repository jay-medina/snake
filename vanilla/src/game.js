import { createApp } from './components/app/app.js';
import { getInitialSnake, randomizeApple } from './components/app/snakeUtil.js';

export function start() {
  const row = 25;
  const col = 25;
  const snake = getInitialSnake();
  const apple = randomizeApple(snake, row, col);

  createApp({
    row,
    col,
    snake,
    apple,
  });
}
