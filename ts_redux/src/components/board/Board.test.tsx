import { mount } from 'enzyme';
import React from 'react';
import { Board } from './Board';

describe('<Board />', () => {
  it('renders a 5x5 board', () => {
    const apple = { row: 3, col: 3 };
    const snake = [{ row: 1, col: 1 }];

    const component = mount(
      <Board rows={5} cols={5} apple={apple} snake={snake} />,
    );
    expect(component).toMatchSnapshot();
  });
});
