import { AppState, GameState, GameThunkDispatch } from './types';
import createMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

export type StoreCreator = MockStoreCreator<AppState, GameThunkDispatch>;

export type MockStore = MockStoreEnhanced<AppState, GameThunkDispatch>;

export const createTestStore = (): StoreCreator => createMockStore([thunk]);

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

export const mockRandom = (values: number[]) => {
  const mockMath = Object.create(global.Math);
  global.Math = mockMath;

  const randomMock = jest.fn().mockReturnValue(0);

  values.forEach((value) => {
    randomMock.mockReturnValueOnce(value);
  });

  mockMath.random = randomMock;
};
