import { AppAction } from './actions'
import { GameState, Apple, AppState } from '../common/types'
import { snakeReducer } from './snake/reducer'

const initialState: AppState = {
  dimensions: {
    cols: 25,
    rows: 25,
  },
  apple: {
    row: 2,
    col: 2,
  },
  snake: {
    body: [{ row: 5, col: 3 }, { row: 5, col: 2 }, { row: 5, col: 1 }],
    incrementTimer: 200,
    lastIncrementTimestamp: 0,
    direction: 'right',
  },
  gameState: 'Start',
}

const gameState = (state: GameState, action: AppAction): GameState => {
  if (action.type === 'START_GAME') {
    return 'Run'
  }

  return state
}

const apple = (state: Apple, action: AppAction): Apple => {
  if (action.type === 'UPDATE_APPLE') {
    return action.payload.apple
  }

  return state
}

export const app = (state: AppState = initialState, action: AppAction): AppState => {
  if (state.gameState === 'Run') {
    return {
      ...state,
      snake: snakeReducer(state.snake, action),
      apple: apple(state.apple, action),
      gameState: gameState(state.gameState, action),
    }
  }

  return {
    ...state,
    apple: apple(state.apple, action),
    gameState: gameState(state.gameState, action),
  }
}
