import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import configureStore, {
  MockStoreCreator,
  MockStoreEnhanced,
} from 'redux-mock-store';
import { GameState, AppState } from '../store/util';
import TransitionScreen from './TransitionScreen';
import { Provider } from 'react-redux';

describe('<TransitionScreen />', () => {
  let wrapper: ReactWrapper;
  let mockStore: MockStoreCreator<AppState>;

  beforeEach(() => {
    mockStore = configureStore();
  });

  describe('when the game is running', () => {
    let store: MockStoreEnhanced<AppState>;

    beforeEach(() => {
      store = mockStore({
        gameState: GameState.Run,
      });

      wrapper = mount(
        <Provider store={store}>
          <TransitionScreen />
        </Provider>,
      );
    });

    it('doesnt render a screen', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('passes the gameState to the Transition Screen', () => {
      expect(wrapper.find('TransitionScreen').prop('gameState')).toBe(
        GameState.Run,
      );
    });
  });

  // describe('when the game is in start state', () => {
  //   let onPlayClick: jest.Mock;

  //   beforeEach(() => {
  //     onPlayClick = jest.fn();
  //     wrapper = shallow(
  //       <TransitionScreen
  //         gameState={GameState.Start}
  //         onPlayClick={onPlayClick}
  //       />,
  //     );
  //   });

  //   it('renders the start screen', () => {
  //     expect(wrapper).toMatchSnapshot();
  //   });

  //   describe('when user clicks play', () => {
  //     it('invokes the onPlayClick callback', () => {
  //       wrapper.simulate('playClick');
  //       expect(onPlayClick).toHaveBeenCalled();
  //     });
  //   });
  // });

  // describe('when the game is in end state', () => {
  //   let onPlayClick: jest.Mock;

  //   beforeEach(() => {
  //     onPlayClick = jest.fn();
  //     wrapper = shallow(
  //       <TransitionScreen
  //         gameState={GameState.GameOver}
  //         onPlayClick={onPlayClick}
  //       />,
  //     );
  //   });

  //   it('renders the end screen', () => {
  //     expect(wrapper).toMatchSnapshot();
  //   });

  //   describe('when user clicks play', () => {
  //     it('invokes the onPlayClick callback', () => {
  //       wrapper.simulate('playClick');
  //       expect(onPlayClick).toHaveBeenCalled();
  //     });
  //   });
  // });
});
