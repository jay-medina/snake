import { mount } from 'enzyme';
import React from 'react';
import Board from './Board';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppState, GameState } from '../../common/types';

describe('<Board />', () => {
  it('renders a 5x5 board', () => {
    const mockStore = configureStore<AppState>();
    const store = mockStore({
      gameState: GameState.Start,
      snake: {
        body: [{ row: 1, col: 1 }],
        incrementTimer: 200,
        lastIncrementTimestamp: 100,
      },
      apple: {
        row: 3,
        col: 3,
      },
      dimensions: {
        rows: 5,
        cols: 5,
      },
    });

    const component = mount(
      <Provider store={store}>
        <Board />
      </Provider>,
    );
    expect(component.find('Board')).toMatchSnapshot();
  });
});
