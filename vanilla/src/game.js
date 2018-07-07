import { createApp } from './components/app/app.js';

export function start() {
  const row = 25;
  const col = 25;

  createApp({
    row,
    col,
  });
}
