import { AppState, GameState } from './types';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

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

export type StoreCreator = MockStoreCreator<AppState>;

export type MockStore = MockStoreEnhanced<AppState>;

export const createMockStore = (): StoreCreator => {
  return configureStore([thunk]);
};

export const mockRandom = (values: number[]) => {
  const mockMath = Object.create(global.Math);
  global.Math = mockMath;

  const randomMock = jest.fn().mockReturnValue(0);

  values.forEach((value) => {
    randomMock.mockReturnValueOnce(value);
  });

  mockMath.random = randomMock;
};
