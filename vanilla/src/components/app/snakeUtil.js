/**
 * Initial Snake position
 */
export function getInitialSnake() {
  return [{ row: 12, col: 12 }, { row: 12, col: 11 }, { row: 12, col: 10 }];
}

export function isSnakeAtPosition(snake, row, col) {
  return !!snake.find(part => part.row === row && part.col === col);
}
