import { AppState, GameState } from '../common/types';

export const createMockState = (): AppState => {
  return {
    gameState: GameState.Start,
    apple: { row: 1, col: 1 },
    snake: [{ row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }],
    dimensions: {
      rows: 10,
      cols: 10,
    },
  };
};
