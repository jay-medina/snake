/**
 * Initial Snake position
 */
export function getInitialSnake() {
  return [{ row: 12, col: 12 }, { row: 12, col: 11 }, { row: 12, col: 10 }];
}

export function isSnakeAtPosition(snake, row, col) {
  return !!snake.find(part => part.row === row && part.col === col);
}

export function isSnakeAtApple(snake, apple) {
  return isSnakeAtPosition(snake, apple.row, apple.col);
}

export function moveSnake(snake, direction) {
  const [head] = snake;

  if (direction === 'right') {
    return [{ row: head.row, col: head.col + 1 }, ...snake.slice(0, snake.length - 1)];
  }

  if (direction === 'left') {
    return [{ row: head.row, col: head.col - 1 }, ...snake.slice(0, snake.length - 1)];
  }

  if (direction === 'up') {
    return [{ row: head.row - 1, col: head.col }, ...snake.slice(0, snake.length - 1)];
  }

  if (direction === 'down') {
    return [{ row: head.row + 1, col: head.col }, ...snake.slice(0, snake.length - 1)];
  }

  return snake;
}

/**
 * Increases the size of the snake
 */
export function growSnake(snake, oldSnake) {
  let lastPosition = oldSnake[oldSnake.length - 1];

  return [...snake, lastPosition];
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

export function isTheApple(apple, row, col) {
  return row === apple.row && col === apple.col;
}

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}
