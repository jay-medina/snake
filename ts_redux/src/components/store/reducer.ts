type GameState = number;

interface GameAction {
  type: 'INCREMENT' | 'DECREMENT';
}

export function game(state: GameState = 0, action: GameAction): GameState {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
}
