import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { GameState } from '../store/util';
import { TransitionScreen } from './TransitionScreen';

describe('<Start />', () => {
  it('renders the component', () => {
    const wrapper = shallow(
      <TransitionScreen gameState={GameState.Start} onPlayClick={jest.fn()} />,
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('<GameOver />', () => {
  it('renders the component', () => {
    const wrapper = shallow(
      <TransitionScreen
        gameState={GameState.GameOver}
        onPlayClick={jest.fn()}
      />,
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('<TransitionScreen />', () => {
  let wrapper: ShallowWrapper;

  describe('when the game is running', () => {
    it('doesnt render anything', () => {
      wrapper = shallow(
        <TransitionScreen gameState={GameState.Run} onPlayClick={jest.fn()} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when the game is in start state', () => {
    let onPlayClick: jest.Mock;

    beforeEach(() => {
      onPlayClick = jest.fn();
      wrapper = shallow(
        <TransitionScreen
          gameState={GameState.Start}
          onPlayClick={onPlayClick}
        />,
      );
    });

    it('renders the start screen', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('when user clicks play', () => {
      it('invokes the onPlayClick callback', () => {
        wrapper.simulate('playClick');
        expect(onPlayClick).toHaveBeenCalled();
      });
    });
  });

  describe('when the game is in end state', () => {
    let onPlayClick: jest.Mock;

    beforeEach(() => {
      onPlayClick = jest.fn();
      wrapper = shallow(
        <TransitionScreen
          gameState={GameState.GameOver}
          onPlayClick={onPlayClick}
        />,
      );
    });

    it('renders the end screen', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('when user clicks play', () => {
      it('invokes the onPlayClick callback', () => {
        wrapper.simulate('playClick');
        expect(onPlayClick).toHaveBeenCalled();
      });
    });
  });
});
