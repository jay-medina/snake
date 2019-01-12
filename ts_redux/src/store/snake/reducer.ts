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
        lastIncrementTimestamp: payload.timestamp,
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

  return snake
}
