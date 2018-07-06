import { createBoard } from './components/board/board.js';

export function start() {
  console.log('hello world');
  const board = createBoard({
    row: 10,
    col: 10,
  });

  document.body.appendChild(board.render());
}
