jest.mock('../common/util');

import { startGame, newApplePosition, startGameThunk } from './actions';
import { findNewApplePosition } from '../common/util';
import { createMockState, createTestStore, MockStore } from '../common/testhelpers';
import { AppState } from '../common/types';

describe('startGame', () => {
  it('returns the action', () => {
    expect(startGame()).toEqual({
      type: 'START_GAME',
    });
  });
});

describe('newApplePosition', () => {
  it('returns the action', () => {
    const apple = { row: 0, col: 0 };

    expect(newApplePosition(apple)).toEqual({
      type: 'UPDATE_APPLE',
      payload: {
        apple,
      },
    });
  });
});

describe('startGameThunk', () => {
  const mockStoreCreator = createTestStore();
  const apple = { row: 0, col: 0 };
  let store: MockStore;
  let state: AppState;

  beforeEach(() => {
    (findNewApplePosition as jest.Mock).mockReturnValue(apple);
    state = createMockState();
    store = mockStoreCreator(state);
    store.dispatch(startGameThunk());
  });

  it('finds the new apple position', () => {
    expect(findNewApplePosition).toHaveBeenCalledWith(state);
  });

  it('dispatches start game action', () => {
    expect(store.getActions()).toContainEqual(startGame());
  });

  it('dispatches new apple position action', () => {
    expect(store.getActions()).toContainEqual(newApplePosition(apple));
  });
});
