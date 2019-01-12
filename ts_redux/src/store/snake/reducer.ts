import { Snake } from '../../common/types'
import { AppAction } from '../actions'
import { isSnakeAbleToMove, moveSnake, isOppositeDirection } from './util'

// TODO determine if snake is ded
// TODO eating apple - increment counter
export const snakeReducer = (snake: Snake, action: AppAction): Snake => {
  if (action.type === 'TICK_TIME') {
    const { payload } = action

    if (isSnakeAbleToMove(snake, payload.timestamp)) {
      return {
        ...snake,
        body: moveSnake(snake),
        lastTimestamp: payload.timestamp,
      }
    }
  }

  if (action.type === 'UPDATE_SNAKE_DIRECTION') {
    const { payload } = action

    if (!isOppositeDirection(snake.direction, payload.direction)) {
      return {
        ...snake,
        direction: payload.direction,
      }
    }
  }

  if (action.type === 'UPDATE_SNAKE_SIZE') {
    const { body } = snake
    const lastPosition = body[body.length - 1]
    const newBody = moveSnake(snake)
    newBody.push(lastPosition)

    return {
      ...snake,
      body: newBody,
    }
  }

  return snake
}
