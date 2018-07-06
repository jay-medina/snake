import { createApp } from './components/app/app.js';

export function start() {
  const app = createApp({
    row: 25,
    col: 25,
  });

  document.body.appendChild(app.render());
}
