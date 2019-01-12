import { AppState } from './types';
import { isSnakeAtPosition, isTheApple, findNewApplePosition } from './util';
import { createMockState, mockRandom } from './testhelpers';

describe('isSnakeAtPosition', () => {
  const snake = [{ row: 1, col: 1 }, { row: 2, col: 1 }, { row: 3, col: 1 }];
  const check = isSnakeAtPosition(snake);

  it('returns true for overlapping grid item', () => {
    expect(check({ row: 2, col: 1 })).toBeTruthy();
  });

  it('returns false for non overlapping positions', () => {
    expect(check({ row: 12, col: 1 })).toBeFalsy();
  });
});

describe('isTheApple', () => {
  const check = isTheApple({ row: 1, col: 1 });

  it('returns true for overlapping grid item', () => {
    expect(check({ row: 1, col: 1 })).toBeTruthy();
  });

  it('returns false for non overlapping positions', () => {
    expect(check({ row: 12, col: 1 })).toBeFalsy();
  });
});

describe('findNewApplePosition', () => {
  let mockState: AppState;

  beforeEach(() => {
    mockState = createMockState();
    mockState.snake.body = [{ row: 1, col: 1 }, { row: 2, col: 1 }, { row: 3, col: 1 }];
  });

  it('returns back the new apple position', () => {
    mockRandom([0.2, 0.2]);

    const newApple = findNewApplePosition(mockState);

    expect(newApple).toEqual({ row: 2, col: 2 });
  });

  describe('when the new apple overlaps', () => {
    it('generates new position and then returns back new apple', () => {
      mockRandom([0.1, 0.1, 0.7, 0.7]);

      const newApple = findNewApplePosition(mockState);

      expect(Math.random).toHaveBeenCalledTimes(4);
      expect(newApple).toEqual({ row: 7, col: 7 });
    });
  });
});
