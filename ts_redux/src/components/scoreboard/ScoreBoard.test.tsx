import { mount } from 'enzyme';
import React from 'react';
import { ScoreBoard } from './ScoreBoard';

describe('<ScoreBoard /> ', () => {
  it('displays the scoreboard', () => {
    const wrapper = mount(<ScoreBoard score={10} highScore={20} />);
    expect(wrapper).toMatchSnapshot();
  });
});
