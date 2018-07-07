import { createApp } from './components/app/app.js';

export function start() {
  createApp({
    row: 25,
    col: 25,
  });
}
