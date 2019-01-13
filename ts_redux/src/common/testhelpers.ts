import { AppState, GameThunkDispatch, Snake } from './types';
import createMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

export type StoreCreator = MockStoreCreator<AppState, GameThunkDispatch>;

export type MockStore = MockStoreEnhanced<AppState, GameThunkDispatch>;

export const createMockSnake = (): Snake => ({
  body: [{ row: 5, col: 3 }, { row: 5, col: 2 }, { row: 5, col: 1 }],
  incrementTimer: 200,
  lastTimestamp: 100,
  direction: 'right',
});

export const createMockState = (): AppState => {
  return {
    gameState: 'Start',
    apple: { row: 1, col: 1 },
    score: {
      current: 10,
      high: 20,
    },
    snake: createMockSnake(),
    dimensions: {
      rows: 10,
      cols: 10,
    },
  };
};

export const createTestStore = (() => {
  const mockStore: StoreCreator = createMockStore([thunk]);

  return (state: Partial<AppState> = {}) =>
    mockStore({
      ...createMockState(),
      ...state,
    });
})();

export const mockRandom = (values: number[]) => {
  const mockMath = Object.create(global.Math);
  global.Math = mockMath;

  const randomMock = jest.fn().mockReturnValue(0);

  values.forEach((value) => {
    randomMock.mockReturnValueOnce(value);
  });

  mockMath.random = randomMock;
};
