import { State, Apple, Snake, GameState } from '../common/types';
import { updateDirection, keyboard } from './direction';
import { getInitialSnake, randomizeApple } from '../common/util';
import { updateSnakeMovement } from './snakeMovement';
import { updateDeadSnake } from './snakeDead';
import { updateSnakeEatingApple } from './snakeEat';
import { getHighScore } from './score';

export interface StateOptions {
  row: number;
  col: number;
}

/**
 * State in which the game initially starts
 */
export function getInitialState({ row, col }: StateOptions): State {
  return getNewGameState({
    row,
    col,
    gameState: 'start',
  });
}

/**
 * Start for starting a new game
 *
 */
export function getNewGameState({ row, col, gameState }: StateOptions & { gameState: GameState }): State {
  const initSnake: Snake = getInitialSnake();
  const initApple: Apple = randomizeApple(initSnake, row, col);
  const highScore = getHighScore();
  const score = 0;
  const timer = 200;

  return {
    row,
    col,
    score,
    highScore,
    timer,
    gameState,
    snake: initSnake,
    apple: initApple,
    direction: keyboard.getDirection(),
  };
}

export const resetGame = getInitialState;

export function updateState(state: State) {
  let newState: State = {
    ...state,
    gameState: 'run',
  };

  newState = updateDirection(newState);
  newState = updateDeadSnake(newState);
  newState = updateSnakeMovement(newState);
  newState = updateSnakeEatingApple(state.snake)(newState);
  return newState;
}
