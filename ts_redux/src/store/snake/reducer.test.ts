import { snakeReducer } from './reducer'
import { Snake } from '../../common/types'
import { TickTimeAction, tickForward, updateSnakeDirection } from '../actions'

describe('snake', () => {
  let snakey: Snake

  beforeEach(() => {
    snakey = {
      body: [{ row: 5, col: 3 }, { row: 5, col: 2 }, { row: 5, col: 1 }],
      incrementTimer: 200,
      lastTimestamp: 0,
      direction: 'right',
    }
  })

  it('initializes the snake', () => {
    const action: any = {}

    const snake = snakeReducer(snakey, action)
    expect(snake).toEqual(snakey)
  })

  describe('when the time ticks forward', () => {
    let action: TickTimeAction

    beforeEach(() => {
      action = tickForward(10)
    })

    describe('when the snake is not able to move', () => {
      it('returns back the previous state', () => {
        snakey.lastTimestamp = 10
        const nextSnake = snakeReducer(snakey, action)
        expect(nextSnake).toBe(snakey)
      })
    })

    describe('when the snake is able to move', () => {
      let nextSnake: Snake
      const timestamp = 250

      beforeEach(() => {
        snakey.lastTimestamp = 10
        nextSnake = snakeReducer(snakey, tickForward(timestamp))
      })

      it('updates the snakes body', () => {
        expect(nextSnake.body).toMatchSnapshot()
      })

      it('updates the last timestamp', () => {
        expect(nextSnake.lastTimestamp).toBe(timestamp)
      })
    })
  })

  describe('when the snakes direction is updated', () => {
    let nextSnake: Snake

    describe('when the new direction is direct opposite', () => {
      it('returns back the previous state', () => {
        nextSnake = snakeReducer(snakey, updateSnakeDirection('left'))
        expect(nextSnake).toBe(snakey)
      })
    })

    it('updates the direction when its any other direction', () => {
      nextSnake = snakeReducer(snakey, updateSnakeDirection('up'))
      expect(nextSnake.direction).toBe('up')
    })
  })
})
