import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { app } from './reducer'
import { GameStore, GameThunkDispatch } from '../common/types'

export function createGameStore(): GameStore {
  return createStore(app, applyMiddleware<GameThunkDispatch>(thunk))
}
