import { createApp } from './components/app/app.js';

export function start() {
  console.log('hello world');
  const app = createApp({
    row: 20,
    col: 20,
  });

  document.body.appendChild(app.render());
}
