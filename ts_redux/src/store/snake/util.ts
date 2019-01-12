import { Snake, TimeStamp, Direction } from '../../common/types'

export function isSnakeAbleToMove(snake: Snake, timestamp: TimeStamp) {
  return (
    snake.lastTimestamp === 0 ||
    timestamp - snake.lastTimestamp >= snake.incrementTimer
  )
}

export function moveSnake(snake: Snake): Snake['body'] {
  const { body, direction } = snake
  const [head] = body

  if (direction === 'right') {
    return [{ row: head.row, col: head.col + 1 }, ...body.slice(0, body.length - 1)]
  } else if (direction === 'left') {
    return [{ row: head.row, col: head.col - 1 }, ...body.slice(0, body.length - 1)]
  } else if (direction === 'up') {
    return [{ row: head.row - 1, col: head.col }, ...body.slice(0, body.length - 1)]
  } else {
    return [{ row: head.row + 1, col: head.col }, ...body.slice(0, body.length - 1)]
  }
}

export const isOppositeDirection = (direction: Direction, newDirection: Direction) => {
  return (
    (direction === 'left' && newDirection === 'right') ||
    (direction === 'right' && newDirection === 'left') ||
    (direction === 'up' && newDirection === 'down') ||
    (direction === 'down' && newDirection === 'up')
  )
}
