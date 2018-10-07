import { shallow } from 'enzyme';
import React from 'react';
import { Paint } from './Paint';

describe('<Paint />', () => {
  it('renders the component', () => {
    const component = shallow(<Paint />);
    expect(component).toMatchSnapshot();
  });
});
