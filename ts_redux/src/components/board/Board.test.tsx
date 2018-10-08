import { mount } from 'enzyme';
import React from 'react';
import { Board } from './Board';

describe('<Board />', () => {
  it('renders a 5x5 board', () => {
    const component = mount(<Board row={5} col={5} />);
    expect(component).toMatchSnapshot();
  });
});
