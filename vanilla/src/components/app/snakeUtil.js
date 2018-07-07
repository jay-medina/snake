/**
 * Initial Snake position
 */
export function getInitialSnake() {
  return [{ row: 12, col: 12 }, { row: 12, col: 11 }, { row: 12, col: 10 }];
}

export function isSnakeAtPosition(snake, row, col) {
  return !!snake.find(part => part.row === row && part.col === col);
}

/**
 * Gets the new position for the apple
 */
export function randomizeApple(snake, rows, cols) {
  const row = randomNumber(rows);
  const col = randomNumber(cols);

  if (isSnakeAtPosition(snake, row, col)) {
    return randomizeApple(snake, row, col);
  }

  return {
    row,
    col,
  };
}

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}
