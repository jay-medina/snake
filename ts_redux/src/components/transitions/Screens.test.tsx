import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GameOver, Start, StartProps } from './Screens';

describe('<Start />', () => {
  let onPlayClick: jest.Mock;
  let wrapper: ShallowWrapper<StartProps>;

  beforeEach(() => {
    onPlayClick = jest.fn();
    wrapper = shallow(<Start onPlayClick={onPlayClick} />);
  });

  afterEach(() => {
    wrapper && wrapper.unmount();
  });

  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when play button is clicked', () => {
    it('invokes the onPlayClick callback', () => {
      wrapper.find('PlayButton').simulate('click');
      expect(onPlayClick).toHaveBeenCalled();
    });
  });
});

describe('<GameOver />', () => {
  let onPlayClick: jest.Mock;
  let wrapper: ShallowWrapper<StartProps>;

  beforeEach(() => {
    onPlayClick = jest.fn();
    wrapper = shallow(<GameOver onPlayClick={onPlayClick} />);
  });

  afterEach(() => {
    wrapper && wrapper.unmount();
  });

  it('renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when play button is clicked', () => {
    it('invokes the onPlayClick callback', () => {
      wrapper.find('PlayButton').simulate('click');
      expect(onPlayClick).toHaveBeenCalled();
    });
  });
});
